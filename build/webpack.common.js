const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 


module.exports = {
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
        test:/\.(scss|css)$/,
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
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        include:/src/,
        use:'babel-loader'
      },
      {
        test:/\.(png|gif|jpg)$/,
        use:{
          loader:'url-loader',
          options:{
            name:'[name]_[hash].[ext]',
            limit:20480
          }
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'../src/index.html')
    }),
    new CleanWebpackPlugin({
      root:path.resolve(__dirname,'../')
    })
  ]
}
