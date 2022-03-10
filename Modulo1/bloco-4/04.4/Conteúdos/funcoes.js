var statusCarro = 'desligado';
var aceleracao = 0;
var rotacaoVolante = 0;

function ligarDesligar () {
    if (statusCarro === 'desligado') {
        statusCarro = 'ligado';
    }
    else {
        statusCarro = 'desligado';
    }
    return statusCarro;
}

function acelerar (incrmento) {
    aceleracao = aceleracao + incremento;
    return "Acelerando a " + aceleracao + "m/s²";
}

function frear (decremento) {
    aceleracao = aceleracao - decremento;
    return 'Desacelerando para ' + aceleracao + 'm/s²';
}

function girarVolante (anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;
    return rotacaoVolante + "°";
}

console.log(ligarDesligar());