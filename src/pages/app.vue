<template>
    <div class="wrapper">
        <img src="../assest/imgs/logo.png" alt="" class="img-box">
        <div class="box">我的名字是{{name}}</div>
        <div class="logo"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'xiaohua'
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
            let aa = "hello";
            console.log(aa);
            let arr = ['1','2','3'];
            const res = arr.includes('3');
            console.log(res);
            let newArr = [...arr];
            console.log(newArr);
            let callback = await this.yibu();
            console.log(callback);
        },
        yibu(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('nihao');
                },1000)
            })
        }
    }
}
</script>
<style lang="scss">
.wrapper{
    .box{
        width: 200px;
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
        background: url('../assest/imgs/logo.png');
        background-size:100% 100%;
    }
}
    
</style>
