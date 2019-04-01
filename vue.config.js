module.exports = {
  devServer: {
    open: 'Chrome',
    port: 8081,
    clientLogLevel: 'info',
    watchOptions: { poll: true }
  },

  configureWebpack: {
    plugins: []
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
