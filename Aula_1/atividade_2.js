// Utilização de insertRow + insertCell
let continuar = '';
do {
  const nome = prompt('Digite o nome');
  const email = prompt('Digite o e-mail');
  const perfil = prompt('Digite o perfil');

  const tbody = document.querySelector("tbody");

  tbody.innerHTML += `
        <tr>
            <td>${nome}</td>
            <td>${email}</td>
            <td>${perfil}</td>
            <td><button>Excluir</button></td>
        </tr>
    `;

  continuar = prompt('Deseja continuar? Digite SAIR para finalizar');
} while (continuar.toUpperCase() != 'SAIR');