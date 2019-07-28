<template>
<div>
  <div class="box">
    <p>{{name}}</p>
    <span>{{word}}</span>
  </div>
   <img src="../assest/imgs/logo.png" alt="图标">
   <div class="myimg"></div>
</div>
  
</template>
<script>
import { constants } from 'crypto';
export default {
  data(){
    return{
      name:'xiaohua',
      word:'打算'
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      
      console.log('hello');
      //console.log('222');

    },
    
  }
}
</script>
<style lang="scss">
  .box{
    width:100px;
    height: 100px;
    background:greenyellow;
    display:flex;
    justify-content: center;
    align-items: center;
    p{
      color:red;
      font-size: 16px;
    }
  }
  .myimg{
    width:80px;
    height: 40px;
    border:1px solid yellow;
    background: url('../assest/imgs/logo.png');
    background-size:100% 100%;
  }
</style>

