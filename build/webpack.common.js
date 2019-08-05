const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = {
    entry:{
        index:path.resolve(__dirname,'../src/app.js')
    },
    output:{
        filename:'js/[name].[hash].js',
        path:path.resolve(__dirname,'../dist'),
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias:{
            "@":path.resolve('src')
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader?cacheDirectory=true',
                include:path.resolve(__dirname,'../src'),
                exclude:/node_modules/
            },
            {
                test:/\.(png|gif|jpeg|jpg)$/,
                use:[
                    {
                        loader:'url-loader?cacheDirectory=true',
                        options:{
                            name:'img/[name].[ext]',
                            limit:1024
                        }
                    }
                ],
                include:path.resolve(__dirname,'../src'),
                exclude:/node_modules/
            },
            {
                test:/\.js$/,
                use:'babel-loader?cacheDirectory=true',
                exclude:/node_modules/,
                include:path.resolve(__dirname,'../src'),
            },
        ]
    },
    optimization:{
        splitChunks: {
            chunks: 'all',//同步异步全都打包
            minSize: 100,//打包的库或者文件必须大于这个字节才会进行拆分
            minChunks: 1,//规定当模块在生成的js文件（trunk）中被调用过多少次的时候再进行拆分
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//如果不写filename 默认名字 组名~[name]
            name: true,
            cacheGroups: {//缓存组，因为需要打包完成之后，在把所有要拆分的代码合并拆分，所以先要缓存
                vendors: {
                    test: /[\\/]node_modules[\\/]/, //如果上面chunks定为all，就是找到所有的import文件，看他是不是调用于 node_modules 文件夹 是的话就拆分
                    priority: -10,//优先级 比如同时符合vender 和 default 这个优先级高 所以存在这里
                    filename: 'js/vendors.js', //拆分后打包的文件名字
                },
                default: {//像文件中 import进来的文件 如果不在 node_modules文件夹中 则走默认组，打包出的文件名字是 common.js
                    minSize:20,
                    priority: -20,
                    minChunks: 2,
                    reuseExistingChunk: true,//比如a.js 引用了 b.js；如果b.js在之前已经被拆分过，则这里不再对其进行拆分
                    filename: 'js/common.js'
                }
            }
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html')
        }),
        new DllReferencePlugin({
            context:__dirname,
            manifest:require('../static/libVendor.mainfest.json')
        })
    ]
}