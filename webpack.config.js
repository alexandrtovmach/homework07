var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: {
		bundle: "./src/js/main.js",
		styles: './src/scss/style.scss'
	},
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
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
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
			beautify: true,
		}
	}),
	new ExtractTextPlugin('styles.css', {
        allChunks: true
    })
	],
	devServer: {
		inline:true,
		port: 8081
	}
}