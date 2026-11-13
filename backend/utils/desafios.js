
import desafios from "../data/arquivosDesafios.js";

export function acharDesafio(linguagem, dificuldade) {
  if (!desafios[linguagem] || !desafios[linguagem].dificuldades[dificuldade]) {
    return null;
  }

  return desafios[linguagem].dificuldades[dificuldade];
}

export function sortearDesafio(desafioFiltrados) {
  if (!desafioFiltrados || desafioFiltrados.length === 0) {
    return null;
  }

  const quantidade = desafioFiltrados.length;
  const indiceAleatorio = Math.floor(Math.random() * quantidade);

  return desafioFiltrados[indiceAleatorio];
}
