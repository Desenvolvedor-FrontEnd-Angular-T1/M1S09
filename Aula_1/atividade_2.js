let continuar = '';
let count = 0;
do {
  const nome = prompt('Digite o nome');
  const email = prompt('Digite o e-mail');
  const perfil = prompt('Digite o perfil');

  const tbody = document.querySelector("tbody");

  tbody.innerHTML += `
        <tr id="tr-${count}">
            <td>${nome}</td>
            <td>${email}</td>
            <td>${perfil}</td>
            <td><button onclick="excluirLinha('tr-${count}')">Excluir</button></td>
        </tr>
    `;

  count += 1;
  continuar = prompt('Deseja continuar? Digite SAIR para finalizar');
} while (continuar.toUpperCase() != 'SAIR');

function excluirLinha(linha) {
  const tr = document.getElementById(linha);
  tr.remove();
}