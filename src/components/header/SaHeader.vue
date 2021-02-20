<template>
    <header>
        <img class="logo" src="../../assets/logo.png" alt="logo"/>
        <img class="icon" @click="localShowMenu = true" src="../../assets/icons/menu.svg" alt="icon menu"/>
        <SaMenu v-model="localShowMenu"/>
    </header>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue"
import SaMenu from "@/components/header/SaMenu.vue";

export default defineComponent({
    components: {SaMenu},
    emits:['update:modelValue'],
    props:{
        modelValue:{
            type: Boolean,
            required: true,
        }
    },
    setup(props, context){
        const localShowMenu = computed({
            get: () => {return props.modelValue},
            set: (value) => context.emit('update:modelValue', value)
        })

        return{
            localShowMenu
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

.logo{
    height: 100px;
}

.icon{
    height: 50px;
    cursor: pointer;
}

</style>