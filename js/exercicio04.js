var btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', function() {
    var nome = document.getElementsByTagName('input')[0].value;
    alert('O Nome Completo é ' + nome);
});