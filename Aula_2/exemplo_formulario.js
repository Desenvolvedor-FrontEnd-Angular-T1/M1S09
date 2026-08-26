const form = document.querySelector('form');
const nome = document.getElementById('nome');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit form. event:', event);
});

nome.addEventListener('change', (event) => {
  window.alert('Campo alterado');
});
nome.addEventListener('blur', (event) => {
  console.log('Saiu do campo');
});
nome.addEventListener('focus', (event) => {
  console.log('Entrou do campo');
});

window.addEventListener('resize', () => {
  console.log('alterou tamanho');
})

function botaoConfirmar() {
  console.log('Botão Confirmar')
}
