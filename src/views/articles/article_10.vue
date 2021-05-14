<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <p>
            Depuis tout petit Ercaless est baigné dans le monde de la musique, cela fait un peu plus de 10 ans qu’il
            chante et fait de la guitare mais ses réels débuts dans le rap se sont fait sur Instagram il y a un peu plus
            deux ans.
        </p>
        <p>
            18 ans mais très mature dans l’écriture de ses textes, grand sensibilisateur Ercaless aime de transmettre
            les messages qui lui sont chers dans ses textes car pour lui la musique est à l’heure actuelle plus écoutés
            que certains discours. Toutefois ce n’est pas pour autant que 100% de ses freestyles se concentrent
            essentiellement sur un passage de Message. En effet depuis un peu plus de 2 ans Ercaless fait presque tous
            les mois des concours Instagram comme 1minute2rap ou encore rappour100e,… où il peut aborder des textes avec
            fort message ou tout simplement du gros kickage.
        </p>
        <p>
            Actuellement avec un compte à 800 abonnés, Ercaless a connu il y a un peu plus de 2 mois un compte à 2500
            abonnés qui s’est vu supprimer. Même s’il a toujours eu la tête sur les épaules en se disant ce n’est que du
            virtuel et que ce n’était pas 2500 membres actifs, la surpression de son compte l’a tout de même affecté,
            dans la mesure où il a vu tout son travail depuis 2 ans s’évaporer en 1 seconde. Malgré ça, il a reçu
            beaucoup de force et voit à l’heure actuelle sa vraie communauté, ce qui lui redonne énormément de force.
            Ercaless ne nous cache pas que ce serait un rêve de devenir rappeur et de vivre de sa passion mais il reste
            mature et est conscient que c’est une chance très infime pour que ça se réalise. Cependant il sait que c’est
            réellement dans ce monde qu’il veut faire carrière, si pas rappeur prof de chant, de guitare ?
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