import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import presetEnv from 'postcss-preset-env';
import aggregateExports from 'rollup-plugin-aggregate-exports';
import vue2 from 'rollup-plugin-vue2';
import vue3 from 'rollup-plugin-vue3';

const isProduction = process.env.NODE_ENV === 'production';

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
				presetEnv({ stage: 0 }),
			],
		}),
		babel({
			babelHelpers: 'bundled',
		}),
		isProduction && terser(),
		isProduction && filesize(),
		aggregateExports({
			fileName: `${label}.js`,
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
