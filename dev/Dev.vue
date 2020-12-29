<template>
	<div id="app">
		<div :class="$s.Container">
			<split-view direction="vertical">
				<template #A>
					Slot A
				</template>
				<template #B>
					Slot B
				</template>
			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view direction="horizontal">
				<template #A>
					Slot A
				</template>
				<template #B>
					Slot B
				</template>
			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view direction="horizontal">
				<template #A>
					Slot A
				</template>
				<template #B>
					<split-view
						direction="vertical"
					>
						<template #A>
							Slot A
						</template>
						<template #B>
							Slot B
						</template>
					</split-view>
				</template>
			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view
				direction="horizontal"
				a-init="100px"
				a-min="50px"
				a-max="200px"
			>
				<template #A>
					Slot A
				</template>
				<template #B>
					<split-view
						direction="vertical"
					>
						<template #A>
							Slot A
						</template>
						<template #B>
							Slot B
						</template>
					</split-view>
				</template>
			</split-view>
		</div>
	</div>
</template>

<script>
import SplitView from './src/SplitView.vue';

export default {
	components: {
		SplitView,
	},
};
</script>

<style>
html,
body {
	margin: 0;
}
#app {
	font-family: system-ui;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

<style module="$s">
.Container {
	border: 1px solid #ccc;
	width: 501px;
	height: 500px;
}
</style>
