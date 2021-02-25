<template>
    <div class="withMargin">
        <h1>Contact</h1>
        <form novalidate="novalidate" @submit.prevent="submitContact">
            <label>
                <span>Nom *</span>
                <input type="text" v-model="name"/>
                <span v-if="errorName">{{errorName}}</span>
            </label>
            <label>
                <span>Prénom *</span>
                <input type="text" v-model="firstName"/>
                <span v-if="errorFirstName">{{errorFirstName}}</span>
            </label>
            <label>
                <span>Email *</span>
                <input type="email" v-model="email"/>
                <span v-if="errorEmail">{{errorEmail}}</span>
            </label>
            <label>
                <span>Message *</span>
                <textarea v-model="message"/>
                <span v-if="errorMessage">{{errorMessage}}</span>
            </label>
            <SaButton type="commit">Envoyer</SaButton>
        </form>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue"
import validator from "validator";
import SaButton from "@/components/commons/SaButton.vue";
import axiosServer from "@/axios/axiosServer";

export default defineComponent({
    components: {SaButton},
    setup(){
        const name = ref('');
        const firstName = ref('');
        const email = ref('');
        const message = ref('');

        const errorName = ref();
        const errorFirstName = ref();
        const errorEmail = ref();
        const errorMessage = ref();

        watch(name, newName => {
            if(validator.isEmpty(newName))
                errorName.value = 'Le nom est requis'
            else
                errorName.value = '';
        })

        watch(firstName, newFirstName => {
            if(validator.isEmpty(newFirstName))
                errorFirstName.value = 'Le prénom est requis'
            else
                errorFirstName.value = '';
        })

        watch(email, newEmail => {
            if(validator.isEmpty(newEmail))
                errorEmail.value = 'L\'email est requis';
            else if(!validator.isEmail(newEmail))
                errorEmail.value = 'Format invalide'
            else
                errorEmail.value = '';
        })

        watch(message, newMessage => {
            if(validator.isEmpty(newMessage))
                errorMessage.value = 'Le message est requis'
            else
                errorMessage.value = '';
        })

        const submitContact = async() => {
            if(!checkForm()){
                alert('Veuillez compléter tout le formulaire');
                return;
            }
            const response = await axiosServer.post('/contact', {
                name: name.value,
                firstName: firstName.value,
                email: email.value,
                message: message.value
            })

            if(response.status === 200)
                alert('Merci pour votre message. Nous vous contacterons rapidement!');
        }

        const checkForm = () => {
            return !validator.isEmpty(name.value) &&
                !validator.isEmpty(firstName.value) &&
                !validator.isEmpty(email.value) &&
                validator.isEmail(email.value) &&
                !validator.isEmpty(message.value);
        }

        return{
            submitContact,
            name,
            firstName,
            email,
            message,
            errorName,
            errorFirstName,
            errorEmail,
            errorMessage
        }
    }
})
</script>

<style scoped>
h1{
    text-align: center;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

span{
    display: block;
}

label{
    margin-bottom: 20px;
}

label{
    width: 80%;
}

label input{
    width: 100%;
}

label textarea{
    width: 100%;
    height: 100px;
}

@media(min-width: 900px){
    label {
        width: 50%;
    }
}

</style>