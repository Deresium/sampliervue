<template>
    <button v-if="!to" :style="bgColor" @click="onClick" :disabled="isDisabled" :type="type">
        <slot></slot>
    </button>
    <router-link :style="bgColor" v-if="to" :to="to">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";

export default defineComponent({
    emits: ['click'],
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        type: {
            type: String,
            required: false,
            default: 'button'
        },
        backgroundColor: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: false,
            default: 'medium'
        },
        to: {
            required: false
        }
    },
    setup(props, context) {
        const onClick = () => context.emit('click');
        
        const calcBackgroundColor = (): string => {
            if (props.disabled)
                return 'dimgrey'
            else if (props.backgroundColor)
                return props.backgroundColor
            else
                return '#FFFFFF'
        }
        
        const calcPadding = (): string => {
            switch (props.size) {
                case 'medium':
                    return '10px 30px';
                case 'small':
                    return '5px 15px';
                default:
                    return '10px 30px';
            }
        }
        
        const calcFontSize = (): string => {
            switch (props.size) {
                case 'medium':
                    return 'large';
                case 'small':
                    return 'medium';
                default:
                    return 'large';
            }
        }
        
        const bgColor = computed(() => {
            return {
                'background-color': calcBackgroundColor(),
                'padding': calcPadding(),
                'font-size': calcFontSize()
            }
        })
        
        const isDisabled = computed(() => props.disabled ? 'disabled' : null);
        
        return {
            onClick,
            bgColor,
            isDisabled
        }
    }
})
</script>

<style scoped>
button, a{
    border: 1px solid black;
    color: black;
}

a{
    text-decoration: none;
    display: block;
    text-align: center;
}

button:hover, a:hover{
    cursor: pointer;
    border-color: #FFDD00;
    outline-color: #FFDD00;
}

button:active, a:active{
    border-color: #FFDD00;
    color: #FFDD00;
}
</style>