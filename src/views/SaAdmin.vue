<template>
    <div class="withMargin">
        <h1>Admin</h1>
        <SaButton v-if="!isLoggedIn" @click="showLoginModal">Se connecter</SaButton>
        <SaButtonLogout/>
        <div v-if="isAdmin">
            <SaManageRelease/>
        </div>
    </div>
    <SaLoginModal/>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"
import store from "@/store/store";
import SaButton from "@/components/commons/SaButton.vue";
import SaLoginModal from "@/components/commons/SaLoginModal.vue";
import SaManageRelease from "@/components/admin/SaManageRelease.vue";
import SaButtonLogout from "@/components/admin/SaButtonLogout.vue";

export default defineComponent({
    components: {SaButtonLogout, SaManageRelease, SaLoginModal, SaButton},
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

</style>