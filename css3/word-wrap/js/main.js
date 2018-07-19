$('p').text('word-wrap:' + $('.content').css('word-wrap'));
$('input').on('click', function() {
    $('.content').css('word-wrap', $(this).val());
    $('p').text('word-wrap:' + $(this).val());
    console.log($('input[name="wb"]').val())
});