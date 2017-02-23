/**
 * Created by yangbingxun on 2017/2/21.
 * 生产环境
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
var webpack = require('webpack')

var config = require('./webpack.config');

// config.vue={
    // loaders:{
    //     css:ExtractTextPlugin.extract('css-loader')
    // }
// }

config.plugins=[
    // new ExtractTextPlugin("./build/static/build.css"),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new webpack.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        inject:true
    })
]

// var devClient='webpack-hot-middleware/client';
// var devClient='./dev-client';
// config.entry=[devClient].concat(config.entry);
// Object.keys(config.entry).forEach(function(name,i){
//     console.log(name,config.entry[name])
//     var extras=[devClient];
//     config.entry=extras.concat(config.entry[name]);
// })

module.exports=config;

//extract-text-webpack-plugin@1.0.1 requires a peer of webpack@^1.9.11 but none was installed.
