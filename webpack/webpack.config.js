module.exports={
  entry: "./index.js",
  output:{
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders:[
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.js$/, loader: 'style-hot!bable', exclude: /node_modules/},
    ]
  }
}