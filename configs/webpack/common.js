const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AntTheme = require('../../src/app/config/antTheme');

// const PATHS = {
//     src = resolve.join(__dirname, './src'),
//     assets = resolve.join(__dirname, './src/assets')
// };

module.exports = {
	context: path.resolve(__dirname, '../../src'),
	entry: {
		app: './main.tsx'
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	module: {
		rules: [
			// Typescript
			{
				test: /\.tsx?$/,
				exclude: [/\.test.tsx?$/, /node_modules/],
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			// Javascript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			// CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			// LESS
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: { modifyVars: AntTheme, javascriptEnabled: true }
					}
				]
			},
			// Static Assets
			// { test: /\.html$/, use: 'html-loader' },
			// { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
			{
				test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'images/[name]-[hash].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({ template: `./assets/index.html` })]
};
