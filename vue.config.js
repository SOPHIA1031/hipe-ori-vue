module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://47.99.48.150:16828/',
          // target: 'https://www.baidu.com/',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}
