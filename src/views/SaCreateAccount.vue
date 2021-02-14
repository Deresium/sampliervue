<template>
    <div class="withMargin">
        <h1>Création de compte</h1>
        <form @submit.prevent="submitCreateAccount" novalidate="novalidate">
            <label>
                <span>Nom *</span>
                <input type="text" name="name" v-model="name"/>
            </label>
            <label>
                <span>Prénom *</span>
                <input type="text" name="firstName" v-model="firstName"/>
            </label>
            <label>
                <span>Email *</span>
                <input type="email" name="email" v-model="email"/>
            </label>
            <label>
                <span>Mot de passe *</span>
                <input type="password" name="password" v-model="password"/>
            </label>
            <label>
                <span>Répéter le mot de passe *</span>
                <input type="password" name="repeatPassword" v-model="repeatPassword"/>
            </label>
            <SaButton type="submit">Créer un compte</SaButton>
        </form>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import SaButton from "@/components/commons/SaButton.vue";
import axios from "axios";
import axiosServer from "@/axios/axiosServer";
import validator from "validator";

export default defineComponent({
    components: {SaButton},
    setup() {
        const name = ref('');
        const firstName = ref('');
        const email = ref('');
        const password = ref('');
        const repeatPassword = ref('');

        const submitCreateAccount = async () => {
            if(validator.isEmpty(name.value) ||
                validator.isEmpty(firstName.value) ||
                validator.isEmpty(email.value) ||
                validator.isEmpty(password.value) ||
                validator.isEmpty(repeatPassword.value)
            ){
                alert('Veuillez compléter l\'ensemble du formulaire');
                return;
            }

            if(password.value !== repeatPassword.value) {
                alert('Les mots de passe ne correspondent pas');
                return;
            }

            const response = await axiosServer.post('/createAccount', {
                name: name.value,
                firstName: firstName.value,
                email: email.value,
                password: password.value
            });
            if(response.status === 200)
                alert('Compte créé avec succès');

        }

        return {
            name,
            firstName,
            email,
            password,
            repeatPassword,
            submitCreateAccount
        }
    }
})
</script>

<style scoped>
h1{
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    display: block;
}

label {
    width: 100%;
    margin-bottom: 20px;
}

label input {
    width: 100%;
}

@media (min-width: 900px) {
    label {
        width: 50%;
    }
}


</style>