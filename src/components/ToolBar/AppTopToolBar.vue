<template lang="pug">
ul.teste
	router-link(
		v-for="(route, index) in routes",
		:key="index",
		:to="route.name",
		tag="li"
	) {{ route.description }}
</template>
<script>
export default {
	data() {
		return {
			routes: [
				{ name: "whoami", description: "Quem Sou Eu" },
				{ name: "skills", description: "Skills" },
				{ name: "portfolio", description: "Portfolio" },
				{ name: "contact", description: "Contato" },
			],
		}
	},
}
</script>