# webpackVue
基于webpack4的vue脚手架
### 1. 安装依赖 
npm init
npm webpack webpack-cli -D
### 2. 新建文件目录

-- 表示文件夹 -表示文件
--src
  --pages
    -app.vue
  -index.js
  -index.html
  -package.json
  -webapck.config.js

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>webpack v4</title>
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>
```
### index.js 文件

```
import Vue from 'vue';
import App from './pages/app.vue';
//import './assest/css/common.scss';
new Vue({
  el:'#root',
  render:h=>h(App)
})
```

### pages/app.vue

```
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
  background:yellow;
  .main{
    p{
      color:green;
    }
  }
}
</style>
```
对应的配置文件

```
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
module.exports =  {
  entry:{
    index:'./src/index.js'
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css|.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
```
