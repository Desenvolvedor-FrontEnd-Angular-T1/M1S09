const produtos = [
  {
    nome: "Notebook",
    categoria: "Informática",
    preco: 3500,
    estoque: 8,
  },
  {
    nome: "Mouse",
    categoria: "Acessórios",
    preco: 80,
    estoque: 15,
  },
  {
    nome: "Teclado",
    categoria: "Acessórios",
    preco: 150,
    estoque: 0,
  },
];

const tbody = document.querySelector("tbody");

// Utilização de createElement + appendChild
// produtos.forEach(item => {
//   const tr = document.createElement('tr');

//   const tdProduto = document.createElement('td');
//   const tdCategoria = document.createElement('td');
//   const tdPreco = document.createElement('td');
//   const tdEstoque = document.createElement('td');
//   const tdSituacao = document.createElement('td');

//   tdProduto.innerText = item.nome;
//   tdCategoria.innerText = item.categoria;
//   tdPreco.innerText = `R$ ${item.preco.toFixed(2)}`;
//   tdEstoque.innerText = item.estoque;
//   tdSituacao.innerText = item.estoque ? 'Disponível' : 'Esgotado';

//   tr.appendChild(tdProduto);
//   tr.appendChild(tdCategoria);
//   tr.appendChild(tdPreco);
//   tr.appendChild(tdEstoque);
//   tr.appendChild(tdSituacao);

//   tbody.appendChild(tr);
// });

// Utilização de innerHTML
produtos.forEach((item) => {
  tbody.innerHTML += `
        <tr>
            <td>${item.nome}</td>
            <td>${item.categoria}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td>${item.estoque}</td>
            <td>${item.estoque ? "Disponível" : "Esgotado"}</td>
        </tr>
    `;
});

// Utilização de insertRow + insertCell
// produtos.forEach(item => {
//   const linha = tbody.insertRow();

//   const produto = linha.insertCell();
//   const categoria = linha.insertCell();
//   const preco = linha.insertCell();
//   const estoque = linha.insertCell();
//   const situacao = linha.insertCell();

//   produto.innerText = item.nome;
//   categoria.innerText = item.categoria;
//   preco.innerText = `R$ ${item.preco.toFixed(2)}`;
//   estoque.innerText = item.estoque;
//   situacao.innerText = item.estoque ? 'Disponível' : 'Esgotado';
// });
