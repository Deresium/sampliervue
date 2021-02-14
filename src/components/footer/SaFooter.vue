<template>
    <footer>
        <router-link class="credits" :to="{name: 'Credits'}">Credits</router-link>
        <div>Réalisé par <a href="https://creatiview.be" target="_blank">Creatiview.be</a></div>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<style scoped>
footer{
    height: 5vh;
    box-sizing: border-box;
    border-top: 1px solid black;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.credits{
    margin-right: 50px;
    font-weight: normal;
}

div a{
    font-weight: bold;
    text-decoration: none;
    color: black;
}

</style>