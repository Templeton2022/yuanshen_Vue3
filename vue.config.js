const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './static',
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
    ],
  },
}


