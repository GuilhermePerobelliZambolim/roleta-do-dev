import express from "express";
import desafios from "./data/arquivosDesafios.js";
import { acharDesafio, sortearDesafio } from "./utils/desafios.js";
const app = express();

app.use(express.json());

// Retorna todos os desafios
app.get("/desafios", (req, res) => {
  res.json(desafios);
});

// Retorna desafios por linguagem e dificuldade
app.get("/desafios/:linguagem/:dificuldade", (req, res) => {
  const { linguagem, dificuldade } = req.params;

  const desafio = desafios[linguagem]?.dificuldades?.[dificuldade];

  if (!desafio) {
    return res.status(404).json({
      message: "Desafio não encontrado!",
    });
  }

  res.json(desafio);
});

app.get("/desafios/:linguagem/:dificuldade/sortear", (req, res) => {
  const { linguagem, dificuldade } = req.params;
  const desafio1 = acharDesafio(linguagem, dificuldade);
  const desafioSorteado = sortearDesafio(desafio1);

  if (!desafioSorteado) {
    res.status(404).json({ message: "Not found!" });
  } else {
    res.status(200).json(desafioSorteado);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
