<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Une Histoire atypique :</h2>
        <p>
            Membre du collectif iceberg depuis un peu plus d’un an aujourd’hui, Augustin, jeune rappeur de 19 ans à la
            philosophie presque carpe diem (c’est-à-dire de vivre au jour le jour et advienne que pourra), rappe en
            accord avec ses idées, sans se prendre la tête.
        </p>
    </div>
    <div>
        <h2>Un succès inattendu :</h2>
        <p>
            Avec son single « Mal à la tête » en featuring avec Dew, Augustin marque avec l’un de ses premiers sons une
            grand coup, avec 50 000 streams totaux en quelques seminas sur Spotify. Certes le nombre impressionnant de
            streams est un grand kiff pour lui et il en a un maximum profité avec son équipe d’Iceberg, mais se
            retrouver à des chiffres beaucoup plus bas ne lui pose pas de problèmes actuellement car il fait ça par
            passion, par envie et il kiffe juste ce qu’il fait.
        </p>
    </div>
    <div>
        <h2>Dans les coulisses :</h2>
        <p>
            Mais comment cette envie de rapper lui est elle venue ? Tout simplement car c’est un grand consommateur de
            rap et à force d’en écouter dans des moments difficiles, il avait besoin de mettre sur papier son mal
            être,.. et à force d’écrire il a commencé à poser devant ses potes et petit à petit, à force de recevoir des
            compliments il a posté 1,2,3 freestyle et la sauce a pris et depuis il ne s’arrête plus.
        </p>
    </div>
    <div>
        <h2>La connexion Iceberg :</h2>
        <p>
            Avec ses retrouvailles avec Thomas, ami d’enfance mais perdu de vue au fils des années, c’est tout
            naturellement qu’ils se sont retrouvés sur la même ligné qu’est le rap. Thomas a aidé Augustin en lui
            permettant de rencontrer le collectif Iceberg et de son côté Augustin leur a permis d’avoir un rappeur de
            grosse qualité à la plume fine dans leur collectif mais au-delà de ce donnant donnant niveau rap c’est
            surtout une seconde famille qui s’est créé entre le collectif et le jeune rappeur.
        </p>
    </div>
    <div>
        <h2>La suite ? :</h2>
        <p>
            L’avenir étant flou, Augustin ne préfère pas se projeter trop dans le futur afin de ne pas s’imposer de
            quotas ou de limites psychologiques, advienne que pourra nous confie-t-il. Depuis son morceau phare,
            Augustin a sorti 5 singles, toujours avec Iceberg, qui ont un bon succès et de bons retours de la part de
            ses auditeurs. Il ne sait pas encore quand et si il va sortir un projet dans les mois à venir, mais on l’a
            déjà dans nos petits papiers, ici chez Samplier.
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