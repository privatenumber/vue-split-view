const presetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		presetEnv({ stage: 0 }),
	],
};
