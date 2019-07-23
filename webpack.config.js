const path = require("path");
const CssPluginClass = require("mini-css-extract-plugin"); //css 提出打包
const HtmlTemplatePlugin = require("html-webpack-plugin"); // html模板，自动引进js和css
const copyWebpackPlugin = require("copy-webpack-plugin"); // webpack 复制静态文件

const ISPRODUCTION = process.env.NODE_ENV === 'production';
const ROOT_PATH = path.resolve(__dirname, "./"); //__dirname是决定路径
const BUILD_PATH = path.resolve(ROOT_PATH, "output");
const SRC_PATH = path.resolve(ROOT_PATH, "src");
const STATIC_PATH = path.resolve(ROOT_PATH, "static"); //静态资源文件路径
const JS_NAME = ISPRODUCTION ? "js/[name]_[hash:base64:8].js" : "js/[name].js";
const CSS_NAME = ISPRODUCTION ? "css/[name]_[hash:base64:8].css" : "css/[name].css";
const CSS_CLASS_NAME = "[name]_[local]_[hash:base64:4]";
const cssPlugin = new CssPluginClass({
  filename: CSS_NAME
});
const htmlPlugin = new HtmlTemplatePlugin({
  filename: path.resolve(BUILD_PATH, "index.html"),
  template: path.resolve(ROOT_PATH, "template", "index.html")
});
const copyPlugin = new copyWebpackPlugin([
  {
    from: path.resolve(STATIC_PATH),
    to: path.resolve(BUILD_PATH)
  }
]);

module.exports = {
  mode: ISPRODUCTION ? "production" : "development",
  devtool: ISPRODUCTION ? "none" : "eval",
  entry: {
    app: path.resolve(SRC_PATH, "app.tsx")
  },
  output: {
    filename: JS_NAME,
    path: BUILD_PATH,
    publicPath: "./" //所有打包资源的基础路径
  },
  plugins: [cssPlugin, htmlPlugin, copyPlugin],
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    ignored: [/node_modules/, /(css|less)\.d\.ts$/],
    poll: 0812
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"] //.js的后缀名需要加上，第三方模块会使用到
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        include: SRC_PATH,
        exclude: path.resolve(ROOT_PATH, "node_modules")
      },
      {
        test: /\.(css|less)$/,
        include: SRC_PATH,
        use: [
          {
            loader: CssPluginClass.loader,
            options: {
              publicPath: path.resolve(BUILD_PATH, "css")
            },
          },
          {
            loader: "typings-for-css-modules-loader", //这个loader只能支持css-loader ^1.0.x 版本
            options: {
              localIdentName: CSS_CLASS_NAME,
              modules: true,
              camelCase: true,
              namedExport: true,
            }
          },
          "postcss-loader",
          "less-loader"
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpe?g|gif|wav)$/,
        use: ["url-loader?limit=10240&name=img/[hash:8].[name].[ext]"]
      }
    ]
  }
};
