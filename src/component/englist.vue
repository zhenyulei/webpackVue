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
                    name:'E-xiaohua',
                    age:12
                },
                {
                    name:'E-xiaoming',
                    age:13
                },
                {
                    name:'E-xiaozhang',
                    age:14
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
        border-bottom: 1px solid greenyellow;
    }
}
    
</style>
