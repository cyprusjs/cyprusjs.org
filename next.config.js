const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  swcMinify: true,
  trailingSlach: true,
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}
