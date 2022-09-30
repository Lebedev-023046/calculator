const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')

const baseConfig = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@assets': path.resolve('./src/assets'),
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'),
      '@pages': path.resolve('./src/pages'),
      '@store': path.resolve('./src/store'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        './public/index.html',
      ),
      filename: 'index.html',
    }),
  ],
}

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'production'
  const envConfig = isProductionMode
    ? require('./webpack.prod.config')
    : require('./webpack.dev.config')

  return merge(baseConfig, envConfig)
}
