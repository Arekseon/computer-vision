require('es6-promise').polyfill();

var webpack = require('webpack');

module.exports = {
    entry: "./assets/js/scripts.js",
    output: {
        path: "./build/static/js",
        filename: "scripts.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2016', 'react']
                }
            },
            {   test: /\.(gif|jpg|jpeg|png)/,
                loader: 'url-loader?limit=20000' // if img >20kb, direct to asset
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}
