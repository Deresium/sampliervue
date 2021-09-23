<template>
    <div class="image">
        <img :src="url1" alt="img artist"/>
    </div>
    <div class="socialMedia">
        <a href="https://instagram.com/eracless_rn?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
            <img class="socialMediaImg" src="../../assets/icons/instagram.svg" alt="logo instagram"/>
        </a>
    </div>
    <div>
        <p>
            18 ans, Saint-Etienne, passion musicale depuis petit : Voici les éléments qui composent Eracless, un artiste
            complet et prometteur notamment connu pour ses freestyles sur Instagram
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

        const to = computed(() => `/article/10`);

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

@media (min-width: 900px) {
    .btn {
        width: 30%;
    }
}
</style>