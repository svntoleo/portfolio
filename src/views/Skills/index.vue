<template lang="pug">
.skills
	heading(:data="heading")
	action-button(label="BUTTON", @buttonEvent="goToPortfolio")
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
				title: "What da fuck i can do",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			},
		}
	},
	methods: {
		goToPortfolio() {
			this.$router.push({ name: "portfolio" })
		},
	},
}
</script>