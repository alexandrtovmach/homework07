var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: {
		bundle: "./src/js/main.js",
		styles: './src/scss/style.scss'
	},
	output: {
		filename: '[name].js',
        path: __dirname + '/dist',
        chunkFilename: '[id].[chunkhash].js',
		publicPath: __dirname + '/dist/'
	},
	module:{
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'jshint-loader',
					options: { 
						camelcase: true, 
						emitErrors: false, 
						failOnHint: false,
						esversion: 6
					} 
				}
			},
            {
                test: /\.scss$/,
                enforce: "pre",
                use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                }]
            },
			{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
				}
			}
		]
	},
	plugins: [
	new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		},
		output: {
			comments: false,
			beautify: false,
		}
	})
	],
	devServer: {
		inline:true,
		port: 8081
	}
}