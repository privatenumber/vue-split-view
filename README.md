# SplitView

A component that offers two slots with a draggable divider.

### Horizontal split
```html
<split-view>
	<template slot="A">
		Slot A
	</template>
	<template slot="B">
		Slot B
	</template>
</split-view>
```

### Vertical split
```html
<split-view direction="vertical">
	<template slot="A">
		Slot A
	</template>
	<template slot="B">
		Slot B
	</template>
</split-view>
```

### Setting drag constraints
```html
<split-view
	direction="horizontal"
	a-init="100px"
	a-min="50px"
	a-max="200px"
>
	<template slot="A">
		Slot A
	</template>
	<template slot="B">
		Slot B

	</template>
</split-view>
```

### Nesting split-views
```html
<split-view direction="horizontal">
	<template slot="A">
		Slot A
	</template>
	<split-view
		slot="B"
		direction="vertical"
	>
		<template slot="A">
			Slot BA
		</template>
		<template slot="B">
			Slot BB
		</template>
	</split-view>
</split-view>
```
