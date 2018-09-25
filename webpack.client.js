const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const devMode = process.env.NODE_ENV !== 'production'

const config = {
    mode: 'development',
    //Tell webpack the root file of our
    //server application
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.(sa|sc|c)ss$/,
    //             use: [
    //               devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    //               'css-loader',
    //               'postcss-loader',
    //               'sass-loader',
    //             ],
    //           }
    //     ]
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         // Options similar to the same options in webpackOptions.output
    //         // both options are optional
    //         filename: "[name].css",
    //         chunkFilename: "[id].css"
    //       })
    // ]
    
};

module.exports = merge(baseConfig, config);

