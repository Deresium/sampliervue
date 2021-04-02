<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Son père</h2>
        <p>
            SCH depuis son enfance est baigné dans un milieu de pauvreté et un père peu présent dû au métier qu’il
            exerce. En
            effet, né d’une mère infirmière dans un milieu néfaste et d’un père routier, Julien se verra dès ses 10 ans
            déménager de Marseille pour des problèmes financier et verra, durant les années suivantes les aller-retour
            des
            huissiers. Ce qui plongera son père Otto dans une profonde dépression qui se transformera en alcoolisme. Ce
            dernier va être systématiquement cité dans le ¾ de ses sons comme par exemple dans la nuit où il rap « Quand
            mon
            père partait travailler, il faisait gris, dans le cœur de ma mère, elle savait que le soir il rentrerait
            ivre ».
        </p>
        <p>
            Son père décédé d’un cancer, SCH a voulu lui rendre hommage notamment dans le titre qui lui est dédié <i>Otto,
            La nuit</i> et dans JVLIVUS II, c’est dans <i>Loup</i> noir qu’il lui a encore adressé un message. En plus de
            retrouver
            un SCH complètement nu qui nous parle ouvertement de ses regrets, ses croyances et sans oublier une phrase
            adressée à son père « Énumérer c'que j'y ai laissé, prendre un maximum pour papa comme si j'allais le faire
            renaître d'entre les morts comme un dieu grec ». A travers cette phares, SCH montre qu’il veut rendre fier
            son père sachant la vie qu’il a vécu dans la misère.
        </p>
    </div>
    <div>
        <h2>La pauvreté</h2>
        <p>
            Comme dit précédemment, SCH n’a pas eu l’enfance la plus facile et a grandi dans un milieu pauvre.
            L’alcoolisme de son père a fortement influencé Julien qui dès 15 ans commence à boire comme il le dit dans
            le son <i>Les années de plombs</i> « à 15 ans j’étais saoul » à savoir que c’est à ce moment-là de sa vie
            qu’il
            s’est battu et s’est fait casser la mâchoire par un autre adolescent, c’est pourquoi ses dents sont comme ça
            actuellement mais il ne veut pas se les refaire car pour lui ça fait partie de l’histoire de sa vie.
        </p>
        <p>
            Ayant connu ce système de vie durant son enfance SCH s’est plongé dans la musique pour essayer d’en sortir
            et dès sa première mixtape A7, il réussit un départ tonitruant et qui pour beaucoup d’auditeurs diront que
            c’est une des meilleures mixtapes de la décennie.
            Dans son titre <i>A7</i>, il ne manquera pas de faire rappel « se lever pour 1000 deux c’est insultant ».
        </p>
    </div>
    <div>
        <h2>Mafia</h2>
        <p>
            Avec une mentalité méditerranéenne et ayant grandi dans un milieu difficile, il s’est rapproché du monde
            mafieux, le manque de moyen fait naître le crime, c’est comme cela que SCH va se construire.
        </p>
        <p>
            Une grande passion pour le cinéma mixé à un talent et une plume incroyable vont faire d’SCH un des meilleurs
            rappeurs Français. Il a ce don de produire des clips tout simplement sublime et qui nous donne envie de
            juste découvrir la suite, il est également très fort pour faire imaginer à l’auditeur le clip ou la scène
            qui pourrait être tourné en fonction de ses paroles.
            Dans le monde mafieux il y a 3 étapes : 1) La transmission qui vient majoritairement de la famille 2)
            L’extase qui arrive quand le business est au sommet 3) La désillusion, lorsque le business s’écroule.
        </p>
        <p>
            Dans JVLIVS II SCH nous semble au-dessus de tout, rien ne semble l’arrêter, tous ses sons peuvent nous
            laisser imaginer le monde mafieux qu’il y a derrière. A partir de <i>Raisons</i>, un changement d’ambiance
            apparaît
            et se poursuit jusqu’au feat avec JUL. Ce passage de 3 sons peut nous faire penser au moment où tout va bien
            dans le business et qu’il en profite un maximum avec ses amis. Ceci-dit juste après il revient avec les sons
            <i>Mafia</i> et <i>Loup noir</i> où l’amertume, les regrets et la mélancolie ressurgit. Dans le dernier son
            <i>Loup noir</i>, les
            battements de cœurs nous laissent clairement entrevoir une suite..
        </p>
        <p>
            Les tomes JVLIVUS respecteront ils la trilogie du monde mafieux ? Dans le tome 3, JVLIVUS s’attaquera-t-il à
            un autre business ou ce sera tout simplement la fin ?
        </p>
        <p>
            Hâte de découvrir ça et à la semaine prochaine sur Samplier.
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