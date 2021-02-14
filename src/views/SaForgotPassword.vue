<template>
    <div class="withMargin">
        <h1>Mot de passe oublié</h1>
        <form v-if="!isSend" class="formForgotPassword" @submit.prevent="submitForgotPassword" novalidate="novalidate">
            <label>
                <span>Email:</span>
                <input type="email" v-model="email"/>
            </label>
            <SaButton type="submit">Envoyer</SaButton>
        </form>
        <p v-if="isSend">Un mail a été envoyé à l'adresse indiquée. Veuillez cliquer sur le lien du mail pour changer de mot de passe.</p>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import validator from "validator";
import axiosServer from "@/axios/axiosServer";
import SaButton from "../components/commons/SaButton.vue";

export default defineComponent({
    components: {SaButton},
    setup(){
        const email = ref();
        const isSend = ref(false);
        const submitForgotPassword = async() => {
            try{
                if(validator.isEmpty(email.value) || !validator.isEmail(email.value)){
                    return;
                }

                const response = await axiosServer.post('/forgotPassword', {
                    email: email.value
                });

                if(response.status === 200)
                    isSend.value = true;

            }catch(error){
                alert('une erreur est survenue');
            }
        }

        return{
            submitForgotPassword,
            email,
            isSend
        }
    }
})
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
}

label{
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
}

@media(min-width: 900px){
    .formForgotPassword{
        width: 50%;
    }
}
</style>