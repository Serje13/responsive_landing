const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "eval", // temporary to speed up recompiles and builds
    mode: "none",
    entry: {
        app: "./index.js",
        vendors: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        pathinfo: true,
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [

            {
                enforce: "pre",
                test: /\.jsx?$/,
                use: ["eslint-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: false,
                            sourceMap: true,
                            camelCase: true,
                            localIdentName: '[name]--[local]--[hash:base64:5]'
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            sourceMap: true
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["url-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    }
                ]
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ["dist"] }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            favicon: null
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        port: 1234,
        hot: true
    }
};
