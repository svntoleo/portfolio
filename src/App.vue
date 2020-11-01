<template lang="pug">
#app
	tool-bar
	.router-view
		router-view
</template>
<script>
import { ToolBar } from "@/components/ToolBar"

export default {
	components: {
		ToolBar,
	},
}
</script>
<style lang="stylus" src="@/assets/styles/App.styl">