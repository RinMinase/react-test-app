const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (_env: any, arg: any) => {
	const isProduction = arg.mode === "production";

	const webpackConfig = {
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "index_bundle.js"
		},
		module: {
			rules: [
				configureMainStyles(!isProduction),
				configureChildStyles(!isProduction),
				{
					test: /\.ts(x?)$/,
					loader: "ts-loader",
				}, {
					enforce: "pre",
					test: /\.js$/,
					loader: "source-map-loader"
				}
			]
		},
		resolve: { extensions: [".ts", ".tsx", ".js"] },
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
function configureMainStyles(sourceMap: boolean) {
	return {
		test: /global\.scss$/,
		loader: [{
			loader: "style-loader",
			options: { insert: "body" }
		}, {
			loader: "css-loader",
			options: { sourceMap }
		}, {
			loader: "sass-loader",
			options: { sourceMap }
		}]
	}
}

/**
 * This applies to all scss except `global.scss`
 */
function configureChildStyles(sourceMap: boolean) {
	return {
		test: /^((?!global).)*scss$/,
		loader: [{
			loader: "style-loader",
			options: { insert: "body" }
		}, {
			loader: "css-loader",
			options: {
				modules: true,
				sourceMap,
			}
		}, {
			loader: "sass-loader",
			options: { sourceMap }
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
