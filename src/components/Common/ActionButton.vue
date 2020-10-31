<template lang="pug">
.button(@click="$emit('btnEvent')") {{ label }}
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