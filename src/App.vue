<template>
    <div class="app exceptFooter">
        <SaHeader/>
        <router-view/>
    </div>
    <SaFooter/>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"

import SaHeader from "@/components/header/SaHeader.vue";
import SaFooter from "@/components/footer/SaFooter.vue";
import store from "@/store/store";
import {useRoute} from "vue-router";
import {useGetCookie, useIsKey} from "@/utils/coookie";
export default defineComponent({
    components: {SaFooter, SaHeader},
    setup(){
        const isLoggedIn = computed(() => store.getters['login/isLoggedIn']);

        const getKey = computed(() => {
            const {fullPath, query: {searchTxt}} = useRoute();
            return `${fullPath}${searchTxt}${isLoggedIn.value}`;
        });

        if(useIsKey('payload')){
            const payload = useGetCookie('payload');
            const decriptPayload = JSON.parse(atob(payload.split('.')[1]));
            store.dispatch('login/loginUser', decriptPayload.role)
        }

        return{
            getKey
        }
    }
})
</script>
<style>
@font-face {
    font-family: "Saira Condensed";
    src: url("assets/fonts/SairaCondensed-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Asap Condensed";
    src: url("assets/fonts/AsapCondensed-Regular.ttf") format("truetype");
}

body{
    margin-top: 0;
    margin-bottom: 0;
    max-width: 100vw;
}

.app{
    margin-left: 5%;
    margin-right: 5%;
}

h1, h2, h3, h4, h5, h6{
    font-family: "Asap Condensed",serif;
    color: #FFDD00;
    font-weight: 300;
}

*{
    font-family: "Saira Condensed", serif;
}

.desktop{
    display: none;
}

.exceptFooter{
    min-height: 93vh;
  margin-bottom: 2vh;
    box-sizing: border-box;
}

.withMargin > h1{
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
}

@media (min-width: 900px) {
    .phone{
        display: none;
    }

    .desktop{
        display: block;
    }

    .withMargin{
        margin-left: 10%;
        margin-right: 10%;
    }

    .withMargin > h1{
        font-size: 60px;
    }

}

</style>