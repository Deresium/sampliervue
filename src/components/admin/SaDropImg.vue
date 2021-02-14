<template>
    <label class="labelInputFile" @dragenter.prevent="dragEnterHandler" @dragleave="dragLeaveHandler" @dragover.prevent
           @drop.prevent="dropHandler">
        <input
            type="file"
            accept="image/*"
            @change="onChangeFile"
        />

        <img :class="insideInputStyle" class="imgProduct" :src="url" alt="product img"/>
    </label>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue"
import {dragAndDrop} from "@/utils/dragAndDrop";

export default defineComponent({
    emits: ["file-change"],
    props: {
        releaseId:{
            type: Number,
            required: false
        }
    },
    setup(props, context) {
        const acceptTab = new Array<string>();
        acceptTab.push('image/*');

        const url = ref();

        watch(props, newProps => {
            if(newProps.releaseId)
                url.value = `${process.env.VUE_APP_SERVER_URL}/release/${newProps.releaseId}/image`
        },{immediate: true})

        const handleDataTransfer = async(dataTransfer: DataTransfer) => {
            await sendImageToServer(dataTransfer.files[0]);
        }

        const {dragLeaveHandler, dragEnterHandler, isHover, checkFile, dropHandler} = dragAndDrop(acceptTab, handleDataTransfer);


        const onChangeFile = async (event: any) => {
            const file: File = event.target.files[0];
            await sendImageToServer(file);
        }

        const sendImageToServer = async (file: File) => {
            if (!file) {
                return;
            }
            if (!checkFile(file)) {
                alert('Type non-accepté');
                return
            }

            try {
                context.emit('file-change', file);
                url.value = URL.createObjectURL(file);
            } catch (error) {
                alert('Une erreur est survenue');
            }
        }

        const insideInputStyle = computed(() => ({
            'isHoverStyle': isHover.value
        }))


        return {
            dragEnterHandler,
            dragLeaveHandler,
            dropHandler,
            onChangeFile,
            insideInputStyle,
            url
        }
    }
})
</script>

<style scoped>
.imgProduct {
    width: 100%;
    border: solid 1px black;
    display: block;
    min-height: 20vh;
}

input {
    display: none;
}

.isHoverStyle {
    border-color: #FFDD00;

}

</style>