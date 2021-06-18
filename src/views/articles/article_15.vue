<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        Estimant qu’il était important que sa ville devait être représentée à l’échelon du rap en Belgique. Fusko décida
        de se lancer, ayant déjà quelques bases niveau rap dû à ses nombreux textes écrits, le fait de sortir son
        premier son n’a pas été le plus compliqué.
    </div>
    <div>
        <h2>Le Début du Succès :</h2>
        <p>
            Auteur de 2 sons à francs succès, « Libérable » qui est plus dans un thème de kickage et « Brasser » qui
            quant à lui est plus dans une thématique de son d’été, réunissent à eux deux un peu plus de 160 milles vues.
            Fusko est un de ces artistes capable de se diversifier et d’aller sur plusieurs terrains sans rencontrer
            trop de problème.
        </p>
    </div>
    <div>
        <h2>Fusko sur les Réseaux :</h2>
        <p>
            Actuellement avec plus de 2500 abonnés sur instagram et plus de 3000 sur sa chaine youtube, Fusko a décidé
            de lancer un projet de freestyle nommé « apparence trompeuse » qui en est déjà à l’épisode 2. Il nous confie
            également qu’au courant de cet été il aimerait enchainer les clips et les sons.
        </p>
        <p>
            Il est reconnaissant et gratifié de toutes les personnes qui s’abonnent pour suivre son travail.
        </p>
    </div>
    <div>
        <h2>Conclusion :</h2>
        <p>
            Dans le rap il veut transmettre son vécu, ses valeurs,.. Artiste humble, il ne manque pas de nous dire,
            qu’il remercie vraiment ses proches pour tous les encouragements et toute la force qu’ils donnent.
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