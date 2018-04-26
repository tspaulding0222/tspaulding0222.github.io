var path = require('path');
var webpack = require('webpack');
var { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    mode: "development",
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {

                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["babel-preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: './static/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './static/img/'
                        }
                    }
                ],
            },
        ]
    },
    plugins : [
        new VueLoaderPlugin()
    ]
}