const path = require('path');

module.exports = {
  entry: {
    vendor: ["styled-components"],
  },
  output: {
    
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ]
}