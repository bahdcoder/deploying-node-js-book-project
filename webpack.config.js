require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniExtracCssPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: [process.env.NODE_ENV !== 'production' && 'webpack-hot-middleware/client?reload=true', './client/index.js'].filter(Boolean),
    output: {
        filename: 'app.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'server/public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniExtracCssPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        process.env.NODE_ENV !== 'production' && new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniExtracCssPlugin({
            filename: 'app.css'
        })
    ].filter(Boolean)
}
