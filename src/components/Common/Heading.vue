<template lang="pug">
.heading
	.title {{ data.title }}
	.description {{ data.description }}
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			default: "",
		},
	},
}
</script>
<style lang="stylus" src="@/assets/styles/components/Common/Heading.styl">