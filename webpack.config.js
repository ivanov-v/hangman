const {resolve, join} = require('path');

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
    devServer: {
        contentBase: join(__dirname, 'public'),
        port: 9000,
        inline: true,
        hot: true,
        stats: 'errors-only',
    }
};
