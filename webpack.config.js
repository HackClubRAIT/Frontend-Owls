const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
   return {
      entry: "./assets/js/index.ts",
      output: {
         path: path.resolve(__dirname, "static/assets"),
         filename: "scripts/index.min.js",
      },
      devtool: env.WEBPACK_WATCH ? "inline-source-map" : false,
      module: {
         rules: [
            {
               test: /\.s[ac]ss$/i,
               use: [
                  {
                     loader: MiniCssExtractPlugin.loader,
                     options: {
                        esModule: false,
                     },
                  },
                  "css-loader",
                  {
                     loader: "postcss-sass-loader",
                  },
               ],
            },
            {
               test: /\.tsx?$/,
               exclude: /node_modules/,
               use: ["babel-loader"],
            },
         ],
      },
      resolve: {
         extensions: [".tsx", ".ts", ".js"],
      },
      optimization: {
         minimize: true,
         minimizer: [
            // Minify CSS
            new CssMinimizerPlugin({
               minimizerOptions: {
                  preset: [
                     "default",
                     {
                        discardComments: { removeAll: true },
                     },
                  ],
               },
            }),
            new TerserPlugin({
               terserOptions: {
                  format: {
                     comments: false,
                  },
               },
               extractComments: false,
               minify: (file, sourceMap) => {
                  const uglifyJsOptions = {};

                  if (sourceMap) {
                     uglifyJsOptions.sourceMap = {
                        content: sourceMap,
                     };
                  }

                  return require("uglify-js").minify(file, uglifyJsOptions);
               },
            }),
         ],
      },
      plugins: [
         new MiniCssExtractPlugin({
            filename: "styles/[name].min.css",
            experimentalUseImportModule: false,
         }),
      ],
   };
};
