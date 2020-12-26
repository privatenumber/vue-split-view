import Vue from 'vue/dist/vue.esm.js';
import SplitView from '../dist/vue2.esm.js';

// eslint-disable-next-line no-new
new Vue({
	el: '#app',
	template: `
	<div>
		<split-view direction="vertical">
			<template slot="A">
				Slot A
			</template>
			<template slot="B">
				Slot B
			</template>
		</split-view>
	</div>
	`,
	components: {
		SplitView,
	},
});
