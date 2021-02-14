import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "@/store/store";
import VCalendar from "v-calendar";

createApp(App).use(store).use(router).use(VCalendar).mount('#app')
