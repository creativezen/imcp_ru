const config = {
	mode: 'production',
	entry: {
		main: './src/js/main.js',
        feedbacks: './src/js/feedbacks.js',
        video: './src/js/video.js',
        marquee: './src/js/marquee.js',
        slider: './src/js/slider.js'
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
