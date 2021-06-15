const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackHashFilePlugin = require('./buildtools/WebpackHashFilePlugin'); // Our custom plugin found in `/buildtools`
const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: devMode ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
  }),
  new WebpackHashFilePlugin({
    path: '../_data/',
    fileName: 'hash.yml'
  }), // HASH IS USED TO KICK-OFF JEKYLL
];

const devServerSettings = {
  contentBase: './_site',
  host: '0.0.0.0',
  port: '4000',
}

module.exports = {
  mode: devMode ? 'development' : 'production',
  plugins,
  devServer: devServerSettings,
  entry: './assets/js/src/all.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'assets', 'js', 'dist'),
    publicPath: '/assets/js/dist/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/i,
        type: 'asset/resource'
      },
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};