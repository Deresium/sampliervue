<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>« Who’s Jack ? » :</h2>
        <p>
            Jack CC, jeune artiste de 25 ans provenant de la cité phocéenne est un de ces rares artistes à vouloir
            séparer son personnage dans le rap et son personnage de la vie privée.
        </p>
        <p>
            Jack ayant déjà eu une « pré-carrière » dans le monde du rap, avec signature de contrat dans une grande
            maison de disques, contrat qu’il résignera quelques temps plus tard à cause de trop nombreux désaccords.
            Suite à cette déception et ces nouvelles expériences, Jack a voulu créer quelque chose de bien propre à lui,
            quelque chose que peu de rappeur on fait, faire une mini-série dans laquelle chaque épisode contient un son
            bien particulier.
        </p>
    </div>
    <div>
        <h2>Épisodes et Chapitres :</h2>
        <p>
            Son objectif avec ça est de raconter la vie de Jack, dans chaque épisode il va, de par ses expériences dans
            la vie que ce soit, déceptions ou apprentissage tenter de développer une interaction avec son public.
        </p>
        <p>
            Dans son premier épisode de la saison 1, Jack nous apparait seul face à des mannequins, comme s’il n’avait
            personne vers qui se tourner mais qu’il avait une grosse envie de se confier. Lorsqu’il commence à se
            confier, il nous parle d’une fille qui malheureusement ne recherchait pas la même chose que Jack quand elle
            lui demande ce qu’il fait encore là au réveil.
        </p>
        <p>
            Lors du visionnage de cette épisode, on perçoit clairement l’un des messages phares du rappeur qui est de se
            tourner les uns vers les autres et ne pas rester seul, isolé avec des problèmes ou un mal être présent en
            nous.
        </p>
    </div>
    <div>
        <h2>Audimat Grandissant :</h2>
        <p>
            Jack CC est actuellement suivi par un peu plus de 2500 personnes sur Instagram même s’il a conscience que ce
            n’est que des chiffres et que ce n’est pas la musique, il sait très bien que ce n’est pas suffisant pour
            toucher le nombre de personnes qu’il aimerait.
        </p>
    </div>
    <div>
        <h2>Épilogue :</h2>
        <p>
            A titre personnel, Samplier trouve le personnage de ce rappeur ainsi que le message qu’il fédère plus que
            passionnant.
        </p>
        <p>
            Cet artiste est donc plus qu’à suivre !
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