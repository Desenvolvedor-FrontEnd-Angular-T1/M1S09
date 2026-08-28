const medias = [
  {
    materia: "Matemática",
    primeiroBimestre: 8.5,
    segundoBimestre: 7,
    media: 7.8,
    frequencia: "95%",
    situacao: "Aprovado",
  },
  {
    materia: "Português",
    primeiroBimestre: 9,
    segundoBimestre: 8,
    media: 8.5,
    frequencia: "98%",
    situacao: "Aprovado",
  },
  {
    materia: "História",
    primeiroBimestre: 7.5,
    segundoBimestre: 6.5,
    media: 7,
    frequencia: "92%",
    situacao: "Aprovado",
  },
  {
    materia: "Geografia",
    primeiroBimestre: 6,
    segundoBimestre: 5.5,
    media: 5.8,
    frequencia: "89%",
    situacao: "Recuperação",
  },
  {
    materia: "Ciências",
    primeiroBimestre: 8,
    segundoBimestre: 9,
    media: 8.5,
    frequencia: "97%",
    situacao: "Aprovado",
  },
];

const tbody = document.querySelector("tbody");

// Utilização de innerHTML
medias.forEach((item) => {
  tbody.innerHTML += `
        <tr>
            <td>${item.materia}</td>
            <td>${item.primeiroBimestre.toFixed(1).replace(".", ",")}</td>
            <td>${item.segundoBimestre.toFixed(1).replace(".", ",")}</td>
            <td>${item.media.toFixed(1).replace(".", ",")}</td>
            <td>${item.frequencia}</td>
            <td class="${item.situacao === "Aprovado" ? "aprovado" : "reprovado"}">${item.situacao}</td>
        </tr>
    `;
});
