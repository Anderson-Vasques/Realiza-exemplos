
var body = $('body');
var loader = $('.loader');

setTimeout(function() {
    body.removeClass('locked');
    loader.addClass('out');
}, 1000);
