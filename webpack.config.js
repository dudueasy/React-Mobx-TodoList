const webpack = require('webpack')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

let config  = {
  entry: {
    app: path.join(__dirname, './src/app.js')
  },

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/public/',
  },
  module: {
    rules: [
      // 定义编译 jsx 文件使用的loader(babel-loader)
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      // 定义 js 文件使用的 loader
      {
        test: /\.js$/,
        use: 'babel-loader',
        // 排除 node_modules 目录
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      // define css loader
      {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader' // Run both loaders
      }
    ]
  },
  plugins: [
    new HTMLPlugin( {template: path.join(__dirname,'./src/template.html')}
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}

const isDev = process.env.NODE_ENV === 'development'

if  (isDev){
  console.log('current env is development')

// 配置开发环境的常用设置
  config.devServer = {
    // 允许局域网访问
    host: '0.0.0.0',
    port: '8888',
    // 定义 devServer 服务器服务/工作的目录 (设置为和webpack配置中的 output.path 一致即可)
    contentBase:path.join(__dirname, './dist'),
    // 开启热模块替换 (需要在react app中进行配置, 否则会报错)
    hot: true,
    // 错误信息显示
    overlay: {
      errors: true
    },
    publicPath : '/public/',
    // 启用historyApiFallback, 实现前端路由
    historyApiFallback:{
      index:'/public/index.html'
    },
  }

  config.entry = {
    app:[
      'react-hot-loader/patch',
      path.join(__dirname, './src/app.js')
    ]
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
