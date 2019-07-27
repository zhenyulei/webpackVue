const commonConfig = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase:'../dist',
    open:false,
    port:8080,
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(commonConfig,devConfig)