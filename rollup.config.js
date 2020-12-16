import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'
import presetEnv from 'postcss-preset-env';

const isProd = process.env.NODE_ENV === 'production';

const rollupConfig = {
	input: 'src/SplitView.vue',
	plugins: [
		vue({
			css: false,
		}),
		postcss({
			extract: 'split-view.css',
			plugins: [
				presetEnv({ stage: 0, }),
			],
		}),
		babel(),
		terser(),
		filesize(),
	],
	output: [
		{
			format: 'es',
			file: 'dist/split-view.esm.js',
		},
		{
			format: 'umd',
			file: 'dist/split-view.umd.js',
			name: 'SplitView',
		},
	],
};

export default rollupConfig;
