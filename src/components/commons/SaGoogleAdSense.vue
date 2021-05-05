<template>
    <!-- samplier pub top -->
    <div class="adSense">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-5833099071292911"
             data-ad-slot="7849889412"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue"

export default defineComponent({
    setup(){
        onMounted(() => {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        })
    }
})
</script>

<style scoped>
.adSense{
    width: 90%;
    margin-bottom: 20px;
}

@media(min-width: 900px){
    .adSense{
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
}
</style>