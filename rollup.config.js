import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss'
import presetEnv from 'postcss-preset-env';
import vue2 from 'rollup-plugin-vue2';
import vue3 from 'rollup-plugin-vue3';

const isProd = process.env.NODE_ENV === 'production';

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
			extract: 'split-view.css',
			minimize: true,
			plugins: [
				presetEnv({ stage: 0, }),
			],
		}),
		babel(),
		isProd && terser(),
		isProd && filesize(),
	],
	external: 'vue',
	output: [
		{
			format: 'es',
			file: `dist/split-view.${label}.esm.js`,
		},
		{
			format: 'umd',
			file: `dist/split-view.${label}.umd.js`,
			name: 'SplitView',
			globals: {
				vue: 'vue',
			},
		},
	],
}));

export default rollupConfig;
