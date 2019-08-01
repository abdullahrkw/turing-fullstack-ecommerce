const webpack = require('webpack')

module.exports = {
    mode:  "development",
      optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ]
}