import type { Linguagem, Dificuldade } from "../types";

interface SeletorDesafioProps {
  onGirar: () => void;
  linguagem: Linguagem;
  dificuldade: Dificuldade;
  onLinguagemChange: (novoValor: Linguagem) => void;
  onDificuldadeChange: (novaDificuldade: Dificuldade) => void;
}

export default function SeletorDesafio({
  onGirar,
  linguagem,
  dificuldade,
  onLinguagemChange,
  onDificuldadeChange,
}: SeletorDesafioProps) {
  
  return (
    <div className="flex w-full flex-col">
      <label htmlFor="linguagem" className="mb-2 text-[0.9rem] text-[#E8E4E5]">
        Linguagem
      </label>

      <select
        id="linguagem"
        value={linguagem}
        onChange={(event) => onLinguagemChange(event.target.value)}
        className="my-[0.4rem] w-full rounded-[0.4rem] border border-[#343F2D] bg-[#1C231A] p-[0.7rem] text-[0.7rem] text-[#E8E4E5] outline-none"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
        <option value="c++">C++</option>
        <option value="php">PHP</option>
      </select>

      <label
        htmlFor="dificuldade"
        className="mb-2 mt-2 text-[0.9rem] text-[#E8E4E5]"
      >
        Dificuldade
      </label>

      <select
        id="dificuldade"
        value={dificuldade}
        onChange={(event) => onDificuldadeChange(event.target.value)}
        className="my-[0.4rem] w-full rounded-[0.4rem] border border-[#343F2D] bg-[#1C231A] p-[0.7rem] text-[0.7rem] text-[#E8E4E5] outline-none"
      >
        <option value="iniciante">Iniciante</option>
        <option value="estagiario">Estagiário</option>
        <option value="junior">Júnior</option>
        <option value="pleno">Pleno</option>
        <option value="senior">Sênior</option>
        <option value="dark">Mas que P@#..</option>
      </select>

      <div className="mt-4 w-full">
        <button
          type="button"
          onClick={onGirar}
          className="w-full rounded-[0.4rem] border-0 bg-[#B4F542] p-4 text-sm text-[#0F1410] outline-none transition hover:brightness-85 cursor-pointer"
        >
          🔃︎ GIRAR A ROLETA
        </button>
      </div>
    </div>
  );
}
