const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
/*
这个页面中所有的路径：
path.resolve(__dirname,'../src/index.js')
和
'./src/index.js'
是一样的
*/
module.exports =  {
  entry:{
    index:path.resolve(__dirname,'../src/index.js')
  },
  output:{
    filename:'[name].[hash].js',
    path:path.resolve(__dirname,'../dist')
  },
  module:{
    rules:[
      {
        test:/\.(css|scss)$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      },
      {
        test:/\.(png|gif|jpg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              name:'[name].[ext]',
              limt:20480
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }     
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      root:path.resolve(__dirname,'../')
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../src/index.html') 
    })
  ],
  
}