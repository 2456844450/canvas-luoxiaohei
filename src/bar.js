



function pad(num, n) {
  var i = (num+ "").length
  while(i++ < n) num = "0" + num
  return num
}
const ImgArr = []


for (let i = 1; i <= 1076; i++) {
  let str = pad(i, 4)
  ImgArr.push(require(`./assets/begin/${str}.jpg`))
}


const ctx = document.getElementById('canvas').getContext('2d');
const tempCanvas = document.createElement('canvas')
const tempCtx = tempCanvas.getContext('2d')
tempCanvas.width = 852
tempCanvas.height = 458

function draw() {
  if (ImgArr.length < 1) {
    clearInterval(timer1)
    ctx.clearRect(0, 0, 852, 458)
    return
  }
  
  ctx.clearRect(0, 0, 852, 458)
  var img = new Image()  
  img.src = ImgArr.splice(0, 1)[0].default

  img.onload = function() {
    // 绘制图片
    ctx.drawImage(img, 0, 0, 852, 458)
  }

  //补帧 双缓存
  var tempimg = new Image()

  tempimg.src = ImgArr.splice(0, 1)[0].default
  tempimg.onload = function() {
    tempCtx.drawImage(tempimg, 0, 0, 852, 458)
  }

  ctx.drawImage(tempCanvas, 0, 0, 852, 458)
  

}

 const timer1 = setInterval(draw, 80)
