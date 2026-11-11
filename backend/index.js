import { exibirMensagem, exibirBoasVindas } from "./utils/mensagem.js";
import recepcao from "./hotel.js";
import desafios from "./data/desafios.js";

exibirMensagem();
exibirBoasVindas();
console.log(recepcao.mensagem + recepcao.nome);

function acharDesafio(linguagem, dificuldade) {
  const desafiosFiltrados = desafios.filter((desafio) => {
    return (
      desafio.linguagem === linguagem && desafio.dificuldade === dificuldade
    );
  });

  return desafiosFiltrados;
}

function sortearDesafio(desafioFiltrados) {
  if (desafioFiltrados.length === 0) {
    return null;
  }

  const quantidade = desafioFiltrados.length;

  const indiceAleatorio = Math.floor(Math.random() * quantidade);

  return desafioFiltrados[indiceAleatorio];
}

const resultado = acharDesafio("javascript", "iniciante");
const desafioSorteado = sortearDesafio(resultado);

console.log(desafioSorteado);

console.log(resultado);

export { acharDesafio, sortearDesafio };
