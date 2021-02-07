import {createRouter, createWebHistory} from 'vue-router'
import routes from "@/router/routes";

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {top: 0}
	}
	
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
})

export default router
