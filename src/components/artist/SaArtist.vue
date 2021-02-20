<template>
    <router-link :to="to"  class="artist" v-if="mustShow">
        <img :src="url" alt="artist pic"/>
        <p class="txt artistName">{{ artist.artistName }}</p>
        <p class="txt">{{artist.artistDescription}}</p>
        <div class="hashtags">
            <p v-for="(hashtag,index) in artist.artistHashtags" :key="index" class="hashtag">#{{hashtag}}</p>
        </div>
    </router-link>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"
import Artist from "../../models/Artist";
import {urlArtistPicture} from "@/utils/urls";

export default defineComponent({
    props:{
        artist:{
            type: Artist,
            required: true
        },
        search:{
            type: String,
            required: true
        }
    },
    setup(props){
        const url = computed(() => urlArtistPicture(props.artist.id, 1))

        const to = computed(() => `/artistes/${props.artist.id}`);

        const mustShow = computed(() => {
            if(!props.artist || !props.artist.artistName)
                return false;
            if(props.artist.artistName.toUpperCase().includes(props.search.toUpperCase()))
                return true;

            if(!props.artist.artistHashtags)
                return false;

            for(const hashtag of props.artist.artistHashtags){
                if(hashtag.toUpperCase().includes(props.search.toUpperCase()) || `#${hashtag}`.toUpperCase().includes(props.search.toUpperCase()))
                    return true
            }

            return false;
        })

        return{
            url,
            mustShow,
            to
        }
    }
})
</script>

<style scoped>
.artist{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
}

img{
    width: 80vw;
    height: 80vw;
    object-fit: cover;
}

.txt.artistName{
    font-size: xx-large;
    color: #C9853C;
    font-weight: bold;
    margin: 0;
}

.txt{
    text-align: center;
    color: #0A0A0A;
}

.hashtag{
    background-color: #C9853C;
    color: #0A0A0A;
    padding: 10px;
    border-radius: 20px;
}

.hashtags{
    display: flex;
    justify-content: center;
}

.hashtag:not(:last-child){
    margin-right: 20px;
}

*{
    text-decoration: none;
}

@media(min-width: 900px){
    .artist{
        width: 30vw;
    }

    img{
        width: 25vw;
        height: 25vw;
    }
}
</style>