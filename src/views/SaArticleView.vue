<template>
    <div class="withMargin">
        <h1>{{article.articleTitle}}</h1>
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

export default defineComponent({
    components: {SaButton, article_1, article_2, article_3, article_4},
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