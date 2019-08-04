const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 

module.exports = {
    entry:{
        app:path.resolve(__dirname,'../src/app.js')
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'../dist/js/')
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
                test:/\.(png|gif|jpeg|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name:'./img/[name].[ext]',
                            limit:10240
                        }
                    }
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'../src'),
                use:'babel-loader'
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}