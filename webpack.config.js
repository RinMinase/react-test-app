const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, arg) => {
	const isProduction = arg.mode === "production";

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
		optimization: { splitChunks: { chunks: "all" } },
		performance: { hints: false },
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

	if (isProduction) {
		webpackConfig.plugins.push(new UglifyJsPlugin({
			uglifyOptions:{
				compress: { drop_console: true },
				parallel: true,
			},
		}));
	}

	return webpackConfig;
};
