const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  devServer:{
    proxy:{
      '/api': {
        target: 'http://192.168.0.104:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // chainWebpack: config => {
  //   config.resolve.alias
  //   .set("vue$",'vue/dist/vue.esm.js')
  // }
  // configureWebpack: {
  //   resolve: {
  //     extensions: [".js", ".vue", ".json"],
  //     alias: {
  //       vue$: "vue/dist/vue.esm.js",
  //       "@": path.resolve(__dirname, "src/"),
  //       "@components": path.resolve(__dirname, "src/components"),
  //       "@utils": path.resolve(__dirname, "src/utils"),
  //       "@views": path.resolve(__dirname, "src/views"),
  //       "@assets": path.resolve(__dirname, "src/assets")
  //     }
  //   }
  // }
})
