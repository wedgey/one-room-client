module.exports = (api) => {
	api.cache(true);

	const presets = [
		'@babel/preset-typescript',
		'@babel/preset-react',
		['@babel/preset-env', { useBuiltIns: 'usage' }]
	];
	const plugins = [
		'react-hot-loader/babel',
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread',
		['import', { libraryName: 'antd', style: true }]
	];

	return {
		presets,
		plugins
	};
};
