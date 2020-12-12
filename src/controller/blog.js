const getList = (name, author) => {
  return [
    {
      name: '张三',
      author: '李四'
    }
  ]
}

const getDetail = (data) => {
  return {
    title: '如何爱上母猪',
    desc: '首先你得是一头猪'
  }
}

const addBlog = (data) => {
  return data
}

module.exports = {
  getList,
  getDetail,
  addBlog
}
