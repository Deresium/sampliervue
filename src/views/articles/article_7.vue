<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>PNL : L’incontournable</h2>
        <p>
            Le duo Franco-algérien est probablement le plus connu de tous : Deux frères, qui se définissent par un son
            léger et planant, une écriture sale et cure, sans artifices. Les deux frères ont sorti plusieurs projets,
            dont 2 albums, et le dernier en date « Deux frères ». À travers leurs morceaux et clips, on remarquera que
            PNL est QLF (Que La Famille) ils sont très attachés à leurs racines et à leur groupe de pote où on retrouve
            à la fois DTF et MMZ. PNL c’est aussi une image assez démarquée des autres duos : Aucune interview, des
            featurings limités, une image similaire aux marques de luxes qui limitent leurs produits à l’élite.
        </p>
    </div>
    <div>
        <h2>Djadja et Dinaz :</h2>
        <p>
            Originaire du 77, ces deux frères de cœur sont en perpétuelle évolution. Auteur de 5 albums, ce duo qui
            s’est formé tout naturellement grâce à la forte amitié et la même passion dans les caves du block 16 ne
            cesse de surprendre le monde. Depuis 2015 et leur départ en indé, ils ne sont passés par aucun stade, grâce
            au titre « j’fais mes affaires » ils sont passés de très peu connu à représentant du 77. À travers leurs
            clips, on aperçoit le fil rouge du duo, rester à 2 et rien qu’à 2, d’ailleurs quand on leur demande pourquoi
            ils ne font aucun feat,.. Ils répondent simplement, sourire aux lèvres : « pourquoi faire des feats ? On est
            déjà nos propre feat ». Nul doute ne fait que Djadja et dinaz vont devenir des figures majeures du rap
            français.
        </p>
    </div>
    <div>
        <h2>PSO Thug :</h2>
        <p>
            Le fameux duo parisien s’était fait connaitre avec « obligé de charbonner » en 2015, ils ont continué à
            sortir différents sons jusqu’à sortir un featuring avec Sadek « Plein les poches », puis a mystérieusement
            disparu des écrans avant un réapparition du groupe mais séparé dans le rap français. Aujourd’hui Leto, la
            première moitié du duo est l’une des pointes du rap français.
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