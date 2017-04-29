const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist/assets"), 
		publicPath: "/assets/"
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 4000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["latest", "stage-0", "react"]
					}
				} 

			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]',
					}
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				use: 'json-loader'
			},

			{test: /\.css$/,use: ['style-loader', 'css-loader', 'autoprefixer-loader']},
			{test: /\.scss$/,use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']}
		]
	}
}