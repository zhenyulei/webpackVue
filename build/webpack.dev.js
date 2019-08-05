const merger =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path  = require('path');

const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'../dist',
        open:true,
        port:8080,
        //hot:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
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
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname,'../static/libVendor.dll.js'),
            includeSourcemap: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        })
        //new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merger(commonConfig,devConfig);