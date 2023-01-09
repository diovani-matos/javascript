const display = document.querySelector('.display')
const botaoResultado = document.querySelector('.result')
const botaoLimpar = document.querySelector('#limpar')
const botaoOperadores = document.querySelectorAll('.operadores')
const botaoPadrao = document.getElementsByClassName('.botao-padrao').innerHTML

function botaoPadrao.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener("click", () => {
        const valorDoElementoClicado = elementoCorrente.dataset.value;
        adicionarElementoAoDisplay(valorDoElementoClicado);

    });
});

function adicionarElementoAoDisplay(numeroDigitado) {
    display.value += numeroDigitado;
}
