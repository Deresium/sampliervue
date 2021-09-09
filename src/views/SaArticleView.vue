<template>
    <div class="withMargin">
        <h1>{{article.articleTitle}}</h1>
        <SaGoogleAdSense/>
        <p class="bold">{{article.articleSubtitle}}</p>

        <div class="component">
            <component :is="componentName"/>
        </div>

        <p>{{article.articleDateString}}</p>
        <div class="btn">
            <SaButton :to="{name:to}">{{txtReturn}}</SaButton>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue"
import {useRoute} from "vue-router";
import Article from "@/models/Article";
import {queryArticle} from "@/requests/articleRequest";
import SaButton from "@/components/commons/SaButton.vue";
import article_1 from "@/views/articles/article_1.vue";
import article_2 from "@/views/articles/article_2.vue";
import article_3 from "@/views/articles/article_3.vue";
import article_4 from "@/views/articles/article_4.vue";
import article_5 from "@/views/articles/article_5.vue";
import article_6 from "@/views/articles/article_6.vue";
import article_7 from "@/views/articles/article_7.vue";
import article_8 from "@/views/articles/article_8.vue";
import article_9 from "@/views/articles/article_9.vue";
import article_10 from "@/views/articles/article_10.vue";
import article_11 from "@/views/articles/article_11.vue";
import article_12 from "@/views/articles/article_12.vue";
import article_13 from "@/views/articles/article_13.vue";
import article_14 from "@/views/articles/article_14.vue";
import article_15 from "@/views/articles/article_15.vue";
import article_16 from "@/views/articles/article_16.vue";
import SaGoogleAdSense from "@/components/commons/SaGoogleAdSense.vue";

export default defineComponent({
    components: {
        SaGoogleAdSense,
        SaButton, article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8, article_9, article_10, article_11, article_12, article_13, article_14, article_15, article_16},
    setup(){
        const {params:{articleId}} = useRoute();
        const article = ref(new Article());
        const componentName = ref(`article_${articleId}`);

        let id: number | undefined = undefined;
        if(typeof articleId === 'string')
            id = parseInt(articleId);

        queryArticle(id).then(response => {
            article.value = response;
        })

        const to = ref();
        const txtReturn = ref();
        const typeCode = computed(() => article.value.typeCode)

        watch(typeCode, newVal => {
           switch(newVal){
               case 'ACTUALITY':
                   txtReturn.value =  'Retour à l\'actualité'
                   to.value = 'Actuality'
                   break;
               case 'INTERVIEW':
                   txtReturn.value = 'Retour aux interviews'
                   to.value = 'Interview'
                   break;
               case 'PODCAST':
               case 'VIDEO':
                   txtReturn.value = 'Retour aux vidéos et podcasts'
                   to.value = 'Videopodcast'
                   break;

           }
       })

        return{
            articleId,
            article,
            to,
            txtReturn,
            componentName
        }
    }
})
</script>

<style scoped>
h1{
    text-align: center;
}

.bold{
    font-weight: bold;
}

.component{
    margin-top: 30px;
    margin-bottom: 30px;
}

@media(min-width: 900px){
    .btn{
        width: 30%;
    }
}
</style>