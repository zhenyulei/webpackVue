const merger =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:'../dist',
        open:true,
        port:8080,
    },
    module:{

    },
    plugins:[
        
    ]
}

module.exports = merger(devConfig,commonConfig);