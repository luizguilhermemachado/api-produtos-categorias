class HomeController {
  index(req, res){
    res.send('olá')
  }
}

export default new HomeController()
