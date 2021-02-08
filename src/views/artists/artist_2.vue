<template>
    <div>
        <img :src="url1" alt="img artist"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlArtistPicture} from "@/utils/urls";

export default defineComponent({
    setup(){
        const {params:{artistId}} = useRoute();
        let id: number | undefined = undefined;
        if(typeof artistId === 'string')
            id = parseInt(artistId);

        const url1 = urlArtistPicture(id, 1);

        return{
            url1
        }
    }
})
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
}

img{
    width: 100%;
}
</style>