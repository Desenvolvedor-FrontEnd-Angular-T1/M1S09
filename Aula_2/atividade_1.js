const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const btnEntrar = document.getElementById('btnEntrar');
const btnMostrarSenha = document.getElementById('btnMostrarSenha');

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

function mostrarSenha() {
  if (senha.type === 'text') {
    senha.type = 'password';
    btnMostrarSenha.innerText = 'Mostrar senha';
  } else {
    senha.type = 'text';
    btnMostrarSenha.innerText = 'Ocultar senha';
  }
}