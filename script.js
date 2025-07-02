let ultimoResultado = '';

function adicionarAoVisor(valor) {
    const visor = document.getElementById('resultado');
    if (visor.value === 'Erro') {
        visor.value = '';
    }
    visor.value += valor;
}

function limparVisor() {
    document.getElementById('resultado').value = '';
}

function mostrarMemoria() {
    const visor = document.getElementById('resultado');
    if (ultimoResultado !== '') {
        visor.value += ultimoResultado;
    }
}

function calcular() {
    const visor = document.getElementById('resultado');
    let expressao = visor.value;

    if (expressao) {
        try {
            const expressaoCalculavel = expressao.replace(/\^/g, '**');
            const resultadoFinal = eval(expressaoCalculavel);

            visor.value = resultadoFinal;
            ultimoResultado = resultadoFinal; 

        } catch (error) {
            visor.value = 'Erro';
        }
    }
}