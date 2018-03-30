var screenCanvas = wx.createCanvas()
console.log(screenCanvas.width, screenCanvas.height)

var offScreenCanvas = wx.createCanvas()
var offContext = offScreenCanvas.getContext('2d')
offContext.fillStyle = 'red'
offContext.fillRect(0, 0, 100, 100)

var screenContext = screenCanvas.getContext('2d')
screenContext.drawImage(offScreenCanvas, 10, 0)


screenCanvas.width = 300
console.log(screenCanvas.width)
