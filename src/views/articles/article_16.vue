<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Dans la musique depuis petit :</h2>
        <p>
            S.KEY.S a longtemps baigné dans la musique avant de se lancer dans le rap. À l’école il était dans une
            chorale où il y figurait comme soliste et choriste, et il a également fait 3 ans de piano. A ce moment-là il
            écoutait un peu de tous les styles de musique (rap, house, techno, etc…) ce qui pour lui a énormément
            apporté lors de ses débuts.
        </p>
    </div>
    <div>
        <h2>Une révélation :</h2>
        <p>
            Ses débuts dans le Rap se sont fait naturellement grâce à un de ses meilleurs amis, lui-même étant rappeur.
            Après quelques essais, le rythme et les rimes étaient naturellement ancrées en lui. Ses amis l’ont poussé à
            continuer et à devenir ce qu’il est aujourd’hui.
        </p>
    </div>
    <div>
        <h2>Du concret :</h2>
        <p>
            « 100 façons » est son premier vrai son a surtout explosé sur Spotify (actuellement 613 000 streams) étant
            donné que c’était son premier son et qu’il n’était pas forcément au courant de quel chiffre un son stream
            pouvait atteindre, il avait une satisfaction mais n’était pas surpris. Ce n’est que plus tard, avec de
            l’expérience engrangée que Tim a réalisé ce qu’il avait fait. Ça reste à l’heure actuelle, une de ses plus
            grandes fierté.
        </p>
    </div>
    <div>
        <h2>Sa popularité, qu’en penser ? :</h2>
        <p>
            Actuellement à plus de 7 000 abonnés sur Instagram, il pense que n’importe qui peut monter en abonné tant
            qu’il travaille et qu’il ne faut absolument pas lâcher. Il souligne l’importance de ne pas lâcher pendant
            les premiers mois car les « fans » ou même abonnés que tu peux avoir sont très souvent éphémères et peuvent
            affecter ton bien être et ton mental assez facilement lorsqu’ils te montrent moins d’intérêt. Malgré le fait
            qu’il n'ait pas souvent de message à passer à travers ses sons car pour lui les textes qu’il écrit sont
            comme des défouloirs, écrire lui sert à sortir la haine ou la tristesse qu’il accumule jusqu’à les
            retranscrire. L’absence de message est donc comblé par la sincérité des paroles.
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