const { getList, getDetail, addBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } =  require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const name = req.query.name
    const author = req.query.author
    const list = getList(name, author)
    return new SuccessModel(list)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const detail = getDetail()
    return new SuccessModel(detail)
  }

  // 添加博客
  if (method === 'POST' && req.path === '/api/blog/add') {
    const data = req.body
    const res = addBlog(data)
    return new SuccessModel(res)
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '更新博客'
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/dell') {
    return {
      msg: '删除博客'
    }
  }
}

module.exports = handleBlogRouter
