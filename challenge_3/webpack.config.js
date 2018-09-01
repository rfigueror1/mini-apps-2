const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  module: {
  	rules: [
    	{
      	test: /\.jsx$/,
      	exclude: /(node_modules|bower_components)/,
      	use: {
        	loader: 'babel-loader',
        	options: {
          	presets: ['@babel/preset-react']
        	}
      	}
    	}
  	]
},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
