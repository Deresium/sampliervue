<template>
    <div class="withMargin">
        <h1>Artistes</h1>
        <form class="searchArtist" @submit.prevent="submitForm" novalidate="novalidate">
            <label>
                <span>Recherche</span>
                <input type="text" v-model="search"/>
            </label>
        </form>
        <div class="artists">
            <SaArtist v-for="artist in artists" :key="artist.id" :artist="artist" :search="search"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue"
import Artist from "@/models/Artist";
import {queryArtists} from "@/requests/artistRequest";
import {urlArtistPicture} from "@/utils/urls";
import SaArtist from "@/components/artist/SaArtist.vue";

export default defineComponent({
    components: {SaArtist},
    setup(){
        const artists = ref(new Array<Artist>());
        queryArtists().then(response => {
            artists.value = response;
        })

        const search = ref('');

        const submitForm = async() => {
            //console.log('submit');
        }

        return{
            artists,
            submitForm,
            search
        }
    }
})
</script>

<style scoped>
.artists{
    display: flex;
    flex-direction: column-reverse;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

label > span{
    display: block;
}

label > input{
    width: 100%;
}

@media(min-width: 900px){
    .artists{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    form{
        margin-bottom: 50px;
    }
    label{
        width: 20%;
    }
}
</style>