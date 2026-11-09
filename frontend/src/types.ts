export type Linguagem =
  | "javascript"
  | "python"
  | "java"
  | "csharp"
  | "c++"
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
  linguagem: Linguagem;
  dificuldade: Dificuldade;
  enunciado: string;
  dica: string;
  tempo: number;
};