const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle[contenthash].js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],

  devtool: 'inline-source-map',

  devServer: {
    port: 9000,
    hot: true,
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node-modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
