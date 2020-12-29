<template>
	<div
		ref="container"
		:class="[$s.SplitView, {
			[$s.isVertical]: isVertical
		}]"
	>
		<div
			:class="[$s.SideA, {
				[$s.isLocked]: isDragging
			}]"
			:style="styleA"
		>
			<slot name="A" />
		</div>
		<span
			:class="[$s.Handle, {
				[$s.isVertical]: isVertical,
				[$s.isHorizontal]: !isVertical
			}]"
			@mousedown.prevent="dragStart"
		/>
		<div
			:class="[$s.SideB, {
				[$s.isLocked]: isDragging
			}]"
		>
			<slot name="B" />
		</div>
	</div>
</template>

<script>
function getPosition(element) {
	let xPosition = 0;
	let yPosition = 0;

	while (element) {
		xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}

	return { x: xPosition, y: yPosition };
}

export default {
	props: {
		direction: {
			type: String,
			default: 'horizontal',
			validator: direction => ['vertical', 'horizontal'].includes(direction),
		},
		aInit: {
			type: String,
			default: '50%',
		},
		aMin: {
			type: String,
			default: 'none',
		},
		aMax: {
			type: String,
			default: 'none',
		},
	},

	data() {
		return {
			isDragging: false,
			offset: this.aInit,
		};
	},

	computed: {
		isVertical() {
			return this.direction === 'vertical';
		},
		offsetA() {
			if (typeof this.offset === 'string') {
				return this.offset;
			}
			return `${this.offset}px`;
		},
		styleA() {
			const property = this.isVertical ? 'Height' : 'Width';
			return {
				[property.toLowerCase()]: this.offsetA,
				[`min${property}`]: this.aMin,
				[`max${property}`]: this.aMax,
			};
		},
	},

	methods: {
		dragStart() {
			this.isDragging = true;
			window.addEventListener('mousemove', this.dragging, { passive: true });
			window.addEventListener('mouseup', this.dragStop, {
				passive: true,
				once: true,
			});
		},

		dragStop() {
			window.removeEventListener('mousemove', this.dragging);
			this.isDragging = false;
		},

		mouseOffset({ pageX, pageY }) {
			const { container } = this.$refs;
			const containerOffset = getPosition(container);
			let offset;

			if (this.isVertical) {
				offset = pageY - containerOffset.y;
				offset = Math.min(offset, container.offsetHeight);
			} else {
				offset = pageX - containerOffset.x;
				offset = Math.min(offset, container.offsetWidth);
			}

			return Math.max(offset, 0);
		},

		dragging(event) {
			this.offset = this.mouseOffset(event);
		},
	},
};
</script>

<style module="$s">
.SplitView {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;

	&.isVertical {
		flex-direction: column;
	}
}

.Handle {
	user-select: none;
	box-sizing: border-box;
	transition: all 0.3s ease;
	z-index: 1;
	background: padding-box #000a;

	&.isHorizontal {
		width: 11px;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		margin: 0 -5px;
		cursor: col-resize;
	}

	&.isVertical {
		height: 11px;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		margin: -5px 0;
		cursor: row-resize;
	}

	&:hover,
	&:active {
		border-color: #0004;
	}

	&:active {
		border-width: 4px;
	}
}

.SideA {
	overflow: auto;

	&.isLocked {
		pointer-events: none;
	}
}

.SideB {
	composes: SideA;
	flex: 1;
}
</style>
