const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'reveal/index.css',
        'reveal/theme/moon.css',
        'highlight/lib/vendor/highlight.js/styles/zenburn.css',
        './src/index.ts'
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/docs'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(svg|ttf|eot|woff)$/,
                loader: "file?name=[name]_[hash].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            name: 'index.html',
            template: './src/index.ejs'
        }),
        new webpack.DefinePlugin({
            'PROD': JSON.stringify(false)
        }),
        new webpack.ProvidePlugin({
            'Reveal': 'reveal'
        })
    ],
    node: {
        fs: "empty"
    }
};