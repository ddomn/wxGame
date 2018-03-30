var canvasfs = wx.createCanvas()
var context1 = canvasfs.getContext('2d')
var canvas = wx.createCanvas()
var context2 = canvas.getContext('2d')

context1.fillStyle = '#ccc'
context1.fillRect(0, 0, 20, 20)
console.log(canvasfs.widhth, canvasfs.htight)

var image = wx.createImage()
image.onload = function () {
  console.log(image.width, image.height)
  context1.drawImage(image, 0, 0)
}
// image.src = './hello.png'
image.src = 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'


console.log(context1.widhth, canvasfs.htight)
context1.drawImage(image, 30, 0)
context1.fillRect(30, 50, 20, 20)
// wx.onTouchStart((e) => {

//   console.log(e.touches)
// })

//点击时
var x,y
wx.onTouchStart(function (e) {
  console.log('点击')
  console.log(e.touches)
  context1.fillStyle = 'red'
  context1.fillRect(e.touches[0].pageX, e.touches[0].pageY, 20, 20)
})
//移动时
wx.onTouchMove(function (e) {
  console.log('移动')
  console.log(e.touches)
  context1.fillStyle = 'pink'
  context1.fillRect(e.touches[0].pageX, e.touches[0].pageY, 20, 20)
  x = e.touches[0].pageX
  y = e.touches[0].pageY
})
//松开时
wx.onTouchEnd(function (e) {
  console.log('抬起')
  console.log(e.touches)
  context1.fillStyle = '#000'
  context1.fillRect(x, y, 20, 20)
  // context1.fillRect(pageX, pageY, 20, 20)
})

wx.onTouchCancel(function (e) {
  console.log('4:' + e.touches)
})