const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (_env, arg) => {
	const isProduction = arg.mode === "production";

	const webpackConfig = {
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "index_bundle.js"
		},
		module: {
			rules: [
				configureChildStyles(),
				configureMainStyles(),
				{
					test: /\.(js)$/,
					loader: "babel-loader",
					query: { compact: false }
				}
			]
		},
		mode: "development",
		devServer: {
			port: 3000,
			historyApiFallback: true
		},
		optimization: { splitChunks: { chunks: "all" } },
		performance: { hints: false },
		stats: configureLogStats(),
		plugins: [ new HtmlWebpackPlugin({ template: "src/index.html" }) ]
	}

	if (isProduction) {
		const uglifyOptions = {
			parallel: true,
			compress: { drop_console: true }
		};

		webpackConfig.plugins.push(new UglifyJsPlugin({ uglifyOptions }));
	}

	return webpackConfig;
};

/**
 * This applies to the main stylesheet named `global.scss`
 */
function configureMainStyles() {
	return {
		test: /global\.scss$/,
		loader: [ "style-loader", {
			loader: "css-loader",
			options: { sourceMap: true }
		}, {
			loader: "sass-loader",
			options: { sourceMap: true }
		}]
	}
}

/**
 * This applies to all scss except `global.scss`
 */
function configureChildStyles() {
	return {
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
	}
}

/**
 * This configures webpack log content
 */
function configureLogStats() {
	return {
		colors: true,
		hash: false,
		version: false,
		timings: true,
		assets: true,
		chunks: false,
		modules: false,
		children: false
	}
}
