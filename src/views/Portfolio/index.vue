<template lang="pug">
.portfolio
	heading(:data="heading")
	.grid
		card(v-for="(card, index) in cards", :key="index")
			img(src="@/assets/images/system.jpg")
			card-footer(:data="card")

	action-button(label="BUTTON", @buttonEvent="goToContact")
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
				title: "What da fuck I've built",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			},
			cards: [
				{
					title: "Cadastro Médico",
					description: "description",
				},
				{
					title: "Hemodinâmica",
					description: "description",
				},
				{
					title: "Triagem Sul-Africana",
					description: "description",
				},
				{
					title: "Segmentação",
					description: "description",
				},
				{
					title: "Git",
					description: "description",
				},
				{
					title: "Scrum",
					description: "description",
				},
			],
		}
	},
	methods: {
		goToContact() {
			this.$router.push({ name: "contact" })
		},
	},
}
</script>
<style lang="stylus" src="@/assets/styles/views/Portfolio.styl">