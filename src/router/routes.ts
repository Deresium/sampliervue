import {RouteRecordRaw} from "vue-router";
import SaHome from "@/views/SaHome.vue";
import SaArtists from "@/views/SaArtists.vue";
import SaActuality from "@/views/SaActuality.vue";
import SaArticleView from "@/views/SaArticleView.vue";
import SaInterview from "@/views/SaInterview.vue";
import SaVideoPodcast from "@/views/SaVideoPodcast.vue";
import SaArtistView from "@/views/SaArtistView.vue";


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