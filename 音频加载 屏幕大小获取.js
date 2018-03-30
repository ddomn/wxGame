let audio = wx.createInnerAudioContext()
// src 地址仅作演示，并不真实存在
audio.src = 'bgm.mp3'
audio.play()
console.log(screenWidth, screenHeight)//undefined undefined

let { screenWidth, screenHeight } = wx.getSystemInfoSync()
var screenCanvas = wx.createCanvas()

//大小一样
console.log(screenWidth, screenHeight)
console.log(screenCanvas.width, screenCanvas.height)
