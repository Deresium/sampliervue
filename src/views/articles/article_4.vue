<template>
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lxRwEPvL-mQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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