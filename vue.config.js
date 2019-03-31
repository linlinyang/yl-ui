const path = require('path');
const resolve = filename => {
    return path.resolve(__dirname,filename);
};

module.exports = {

    pages: {
        index: {
            entry: resolve('examples/main.js'),
            template: resolve('public/index.html'),
            filename: 'index.html'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('examples'),
                '#': resolve('packages')
            }
        }
    },
    chainWebpack: config => {
        config.resolveLoader
            .modules
            .add('packages')
            .add(resolve('packages'))
    }
    /* chainWebpack: config => {
        config.module
            .rule('packages')
                .test(/\.js$/)
                .include
                    .add(/packages/)
                    .end()
                .use('babel')
                    .loader('babel-loader')
                    .options({
                        presets: [
                            ['@babel/preset-env', { modules: false }]
                        ]
                    })

    } */

};