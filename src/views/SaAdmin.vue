<template>
    <div class="withMargin">
        <h1>Admin</h1>
        <SaButton v-if="!isLoggedIn" @click="showLoginModal">Se connecter</SaButton>
        <div v-if="isAdmin">
            <div class="nav">
                <router-link :to="{name: 'ReleaseAdmin'}">Sorties</router-link>
                <router-link :to="{name: 'DropSongAdmin'}">Dépôt de sons</router-link>
            </div>
            <router-view/>
        </div>
        <SaButtonLogout/>
    </div>
    <SaLoginModal/>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"
import store from "@/store/store";
import SaButton from "@/components/commons/SaButton.vue";
import SaLoginModal from "@/components/commons/SaLoginModal.vue";
import SaButtonLogout from "@/components/admin/SaButtonLogout.vue";

export default defineComponent({
    components: {SaButtonLogout, SaLoginModal, SaButton},
    setup(){
        const isLoggedIn = computed((): boolean => store.getters['login/isLoggedIn']);
        const isAdmin = computed((): boolean => store.getters['login/onlyAdmin']);

        const showLoginModal = () => {
            store.dispatch('login/showLoginModal');
        }

        return{
            isLoggedIn,
            isAdmin,
            showLoginModal
        }
    }
})
</script>

<style scoped>
.nav{

}

.nav a{
    display: inline-block;
    text-decoration: none;
    color: #C9853C;
    font-size: x-large;
}

.nav a:not(:last-child){
    margin-right: 20px;
}

</style>