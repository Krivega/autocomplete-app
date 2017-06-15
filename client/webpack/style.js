const IS_DEV = true;

module.exports = modulePaths => ({
  test: /\.scss?$/,
  use: [{
    loader: 'style-loader',
    options: { sourceMap: IS_DEV }
  }, {
    loader: 'css-loader',
    options: {
      localIdentName: '[local]-[sha512:hash:base32]',
      modules: true,
      sourceMap: IS_DEV
    }
  }, {
    loader: 'postcss-loader',
    options: { sourceMap: IS_DEV }
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: modulePaths,
      sourceMap: IS_DEV
    }
  }]
});
