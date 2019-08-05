<template>
    <div class="wrapper">
        <p>{{pageInfo}}</p>
        <Chinese/>
        <Button @click-btn="clickBtn" btnWord="返回上一页"/>
    </div>
</template>
<script>
import Chinese from '@/component/chinese.vue';
import Button from '@/component/button.vue';

export default {
    data(){
        return {
            pageInfo:'我是第三页内容!'
        }
    },
    components:{
        Chinese,
        Button
    },
    mounted(){
    },
    methods:{
        clickBtn(){
            this.$router.push('/my');
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper{
    .box{
        width: 500px;
        height: 200px;
        background: yellow;
        display:flex;
        align-items: center;
        justify-content: center;
        transform: translate(100px,0px)
    }
}
    
</style>
