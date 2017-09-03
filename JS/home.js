var container = $('.container')
var banner = $('.banner')
container.on('mousemove', function(e){
//  console.log(clientX, e.clientY)
    let width = container[0].getBoundingClientRect().width
    let height = container[0].getBoundingClientRect().height
    let xCenter = container[0].offsetLeft + width / 2
    let yCenter = container[0].offsetTop + height / 2
    let xDiff = e.clientX - xCenter
    let yDiff = e.clientY - yCenter

//  let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff)
//  let maxDistance = Math.sqrt(width*width + height*height)

    let xPercent = xDiff/width*2
    let yPercent = yDiff/height*2
    console.log(xPercent, yPercent)

    let xDeg = xPercent * 6
    let yDeg = yPercent * 6

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
    console.log('logout')
    AV.User.logOut()
    Message.text('成功登出，正在跳转...')
    setTimeout(function () {
        window.location.href = 'index.html'
    }, 1000)
})
