<template>
    <h2>Dépôt des sons</h2>
    <div class="allDropSong">
        <div class="dropSong" v-for="(dropSong, index) in dropSongs" :key="index">
            <p>nom: {{ dropSong.getName() }}</p>
            <p>email: <a :href="`mailto:${dropSong.getEmail()}`">{{ dropSong.getEmail() }}</a></p>
            <div class="audios">
                <div class="audioFile" v-for="audioFile in dropSong.getAudioFiles()" :key="audioFile.getIdAudioFile()">
                    <img src="../../assets/icons/music.svg" alt="music icon"/>
                    <p>{{ audioFile.getFileName() }}</p>
                    <a class="downloadLink" :href="getUrlAudioFile(audioFile.getIdAudioFile(), audioFile.getExtension())" download>Télécharger</a>
                    <audio
                        controls
                        :src="getUrlAudioFile(audioFile.getIdAudioFile(), audioFile.getExtension())"
                    >
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import DropSong from "@/models/DropSong";
import {queryDropSong} from "@/requests/DropSongRequest";

export default defineComponent({
    components: {},
    setup(){
        const dropSongs = ref(new Array<DropSong>());
        queryDropSong().then(data => {
            dropSongs.value = data;
        })

        const getUrlAudioFile = (audioFileId: number, extension: string) => `${process.env.VUE_APP_SERVER_URL}/audioFile/${audioFileId}.${extension}`

        return{
            dropSongs,
            getUrlAudioFile
        }
    }
})
</script>

<style scoped>
.dropSong{
    margin-bottom: 100px;
}

.audioFile{
    border: solid 1px #0A0A0A;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.downloadLink{
    color: #0A0A0A;
    text-decoration: none;
    border: 1px solid #0A0A0A;
    padding: 10px;
    margin-bottom: 10px;
}

.downloadLink:hover{
    color: #C9853C;
    border-color: #C9853C;
}

.audioFile img{
    width: 80px;
}

@media(min-width: 900px){
    .audioFile img{
        width: 100px;
    }

    .audios{
        display: flex;
        flex-wrap: wrap;
    }

    .audioFile{
        max-width: 400px;
    }

    .audioFile:not(:last-child){
        margin-right: 20px;
    }
}
</style>