<template lang="pug">
.who-am-i
	img(src="@/assets/images/pic.png")
	heading(:data="heading")
	action-button(label="BUTTON", @buttonEvent="goToSkills")
</template>
<script>
import { Heading, ActionButton } from "@/components/Common"

export default {
	components: {
		Heading,
		ActionButton,
	},
	data() {
		return {
			heading: {
				title: "Who da fuck am I",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			},
		}
	},
	methods: {
		goToSkills() {
			this.$router.push({ name: "skills" })
		},
	},
}
</script>