const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        test:/\.css|\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}