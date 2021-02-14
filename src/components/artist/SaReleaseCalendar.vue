<template>
    <v-calendar :attributes="attrs" locale="fr" is-expanded @dayclick="clickDate"></v-calendar>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue"
import Release from "@/models/Release";
import {queryReleases} from "@/requests/releaseRequest";

export default defineComponent({
    emits: ['click-release'],
    setup(props, context){
        const releases = ref(new Array<Release>());
        const attrs = ref(new Array<any>());
        const timezone = ref('Europe/Amsterdam');
        queryReleases().then(response => releases.value = response);
        watch(releases, newRelease => {
            attrs.value = [];
            for(const release of newRelease){
                attrs.value.push({
                    key: release.id,
                    highlight: release.releaseType === 'Rap US'?'red':'blue',
                    dates: release.releaseDate
                })
            }
        })

        const clickDate = (day: any) => {
            if(Array.isArray(day.attributes) && day.attributes.length > 0)
                context.emit('click-release', day.attributes[0].key);
        }

        return{
            releases,
            attrs,
            timezone,
            clickDate
        }
    }
})
</script>

<style scoped>

</style>