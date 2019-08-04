const merger =  require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode:'production',
    devtool:'cheap-module-source-map',
    module:{

    },
    plugins:[
        
    ]
}

module.exports = merger(prodConfig,commonConfig);