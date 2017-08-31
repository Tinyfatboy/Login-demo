$("form input[name='password']").on('focus', function () {
    $('img').attr('src', 'img/22.jpg').css('border', '1px solid #D80053')
})

$("form input[name='password']").on('blur', function () {
    $('img').attr('src', 'img/2233x.jpg').css('border', 'none')
})
