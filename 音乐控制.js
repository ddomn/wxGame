// 引用外部文件绘制logo
var drawLogo = require('./src/util/drawlogo.js')
var canvas = wx.createCanvas()
drawLogo(canvas, 40, 40)


var bgm = wx.createInnerAudioContext()
// bgm.autoplay = true
bgm.loop = true
// 在 iOS 系统上，默认遵循静音键设置。如果希望在静音时也能播放声音，可以设置 obeyMuteSwitch 为 false。
bgm.obeyMuteSwitch = false
bgm.src = './res/music/bgm.mp3'
// wx.onShow(function () {
//   bgm.play()
// })
wx.onAudioInterruptionBegin(function () {
  // 暂停游戏
})