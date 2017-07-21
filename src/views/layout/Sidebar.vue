<template>
	<el-menu mode="vertical" theme="dark" :default-active="$route.path">
		<sidebar-item :routes='permission_routers'></sidebar-item>
	</el-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
export default {
	components: { SidebarItem },
	computed: {
		...mapGetters([
			'permission_routers'
		])
	},
	methods: {
		toggleSideBar() {
			this.$store.dispatch('ToggleSideBar')
		},
	}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
	width: 180px;
	min-height: 100%;
	border-radius: 0;
	background: #323845;
}
</style>
