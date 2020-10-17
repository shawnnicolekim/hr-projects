const path = require('path');
const src = path.resolve(__dirname, '/client');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: dist,
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader : 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}