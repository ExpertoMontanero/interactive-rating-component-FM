$('#after-submit').hide();

$('.button').on('click', function () {
    $('.button').removeClass('clicked');
    $(this).addClass('clicked');
});

$('#submit').on('click', function () {
    if ($('.button').hasClass('clicked')) {
        $('#before-submit').hide();
        $('#after-submit').show();
        var value = 0;
        value=$('.button.clicked').text();
        $('#selected-text-container').append(`<p id="selected-text">You selected ${value} out of 5</p>`)
    };
});