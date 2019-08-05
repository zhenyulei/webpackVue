<template>
    <div class="btns" @click="clickBtn">{{btnWord}}</div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        btnWord:{
            type:String,
            default:'w按钮'
        }
    },
    mounted(){
        
    },
    methods:{
        clickBtn(){
            this.$emit('click-btn');
        }
    }
}
</script>
<style lang="scss">
.btns{
    width:100px;
    height: 50px;
    background:rebeccapurple;
    color:#fff;
    font-size:20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
    
</style>
