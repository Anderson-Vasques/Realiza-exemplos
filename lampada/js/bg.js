var select = document.getElementById('change-bg');

select.addEventListener('change', function(event) {
    console.log(select.value);
    console.log(event.target.value);
    document.querySelector('body').style.backgroundColor = select.value;
}, false)