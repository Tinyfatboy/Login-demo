var container = $('.container')
var banner = $('.banner')
container.on('mousemove', function(e){
//  console.log(clientX, e.clientY)
    let width = container.outerWidth()
    let height = container.outerHeight()
    let xCenter = container.offset().top + width / 2
    let yCenter = container.offset().left + height / 2
    let xDiff = e.clientX - xCenter
    let yDiff = e.clientY - yCenter

//  let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff)
//  let maxDistance = Math.sqrt(width*width + height*height)

    let xPercent = xDiff/width*2
    let yPercent = yDiff/height*2

    let xDeg = xPercent * 5
    let yDeg = yPercent * 5
    console.log(xDeg, yDeg)

    banner[0].style.transform = `translateZ(-10px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

container.on('mouseleave', function(){
    banner[0].style.transform = 'none'
})

var Logout = $('.button')
var Message = $('.message')

let user = AV.User.current()
console.log(user)

if(!user){
    Message.text('未检测到用户登录，正在跳转...')
    setTimeout(function () {
        window.location.href = 'index.html'
    }, 3000)
}

Logout.on('click', function () {
    AV.User.logOut()
    Message.text('成功登出，正在跳转...')
    setTimeout(function () {
        window.location.href = 'index.html'
    }, 1000)
})