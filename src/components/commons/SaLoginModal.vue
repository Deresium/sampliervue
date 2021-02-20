<template>
    <SaModal v-model="isShowLoginModal">
        <div class="insideModal">
            <h1>Login</h1>
            <form class="searchBar" @submit.prevent="submitLogin" novalidate="novalidate">
                <label>
                    <span>Email</span>
                    <input name="email" type="email" v-model="email"/>
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input name="password" type="password" v-model="password"/>
                </label>
                <router-link class="forgotPassword" :to="{name:'ForgotPassword'}"><span @click="hideModal">Mot de passe oublié?</span></router-link>
                <SaButton type="submit">Se connecter</SaButton>
            </form>
            <div class="separator">
                <div class="line"><div/></div>
                <p>ou</p>
                <div class="line"><div/></div>
            </div>
            <div class="newAccount">
                <SaButton :to="{name: 'CreateAccount'}">Créer un compte</SaButton>
            </div>
        </div>
    </SaModal>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import store from '@/store/store';
import useLogin from "@/utils/login";
import SaButton from "@/components/commons/SaButton.vue";
import SaModal from "@/components/commons/SaModal.vue";

export default defineComponent({
    components: {SaButton, SaModal},
    setup() {
        const isShowLoginModal = computed({
            get: () => {
                return store.getters['login/isShowLoginModal']
            },
            set: () => {
                store.dispatch('login/hideLoginModal')
            }
        });


        const email = ref();
        const password = ref();
        const disabledSend = ref(false);

        const submitLogin = async () => {
            disabledSend.value = true;
            await useLogin(email.value, password.value);
            disabledSend.value = false;
        }

        const hideModal = () => {
            store.dispatch('login/hideLoginModal');
        }

        return {
            isShowLoginModal,
            email,
            password,
            disabledSend,
            submitLogin,
            hideModal
        }
    }
})
</script>

<style scoped>
.insideModal {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F4;
    padding: 5% 5vh;
    border-radius: 10px;
}

h1{
    font-family: 'Ace Sans', sans-serif;
}

form{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    margin-bottom: 2vh;
}

form > label{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2vh;
}

form > label:last-of-type{
    margin-bottom: 0;
}

.forgotPassword{
    margin-bottom: 2vh;
}


.separator{
    display: flex;
    align-items: center;
    justify-content: stretch;
    width: 100%;
    margin-bottom: 1vh;
    margin-top: 1vh;
}

.separator > .line{
    flex-grow: 1;
    display: flex;
    align-items: center;
}

.line > div{
    width: 100%;
    height: 0;
    border-bottom: 1px solid #0A0A0A;
}

.separator > .line:first-child{
    margin-right: 5%;
}

.separator > .line:last-child{
    margin-left: 5%;
}

.separator > p{
    margin: 0;
    padding: 0;
}

.newAccount{
    display: flex;
    flex-direction: column;
    width: 100%;
}

@media(min-width: 900px){
    .insideModal{
        width: 30%;
    }
}

</style>