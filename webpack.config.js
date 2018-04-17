const {resolve, join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                css: ['styles.css'],
            },
        }),
    ],
    devServer: {
        contentBase: join(__dirname, 'dist'),
        port: 9000,
        stats: 'errors-only',
    },
};
