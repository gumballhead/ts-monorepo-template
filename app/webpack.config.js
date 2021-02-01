const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const node_modules = path.resolve(__dirname, "../node_modules");
const dist = path.resolve(__dirname, "dist");
const { APP_PORT } = process.env;

module.exports = {
    entry: "index.tsx",
    output: {
        path: dist,
        filename: "app.js"
    },
    devServer: {
        host: "0.0.0.0",
        port: APP_PORT || 8080,
        hot: true
    },
    devtool: "source-map",
    resolve: {
        modules: [__dirname, node_modules],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            react: path.join(node_modules, "react")
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: {
                loader: "ts-loader"
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource"
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "assets/index.html"
        })
    ]
};
