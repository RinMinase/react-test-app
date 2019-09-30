const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
			{ test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] }
		]
	},
	mode: "development",
	devServer: {
		open: false,
		port: 3000,
		stats: {
			colors: true,
			hash: false,
			version: false,
			timings: true,
			assets: true,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: false,
			warnings: true,
			publicPath: false
		}
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "src/index.html" })
	]
}

