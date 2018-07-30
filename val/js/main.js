$('#show').on('click', function() {
    var inputValue = $('#name').val();
    var textAreaValue = $('#msg').val();

    alert('input: ' + inputValue + ' textarea: ' + textAreaValue);
    
});

$('#clear').on('click', function() {
    $('#name').val('');
    $('#msg').val('');
});