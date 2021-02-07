<template>
    <header>
        <p>Samplier</p>
        <img @click="showMenu = true" src="../../assets/icons/menu.svg" alt="icon menu"/>
        <SaMenu v-model="showMenu"/>
    </header>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import SaMenu from "@/components/header/SaMenu.vue";

export default defineComponent({
    components: {SaMenu},
    setup(){
        const showMenu = ref(false);

        return{
            showMenu
        }
    }
})
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p{
    font-size: xx-large;
}

img{
    height: 50px;
    cursor: pointer;
}

</style>