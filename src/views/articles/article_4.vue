<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Poète engagé :</h2>
        <p>
            En 26 ans de carrière B2O nous a démontré à plusieurs reprises qu’il n’hésitait pas à s’engager et à souvent
            dire
            des choses que les gens oublient ou ne savent pas. Comme par exemple : « j’ai bu la seine et tous ses
            cadavres »
            qui fait référence de notre point de vue au massacre du 17 octobre 1961 où la police française jetait des
            corps de
            manifestant Algérien dans le court d’eau qui traverse Paris. Cette spécialité de Booba de dire des choses en
            laissant place à l’interprétation de l’auditeur apparait dans la majeure partie de ses sons, y compris dans
            son
            dernier album. Lors du son RST on retrouve la phrase « un roi sans couronne c’est mieux qu’un roi sans tête
            ».
            Booba ne cesse de dire dans chacune de ses interviews qu’il se considère comme le peuple (qu’il est le
            peuple). A
            notre égard cette phrase laisse interpréter que si en 1789 lors de la révolution française le roi avait plus
            écouté les siens il ne se serait pas fait couper la tête mais au pire se serait vu se faire destituer sa
            couronne.
        </p>
    </div>
    <div>
        <h2>Chercheur d’Or Nwar :</h2>
        <p>
            Ce n’est plus à prouver Booba sait miser sur le bon cheval, Kaaris, Damso et j’en passe sont des diamants
            qui ont été taillé par le Duc.
            Booba a toujours gardé cette « ligne de conduite » de faire découvrir au monde des jeunes rappeurs qu’il
            considérait comme des pépites. Lors de son dernier opus, beaucoup auraient pu croire que Booba se serait
            contenté de partir simplement mais là encore il nous a surpris en réalisant 7 feats avec des artistes comme
            Jsx, Dala et Elia qui sont pour notre part de très bonnes découvertes.
        </p>
    </div>
    <div>
        <h2>Sérénité :</h2>
        <p>
            Lors de ce dernier album, on a eu affaire à un Booba assagi, apaisé à qui lui semble bien derrière lui
            toutes ces histoires de clashs, d’ailleurs booba le laisse entendre dans une de ses dernières interviews
            lorsqu’il dit qu’il est heureux de voir comment Damso est devenu mais que c’est dommage la façon dont ça
            s’est fini. Lors du son éponyme de son album ultra à l’aide de cette phrase il nous fait bien comprendre
            qu’il décide de se retirer de tout ça en citant « J’vais arrêter de parler d’eux, ils sont en dessous, ils
            vont dire qu’c’est moi le haineux »
        </p>
    </div>
    <div>
        <h2>Conclusion :</h2>
        <p>
            Après 26 ans de carrière, il est indéniable que B2O aura marqué son ère ainsi que l’histoire du rap. Avec au
            total 10 albums individuels sorti plus les projets avec son groupe Lunatic avant de se lancer en solo. Nous
            retiendrons surtout de B20 que dès son deuxième album, il avait l’ambition que ses textes soient au
            panthéon, résultat presque 20 ans plus tard la moitié de ses textes sont étudiés dans de grandes universités
            littéraires. Comme il le dit « laissez-moi chanter la liberté, l’illégalité une dernière fois » mais au fond
            cela ne laisserait pas entendre qu’il nous sortirait d’ici peu un son kickage ?
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