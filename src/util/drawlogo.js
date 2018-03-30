module.exports = function (canvas, x, y) {
  var image = wx.createImage()
  image.onload = function () {
    var context = canvas.getContext('2d')
    // console.log('1')
    context.drawImage(image, x, y)
  }
  //路径设置有问题的话会导致onload不执行
  image.src = './res/image/hello.png'
  // image.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'
  // console.log('2')
}