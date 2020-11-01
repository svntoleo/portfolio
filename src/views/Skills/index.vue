<template lang="pug">
.skills
	heading(:data="heading")

	.grid
		card(v-for="(card, index) in cards", :key="index")
			img(src="@/assets/images/js.png")
			card-footer(:data="card")

	action-button(label="BUTTON", @buttonEvent="goToPortfolio")
</template>
<script>
import { Heading, ActionButton } from "@/components/Common"
import { Card, CardFooter } from "@/components/Card"

export default {
	components: {
		Heading,
		ActionButton,
		Card,
		CardFooter,
	},
	data() {
		return {
			heading: {
				title: "What da fuck i can do",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			},
			cards: [
				{
					title: "HTML",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
				{
					title: "CSS",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
				{
					title: "Javascript",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
				{
					title: "Vue.js",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
				{
					title: "Git",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
				{
					title: "Scrum",
					description:
						"JavaScript is a programming language that allows you to implement complex things on web pages.",
				},
			],
		}
	},
	methods: {
		goToPortfolio() {
			this.$router.push({ name: "portfolio" })
		},
	},
}
</script>
<style lang="stylus" src="@/assets/styles/views/Skills.styl">