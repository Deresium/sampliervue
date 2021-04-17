<template>
    <div class="image">
        <img :src="url1" alt="img artist"/>
    </div>
    <div class="socialMedia">
        <a href="https://www.instagram.com/bsl_6k/?igshid=coou5lzqn7sc" target="_blank" rel="noopener noreferrer">
            <img class="socialMediaImg" src="../../assets/icons/instagram.svg" alt="logo instagram"/>
        </a>
        <a href="https://www.youtube.com/channel/UCX3R8tb-5ZF6lmxbEVT_8NQ/videos" target="_blank"
           rel="noopener noreferrer">
            <img class="socialMediaImg" src="../../assets/icons/youtube.svg" alt="logo instagram"/>
        </a>
    </div>
    <div>
        <p>
            BSl se lance dans le rap durant son adolescence en influence de la légende du rap 50 cent, à 21 ans après
            des évènements marquant dans sa vie il commence à publier ses premiers freestyle sur instagram ainsi que ses
            premiers clips sur youtube.
        </p>
    </div>
    <div class="btn">
        <SaButton :to="to">Découvrir l'article</SaButton>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlArtistPicture} from "@/utils/urls";
import SaButton from "@/components/commons/SaButton.vue";

export default defineComponent({
    components: {SaButton},
    setup() {
        const {params: {artistId}} = useRoute();
        let id: number | undefined = undefined;
        if (typeof artistId === 'string')
            id = parseInt(artistId);

        const url1 = urlArtistPicture(id, 1);

        const to = computed(() => `/article/3`);

        return {
            url1,
            to
        }
    }
})
</script>

<style scoped>
div {
    margin-bottom: 50px;
}

.image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.image img {
    max-width: 100%;
}

.socialMedia {
    display: flex;
    align-items: center;
    justify-content: center;
}

.socialMedia > a {
    display: block;
    width: 70px;
    margin-left: 20px;
    margin-right: 20px;
}

.socialMediaImg {
    width: 100%;
}

@media(min-width: 900px){
    .btn{
        width: 30%;
    }
}
</style>