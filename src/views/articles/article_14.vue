<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Début dans le Solfège :</h2>
        <p>
            Jeune rappeuse Française de 21 ans, Eline a toujours baigné dans le monde artistique que ce soit par ses
            cours de piano ou son activité dans un groupe de solfège tout en passant par de la danse, Eline a su dire
            très tôt que son avenir était tracé là-dedans.
        </p>
        <p>
            Cette passion s’est d’autant plus confirmée il y a un peu plus de 2 ans, quand elle s’est mise à gratter ses
            premiers textes et à les rapper devant certains de ses amis. Après des retours positifs, elle a pris un
            maximum de confiance, mais une de ses plus grandes forces, c’est qu’elle aime la musique qu’elle produit, ce
            rap mélodieux, tellement agréable à l’oreille.
        </p>
    </div>
    <div>
        <h2>Collaboration Efficace :</h2>
        <p>
            Elle aime ce qu’elle fait auprès de personnes qu’elle aime. Effectivement, quand on parle d’Eline on ne peut
            oublier son petit frère Mathis avec qui elle forme un duo plus que complémentaire. Et ce duo, elle ne veut
            pour rien au monde le changer car premièrement une complémentarité innée se passe entre les deux artistes
            mais également car elle trouve que grâce à ça elle peut vraiment mettre sa touche personnelle dans la prod.
        </p>
    </div>
    <div>
        <h2>Mêler Rap et Cinéma ? :</h2>
        <p>
            Actuellement en dernière année d’école de cinéma, et passionnée par l’audiovisuel, Eline réalise avec l’aide
            de ses amis de cours l’entièreté de ses clips. A terme, elle aimerait se charger entièrement de la
            conception du clip et évidemment de les rendre encore mieux de ce qu’ils ne sont actuellement en y ajoutant
            des mouvements de danses,..
        </p>
    </div>
    <div>
        <h2>La Suite :</h2>
        <p>
            Éline est une rappeuse mélodique talentueuse que Samplier vous recommande chaudement. Sa voix, ses textes et
            ses prods sont parmi les plus exotiques et originales qu’on a pu trouver, en espérant que son passage par l’école
            de cinéma lui permette de lier sa musique avec des clips recherchés et travaillés.
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