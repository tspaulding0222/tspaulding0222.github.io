var path = require("path");
var webpack = require("webpack");
var { VueLoaderPlugin } = require("vue-loader");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {}
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
			  sourceMap: "inline",
              config: {
                ctx: {
                  autoprefixer: { browsers: ["last 2 versions", "iOS >= 8"] }
                }
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: "inline",
              config: {
                ctx: {
                  autoprefixer: { browsers: ["last 2 versions", "iOS >= 8"] }
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./static/"
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./static/img/"
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  devtool: "eval-source-map"
};

if (process.env.NODE_ENV == "production") {
  module.exports.mode = "production";
  module.exports.devtool = "source-map";
  module.exports.plugins = (module.exports.plugins || []).concat([
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]);
}
