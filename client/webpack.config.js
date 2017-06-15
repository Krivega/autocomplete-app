const webpack = require('webpack');
const path = require('path');
const jsModuleRule = require('./webpack/js');
const styleModuleRule = require('./webpack/style');
const buildPath = path.join(__dirname, './dist');

const MODULE_PATHS = [
  'node_modules',
  'src'
];

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    rules: [jsModuleRule, styleModuleRule(MODULE_PATHS)]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
