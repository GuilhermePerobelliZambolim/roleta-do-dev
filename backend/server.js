import cors from "cors";
import express from "express";
import { prisma } from "./database/prisma.js";
const app = express();

app.use(cors());
app.use(express.json());

// Retorna todos os desafios
app.get("/desafios", async (req, res) => {
  try {
    const desafios = await prisma.challenge.findMany();

    res.json(desafios);
  } catch (error) {
    console.error("Erro ao consultar os desafios:", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

// Teste inicial
app.get("/teste-banco", async (req, res) => {
  try {
    const quantidade = await prisma.challenge.count();

    res.json({
      total: quantidade,
    });
  } catch (error) {
    console.error("Erro ao consultar o banco:", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

// Teste 1.5
app.get("/listar-desafios", async (req, res) => {
  try {
    const desafios = await prisma.challenge.findMany();

    res.json(desafios);
  } catch (error) {
    console.error("Erro ao consultar!", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

// Teste 1.6
app.post("/teste-cadastro", async (req, res) => {
  try {
    const desafio = await prisma.challenge.create({
      data: {
        id: "desafio-921219872816721782ty",
        titulo: "Estudar",
        categoria: "javascript",
        descricao: "fazer uma calculadora sem utilizar eval()",
        dica: "pesquise a documentação!",
        tempoEstimado: 50,
        linguagem: "javascript",
        dificuldade: "iniciante",
      },
    });

    res.status(201).json(desafio);
  } catch (error) {
    console.error("Erro ao cadastrar!", error);

    res.status(500).json({
      message: "Erro ao cadastrar o desafio no banco de dados!",
    });
  }
});

// teste 1.7
app.get("/teste-filtro", async (req, res) => {
  try {
    const filtro = await prisma.challenge.findMany({
      where: {
        linguagem: "javascript",
        dificuldade: "iniciante",
      },
    }); // final da const filtro
    res.status(200).json(filtro);
  } catch (error) {
    console.error("Erro ao filtrar!", error);

    res.status(500).json({
      message: "Erro ao filtrar o desafio no banco de dados!",
    });
  }
});

// Retorna desafios por linguagem e dificuldade
app.get("/desafios/:linguagem/:dificuldade", async (req, res) => {
  try {
    const { linguagem, dificuldade } = req.params;

    const desafios = await prisma.challenge.findMany({
      where: {
        linguagem: linguagem,
        dificuldade: dificuldade,
      },
    });

    if (desafios.length === 0) {
      return res.status(404).json({
        message: "Desafio não encontrado!",
      });
    }

    res.json(desafios);
  } catch (error) {
    console.error("Erro ao filtrar desafios:", error);

    res.status(500).json({
      message: "Erro ao consultar o banco de dados!",
    });
  }
});

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
      res.status(404).json({ message: "Not found!" });
    } else {
      res.status(200).json(resultado[0]);
    }
  } catch (error) {
    console.error("Erro ao sortear desafio:", error);
    res.status(500).json({
      message: "Erro ao buscar desafio no banco de dados!",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
