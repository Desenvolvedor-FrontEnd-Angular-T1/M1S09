const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const btnEntrar = document.getElementById('btnEntrar');

btnEntrar.addEventListener('click', () => {
  window.alert('Entrar');
});

usuario.onchange = validaCampos;
senha.onchange = validaCampos;

function validaCampos() {
  if (usuario.value && senha.value) { //Validação dos valores dos inputs
    btnEntrar.disabled = false;
  } else {
    btnEntrar.disabled = true;
  }
}