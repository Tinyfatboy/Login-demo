$("form input[name='password']").on('focus', function () {
    $('img').attr('src', 'img/22.jpg').css('border', '1px solid #D80053')
})

$("form input[name='password']").on('blur', function () {
    $('img').attr('src', 'img/2233x.jpg').css('border', 'none')
})

let user = AV.User.current()
if(user){
    console.log('user')
    console.log(AV.User.current());
}else {
    console.log('none user')
}

let signUpForm = $('form[name=signUp]')
signUpForm.on('submit', (e) => {
    e.preventDefault()

    // 新建 AVUser 对象实例
    var user = new AV.User();
    // 设置用户名
    user.setUsername(signUpForm[0].username.value);
    // 设置密码
    user.setPassword(signUpForm[0].password.value);
    // 设置邮箱
    user.setEmail(signUpForm[0].email.value);
    user.signUp().then(function (loginedUser) {
        console.log(loginedUser)
        $('.signError').text('注册成功 请在自动跳转后登录')
        setTimeout(function () {
            AV.User.logOut()
            window.location.reload()
        }, 3000)
    }, function (error) {
        console.log(error.code)
        if(error.code === 202){
            $('.signError').text('用户名重复使用')
        }else if(error.code === 203){
            $('.signError').text('邮箱已重复使用')
        }
    })
})

let loginForm = $('form[name=login]')
loginForm.on('submit',(e) => {
    e.preventDefault()

    //获取密码
    let password = loginForm[0].password.value
    console.log(password)
    //获取用户名
    let username = loginForm[0].username.value
    console.log(username)

    AV.User.logIn(username, password).then(function (loginedUser) {
        console.log(loginedUser)
        window.location.href = 'home.html'
    }, function (error) {
        if(error.code === 210){
            $('.loginError').text('用户名和密码不匹配')
        }else if(error.code === 211){
            $('.loginError').text('用户名不存在')
        }
    })
})