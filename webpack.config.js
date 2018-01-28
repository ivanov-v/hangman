const {resolve} = require('path');

module.exports = {
    entry: ['./client-src/index.js'],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};
