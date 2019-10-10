const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (_env, arg) => {
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
				...configureTypescript(),
			]
		},
		resolve: { extensions: [".ts", ".tsx", ".js"] },
		mode: "development",
		devServer: {
			port: 3000,
			historyApiFallback: true
		},
		optimization: {
			splitChunks: { chunks: "all" },
			minimize: false,
			minimizer: [],
		},
		performance: { hints: false },
		stats: configureLogStats(),
		plugins: [
			new HtmlWebpackPlugin({ template: "src/index.html" }),
			new MiniCssExtractPlugin({ filename: "[name].css" })
		]
	}

	if (isProduction) {
		const terserOptions = {
			extractComments: false,
			terserOptions: { output: { comments: false } }
		}

		webpackConfig.optimization.minimize = true;
		webpackConfig.optimization.minimizer.push(new TerserPlugin(terserOptions));
	}

	return webpackConfig;
};

/**
 * This applies to the main SCSS stylesheet named `global.scss`
 */
function configureMainStyles(sourceMap) {
	return {
		test: /global\.scss$/,
		loader: [MiniCssExtractPlugin.loader, {
			loader: "css-loader",
			options: { sourceMap }
		}, {
			loader: "sass-loader",
			options: { sourceMap }
		}]
	}
}

/**
 * This applies to all SCSS stylesheets except `global.scss`
 */
function configureChildStyles(sourceMap) {
	return {
		test: /^((?!global).)*scss$/,
		loader: [MiniCssExtractPlugin.loader, {
			loader: "css-loader",
			options: { modules: true, sourceMap }
		}, {
			loader: "sass-loader",
			options: { sourceMap }
		}]
	}
}

/**
 * This configures TypeScript loaders
 */
function configureTypescript() {
	return [{
		test: /\.ts(x?)$/,
		loader: "ts-loader",
	}, {
		enforce: "pre",
		test: /\.js$/,
		loader: "source-map-loader"
	}];
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
