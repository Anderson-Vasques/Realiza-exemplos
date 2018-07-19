var liga, desliga, imagem;

liga = document.getElementById('liga');
desliga = document.getElementById('desliga');

imagem = document.getElementById('myImage');

liga.addEventListener('click', ligar, false);
desliga.addEventListener('click', desligar, false);

function ligar() {
    imagem.src='./img/pic_bulbon.gif';
}

function desligar() {
    imagem.src='./img/pic_bulboff.gif';
}