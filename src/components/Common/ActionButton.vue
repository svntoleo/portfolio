<template lang="pug">
.action-button(@click="$emit('buttonEvent')") {{ label }}
</template>
<script>
export default {
	props: {
		label: {
			type: String,
			default: "",
		},
	},
}
</script>
<style lang="stylus" src="@/assets/styles/components/Common/ActionButton.styl">