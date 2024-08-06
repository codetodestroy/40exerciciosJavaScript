function formatarCpf(cpf) {
    var cpfSemPontuacao = cpf.replaceAll('.', '').replaceAll('-', '');

    return cpfSemPontuacao;
}

function atualizarCPF() {
    var cpfInput = document.querySelector('#cpf');
    var mostrarCpf = document.querySelector('#mostrarCpf');

    mostrarCpf.textContent = formatarCpf(cpfInput.value);
}