const webpack = require('webpack')

module.exports = {
    mode: slsw.lib.webpack.isLocal ? "development": "production",
      optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ]
}