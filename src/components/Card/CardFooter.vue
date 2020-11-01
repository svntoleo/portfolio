<template lang="pug">
.card-footer
	.title {{ data.title }}
	.description {{ data.description }}
</template>
<script>
export default {
	props: {
		data: Object,
		default: "",
	},
}
</script>
<style lang="stylus" src="@/assets/styles/components/Card/CardFooter.styl">