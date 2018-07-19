/** JAVASCRIPT PURO / VANILLAJS*/

// var inputs = document.querySelectorAll('input[name="ts"]');
// var h1 = document.querySelector('h1');
// var initialValue = h1.style.textShadow ? h1.style.textShadow : 'none';
// var propertyParagraph = document.querySelector('p');
// propertyParagraph.innerText = 'text-shadow: ' + initialValue;
// inputs.forEach(function (el, i) {
//     el.addEventListener('click', function (evt) {
//         let valueClicked = el.value;
//         h1.style.textShadow = valueClicked;
//         propertyParagraph.innerText = 'text-shadow: ' + valueClicked;
//     }, false)
// });


/** JQUERY*/
var propertyParagraph = $('p');
var initialValue = $('h1').css('text-shadow');

propertyParagraph.text('text-shadow: ' + initialValue);
$('input').on('click', function() {
    $('h1').css('text-shadow', $(this).val());
    propertyParagraph.text('text-shadow: ' + $(this).val());
});