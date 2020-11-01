import Vue from 'vue'
import VueRouter from 'vue-router'

import WhoAmI from "@/views/WhoAmI"
import Skills from "@/views/Skills"
import Portfolio from "@/views/Portfolio"
import Contact from "@/views/Contact"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'root',
		redirect: 'whoami',
	},
	{
		path: '/whoami',
		name: 'whoami',
		component: WhoAmI
	},
	{
		path: '/skills',
		name: 'skills',
		component: Skills
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: Portfolio
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact
	},
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
