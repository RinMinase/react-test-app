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
	const isProduction = arg.mode === "production";

	return {
		test: /global\.scss$/,
		loader: [ "style-loader", {
			loader: "css-loader",
			options: { sourceMap: !isProduction }
		}, {
			loader: "sass-loader",
			options: { sourceMap: !isProduction }
		}]
	}
}

/**
 * This applies to all scss except `global.scss`
 */
function configureChildStyles() {
	const isProduction = arg.mode === "production";

	return {
		test: /^((?!global).)*scss$/,
		loader: [ "style-loader", {
			loader: "css-loader",
			options: {
				modules: true,
				sourceMap: !isProduction,
			}
		}, {
			loader: "sass-loader",
			options: { sourceMap: !isProduction }
		}]
	}
}

/**
 * This configures webpack log content
 */
function configureLogStats() {
	return {
		children: false, // Disable children information
		chunks: false,   // Disable chunk information
		colors: true,    // Enable colored output on terminal
		hash: false,     // Disable compilation hash
		modules: false,  // Disable module information
		version: false   // Disable printing of webpack version
	}
}
