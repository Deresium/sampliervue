<template>
    <div class="app exceptFooter">
        <SaHeader/>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

import SaHeader from "@/components/header/SaHeader.vue";
export default defineComponent({
    components: {SaHeader}
})
</script>
<style>
@font-face {
    font-family: "Saira Condensed";
    src: url("assets/fonts/SairaCondensed-Regular.ttf") format("truetype");
}

@font-face {
    font-family: "Asap Condensed";
    src: url("assets/fonts/AsapCondensed-Regular.ttf") format("truetype");
}

.app{
    margin-left: 5%;
    margin-right: 5%;
}

h1, h2, h3, h4, h5, h6{
    font-family: "Asap Condensed",serif;
    color: #FFDD00;
    font-weight: 300;
}

*{
    font-family: "Saira Condensed", serif;
}

.desktop{
    display: none;
}

.exceptFooter{
    min-height: 90vh;
}

.withMargin > h1{
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
}

@media (min-width: 900px) {
    .phone{
        display: none;
    }

    .desktop{
        display: block;
    }

    .exceptFooter{
        min-height: 98vh;
    }

    .withMargin{
        margin-left: 10%;
        margin-right: 10%;
    }

    .withMargin > h1{
        font-size: 60px;
    }

}

</style>