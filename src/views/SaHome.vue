<template>
    <div class="title">
        <h1>Welcome on</h1>
        <h2>Samplier</h2>
    </div>
    <div class="callToAction">
        <div class="buttons">
            <SaButton :to="{name: 'Actuality'}"><span class="large">Notre actualité</span></SaButton>
            <div class="action">
                <SaButton :to="{name:'Artists'}"><span class="large">Découvrir les artistes</span></SaButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import SaButton from "@/components/commons/SaButton.vue";

export default defineComponent({
    components: {SaButton}
})
</script>

<style scoped>
.title{
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
}

.title h1, .title h2{
    width: 100%;
    text-align: center;
}

.title h1{
    color: black;
    font-weight: normal;
    font-size: 60px;
    margin-bottom: 0;
}

.title h2{
    font-family: "Saira Condensed", serif;
    font-weight: bold;
    font-size: 80px;
}

.buttons{
    display: flex;
    flex-direction: column;
}

.action{
    margin-top: 30px;
}

@media(min-width: 900px){
    .title > h1{
        font-size: 80px;
    }

    .title > h2{
        font-size: 200px;
        margin-top: 20px;
    }

    .callToAction{
        display: flex;
        justify-content: center;
    }

    .buttons{
        flex-direction: row;
        justify-content: space-between;
        width: 80%;

    }

    .action{
        margin-top: 0;
    }

    .large{
        font-size: xx-large;
    }
}

</style>