<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Les Origines :</h2>
        <p>
            BSL a 23 ans et est originaire de Charleroi en Belgique, ville connue pour ses mines de charbon et pour son
            importante population italienne issue de l’immigration lors de la révolution industrielle du 19ème siècle.
            Ce
            jeune rappeur tient donc des origines de la ville de Palerme, située au nord de la Sicile. BSL se passionne
            vite pour le football et se voyait devenir footballeur pro.
        </p>
    </div>
    <div>
        <h2>Du Rap footballistique ? :</h2>
        <p>
            BSL est encore adolescent lorsqu’il commence à s’intéresser au monde de la musique, et ce sera via la
            légende 50 Cent que BSL commencera à écouter du rap. Sa relation avec la musique se développe peu à peu avec
            le temps, et à 21 ans, après des événements importants de sa vie. il commence ses premiers freestyles qu’il
            publie sur Instagram, pour ensuite envoyer un premier clip sur YouTube. Bien que sa passion pour le rap
            s’intensifie avec les années, BSL n’oublie pas son premier amour ; il joue toujours au football en amateur
            et consacre son temps libre à écrire et enregistrer des sons.
        </p>
    </div>
    <div>
        <h2>Masha : Producteur, Ami, Coach :</h2>
        <p>
            Si l’on considère BSL somme le numéro 10 de son équipe, son entraineur est sans aucun son ami d’enfance et
            producteur Masha, avec lequel il travaille depuis le début. Les deux se sont connus à l’école et ne se
            lâchent plus depuis. Masha a produit la majorité des sons de l’album « Histoire d’un Gosse » de BSL, et il
            était l’un de ses premiers soutiens lorsque BSL a commencé le rap.
        </p>
    </div>
    <div>
        <h2>Le Futur :</h2>
        <p>
            BSL a été très clair sur son avenir : Il n’arrêtera pas le rap avant d’avoir atteint ses objectifs. Un peu
            comme Lotfi l’Algerois – NDLR ; qu’on a déjà présenté – BSL veut montrer aux autres qu’il peut le faire, et
            a comme premier objectif le million de vues sur un de ses clips. BSL travaille en ce moment sur ses
            prochains singles, et envisage l’avenir sereinement, avec un prochain album sur lequel il commence déjà à
            réfléchir. On a hâte d’écouter ça !
        </p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlPicture} from "@/utils/urls";

export default defineComponent({
    setup() {
        const {params: {articleId}} = useRoute();
        let id: number | undefined = undefined;
        if (typeof articleId === 'string')
            id = parseInt(articleId);

        const url1 = urlPicture(id, 1);

        return {
            url1
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

.video {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
}


.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
</style>