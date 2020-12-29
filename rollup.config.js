import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import aggregateExports from 'rollup-plugin-aggregate-exports';
import vue2 from 'rollup-plugin-vue2';
import vue3 from 'rollup-plugin-vue3';

const { plugins: postcssPlugins } = require('./postcss.config.js');

const isProduction = process.env.NODE_ENV === 'production';

const rollupConfig = [
	{
		label: 'vue2',
		vue: vue2({
			css: false,
			style: {
				postcssModulesOptions: {
					generateScopedName: '[hash:base64:4]',
				},
				postcssPlugins,
			},
		}),
	},
	{
		label: 'vue3',
		vue: vue3({
			cssModulesOptions: {
				generateScopedName: '[hash:base64:4]',
			},
		}),
	},
].map(({ label, vue }) => ({
	input: 'src/SplitView.vue',
	plugins: [
		vue,
		postcss({
			extract: 'style.css',
			minimize: true,
			plugins: postcssPlugins,
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
