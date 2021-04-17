<template>
    <div class="image">
        <img :src="url1" alt="img artist"/>
    </div>
    <div class="socialMedia">
        <a href="https://www.instagram.com/lotfi_algerois/?igshid=skpc27dlah2d" target="_blank" rel="noopener noreferrer">
            <img class="socialMediaImg" src="../../assets/icons/instagram.svg" alt="logo instagram"/>
        </a>
    </div>
    <div>
        <p>
            Lotfi commence à écrire vers ses 15 ans en coïncidence avec son arrivée en France. Ses 4 années de maniement
            de la plume n’auront pas été de tout repos : 4000 abonnés Instagram, un passage à la radio locale nantaise,
            quelques scènes, notamment pour la fête de la musique. Lotfi a déjà pas mal d’expérience dans le rap malgré
            son jeune âge.
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

        const to = computed(() => `/article/1`);

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

.socialMedia{
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

.socialMediaImg{
    width: 100%;
}

@media(min-width: 900px){
    .btn{
        width: 30%;
    }
}
</style>