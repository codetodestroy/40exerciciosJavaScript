function formatarCpf(cpf) {
    var part1 = cpf.slice(0, 3);
    var part2 = cpf.slice(3, 6);
    var part3 = cpf.slice(6, 9);
    var part4 = cpf.slice(9, 11);

    let cpfComPontuacao = part1.concat('.', part2, '.', part3, '-', part4);

    return cpfComPontuacao;
}

function atualizarCPF() {
    var cpfInput = document.querySelector('#cpf');
    var mostrarCpf = document.querySelector('#mostrarCpf');

    mostrarCpf.textContent = formatarCpf(cpfInput.value);
}