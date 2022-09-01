import { merge } from 'webpack-merge'
import base from './base.mjs'
import TerserPlugin from 'terser-webpack-plugin'
console.log(merge)
export default merge(base, {
  mode: 'production',
  output: {
    filename: "bundle.min.js"
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
})