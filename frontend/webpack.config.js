const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UT Reviews',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        // For pure CSS - /\.css$/i,
        // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
        // For Less - /\.((c|le)ss)$/i,
        test: /\.((c|sa|sc)ss)$/i,
        use: [{
          // inject CSS to page
          loader: "style-loader",
        }, {
          // translates CSS into CommonJS modules
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            },
            importLoaders: 1,
            // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
            // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
          },
        }, {
          // Run postcss actions
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    features: {
                      'nesting-rules': true
                    }
                  },
                ],
              ],
            },
          },
          },
          // Can be `less-loader`
          // {
          //     loader: "sass-loader",
          // },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // { test: /\.txt$/, use: 'raw-loader' }
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.FRONTEND_PORT,
    contentBase: './dist',
    proxy: {
      '/api': `http://127.0.0.1:${process.env.BACKEND_PORT}`
    },
    historyApiFallback: {
      disableDotRule: true,
      index: '/index.html',
    },
  },
  // cache: true,
};

