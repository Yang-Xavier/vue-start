/**
 * Created by yangbingxun on 2017/2/21.
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

var config = require('./webpack.config');

config.output.publicPath='/'

config.plugins=[
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    // new webpack.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
        filename:'index.html',
        inject:true
    })
]

// var devClient='webpack-hot-middleware/client';
var devClient='./dev-client';
config.entry=[devClient].concat(config.entry);
// Object.keys(config.entry).forEach(function(name,i){
//     console.log(name,config.entry[name])
//     var extras=[devClient];
//     config.entry=extras.concat(config.entry[name]);
// })

module.exports=config;