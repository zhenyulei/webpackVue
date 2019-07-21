<template>
  <div class="main">
    <p>我是{{name}}</p>
    <input type="text" class="my-input"/>
    <p class="box"></p>
    <img src="../assest/image/logo.png" alt="" class="img-box">
    <button @click="add">点击我</button>
    <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { add } from './util.js';
export default{
  data(){
    return {
      name:'vue',
      curr:4,
      listData:[
        1,2,3,4
      ],
      nameList:{
        name:'xiaohua',
        age:12
      }
    }
  },
  mounted:function(){
    this.init()
  },
  methods:{
    async init(){
      //console.log(1);
      console.log('hello');
      this.listData.includes(4);
      let word = await this.myAsync();
      console.log(word);
      let he = add(1,2);
      console.log(he);
    },
    myAsync(){
      const promise = new Promise((resolve,reject)=>{
          resolve('success');
      })
      return promise;
    },
    add(){
      let aa = [...this.listData];
      let {name,age} = nameList;
      console.log(name+'--'+age);
      aa.map((item)=>{
        item+='a';
      })
      this.curr= aa;
      this.listData.push(this.curr);
    }
  }
}
</script>
<style lang="scss">
.main{
  display: flex;
  p{
    color:red;
  }
  .box{
    width: 540px;
    height: 258px;
    background: url('../assest/image/logo.png');
    background-size:100% 100%;
  }
  .img-box{
    width:100px;
    height: 100px;
    border:1px solid red;
  }
  .my-input{
    width:100px;
    height: 20px;

  }
}
</style>
