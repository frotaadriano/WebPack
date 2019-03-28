const webpack = require("webpack");
// ler CSS
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//-> module.exports, exporta o objeto/modulo
module.exports = {
  entry: "./ex/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  devServer: {
    port: 8080,
    contentBase: "./public"
  },

  plugins: [new ExtractTextPlugin("app.css")],

  //configurar o Babel
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      // o loader de css foi adicionado no ex.10
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        
      }
    ]
  }
};
