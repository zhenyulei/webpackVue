<template>
  <div class="main">
    <p>我是{{name}}</p>
  </div>
</template>
<script>
export default{
  data(){
    return {
      name:'vue'
    }
  }
}
</script>
<style lang="scss">
body{
  background:red;
  .main{
    display: flex;
    p{
      color:green;
    }
  }
}
</style>
