<template lang="pug">
#app
	tool-bar
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