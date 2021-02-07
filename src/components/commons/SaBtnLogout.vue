<template>
    <SaButton v-if="isLoggedIn" @click="onClick" :disabled="disabled">Se déconnecter</SaButton>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import SaButton from "@/components/commons/SaButton.vue";
import router from "@/router/router";
import store from "@/store/store";
import axiosServer from "@/axios/axiosServer";

export default defineComponent({
    components: {SaButton},
    setup(){
        const isLoggedIn = computed(() => store.getters['login/isLoggedIn']);
        const disabled = ref(false);

        const onClick = async() => {
            await axiosServer.post('/logout');
            await router.push({name: 'Home'});
            await store.dispatch('login/logoutUser');
            disabled.value = false;
        }

        return{
            isLoggedIn,
            onClick,
            disabled
        }
    }
})
</script>

<style scoped>

</style>