<template>
    <div class="image">
        <img :src="url1" alt="img article"/>
    </div>
    <div>
        <h2>Origines et Définition :</h2>
        <p>
          La Drill Music, ou simplement « Drill » voit le jour dans le quartier de Southside à Chicago au début des années 2010,
          avec comme principal protagoniste Chief Keef, un membre de gang de Chicago, qui, à 16 ans, se filme dans des clips brutaux et sauvages, avec des armes à feu,
          des membres de gangs à ses côtés, beaucoup de drogues, et des textes qui transmettent un message similaire : Chief Keef ne fait pas dans la dentelle.
          À l’époque les instrumentales étaient toujours relativement trap,
          seuls les paroles référençant les gangs, les meurtres, le fait de fumer ses ennemis morts (véridique) et les visuels permettaient aux rappeurs de Chicago de se démarquer des trappeurs d’Atlanta comme Gucci Mane ou Rick Ross.
        </p>
    </div>
    <div>
        <h2>L’arrivée en Angleterre :</h2>
        <p>
          Le mouvement quitte Chicago et se démocratise aux États-Unis, surtout à New-York, et arrive inévitablement en Europe,
          où les Britanniques vont s’approprier les codes du genre (violence, gangs, drogues, meurtres) en y ajoutant des flows saccadés en accord avec les instrumentales,
          et une esthétique beaucoup plus sombre, avec des tenues souvent composées d’une grosse doudoune noire, de gants tout aussi noirs, de crans d’arrêts et de cagoules pour cacher leurs identités.
          En effet, certains rappeurs sont recherchés par Scotland Yard et sont donc obligés de s’afficher sans montrer leurs visages.
        </p>
    </div>
    <div>
        <h2>Brooklyn, Pop Smoke, Explosion :</h2>
        <p>
          Le genre drill retourne aux États-Unis pour une dernière mutation avant son arrivée en France.
          C’est avec Pop Smoke que la Drill que l’on connait actuellement est largement démocratisée, à la fois aux US mais également en Europe et dans l’Hexagone :
          Un son caractéristique avec des Hi-Hats saccadés, des glides de 808 dans tous les sens et des mélodies minimalistes feront la renommée de la Brooklyn Drill (BK Drill),
          qui verra la naissance d’autres gros artistes comme Fivio Foreign, Dusty Locane, ou plus récemment CJ et son hit Whoopty.
        </p>
    </div>
    <div>
        <h2>Propagation dans l’Hexagone :</h2>
        <p>
          Malgré le fait que certains s’y soit essayé (Kekra, Kaaris,..) la sauce a véritablement pris cette année notamment avec Freeze Corleone mais surtout avec Gazo qui nous sort sa série de son « Drill FR ».
          Depuis beaucoup d’artistes mainstream s’y sont mis comme Hamza ou encore Dems avec son son BXL Zoo. Malgré la démocratisation du genre,
          le rap francophone a du mal à se différencier du genre « UK Drill » et « BK Drill ». Cependant, on peut compter sur nos artistes pour faire évoluer ce genre musical. Affaire à suivre sur Samplier !
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