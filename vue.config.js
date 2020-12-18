module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    before: require('./mock/mock-server.js')
  }
}
