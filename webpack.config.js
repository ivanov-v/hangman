const {resolve, join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./client-src/index.js'],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            '~': resolve(__dirname, './client-src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    'desvg-loader/react',
                    'svg-loader',
                ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hangman',
            template: './client-src/index.html',
            files: {
                css: ['./styles/styles.css'],
            },
        }),
        new CopyWebpackPlugin([
            {from: './client-src/styles.css', to: 'styles'},
            {from: './client-src/fonts', to: 'fonts'},
        ]),
    ],
    devServer: {
        contentBase: join(__dirname, 'dist'),
        port: 9000,
        stats: 'errors-only',
    },
};
