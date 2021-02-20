<template>
    <router-link :to=to class="article">
        <img :src="imgUrl" alt="img article"/>
        <div class="resume">
            <div class="title">
                <h2>{{article.articleTitle}} <span v-if="isVideoOrPodcast">{{article.type}}</span></h2>
            </div>
            <p>{{article.articleSubtitle}}</p>
            <p>{{article.articleDateString}}</p>
        </div>
    </router-link>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"
import Article from "../../models/Article";
import {urlPicture} from "@/utils/urls";

export default defineComponent({
    props:{
        article:{
            type: Article,
            required: true
        }
    },
    setup(props){
        const imgUrl = computed(() => urlPicture(props.article.id, 1))
        const to = `/article/${props.article.id}`
        const isVideoOrPodcast = computed(() => props.article.typeCode === 'VIDEO' || props.article.typeCode === 'PODCAST');

        return{
            imgUrl,
            to,
            isVideoOrPodcast
        }
    }
})
</script>

<style scoped>
.article{
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

*{
    text-decoration: none;
}

p{
    color: #0A0A0A;
}

h2 span{
    font-size: small;
    color: #0A0A0A;
}

@media(min-width: 900px){
    .article{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .article img{
        width: 50%;
    }

    .article .resume{
        width: 45%;
    }
}

</style>