const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

// 用户列表
const users = {
  admin: {
    info: { id: 1, name: 'Admin' },
    permission: [
      'dashboard-workplace',
      'dashboard-analysis',
      'form-basic',
      'form-step',
      'form-advance'
    ]
  },
  test: {
    info: { id: 2, name: 'Test' },
    permission: [
      'dashboard-workplace',
      'dashboard-analysis',
      'form-basic',
      'form-step',
      'form-advance'
    ]
  }
}

// 认证列表
const authInfo = [
  {
    username: 'admin',
    password: 'sfadmin',
    user: 'admin'
  },
  {
    username: 'test',
    password: 'sftest',
    user: 'test'
  }
]

// token刷新时间
const tokenFreshLimit = 60 * 10

// token过期时间
const tokenFailureLimit = 60 * 60 * 24

module.exports = [
  // 登录接口
  {
    url: '/api/auth/login',
    type: 'post',
    response: (req, res) => {
      const { username, password } = req.body
      const userTarget = authInfo.find(
        l => l.username === username && l.password === password
      )
      if (userTarget) {
        const cert = fs.readFileSync(
          path.join(__dirname, '../pem/private-key.pem')
        )
        const created = Math.floor(Date.now() / 1000)
        res.json({
          code: 200,
          data: {
            token: jwt.sign(
              {
                data: users[userTarget.user],
                exp: created + tokenFailureLimit,
                iat: created + tokenFreshLimit
              },
              cert,
              { algorithm: 'RS256' }
            )
          }
        })
      } else {
        res.json({
          code: 201,
          msg: '账号或密码错误'
        })
      }
    }
  },

  // 用户信息接口
  {
    url: '/api/auth/info',
    type: 'get',
    response: (req, res) => {
      const { authorization = null } = req.headers
      const cert = fs.readFileSync(
        path.join(__dirname, '../pem/public-key.pem')
      )
      const verify =
        jwt.verify(authorization, cert, { algorithms: ['RS256'] }) || {}
      if (verify.data) {
        res.json({
          code: 200,
          data: verify.data
        })
      } else {
        res.status(401).json({
          code: 401,
          msg: '登录失效'
        })
      }
    }
  }
]
