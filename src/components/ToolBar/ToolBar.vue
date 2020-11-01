<template lang="pug">
.tool-bar
	ul
		router-link(
			v-for="(route, index) in routes",
			:key="index",
			:to="route.name",
			tag="li"
		) {{ route.description }}
</template>
<script>
export default {
	data() {
		return {
			routes: [
				{ name: "whoami", description: "Who Am I" },
				{ name: "skills", description: "Skills" },
				{ name: "portfolio", description: "Portfolio" },
				{ name: "contact", description: "Contact" },
			],
		}
	},
}
</script>
<style lang="stylus" src="@/assets/styles/components/ToolBar/ToolBar.styl">