<template>
    <ul class="list">
        <li v-for="(item,index) in mylist" :key="index">{{item.name}}</li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            mylist:[
                {
                    name:'C-xiaohua',
                    age:22
                },
                {
                    name:'C-xiaoming',
                    age:23
                },
                {
                    name:'C-xiaozhang',
                    age:24
                }
            ]
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
.list{
    li{
        height: 40px;
        line-height:40px;
        width:200px;
        text-align: center;
        border-bottom: 1px solid red;
    }
}
    
</style>
