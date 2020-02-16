const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './frontend_scripts/app.js',
    output: {
        path: path.join(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}