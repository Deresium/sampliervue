<template>
    <div class="withMargin">
        <h1>Calendrier des sorties</h1>
        <SaReleaseCalendar @click-release="clickRelease"/>
        <div v-if="release.id" class="release">
            <img :src="url" alt="album image"/>
            <p class="artistName">{{ release.releaseArtistName }}</p>
            <p>{{release.releaseDescription}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue"
import SaReleaseCalendar from "@/components/artist/SaReleaseCalendar.vue";
import Release from "@/models/Release";
import {queryRelease} from "@/requests/releaseRequest";

export default defineComponent({
    components: {SaReleaseCalendar},
    setup(){
        const release = ref(new Release());
        const clickRelease = async(releaseId: number) => {
            queryRelease(releaseId).then(response => {
                release.value = response;
            })
        }

        const url = computed(() => `${process.env.VUE_APP_SERVER_URL}/release/${release.value.id}/image`)

        return{
            release,
            clickRelease,
            url
        }
    }
})
</script>

<style scoped>

.release{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.release img{
    width: 80vw;
    height: 80vw;
    object-fit: cover;
}

.artistName{
    font-size: xx-large;
    color: #C9853C;
}

p{
    margin: 0;
}

@media(min-width: 900px){
    .release img{
        width: 30vw;
        height: 30vw;
    }
}

</style>