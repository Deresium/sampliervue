import {RouteRecordRaw} from "vue-router";
import SaHome from "@/views/SaHome.vue";
import SaArtists from "@/views/SaArtists.vue";
import SaActuality from "@/views/SaActuality.vue";
import SaArticleView from "@/views/SaArticleView.vue";
import SaInterview from "@/views/SaInterview.vue";
import SaVideoPodcast from "@/views/SaVideoPodcast.vue";
import SaArtistView from "@/views/SaArtistView.vue";
import SaContact from "@/views/SaContact.vue";
import SaCreateAccount from "@/views/SaCreateAccount.vue";
import SaCredits from "@/views/SaCredits.vue";
import SaAdmin from "@/views/SaAdmin.vue";
import SaForgotPassword from "@/views/SaForgotPassword.vue";
import SaRelease from "@/views/SaRelease.vue";


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: SaHome,
		meta:{
			title:'Samplier: Home'
		}
	},
	{
		path: '/actualite',
		name: 'Actuality',
		component: SaActuality,
		meta:{
			title:'Samplier: Actualité'
		}
	},
	{
		path: '/interview',
		name: 'Interview',
		component: SaInterview,
		meta:{
			title:'Samplier: Interview'
		}
	},
	{
		path: '/videopodcast',
		name: 'Videopodcast',
		component: SaVideoPodcast,
		meta:{
			title:'Samplier: Vidéos & Podcasts'
		}
	},
	{
		path: '/artistes',
		name: 'Artists',
		component: SaArtists,
		meta:{
			title:'Samplier: Artistes'
		}
	},
	{
		path: '/credits',
		name: 'Credits',
		component: SaCredits,
		meta:{
			title:'Samplier: Credits'
		}
	},
	{
		path: '/forgotPassword',
		name: 'ForgotPassword',
		component: SaForgotPassword
	},
	{
		path: '/admin',
		name: 'Admin',
		component: SaAdmin,
		meta:{
			title:'Samplier: Admin'
		}
	},
	{
		path: '/sorties',
		name: 'Release',
		component: SaRelease,
		meta:{
			title:'Samplier: Sorties'
		}
	},
	{
		path: '/contact',
		name: 'Contact',
		component: SaContact,
		meta:{
			title:'Samplier: Contact'
		}
	},
	{
		path:'/createAccount',
		name:'CreateAccount',
		component: SaCreateAccount,
		meta: {
			title:'Samplier: Création d\'un compte'
		}
	},
	{
		path: '/artistes/:artistId',
		name: 'ArtistView',
		component: SaArtistView,
		meta:{
			title:'Samplier: Artistes'
		}
	},
	{
		path: '/article/:articleId',
		name: 'article',
		component: SaArticleView,
		meta:{
			title:'Samplier'
		}
	}
]

export default routes;