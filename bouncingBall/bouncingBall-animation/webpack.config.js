const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry files
  entry: ['@babel/polyfill', './src/js/App.ts', './src/scss/App.scss'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /[\.js]$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 위치
    }),
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/App.css' })
  ],
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".ts", ".js"],
  },
  devServer: {
    host: "localhost", // live-server host 및 port
    port: 5500,
  },

  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};