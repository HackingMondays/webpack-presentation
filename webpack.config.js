const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.ts',
        'reveal/index.css',
        'reveal/theme/moon.css'
    ],
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
                loader: "file"
            }
        ]
    },
    plugins: [
        new HtmlPlugin(),
        new webpack.DefinePlugin({
            'PROD': JSON.stringify(false)
        }),
        new webpack.ProvidePlugin({
            'Reveal': 'reveal'
        })
    ]
};