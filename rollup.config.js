import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss'
import presetEnv from 'postcss-preset-env';
import vue2 from 'rollup-plugin-vue2';
import vue3 from 'rollup-plugin-vue3';

const isProd = process.env.NODE_ENV === 'production';

// TODO extract out to plugin
const aggregateExports = (options) => ({
	name: 'aggregated-exports',
	generateBundle() {
		this.emitFile({
			fileName: options.name,
			type: 'asset',
			source: options.exports
				.map((expFrom) => {
					if (typeof expFrom === 'string') {
						return `export * from '${expFrom}'`;
					}
					const identifiers = (expFrom.identifiers || [expFrom.identifier]).join(',');
					return `export {${identifiers}} from '${expFrom.from}'`;
				})
				.join(';'),
		});
	},
});

const rollupConfig = [
	{
		label: 'vue2',
		plugin: vue2,
	},
	{
		label: 'vue3',
		plugin: vue3,
	},
].map(({ label, plugin }) => ({
	input: 'src/SplitView.vue',
	plugins: [
		plugin({
			css: false,
		}),
		postcss({
			extract: 'style.css',
			minimize: true,
			plugins: [
				presetEnv({ stage: 0, }),
			],
		}),
		babel({
			babelHelpers: 'bundled',
		}),
		isProd && terser(),
		isProd && filesize(),
		aggregateExports({
			name: `${label}.js`,
			exports: [
				{
					identifier: 'default',
					from: `./${label}.esm.js`,
				},
				'./style.css',
			],
		}),
	],
	external: 'vue',
	output: [
		{
			format: 'es',
			file: `dist/${label}.esm.js`,
		},
		{
			format: 'umd',
			file: `dist/${label}.umd.js`,
			name: 'SplitView',
			globals: {
				vue: 'vue',
			},
		},
	],
}));

export default rollupConfig;
