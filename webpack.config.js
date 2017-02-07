var path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
module.exports = {
  entry: {
    index: './index.js',
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'react-redux-form',
      'redux-thunk',
      'react-router-redux'
    ]
  },
  output: {
    filename: 'application.js',
    path: path.join(__dirname, './build'),
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader!stylus-loader'),
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=8192'
      },
    ],
    resolve: {
      extensions: ['', '.js', '.styl', 'css', 'jsx']
    }
  },
  plugins: [
    new ExtractTextPlugin('application.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
}
