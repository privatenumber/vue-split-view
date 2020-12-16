<template>
	<div id="app">
		<div :class="$s.Container">
			<split-view direction="vertical">
				<template slot="A">
					Slot A
				</template>
				<template slot="B">
					Slot B
				</template>
			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view direction="horizontal">
				<template slot="A">
					Slot A
				</template>
				<template slot="B">
					Slot B
				</template>

			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view direction="horizontal">
				<template slot="A">
					Slot A
				</template>
				<split-view
					slot="B"
					direction="vertical"
				>
					<template slot="A">
						Slot A
					</template>
					<template slot="B">
						Slot B
					</template>
				</split-view>
			</split-view>
		</div>

		<div :class="$s.Container">
			<split-view
				direction="horizontal"
				a-init="100px"
				a-min="50px"
				a-max="200px"
			>
				<template slot="A">
					Slot A
				</template>
				<split-view
					slot="B"
					direction="vertical"
				>
					<template slot="A">
						Slot A
					</template>
					<template slot="B">
						Slot B
					</template>
				</split-view>
			</split-view>
		</div>
	</div>
</template>

<script>
import SplitView from "./SplitView.vue";

export default {
	name: "app",
	components: {
		SplitView
	}
};
</script>

<style>
html,
body {
	margin: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
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
