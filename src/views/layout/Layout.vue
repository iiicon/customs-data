<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<div class="sidebar-wrapper">
			<Sidebar class="sidebar-container"></Sidebar>
			<div class="toogle-open" @click="toggleSideBar">{{slideFont}}</div>
		</div>
		<div style="height: 74px"></div>
		<div class="main-container">
			<Navbar/>
			<App-main/>
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from 'views/layout';

export default {
	name: 'layout',
	components: {
		Navbar,
		Sidebar,
		AppMain
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar;
		},
		slideFont() {
			return this.sidebar.opened ? '收起' : '展开';
		}
	},
	methods: {
		toggleSideBar() {
			this.$store.dispatch('ToggleSideBar')
		}
	}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";

.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;

	&.hideSidebar {
		.sidebar-wrapper {
			transform: translate(-180px, 0);
			.sidebar-container {
				transform: translate(0, 0);
			} // &:hover {
			//     transform: translate(0, 0);
			//     .sidebar-container {
			//         transform: translate(0, 0);
			//     }
			// }
		}
		.main-container {
			margin-left: 20px;
		}
	}
	.sidebar-wrapper {
		width: 200px;
		position: fixed;
		top: 74px;
		bottom: 0;
		left: 0;
		z-index: 10;
		overflow-x: hidden;
		transition: all .28s ease-out;
		@include scrollBar;

		.toogle-open {
			position: absolute;
			right: 0px;
			top: 50%;
			z-index: 999;
			transform: translateY(-50%);
			width: 20px;
			height: 60px;
			padding: 5px 0;
			line-height: 23px;
			border-radius: (0 10px 10px 0);
			background: #d6dded;
			transition: all .28s ease-in;
			color: #666;
			border: 1px solid #9ba2b2;
			border-left: none;
			text-align: center;
			font-size: 14px;
		}
		.stopover {
			position: absolute;
			top: 0;
			right: 0;
			width: 20px;
			height: 100%;
			z-index: 999;
			background: red;
		}
	}
	.sidebar-container {
		transition: all .28s ease-out;
	}
	.main-container {
		min-height: 100%;
		transition: all .28s ease-out;
		margin-left: 180px;
	}
}
</style>
