<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Comment nous envoyer un son ?</h2>
        <p>
            Vous vous demandez surement comment faire pour nous envoyer un son, et c’est extrêmement simple.
        </p>
        <p>
            Allez sur le site samplier.be (normalement vous êtes déjà dessus si vous lisez ces lignes) et cliquez sur le
            logo en haut à droite.
        </p>
        <div class="imgs">
            <img class="imgArticle imgHome" :src="url2" alt="samplier home"/>
            <img class="imgArticle imgMenu"  :src="url3" alt="samplier menu"/>
        </div>
        <p>Scrollez jusqu’en bas et cliquez sur « Déposer un son »</p>
        <img class="imgArticle img" :src="url1" alt="deposer un son menu"/>
        <p>Remplissez les informations et envoyez !</p>
        <img class="imgArticle" :src="url4" alt="samplier drop song page"/>
    </div>
    <div>
        <h2>Pourquoi nous envoyer un son ?</h2>
        <p>
            Quelle utilité a cette nouvelle fonctionnalité me direz-vous ? Tout d’abord, on va pouvoir découvrir de
            nouveaux artistes, et les faire découvrir ensuite si les sons sont bons. Les meilleurs d’entre vous seront
            mis en story Instagram voire auront un petit article sur le site, sous forme d’interview ou de portrait. Si
            vous êtes suffisamment nombreux à la faire, une playlist ainsi qu’un article mensuel sur les perles que vous
            nous pondez arriveront aussi prochainement. En attendant, à bientôt sur Samplier !
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
        const url2 = urlPicture(id, 2);
        const url3 = urlPicture(id, 3);
        const url4 = urlPicture(id, 4);

        return {
            url1,
            url2,
            url3,
            url4
        }
    }
})
</script>

<style scoped>
.image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.image img {
    max-width: 100%;
}

div {
    margin-bottom: 50px;
}

.imgs{
    display: flex;
    align-items: center;
}

.imgs .imgArticle{
    max-width: 40%;
}

.imgArticle{
    max-width: 100%;
}

.imgArticle.imgHome{
    width: 70%;
    max-width: 70%;
}

.imgArticle.imgMenu{
    width: 30%;
}

@media(min-width: 900px){
    .imgArticle.imgHome{
        width: auto;
    }

    .imgArticle.imgMenu{
        width: auto;
    }
}
</style>