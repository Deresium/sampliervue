<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Qui est Maxwell BDX ? :</h2>
        <p>
            Maxwell Bdx, originaire de Bordeaux, pratique le rap depuis ses 18 ans est dans le game depuis maintenant 12
            ans. Tombé dans le rap à l’âge de ses 13 ans, il a directement été séduit par les paroles engagées de ses
            modèles de l’époque et a directement voulu, lui aussi, commencé à écrire pour transmettre ses expériences
            au travers de ses textes.
        </p>
    </div>
    <div>
        <h2>Ambition et talent à revendre :</h2>
        <p>
            Les 7000 abonnés c’est un petit accomplissement de ces 3 dernières années où il a pas mal enchaîné les
            concours de rap sur les pages Instagram et les différents événements. De nature ambitieuse, Maxwell trouve
            que 7000 c’est pas mal mais trop peu : il vise plus haut minimum 10 000. En effet selon lui c’est important
            car comme il le dit, plus tu es suivi, plus tu es pris au sérieux.
        </p>
    </div>
    <div>
        <h2>Et les textes, ça dit quoi ? :</h2>
        <p>
            Dans ses textes où circulent de paroles très profondes, Maxwell nous confie qu’il n’essaie pas de faire
            passer un message en particulier mais il parle surtout de lui, de ce qu’il a vécu. Il n’a pas envie de se
            créer un personnage ou encore de s’inventer une vie, il reste juste lui-même.
        </p>
    </div>
    <div>
        <h2>Fier de son parcours comme de ses origines :</h2>
        <p>
            Quand on lui demande ses 2 plus grandes fierté de cette année, il répond sans hésiter Flancher et Percer qui
            sont à l’heure actuelle ses 2 sons repères effectivement pour le premier la barre des 50 000 vues a été
            franchie quant au deuxième la barre des 35 000. Un passage sur Skyrock aura également marqué ces dernières
            années de charbon où Maxwell fait ce qu’il sait de mieux faire : rapper.
        </p>
    </div>
    <div>
        <h2>BDX comme exemple ? :</h2>
        <p>
            Malgré 12 années passées à kicker sans trop de succès, c’est proche de ses 30 ans que Maxwell voit ses
            premiers succès locaux, en contraste total avec la nouvelle vague de rappeurs qui explosent vers leurs
            18-20 ans. Un exemple à suivre qui démontre bien qu’avec du travail, de l’ambition et du temps, on atteindra
            toujours ses objectifs. On espère vous reparler de BDX bientôt sur Samplier !
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