<template>
    <div>
        <img :src="url1" alt="img article"/>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
    </div>
    <div class="second">
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
        <img :src="url2" alt="img article"/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useRoute} from "vue-router";
import {urlPicture} from "@/utils/urls";

export default defineComponent({
    setup(){
        const {params:{articleId}} = useRoute();
        let id: number | undefined = undefined;
        if(typeof articleId === 'string')
            id = parseInt(articleId);

        const url1 = urlPicture(id, 2);
        const url2 = urlPicture(id, 3);

        return{
            url1,
            url2
        }
    }
})
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.second{
    flex-direction: column-reverse;
}

div img{
    width: 100%;
}

@media(min-width: 900px){
    div{
        justify-content: space-between;
        flex-direction: row;
    }

    .second{
        flex-direction: row;
    }

    div img{
        width: 40%;
    }

    div p{
        width: 50%;
    }
}
</style>