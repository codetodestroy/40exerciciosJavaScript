document.querySelector('button').addEventListener('click', function() {
    var nome = document.querySelector('#nome').value;
    var sobrenome = document.querySelector('#sobrenome').value;

    alert(`Olá, ${nome} ${sobrenome}!`);
});