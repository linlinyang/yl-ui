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
                '#': resolve('packages'),
                '#c': resolve('packages/components')
            }
        }
    },

    chainWebpack: config => {
        config.resolveLoader
            .modules
            .add('packages')
            .add(resolve('packages'))
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                resolve('examples/styles/variable.scss'),
            ]
        }
    }
};
