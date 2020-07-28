const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => ({
  entry: './src/index.js', 
  output: { 
    filename: 'bundle.js', 
    path: path.join(__dirname, 'dist')
  },
  devtool: env === 'development' ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
              sourceMap: true
          }
        },
        {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
               /* Cut 'src' from path in dist (dist/assets/{images, fonts}) */
               context: 'src'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    }),
    new HtmlWebPackPlugin({
      template: "./src/templates/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
      new CopyWebpackPlugin([
      { from: './src/assets/images', to: './assets/images' }, 
      { from: './src/assets/db', to: './assets/db' }, 
      { from: './src/assets/telegramAPI', to: './assets/telegramAPI' },
      { from: './src/assets/fonts', to: './assets/fonts' }
    ]) 
  ]
});