const path = require('path');
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: './src/index.js',
  output: {
        path: DIST_DIR+"/app",
        filename: "bundle.js",
        publicPath: "/app/"
  },

  watch: true, // следить за изменениями в файлах
  watchOptions: {
	  	aggregateTimeout: 100 // т.е. пересобирать файлы начнет только спустя указанное в миллисекундах время (в данном случае 100)
  },

  devServer: {
      contentBase: "./public",
      inline: true,
      hot: true,
      port: 8080,
    },

  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    }),
    new CopyWebpackPlugin([
    {from: 'public/index.html',   to: '../'}
    ]),

    new ExtractTextPlugin('bundle.css'),

      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
      }),

      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
              screw_ie8: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true
          },
          output: {
              comments: false
          }
    }      )

  ],

  module: {
    rules: [

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: ['css-loader', 'autoprefixer-loader?browsers=last 2 versions']
        })
          /*
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions']
        })
        */
      },
      {
        test: /\.jsx?$/,
        //use: ['babel-loader'],
        exclude: /node_modules/,
        loader:  "babel-loader",
        options:{
                    presets:["env", "react"]
                }
      }

    ]
  }
};