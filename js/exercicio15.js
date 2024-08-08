window.onload = function() {
    var btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        var resultado = document.querySelector('#resultado');
        resultado.textContent = 'Esse texto foi inserido pelo JavaScript...';
    });
};