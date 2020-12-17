import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss'
import presetEnv from 'postcss-preset-env';
import vue2 from 'rollup-plugin-vue2';
import vue3 from 'rollup-plugin-vue3';

const isProd = process.env.NODE_ENV === 'production';

const rollupConfig = [
	{
		input: 'src/SplitView.vue',
		plugins: [
			vue2({
				css: false,
			}),
			postcss({
				extract: 'split-view.css',
				plugins: [
					presetEnv({ stage: 0, }),
				],
			}),
			babel(),
			isProd && terser(),
			isProd && filesize(),
		],
		output: [
			{
				format: 'es',
				file: 'dist/split-view.vue2.esm.js',
			},
			{
				format: 'umd',
				file: 'dist/split-view.vue2.umd.js',
				name: 'SplitView',
			},
		],
	},
	{
		input: 'src/SplitView.vue',
		plugins: [
			vue3({
				css: false,
			}),
			postcss({
				extract: 'split-view.css',
				plugins: [
					presetEnv({ stage: 0, }),
				],
			}),
			babel(),
			isProd && terser(),
			isProd && filesize(),
		],
		output: [
			{
				format: 'es',
				file: 'dist/split-view.vue3.esm.js',
			},
			{
				format: 'umd',
				file: 'dist/split-view.vue3.umd.js',
				name: 'SplitView',
			},
		],
	}
];

export default rollupConfig;
