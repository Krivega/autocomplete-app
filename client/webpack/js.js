module.exports = {
  exclude: /node_modules/,
  test: /\.jsx?$/,
  use: [{
    loader: 'react-hot-loader'
  }, {
    loader: 'babel-loader'
  }]
};
