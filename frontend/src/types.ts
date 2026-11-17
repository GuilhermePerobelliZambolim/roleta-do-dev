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
  titulo: string;
  categoria: string;
  descricao: string;
  dica: string;
  tempoEstimado: number;
  linguagem: Linguagem;
  dificuldade: Dificuldade;
};