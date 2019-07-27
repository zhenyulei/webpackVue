const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const proConfig = {
  mode:'production',
  devtool:'cheap-module-source-map',
  module:{
    rules:[{
      test:/\.scss$/,
      use:[
        MiniCssExtractPlugin.loader,
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
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  optimization:{
    minimizer:[
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',//同步异步全都打包
      minSize: 30000,//打包的库或者文件必须大于这个字节才会进行拆分
      minChunks: 1,//规定当模块在生成的js文件（trunk）中被调用过多少次的时候再进行拆分
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',//如果不写filename 默认名字 组名~[name]
      name: true,
      cacheGroups: {//缓存组，因为需要打包完成之后，在把所有要拆分的代码合并拆分，所以先要缓存
        vendors: {
          test: /[\\/]node_modules[\\/]/, //如果上面chunks定为all，就是找到所有的import文件，看他是不是调用于 node_modules 文件夹 是的话就拆分
          priority: -10,//优先级 比如同时符合vender 和 default 这个优先级高 所以存在这里
          filename: 'vendors.js', //拆分后打包的文件名字
        },
        default: {//像文件中 import进来的文件 如果不在 node_modules文件夹中 则走默认组，打包出的文件名字是 common.js
          priority: -20,
          reuseExistingChunk: true,//比如a.js 引用了 b.js；如果b.js在之前已经被拆分过，则这里不再对其进行拆分
          filename: 'common.js'
        }
      }
    }
  },
  plugins:[
    //new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].chunk.css'
    })
  ]
}

module.exports = merge(commonConfig,proConfig);