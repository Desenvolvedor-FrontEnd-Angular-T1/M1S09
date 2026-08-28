const nome = document.getElementById('nome');
const email = document.getElementById('email');
const celular = document.getElementById('celular');
const btnCadastrar = document.getElementById('btnCadastrar');

nome.onchange = validaCampos;
email.onchange = validaCampos;
celular.onchange = validaCampos;

function validaCampos() {
  if (nome.value && email.value && celular.value) { //Validação dos valores dos inputs
    btnCadastrar.disabled = false;
  } else {
    btnCadastrar.disabled = true;
  }
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  window.alert(`Usuário: ${nome.value}; E-mail: ${email.value}; Celular: ${celular.value}`);
});