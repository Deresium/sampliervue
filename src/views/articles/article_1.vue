<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Portrait</h2>
        <p>
            Lotfi nait il y a 19 ans dans la capitale algérienne.
            Enfant déjà, il s’intéresse beaucoup à la musique et au monde qui l’entoure.
            Lotfi nous confie qu’il est très curieux depuis tout petit, qu’il adore se cultiver,
            débattre et apprendre des autres et faire de nouvelles expériences. Baigné dans l’univers des mangas et des animés comme Naruto,
            ces univers colorés vont beaucoup inspirer ses écrits, qui partagent une énergie forte et une envie de se dépasser,
            créant un véritable parallèle entre la musique de Lotfi et les héros de ses animés préférés.
        </p>
    </div>
    <div>
        <h2>Parcours</h2>
        <p>
            Lotfi commence à écrire vers ses 15 ans, en coïncidence avec son arrivée en France.
            Ses 4 années de maniement de la plume n’auront pas été de tout repos : 4000 abonnés Instagram,
            un passage sur une radio locale nantaise, quelques scènes, notamment pour la fête de la musique,
            Lotfi a déjà pas mal d’expérience dans le rap malgré son jeune âge.
        </p>
    </div>
    <div>
        <h2>Inspirations</h2>
        <p>
            Avec ses nombreux freestyles, l'électron libre Hayce Lemsi aura été une énorme influence pour Lotfi et ça se répercute sur sa musique.
            C'est devant ses cercles d'amis qu'il commence ses premiers freestyles, que ce soit en cours de recrée ou encore au terrain de foot,
            Lotfi est déchainé. Après avoir emmagasiné un maximum de confiance dû aux compliments de ses proches, il décide de franchir le pas ;
            mettre une caméra devant lui et lâcher son premier freestyle sur Instagram.
            Le principe lui plait et avec déjà plusieurs expériences à son actif que ce soit sur petite scène ou à la radio de sa région,
            il sait que c'est ça qu'il veut faire, écrire et transmettre un message, un message qui lui est si cher, montrer qui est le vrai Lotfi,
            et prouver qu’en se dépassant et en travaillant dur, on peut accomplir de grandes choses.
        </p>
    </div>
    <div>
        <h2>Ambitions</h2>
        <p>
            À l'heure actuelle il est conscient de son talent mais est assez mature pour dire qu'il est toujours dans l'ombre
            et que son art n'a pas encore su être éclairé. Toutefois, son ambition reste la même et la patience est son maître mot,
            car il sait que son travail va payer. Lotfi se voit d'ici quelques années arborer les scènes de sa région, son pays d'origine ou de cœur
            pour faire passer ce message.
        </p>
    </div>
    <div>
        <h2>Conclusion</h2>
        <p>
            Lotfi L’algérois c’est une efficacité remarquable, une exécution propre, une ambition noble et un projet intéressant.
            Son parcours est déjà très impressionnant, on se doute qu’avec un tel talent à 19 ans,
            Lotfi a toutes les cartes en mains pour devenir un membre important du rap game dans les prochaines années. Affaire à suivre sur Samplier !
        </p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlPicture} from "@/utils/urls";

export default defineComponent({
    setup(){
        const {params:{articleId}} = useRoute();
        let id: number | undefined = undefined;
        if(typeof articleId === 'string')
            id = parseInt(articleId);

        const url1 = urlPicture(id, 1);

        return{
            url1
        }
    }
})
</script>

<style scoped>
    div{
        margin-bottom: 50px;
    }

    .image{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image img{
        max-width: 100%;
    }



</style>