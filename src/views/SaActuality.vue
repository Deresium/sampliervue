<template>
    <div class="withMargin">
        <h1>Notre actualité</h1>
        <SaArticle v-for="article in actuality" :key="article.id" :article="article"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {queryArticles} from "@/requests/articleRequest";
import Article from "@/models/Article";
import SaArticle from "@/components/article/SaArticle.vue";

export default defineComponent({
    components: {SaArticle},
    setup(){
        const actuality = ref(new Array<Article>());
        queryArticles('ACTUALITY').then(response => {
            actuality.value = response;
        })
        return{
            actuality
        }
    }
})
</script>

<style scoped>

</style>