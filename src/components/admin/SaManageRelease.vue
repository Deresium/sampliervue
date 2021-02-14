<template>
    <h2>Gestion des sorties</h2>
    <div class="releases">
        <form @submit.prevent="sendRelease" novalidate="novalidate">
            <label>
                <span>Nom *</span>
                <input type="text" name="name" v-model="release.releaseName"/>
            </label>
            <label>
                <span>Description *</span>
                <textarea name="description" v-model="release.releaseDescription"/>
            </label>
            <label>
                <span>Artiste *</span>
                <select v-model="release.releaseArtistIdString">
                    <option value="">Sélectionner un artiste</option>
                    <option v-for="artist in artists" :key="artist.id" :value="artist.id">{{ artist.name }}</option>
                </select>
            </label>
            <label>
                <span>type *</span>
                <select v-model="release.releaseType">
                    <option value="">Sélectionner un type</option>
                    <option value="Rap FR">Rap FR</option>
                    <option value="Rap US">Rap US</option>
                </select>
            </label>
            <label>
                <span>Date *</span>
                <v-date-picker v-model="release.releaseDate" mode="date" locale="fr"/>
            </label>
            <label>
                <span>Image *</span>
                <SaDropImg @file-change="fileChange" :release-id="release.id"/>
            </label>
            <SaButton type="submit">{{ txtSubmit }}</SaButton>
            <div class="deleteButton">
                <SaButton v-if="release.id" type="button" @click="deleteRelease">Supprimer la sortie</SaButton>
            </div>
        </form>
        <div class="calendar">
            <SaReleaseCalendar :key="counter" @click-release="loadRelease"/>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue"
import Release from "@/models/Release";
import {queryArtists} from "@/requests/artistRequest";
import Artist from "@/models/Artist";
import SaButton from "@/components/commons/SaButton.vue";
import axiosServer from "@/axios/axiosServer";
import SaReleaseCalendar from "@/components/artist/SaReleaseCalendar.vue";
import {queryRelease} from "@/requests/releaseRequest";
import axios from "axios";
import SaDropImg from "@/components/admin/SaDropImg.vue";


export default defineComponent({
    components: {SaDropImg, SaReleaseCalendar, SaButton},
    setup() {
        const release = ref(new Release());
        const fileUpload = ref();
        const artists = ref(new Array<Artist>());
        const counter = ref(0);

        const fileChange = (file: File) => {
            fileUpload.value = file;
        }

        const sendRelease = async () => {
            if (!fileUpload.value ||
                !fileUpload.value.name ||
                !release.value.releaseName ||
                !release.value.releaseDescription ||
                !release.value.releaseArtistId ||
                !release.value.releaseType ||
                !release.value.releaseDate) {
                alert('Veuillez compléter tout le formulaire');
                return;
            }


            const formData = new FormData();
            formData.append('file', fileUpload.value, fileUpload.value.name);
            formData.append('name', release.value.releaseName);
            formData.append('description', release.value.releaseDescription);
            formData.append('artistId', release.value.releaseArtistId.toString());
            formData.append('type', release.value.releaseType);
            formData.append('date', release.value.releaseDate.toString());
            if (!release.value.id) {
                const response = await axiosServer.post('/release', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if (response.status === 200) {
                    counter.value++;
                    alert('Sortie enregistrée')
                }
            } else {
                const response = await axiosServer.put(`/release/${release.value.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })

                if (response.status === 200) {
                    counter.value++;
                    alert('Sortie modifiée')
                }
            }
        }

        queryArtists().then(response => artists.value = response);

        const loadRelease = async (releaseId: number) => {
            queryRelease(releaseId).then(response => {
                release.value = response;
            })
        }

        const deleteRelease = async () => {
            if (!release.value.id)
                return;

            const response = await axiosServer.delete(`/release/${release.value.id}`);
            if (response.status === 200) {
                counter.value++;
                release.value = new Release();
                alert('Sortie supprimée');
            }
        }

        const txtSubmit = computed(() => release.value.id ? 'Modifier la sortie' : 'Ajouter une sortie');

        return {
            sendRelease,
            release,
            artists,
            counter,
            loadRelease,
            txtSubmit,
            deleteRelease,
            fileChange
        }
    }
})
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    width: 100%;
}

label span {
    display: block;
}

label {
    margin-bottom: 20px;
}

label input, label textarea, label select {
    width: 100%;
    box-sizing: border-box;
}

.deleteButton {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.calendar {
    margin-top: 30px;
}

@media (min-width: 900px) {
    form {
        width: 30%;
    }

    .calendar {
        margin-top: 0;
        width: 50%;
        display: flex;
        justify-content: center;
    }

    .releases {
        display: flex;
        justify-content: space-between;
    }
}

</style>