import cors from "cors";
import express from "express";
import { prisma } from "./database/prisma.js";

const app = express();

app.use(
  cors({
    origin: ["https://roleta-do-dev.netlify.app", "http://localhost:5173"],
  }),
);
app.use(express.json());

// Retorna todos os desafios
app.get("/desafios", async (req, res) => {
  try {
    const desafios = await prisma.challenge.findMany();

    res.status(200).json(desafios);
  } catch (error) {
    console.error("Erro ao consultar os desafios:", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

// Retorna desafios por linguagem e dificuldade
app.get("/desafios/:linguagem/:dificuldade", async (req, res) => {
  try {
    const { linguagem, dificuldade } = req.params;

    const desafios = await prisma.challenge.findMany({
      where: {
        linguagem,
        dificuldade,
      },
    });

    if (desafios.length === 0) {
      return res.status(404).json({
        message: "Desafio não encontrado!",
      });
    }

    res.status(200).json(desafios);
  } catch (error) {
    console.error("Erro ao filtrar desafios:", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

// Sorteia um desafio por linguagem e dificuldade
app.get("/desafios/:linguagem/:dificuldade/sortear", async (req, res) => {
  try {
    const { linguagem, dificuldade } = req.params;

    const resultado = await prisma.$queryRaw`
      SELECT *
      FROM "Challenge"
      WHERE "linguagem" = ${linguagem}
      AND "dificuldade" = ${dificuldade}
      ORDER BY RANDOM()
      LIMIT 1
    `;

    if (resultado.length === 0) {
      return res.status(404).json({
        message: "Desafio não encontrado!",
      });
    }

    res.status(200).json(resultado[0]);
  } catch (error) {
    console.error("Erro ao sortear desafio:", error);

    res.status(500).json({
      message: "Erro ao buscar desafio no banco de dados!",
    });
  }
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
