<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Hamza :</h2>
        <p>
            Hamza est un rappeur originaire de Bruxelles qui excelle dans le rap mélodique type RnB et qui s’est très
            récemment lancé dans la Drill. Il sort sa première Mixtape « Recto Verso » en 2013, et enchaine les succès
            depuis, que ce soit avec ses albums (1994 étant le plus connu) ou ses singles (le dernier en date étant
            réel). Hamza n’a plus rien à prouver quant à ses habilités musicales et c’est un des très grands noms du rap
            francophone.
        </p>
    </div>
    <div>
        <h2>Damso :</h2>
        <p>
            Dems est un rappeur d’origine congolaise, pris sous l’aile du DUC dès ses débuts avec son album « batterie
            faible » en 2016 qui connait un réel succès, il va grandir et se développer au côté de B2O jusqu’en 2018 où
            un clash séparera les 2 artistes. Après sa petite pause de 2 ans, Dems créé son propre label « The Vive
            Music » et nous sort la première partie de son album « QALF » et ce 29 avril dernier il nous sort sa
            deuxième partie « Infinity ».
        </p>
    </div>
    <div>
        <h2>Caballero & JeanJass :</h2>
        <p>
            Caba et JJ pour les intimes, sont deux rappeurs belges mais d’origines exotiques (Catalogne pour Caba, Maroc
            pour JeanJass). Les deux amis retournent le rap francophone avec le projet « Double Hélice » et le single «
            Sur Mon Nom », que vous avez forcément déjà entendu en soirée ou en festival. Très efficaces en duos, celle
            ne les empêche pas de sortir des sons en solo, tout aussi efficaces, avec de lourdes punchlines et des
            instrus atypiques.
            Probablement le duo le plus connu et talentueux du rap francophone, en ce qui concerne la Belgique du moins.
        </p>
    </div>
    <div>
        <h2>ICO :</h2>
        <p>
            Tout comme Hamza, ICO, originaire de Bruxelles est arrivé dans le game en fracassant tout dès sa première
            mixtape intitulée « ICO » en 2017. Grand fan de Dragon Ball Z, il sort une série de son sous le nom de «
            capsule » en référence à l’animé. Le 21 Novembre 2019, Ico sort son premier album « Petit Con ».
        </p>
    </div>
    <div>
        <h2>Romeo Elvis :</h2>
        <p>
            Roméo, originaire de Uccle est connu tout comme Dems, Caba & JJ et Hamza considéré comme un pilier du rap
            Belge depuis 2010. Après plusieurs collaborations dès 2013. Roméo va sortir son premier album en 2017 «
            Morale 2 » avant de sortir en 2019 « Chocolat ». Doté d’une grande qualité musicale, Roméo nous a montré à
            multiples reprises qu’il sait tout faire, que ce soit à la voix ou à l’instrumental. Ce pilier au texte
            touchant ne peut nous laisser indifférent.
        </p>
    </div>
    <div>
        <h2>Conclusion :</h2>
        <p>
            Le paysage rapologique est extrêmement varié, avec des rappeurs Belges, Marocains, Français (évidemment) et
            de partout dans le monde, sur presque tous les continents. Cela apporte une certaine diversité ainsi qu’une
            belle unité au sein de la communauté hip-hop.
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