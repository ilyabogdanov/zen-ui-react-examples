var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname+"/src/index.html",
    filename: "index.html",
    inject: "body"
});
module.exports = {
    entry: __dirname+"/src/index.jsx",
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|gif)$/,
            exclude: /node_modules/,
            loader: "file-loader"
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: "index.js",
        path: __dirname+"/dist"
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
};