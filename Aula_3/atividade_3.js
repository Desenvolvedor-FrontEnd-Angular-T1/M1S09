//Inputs
const produto = document.getElementById("produto");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const estoque = document.getElementById("estoque");

//Botão Cadastrar
const btnCadastrar = document.getElementById("btnCadastrar");

//Tabela
const tbody = document.querySelector("tbody");

produto.onchange = validaCampos;
categoria.onchange = validaCampos;
preco.onchange = validaCampos;
estoque.onchange = validaCampos;

function validaCampos() {
  //Validação dos valores dos inputs
  if (produto.value && categoria.value && preco.value && estoque.value) {
    btnCadastrar.disabled = false;
  } else {
    btnCadastrar.disabled = true;
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  tbody.innerHTML += `
        <tr>
            <td>${produto.value}</td>
            <td>${categoria.value}</td>
            <td>R$ ${(+preco.value).toFixed(2)}</td>
            <td>${estoque.value}</td>
            <td>${+estoque.value ? "Disponível" : "Esgotado"}</td>
        </tr>
    `;
});
