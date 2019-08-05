const merger =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
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

    },
    plugins:[
        new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname,'../static/libVendor.dll.js'),
            includeSourcemap: false,
        }),
        //new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merger(commonConfig,devConfig);