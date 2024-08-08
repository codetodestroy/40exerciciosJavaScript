function formatarCpf(cpf) {
    var cpfSemPontuacao = cpf.replaceAll('.', '').replaceAll('-', '');

    return cpfSemPontuacao;
}

function atualizarCPF() {
    var cpfInput = document.querySelector('#cpf');
    var mostrarCpf = document.querySelector('#mostrarCpf');

    mostrarCpf.textContent = formatarCpf(cpfInput.value);
}

/* 
    13) Faça um comentário de varias linhas no JavaScript no exercicio anterior do CPF.
*/