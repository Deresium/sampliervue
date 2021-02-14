<template>
    <img :src="url1" alt="image article"/>
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

        const url1 = urlPicture(id, 2);

        return{
            url1
        }
    }
})
</script>

<style scoped>
    div img{
        width: 100%;
    }
</style>