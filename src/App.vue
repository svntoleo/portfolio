<template lang="pug">
#app
	app-top-tool-bar
	router-view
</template>
<script>
import { AppTopToolBar } from "@/components/ToolBar"

export default {
	components: {
		AppTopToolBar,
	},
}
</script>