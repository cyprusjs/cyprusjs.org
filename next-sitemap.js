const { readFileSync } = require('fs')
const { join } = require('path')

module.exports = {
  siteUrl: 'https://cyprusjs.org',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['[fallback]', '404', '[postname].js'],
  transform: async (config, path) => {
    const relPath = join(__dirname, config.sourceDir, 'server', 'pages', path)
    const relFile = relPath + '.json'
    let date = new Date().toISOString()

    try {
      const file = readFileSync(relFile, 'utf8')
      const parsed = JSON.parse(file)
      if (
        (parsed &&
          parsed.pageProps &&
          parsed.pageProps.meta &&
          parsed.pageProps.meta.updatedAt) ||
        parsed.pageProps.meta.date
      ) {
        if (parsed.pageProps.meta.updatedAt) {
          date = new Date(parsed.pageProps.meta.updatedAt).toISOString()
        } else {
          date = new Date(parsed.pageProps.meta.date).toISOString()
        }
      }
      if (parsed && parsed.pageProps.meta.draft === true) {
        return
      }
    } catch (error) {
      console.info('sitemap: file not found, moving on.')
    }

    if (!path.endsWith('/')) {
      path = path + '/'
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? date : undefined
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
