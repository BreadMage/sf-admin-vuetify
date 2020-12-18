const mockModules = require('./modules/index')
const bodyParser = require('body-parser')
module.exports = app => {
  app.use(bodyParser.json())
  mockModules.forEach(l => {
    app[l.type](l.url, l.response)
  })
  // // 用户信息获取模拟
  // app.get('/api/auth/info', (req, res) => {
  //   const { authorization = null } = req.headers
  //   if (TOKEN === authorization) {
  //     res.json({
  //       code: 200,
  //       data: {
  //         id: 1,
  //         name: 'Salfty Fish',
  //         permission: [
  //           'dashboard-analysis',
  //           'dashboard-workplace',
  //           'form-basic',
  //           'form-step',
  //           'form-advance'
  //         ]
  //       }
  //     })
  //   } else {
  //     res.status(401).json({
  //       code: 401,
  //       msg: '登录失效'
  //     })
  //   }
  // })
}
