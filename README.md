# SplitView [![Latest version](https://badgen.net/npm/v/vue-split-view)](https://npm.im/vue-split-view) [![Monthly downloads](https://badgen.net/npm/dm/vue-split-view)](https://npm.im/vue-split-view) [![Install size](https://packagephobia.now.sh/badge?p=vue-split-view)](https://packagephobia.now.sh/result?p=vue-split-view) [![Bundle size](https://badgen.net/bundlephobia/minzip/vue-split-view)](https://bundlephobia.com/result?p=vue-split-view)

Create a resizable split-view to partition the UI.

## 🚀 Install
```sh
npm i vue-split-view
```

## 👨🏻‍🏫 Examples

### Horizontal split
```html
<split-view>
	<template #A>
		Slot A
	</template>

	<template #B>
		Slot B
	</template>
</split-view>
```

### Vertical split
```html
<split-view direction="vertical">
	<template #A>
		Slot A
	</template>

	<template #B>
		Slot B
	</template>
</split-view>
```

### Minimum width / height
```html
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
		Slot B
	</template>
</split-view>
```

### Nesting split-views
```html
<split-view direction="horizontal">
	<template #A>
		Slot A
	</template>

	<template #B>
		<split-view direction="vertical">
			<template #A>
				Slot BA
			</template>

			<template #B>
				Slot BB
			</template>
		</split-view>
	</template>
</split-view>
```
