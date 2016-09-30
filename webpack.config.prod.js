const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('./webpack.config');
config.plugins = [
    new HtmlPlugin(),
    new webpack.DefinePlugin({
        'PROD': JSON.stringify(false)
    }),
    new webpack.ProvidePlugin({
        'Reveal': 'reveal'
    })
];
module.exports = config;