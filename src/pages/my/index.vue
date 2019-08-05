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
            pageInfo:'我是第二页内容!'
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
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss">
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
    .img-box{
        width: 100px;
        height: 50px;
        border:1px solid red;
    }
    .logo{
        width: 100px;
        height: 50px;
        border:1px solid yellowgreen;
        background: url('~@/assest/imgs/logo.png');
        background-size:100% 100%;
    }
}
    
</style>
