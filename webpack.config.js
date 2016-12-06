const webpack = require('webpack');
const minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
const packPlugins = minimize
  ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
  : [];

module.exports = {
  entry: './source/index.js',
  output: {
    path: './dist',
    filename: minimize ? 'native-typed.min.js' : 'native-typed.js',
    libraryTarget: 'umd',
    library: 'NTyped'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: packPlugins
};
