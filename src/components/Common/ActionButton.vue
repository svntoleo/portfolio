<template lang="pug">
.button(@click="$emit('buttonEvent')") {{ label }}
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