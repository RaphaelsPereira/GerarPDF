var pdf = require("html-pdf");

var nomeDoUsuario = "Raphael Sergio Pereira Cava";
var curso = "Desenvolvimento de Sistemas";
var instituicao = "SENAI";
var logoUrl = "https://upload.wikimedia.org/wikipedia/commons/5/57/SENAI_logo.png";

var materias = [
    { nome: "Matemática", nota: 8.5 },
    { nome: "Programação", nota: 9.0 },
    { nome: "Banco de Dados", nota: 8.7 },
    { nome: "Redes de Computadores", nota: 8.0 },
    { nome: "Desenvolvimento Web", nota: 9.3 },
    { nome: "Sistemas Operacionais", nota: 7.8 }
];

var conteudoMaterias = materias.map(materia => {
    return `<p>${materia.nome}: ${materia.nota}</p>`;
}).join("");

var conteudo = `
<div style='font-family: Arial, sans-serif;'>
    <h1 style='color: #0033A0'>${instituicao} - Boletim Escolar</h1>
    <hr>
    <img src='${logoUrl}' style='width: 150px;'>
    <h2>Aluno: ${nomeDoUsuario}</h2>
    <h3>Curso: ${curso}</h3>
    <hr>
    <h3>Notas das Matérias:</h3>
    ${conteudoMaterias}
</div>
`;

pdf.create(conteudo, {}).toFile("./boletim_escolar.pdf", (err, res) => {
    if (err) {
        console.log("UM ERRO ACONTECEU: (", err);
    } else {
        console.log("PDF gerado com sucesso!", res);
    }
});
