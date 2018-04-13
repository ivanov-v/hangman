const {resolve} = require('path');

module.exports = {
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
};
