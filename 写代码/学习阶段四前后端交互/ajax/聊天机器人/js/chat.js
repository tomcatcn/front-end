function getVoice(msg) {
    $.ajax({
        type: 'get',
        data: {
            text: msg
        },
        url: 'http://www.liulongbin.top:3006/api/synthesize',
        success: function(res) {

            if (res.message == 'success') {
                var url = res.voiceUrl
                console.log(url)
                $('#voice').attr('src', url);


            }
        }
    })
}

function getRootText(msg) {
    $.ajax({
        type: 'get',
        data: {
            spoken: msg
        },
        url: 'http://www.liulongbin.top:3006/api/robot',
        success: function(res) {
            if (res.message == 'success') {
                $('.talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + res.data.info.text + '</span></li>');
                getVoice(res.data.info.text);
                resetui();

            }
        }
    });
}




$('.input_sub').on('click', function() {
    var msg = $('.input_txt').val().trim();
    if (msg.length == 0) {

        return $('.input_txt').val('')
    }
    $('.talk_list').append('<li class="right_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>');
    getRootText(msg);
    $('.input_txt').val('');
    resetui();
})

$('.input_txt').on('keyup', function(eve) {

    if (eve.keyCode == 13) {
        $('.input_sub').click()
    }
})