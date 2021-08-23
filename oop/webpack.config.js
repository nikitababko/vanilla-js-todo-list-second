const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: '/js',
    filename: 'app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    host: 'localhost',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [['@babel/env']],
          },
        },
      },
    ],
  },
};
