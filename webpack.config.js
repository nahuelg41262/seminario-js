
module.exports = {
	entry : __dirname + "/app.js",
	output : {
		path : __dirname + "/public/",
		filename : "bundle.js"
	},
	module : {
		rules : [
			{test : /\.js$/,use:"babel-loader",exclude:/node_modules/}
		]
	},
	mode : "development"
}