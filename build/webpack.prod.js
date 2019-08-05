const merger =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const htmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const prodConfig = {
    mode:'production',
    //devtool:'cheap-module-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                       loader:MiniCssExtractPlugin.loader,
                       options:{
                            publicPath:'../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../'
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins:[
        new CopyWebpackPlugin([  //文件复制到打包的 dist/lib 文件夹下
            { from: path.join(__dirname, "../static/libVendor.dll.js"), to: path.join(__dirname, "../dist/lib/libVendor.dll.js") }
        ]),
        new htmlWebpackIncludeAssetsPlugin({ //这个插件是把vue.dll.js 插入到 html 中
            assets:['./lib/libVendor.dll.js'],
            append:false
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        })
    ],
    optimization: { 
        minimizer: [
            new TerserPlugin({
                cache:true,
                parallel:true,
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    }
}
if(process.env.npm_config_report){
    prodConfig.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = merger(commonConfig,prodConfig);