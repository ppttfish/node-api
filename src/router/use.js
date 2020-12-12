const hanldeUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  // 获取博客列表
  if (method === 'POST' && path === '/api/user/login') {
    return {
      msg: '用户登录'
    }
  }

}

module.exports = hanldeUserRouter
