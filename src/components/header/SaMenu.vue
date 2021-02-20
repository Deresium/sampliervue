<template>
    <teleport to="body">
        <transition name="showFromMiddle">
            <div v-if="modelValue" class="menu">
                <div class="clearDiv">
                    <img class="iconClear" @click="closeMenu" src="../../assets/icons/close.svg " alt="icon-clear"/>
                </div>
                <div class="routes">
                    <router-link :to="{name: 'Home'}"><span @click="closeMenu">Home</span></router-link>
                    <router-link :to="{name: 'Actuality'}"><span @click="closeMenu">Actualité</span></router-link>
                    <router-link :to="{name: 'Interview'}"><span @click="closeMenu">Interviews</span></router-link>
                    <router-link :to="{name: 'Videopodcast'}"><span @click="closeMenu">Vidéos & Podcasts</span></router-link>
                    <router-link :to="{name: 'Artists'}"><span @click="closeMenu">Artistes</span></router-link>
                    <router-link :to="{name: 'Release'}"><span @click="closeMenu">Sorties</span></router-link>
                    <router-link :to="{name: 'Contact'}"><span @click="closeMenu">Contact</span></router-link>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        }
    },
    setup(props, context) {
        const closeMenu = () => context.emit('update:modelValue', false);

        return {
            closeMenu,
        }
    }
})
</script>

<style scoped>
.menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: #C9853C;
    z-index: 10;
}

.clearDiv{
    display: flex;
    justify-content: flex-end;
}

.clearDiv img{
    height: 50px;
    margin-right: 5%;
    margin-top: 20px;
    cursor: pointer;
}


.showFromMiddle-enter-active {
    animation: openFromMiddle 0.3s forwards;
}

.showFromMiddle-leave-active {
    animation: closeFromMiddle 0.3s forwards;
}

.routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
}

.routes > a{
    color: #0A0A0A;
    text-decoration: none;
    font-size: xx-large;
    margin-bottom: 30px;
}

@keyframes openFromMiddle {
    from {
        transform: scale(0.5, 0.5);
        border-radius: 50%;
        opacity: 0;
    }
    to {
        transform: scale(1, 1);
        border-radius: 0;
        opacity: 1;
    }
}

@keyframes closeFromMiddle {
    from {
        transform: scale(1, 1);
        border-radius: 0;
        opacity: 1;
    }
    to {
        transform: scale(0.5, 0.5);
        border-radius: 50%;
        opacity: 0;
    }
}

@media(min-width: 900px){
    .routes > a{
        font-size: 50px;
    }
}

</style>