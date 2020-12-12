const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/use')
const querystring = require('querystring')

// 处理post data
const getPostData = (req => {
  return new Promise((resolve, reject) => {
    if (req.method === 'GET') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resolve(JSON.parse(postData))
    })
  })
})

const serverHanlde = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  // 获取url
  const url = req.url
  req.query = querystring.parse(url.split('?')[1])
  req.path = url.split('?')[0]

  // 处理post data
  getPostData(req).then(postData => {
    req.body = postData
    // 处理
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))

      return
    }

    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))

      return
    }

    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 not found\n')
    res.end()
  })

}

module.exports = serverHanlde
