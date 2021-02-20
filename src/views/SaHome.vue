<template>
    <div class="title">
        <h1>Welcome to</h1>
        <img class="logo" src="../assets/logo.png" alt="logo"/>
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
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.title h1, .title h2{
    width: 100%;
    text-align: center;
}

.logo{
    width: 100%;
}

.title h1{
    font-weight: normal;
    font-size: 60px;
    margin-bottom: 0;
}

.title h2{
    font-family: "Saira Condensed", serif;
    font-weight: bold;
    font-size: 80px;
    margin-top: 0;
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
        margin: 0;
        padding: 0;
        font-size: 80px;
    }

    .title > h2{
        margin: 0;
        padding: 0;
        font-size: 200px;
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

    .logo{
        width: 80%;
    }
}

</style>