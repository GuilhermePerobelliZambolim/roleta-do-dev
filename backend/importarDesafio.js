import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "./database/prisma.js";

// Descobre o caminho da pasta atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const arquivos = [
    "javascript.json",
    "python.json",
    "java.json",
    "csharp.json",
    "cpp.json",
    "php.json",
  ];

  // Array que receberá todos os desafios
  const todosDesafios = [];

  const camposObrigatorios = [
    "id",
    "titulo",
    "categoria",
    "descricao",
    "dica",
    "tempoEstimado",
    "linguagem",
    "dificuldade",
  ];

  for (const arquivo of arquivos) {
    const caminhoArquivo = path.join(__dirname, "data", arquivo);

    console.log("Arquivo encontrado:", arquivo);

    // Lê o arquivo atual
    const conteudo = await fs.readFile(caminhoArquivo, "utf-8");

    // Converte JSON para objeto JavaScript
    const dados = JSON.parse(conteudo);

    console.log("Linguagem:", dados.linguagem);

    // Percorre as dificuldades
    for (const dificuldade of Object.keys(dados.dificuldades)) {
      const desafios = dados.dificuldades[dificuldade];

      console.log(dificuldade, "Quantidade:", desafios.length);

      // Percorre cada desafio
      for (const desafio of desafios) {
        todosDesafios.push({
          ...desafio,
          linguagem: dados.linguagem,
          dificuldade: dificuldade,
        });
      }
    }
  }

  // Verificar IDs únicos
  const ids = todosDesafios.map((desafio) => desafio.id);
  const idsUnicos = new Set(ids);
  const idsDuplicados = [
    ...new Set(ids.filter((id, index) => ids.indexOf(id) !== index)),
  ];

  // Verificar campos obrigatórios
  let erros = 0;

  for (const desafio of todosDesafios) {
    for (const campo of camposObrigatorios) {
      if (
        desafio[campo] === undefined ||
        desafio[campo] === null ||
        desafio[campo] === ""
      ) {
        console.log("Campo invalido:", campo);
        erros++;
      }
    }
    if (
      !Number.isInteger(desafio.tempoEstimado) ||
      desafio.tempoEstimado <= 0
    ) {
      console.log("Tempo inválido:", desafio.id);
      erros++;
    }
  }

  // Resultado final
  console.log("\n===== RESULTADO DA VALIDAÇÃO =====");

  console.log("Total de desafios:", todosDesafios.length);
  console.log("IDs únicos:", idsUnicos.size);
  console.log("IDs duplicados:", idsDuplicados.length);
  console.log("Campos/validações com erros:", erros);
  if (
    todosDesafios.length === 3600 &&
    idsUnicos.size === 3600 &&
    idsDuplicados.length === 0 &&
    erros === 0
  ) {
    console.log("VALIDAÇÃO APROVADA!");
    const resultado = await prisma.challenge.createMany({
      data: todosDesafios,
      skipDuplicates: true,
    });
    console.log("Desafios inseridos:", resultado.count);
  } else {
    console.log("VALIDAÇÃO REPROVADA! Verifique os dados.");
  }
} catch (erro) {
  console.error("Erro durante a importação:", erro);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
