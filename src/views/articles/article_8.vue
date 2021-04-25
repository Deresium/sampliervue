<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Histoire :</h2>
        <p>
            Ils sont 15. Jeunes, belges, entreprenant et ambitieux, Iceberg se compose de 3 beatmakers, 4 ingénieurs
            son, 3 graphistes, 2 photographes, 2 monteurs vidéo et 1 réalisateur. Une véritable alliance qui permet aux
            différents artistes qui passent les portes d’Iceberg d’avoir tout à leur disposition, et de se concentrer
            uniquement sur l’aspect artistique et non technique des leurs projets. Une initiative vivement appréciée
            dans une industrie de plus en plus fermée et égoïste.
        </p>
        <p>
            Un point commun réunit tous les fondateurs d’Iceberg Rap, ce point commun c’est cette envie d’entreprendre,
            pour créer quelque chose qu’il leur est propre. Après diverse tentative, la meilleure des solutions s’est
            ouverte à eux, comme la devise nationale belge le dit : l’union fait la force et c’est clairement ce que
            nous laisse transparaitre le collectif d’iceberg rap.
        </p>
        <p>
            Le projet naquit des mains d’Eliott qui dans un premier temps refusa toute aide même celle de Thomas dans un
            premier temps mais après quelques semaines de réflexion, il décida de le recontacter. Ce dernier accepta à
            une condition que Noé fasse partie de l’aventure, la suite appartient à l’histoire...
        </p>
    </div>
    <div>
        <h2>Objectifs :</h2>
        <p>
            La persévérance est une qualité qu’on a parfaitement ressenti au travers de nos échanges, une maturité
            choquante de la part de chaque membres et des phrases très intéressantes comme « les réseaux ce n’est pas
            toujours le miroir de la qualité d’un travail ou de l’investissement consacré à quelque chose ».
        </p>
        <p>
            Leurs objectifs sont divers et variés : ça va d’améliorer leurs équipements et ainsi leurs services, à la
            création d’un événement avec leurs artistes en passant par le tant convoité disque d’or. L’équipe d’Iceberg
            veut se donner les moyens de réussir et leur envie de faire quelque chose de grand se ressent à travers
            l’énergie qu’ils mettent dans le projet.
        </p>
    </div>
    <div>
        <h2>Faits d’armes :</h2>
        <p>
            Iceberg est également impressionnant de par leurs chiffres : 1300 abonnés sur Instagram, 50 000 streams sur
            l’un de leur son « Mal à la tête » d’Augustin et Dew, et beaucoup de projets encore à venir. Lorsqu’on leur
            demande comment ils expliquent l’engouement autour de leurs créations, ils nous répondent avec humour « Le
            hasard ou la chance ». Bien que cela ait suscité beaucoup de surprise et d’incompréhension de leur côté face
            à ce succès, ils sont fiers du chemin déjà parcouru.
        </p>
        <p>
            Malgré leur début de succès sur Instagram, le collectif reste humble et garde la tête sur les épaules même
            si ça leur fait plaisir, ils sont conscients qu’il y a encore beaucoup de travail à fournir pour atteindre
            leurs différents objectifs.
        </p>
        <p>
            En conclusion ce collectif belge avec de grosses ambitions est réellement à suivre, au-delà du fait qu’ils
            ont déjà passé le premier pallier maintenant la confirmation reste à suivre mais nul doute qu’elle se
            réalisera. À la semaine prochaine sur Samplier !
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
</style>