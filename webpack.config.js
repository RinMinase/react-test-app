const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, arg) => {
	const isProd = arg.mode === "production";

	const webpackConfig = {
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "index_bundle.js"
		},
		module: {
			rules: [{
				test: /\.(js)$/,
				loader: "babel-loader",
				query: { compact: false }
			}, {
				/** This applies to all scss except `global.scss` */
				test: /^((?!global).)*scss$/,
				loader: [ "style-loader", {
					loader: "css-loader",
					options: {
						modules: true,
						sourceMap: true,
					}
				}, {
					loader: "sass-loader",
					options: { sourceMap: true }
				}]
			}, {
				/** This applies to the main stylesheet named `global.scss` */
				test: /global\.scss$/,
				loader: [ "style-loader", {
					loader: "css-loader",
					options: { sourceMap: true }
				}, {
					loader: "sass-loader",
					options: { sourceMap: true }
				}]
			}]
		},
		mode: "development",
		devServer: {
			open: false,
			port: 3000,
			historyApiFallback: true
		},
		optimization: {
			splitChunks: {
				chunks: "all"
			}
		},
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: true,
			chunks: false,
			modules: false,
			children: false
		},
		plugins: [
			new HtmlWebpackPlugin({ template: "src/index.html" })
		]
	}

	return webpackConfig;
};
