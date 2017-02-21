/**
 * Created by yangbingxun on 2017/2/21.
 */

// nodejs 中的path模块
var path = require('path');


module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: [path.resolve(__dirname, './app/index/index.js')],
    // entry: ['webpack-hot-middleware/client',path.resolve(__dirname, './app/index/index.js')],
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './build/static'),
        // publicPath: 'static/',
        publicPath: '/',
        // filename: '[name].[hash].js',
        filename: 'build.js',
        // chunkFilename: '[id].[chunkhash].js'
    },
    resolve:{
      extensions:[' ','.js','.vue']
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}
