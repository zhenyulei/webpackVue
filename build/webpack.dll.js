const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
const DllPlugin = require('webpack/lib/DllPlugin');
const vendorTarget = ['react','react-dom','react-router','axios','qs'];
module.exports = {
    mode:'production',
    entry:{
        libVendor:vendorTarget
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'../static'),
        library:'[name]_library'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new DllPlugin({
            name:'[name]_library',
            context:__dirname,
            path:path.join(__dirname,'../static/','[name].mainfest.json')
        })
    ]
}