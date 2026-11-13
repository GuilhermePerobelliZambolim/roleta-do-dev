export type Linguagem =
  | "javascript"
  | "python"
  | "java"
  | "csharp"
  | "cpp"
  | "php";

export type Dificuldade =
  | "iniciante"
  | "estagiario"
  | "junior"
  | "pleno"
  | "senior"
  | "dark";

export type Desafio = {
  id: string;
  descricao: string;
  dica: string;
  tempoEstimado: number;
};
