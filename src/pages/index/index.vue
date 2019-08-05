<template>
    <div class="wrapper">
        <img src="@/assest/imgs/logo.png" alt="" class="img-box">
        <div class="box">我的名字是:
            <input type="text" v-model="name">
        </div>
        <div class="logo"></div>
        <Chinese/>
        <Button @click-btn="clickBtn" btnWord="到下一页"/>
    </div>
</template>
<script>
import Chinese from '@/component/chinese.vue';
import Button from '@/component/button.vue';

export default {
    data(){
        return {
            name:'xiaohua'
        }
    },
    components:{
        Chinese,
        Button
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
        },
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
        background: green;
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
