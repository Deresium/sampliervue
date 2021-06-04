<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Destin lié ? :</h2>
        <p>
            Composé de deux amis venant de la cité de Gargarine, Samy (RTI) et Karim (RKM) décident de fonder Dans Ta
            Face en 2015.
        </p>
        <p>
            Intimement lié avec leurs amis Ademo et Nos du PNL, ces derniers vont leur donner un peu de force en leur
            proposant des feat sur leurs deux premiers albums.
        </p>
        <p>
            Après ces premières années, on se retrouvera dans un cas où un des deux groupes aura littéralement explosé
            aux yeux de tous et où l’autre se sera démarqué avec quelques sons mais en restant dans l’ombre de leurs
            amis.
        </p>
        <p>
            En effet, après l’éclosion de PNL aux yeux de tous, la tournée s’imposait. Toutefois, ils ne vont pas
            oublier de prendre avec eux les membres du QLF dont DTF en fait partie.
            Plus jeunes que leurs amis, samy et Karim sont intelligents et vont s’inspirer d’eux que ce soit pour la
            réalisation de leurs différents clips ou encore pour les différentes valeurs propagées à travers leurs
            textes.
        </p>
    </div>
    <div>
        <h2>Concrétisation :</h2>
        <p>
            En 2019, à l’aide d’un clip magnifique sur les terres du tournage de Star Wars, DTF va annoncer leur retour
            avec l’album « on ira où ? » en hommage à leur cité qui était sur le point d’être détruite, cette cité de
            Gargarine qui était symbole de modernité dans une banlieue communiste et ouvrière. Les 2 amis se montraient
            très liés à celle-ci au travers de plusieurs clips comme Cosmonaute ou encore comme un fou,..
        </p>
        <p>
            Sur cet album un travail incroyable a été fourni, c’est à partir de ce moment-là que DTF a passé le fameux
            level de « titres à succès » à « album confirmé ». Dans cet album on retrouve encore la présence de PNL,
            beaucoup vont penser que DTF sans PNL ne savent pas s’en sortir, qu’en quelque sorte ils ont peur de prendre
            leur envol seul.
        </p>
    </div>
    <div>
        <h2>La confirmation :</h2>
        <p>
            Il y a maintenant quelques jours, le 28 mai 2021, DTF sortaient leur quatrième album « Double Star » qui
            était annoncé et teasé depuis deux semaines. Dans cet album, rien, pas de feat, juste les deux amis, RTI et
            RKM prêt à tout casser.
        </p>
        <p>
            C’est un des rares albums où lors de la première écoute, la majeure partie du public à pris une énorme
            claque, pas de déception, 16 titres et 16 titres de très grande qualité.
        </p>
        <p>
            Ce qui est incroyable, c’est que sur cet album, il y en a pour tous les goûts, bord de plage, ambiance,
            mélancolie. Bref, ils ont tout abordé.
        </p>
        <p>
            A titre personnel, j’ai toujours été un grand fan de DTF et avec ce dernier album j’espère réellement qu’ils
            vont être reconnus à leurs juste valeur.
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