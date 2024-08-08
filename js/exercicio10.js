function somar() {
    var soma1 = document.querySelector('#soma1').value;
    var soma2 = document.querySelector('#soma2').value;

    var resultadoSoma = document.querySelector('#resultado-soma');

    var soma = Number(soma1) + Number(soma2);

    resultadoSoma.value = soma;
}

var btnsoma = document.querySelector('#btn-soma'); 
btnsoma.addEventListener('click', somar);

// Exercício 11) Faça um comentário de uma linha no JavaScript no exercicio anterior
// Aqui meu comentário de linha