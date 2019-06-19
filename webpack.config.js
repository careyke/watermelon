const path = require("path");
const CssPluginClass = require("extract-text-webpack-plugin"); //css 提出打包
const HtmlTemplatePlugin = require("html-webpack-plugin"); // html模板，自动引进js和css
const copyWebpackPlugin = require("copy-webpack-plugin"); // webpack 复制静态文件

const ROOT_PATH = path.resolve(__dirname, "./"); //__dirname是决定路径
const BUILD_PATH = path.resolve(ROOT_PATH, "output");
const SRC_PATH = path.resolve(ROOT_PATH, "src");
const STATIC_PATH = path.resolve(ROOT_PATH, "static"); //静态资源文件路径
const JS_NAME = "js/[name].js";
const CSS_NAME = "css/[name].css";
const CSS_CLASS_NAME = "[name]_[local]_[hash:base64:4]";
const cssPlugin = new CssPluginClass(CSS_NAME, { allChunks: true });
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
  mode: "development",
  devtool: "eval",
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
    ignored: /node_modules/,
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
        loader: CssPluginClass.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                import: true,
                modules: true,
                localIdentName: CSS_CLASS_NAME,
                importLoaders: 2
              }
            },
            "postcss-loader",
            "less-loader"
          ],
          publicPath: path.resolve(BUILD_PATH, "css")
        })
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
