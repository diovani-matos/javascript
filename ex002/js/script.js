// Obtém referências aos elementos da página HTML
const display = document.getElementById('display');
const keys = document.querySelector('.keys');

// Adiciona um event listener ao elemento 'keys' para detectar cliques em botões
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
  // Obtém o botão clicado
  const key = e.target;
  const keyContent = key.textContent; }
    });

  // Obtém o conteúdo do botão (o valor numérico ou o símbolo do operador)
  const action = keys.dataset.action;
  const keyContent = keys.textContent;
  // Obtém o valor atualmente exibido no display
  const displayedNum = display.textContent;
  // Define um array de operadores permitidos
  const operators = ['+', '-', 'x', '÷'];
  // Define um array de teclas de número
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
    

  // Verifica se a ação do botão é 'ac', que significa "limpar"
  if (action === 'ac') {
    // Define o valor do display como 0
    display.textContent = '0';
  }

  // Verifica se a ação do botão é 'ponto'
  if (action === 'ponto') {
    // Verifica se o display já contém um ponto
    if (!displayedNum.includes('.')) {
      // Se não houver, adiciona um ponto ao valor atualmente exibido no display
      display.textContent = displayedNum + '.';
    }
  }

  // Verifica se a ação do botão é um operador
  if (operators.indexOf(action) > -1) {
    // Verifica se o display já possui um operador
    if (displayedNum.includes('+') || displayedNum.includes('-') || displayedNum.includes('x') || displayedNum.includes('÷')) {
      // Se já houver, substitui o operador pelo novo
      display.textContent = displayedNum.slice(0, -1) + action;
    } else {
      // Se não houver, adiciona o operador ao valor atualmente exibido no display
      display.textContent = displayedNum + action;
    }
  }

// Verifica se o botão clicado é uma tecla de número
if (numbers.indexOf(keyContent) > -1) {
    // Verifica se o display já possui o valor padrão (0)
    if (displayedNum === '0') {
      // Se sim, substitui o valor padrão pelo número clicado
      display.textContent = keyContent;
    } else {
      // Se não, adiciona o número clicado ao final do valor exibido no display
      display.textContent = displayedNum + keyContent;
    }
}