const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

const devConfig = {
  mode:'development',
  devtool:'source-map',
  devServer:{
    contentBase: '../dist',
    open:true,
    port:8080,
    hot:true,
    hotOnly:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization:{
    usedExports:true
  }
};

module.exports = merge(commonConfig,devConfig);
