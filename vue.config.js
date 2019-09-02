module.exports = {
  runtimeCompiler: true,
  devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true,
      proxy: {
        '/api': {
          //target: 'http://sample.bmaster.kro.kr',
          target:'http://localhost:3000/',
          //target:'http://www.moosong.co.kr:3000/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
  },
  // devServer: {
  //   host: 'localhost', 
  //   port: 8080
  // }, 
  //transpileDependencies:[/node_modules[/\\\\]vuetify[/\\\\]/],
  transpileDependencies:['vuetify']
}