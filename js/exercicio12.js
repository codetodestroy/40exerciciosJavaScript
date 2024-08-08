var btnVerde = document.getElementsByClassName('btn-verde')[0];
var btnAmarelo = document.getElementsByClassName('btn-amarelo')[0];
var btnVermelho = document.getElementsByClassName('btn-vermelho')[0];

btnVerde.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

btnAmarelo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});

btnVermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});