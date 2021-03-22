<template>
    <div class="withMargin">
        <h1>Dépose ton son</h1>
        <form novalidate="novalidate" @submit.prevent="submitFormDropSong">
            <label>
                <span>Nom / Nom de scène *</span>
                <input type="text" v-model="name"/>
            </label>
            <label>
                <span>Email *</span>
                <input type="email" v-model="email"/>
            </label>

            <label class="labelInputFile" @dragenter.prevent="dragEnterHandler" @dragleave="dragLeaveHandler"
                   @dragover.prevent
                   @drop.prevent="dropHandler">
                <span>Musiques (MP3 ou WAV) *</span>
                <input class="inputFile" type="file" accept="audio/*" multiple="multiple" @change="onChangeFile">
                <span class="spanDropFile" :class="insideInputStyle"><span class="txtDragDrop"
                                                                           :class="insideInputStyle">Glisser / Déposer</span></span>
            </label>

            <div class="droppingFiles">
                <div class="droppingFile" v-for="(file, index) in fileList" :key="index">
                    <img src="../assets/icons/music.svg" alt="music logo"/>
                    <p>{{ file.name }}</p>
                    <SaButton @click="deleteFile(index)">Supprimer</SaButton>
                </div>
            </div>

            <SaButton :disabled="disabledSend" type="commit">Envoyer</SaButton>
        </form>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import SaButton from "@/components/commons/SaButton.vue";
import {dragAndDrop} from "@/utils/dragAndDrop";
import validator from "validator";
import axiosServer from "@/axios/axiosServer";

export default defineComponent({
    components: {SaButton},
    setup() {
        const name = ref('');
        const email = ref('');
        const fileList = ref(new Array<File>());
        const disabledSend = ref(false);

        const handleDataTransfer = async (dataTransfer: DataTransfer) => {
            for (const file of dataTransfer.files) {
                fileList.value.push(file);
            }
        }

        const onChangeFile = async (event: any) => {
            for (const file of event.target.files) {
                fileList.value.push(file);
            }
        }

        const {dragLeaveHandler, dragEnterHandler, isHover, dropHandler} = dragAndDrop([], handleDataTransfer);

        const insideInputStyle = computed(() => ({
            'isHoverStyle': isHover.value
        }))

        const deleteFile = (index: number) => {
            fileList.value.splice(index, 1);
        }

        const submitFormDropSong = async () => {
            if (
                validator.isEmpty(name.value) ||
                validator.isEmpty(email.value) ||
                !validator.isEmail(email.value) ||
                fileList.value.length === 0
            ) {
                alert('Veuillez compléter l\'ensemble du formulaire et vérifier votre e-mail');
                return;
            }

            const formData = new FormData();
            for (const file of fileList.value) {
                formData.append('files', file, file.name);
            }
            formData.append('name', name.value);
            formData.append('email', email.value);

            disabledSend.value = true;
            const response = await axiosServer.post('/dropSong', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (response.status === 200) {
                alert('Merci pour votre envoi. Nous vous contacterons rapidement!')
            }
            disabledSend.value = false;
        }

        return {
            submitFormDropSong,
            email,
            name,
            fileList,
            onChangeFile,
            dragLeaveHandler,
            dragEnterHandler,
            dropHandler,
            insideInputStyle,
            deleteFile,
            disabledSend
        }
    }
})
</script>

<style scoped>

.inputFile {
    display: none;
}

.spanDropFile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    border: 1px solid #0A0A0A;
    cursor: pointer;
}

.spanDropFile:hover {
    border-color: #C9853C;
    color: #C9853C;
}

.isHoverStyle {
    border-color: #C9853C;
    color: #C9853C;
    cursor: grab;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    width: 80%;
    margin-bottom: 20px;
}

label input {
    width: 100%;
}

.droppingFiles {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
}

.droppingFile {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: solid 1px #0A0A0A;
    border-radius: 25px;
}

.droppingFile > img {
    width: 100px;
}

.droppingFile > p {
    text-align: center;
}


@media (min-width: 900px) {
    label {
        width: 30%;
    }

    .droppingFiles {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .droppingFile:not(:first-child) {
        margin-left: 20px;
        padding: 20px;
        max-width: 200px;
    }
}

</style>