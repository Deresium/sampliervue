<template>
    <div class="withMargin">
        <h1>{{ artist.artistName }}</h1>
        <p class="bold">{{artist.artistDescription}}</p>

        <div class="component">
            <component :is="componentName"/>
        </div>

        <div class="btn">
            <SaButton :to="{name: 'Artists'}">Retour aux artistes</SaButton>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {useRoute} from "vue-router";
import {queryArtist} from "@/requests/artistRequest";
import Artist from "@/models/Artist";
import SaButton from "@/components/commons/SaButton.vue";
import artist_1 from "@/views/artists/artist_1.vue";
import artist_2 from "@/views/artists/artist_2.vue";
import artist_3 from "@/views/artists/artist_3.vue";
import artist_4 from "@/views/artists/artist_4.vue";

export default defineComponent({
    components: {SaButton, artist_1, artist_2, artist_3, artist_4},
    setup(){
        const {params:{artistId}} = useRoute();
        let id: number | undefined = undefined;
        if(typeof artistId === 'string')
            id = parseInt(artistId);

        const componentName = ref(`artist_${artistId}`);

        const artist = ref(new Artist());
        queryArtist(id).then(response => {
            artist.value = response;
        })

        return{
            artist,
            componentName
        }

    }
})
</script>

<style scoped>
h1{
    text-align: center;
}

.component{
    margin-top: 30px;
    margin-bottom: 30px;
}

.bold{
    font-weight: bold;
    text-align: center;
}
@media(min-width: 900px){
    .btn{
        width: 30%;
    }
}
</style>