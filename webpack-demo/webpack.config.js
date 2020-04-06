// 这是属于 nodejs 解析的文件，所以可以使用 nodejs 的模块以及用 module.exports 进行导出
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // production
  entry: path.join(__dirname, 'src', 'index.js'),
  // 配置输出信息
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist')
  }
}