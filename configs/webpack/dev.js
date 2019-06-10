const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
	mode: 'development',
	devServer: {
		hot: true,
		inline: true,
		historyApiFallback: { disableDotRule: true },
		stats: 'minimal',
		port: 3000,
		host: '0.0.0.0',
		watchOptions: {
			ignored: /node_modules/,
			poll: true
		}
	},
	devtool: 'cheap-module-eval-source-map',
	node: {
		fs: 'empty',
		net: 'empty'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // Enable HMR globally
		new webpack.NamedModulesPlugin(), // Prints more readable module names in the browser console on HMR updates
		new webpack.DefinePlugin({
			'process.env.apiURL': JSON.stringify('http://localhost:3001/api')
		})
	]
});
