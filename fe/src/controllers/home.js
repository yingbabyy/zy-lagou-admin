import homeView from '../views/home.art'      //引入首页数据

export default {                              //暴露出去
  render(req, res, next) {
    res.render(homeView(req))
  }
}