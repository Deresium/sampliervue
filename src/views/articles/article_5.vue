<template>
    <div>
        <iframe src="https://open.spotify.com/embed/track/4EAV2cKiqKP5UPZmY6dejk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlPicture} from "@/utils/urls";

export default defineComponent({
    setup(){
        const {params:{articleId}} = useRoute();
        let id: number | undefined = undefined;
        if(typeof articleId === 'string')
            id = parseInt(articleId);
    }
})
</script>

<style scoped>
div{
    display: flex;
    justify-content: center;
}
</style>