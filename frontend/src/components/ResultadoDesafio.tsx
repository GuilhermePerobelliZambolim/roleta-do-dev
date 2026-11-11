import type { Desafio } from "../types";

interface ResultadoDesafioProps {
  desafio: Desafio | null;
  tempoRestante: number;
}

export default function ResultadoDesafio({
  desafio,
  tempoRestante,
}: ResultadoDesafioProps) {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  return (
    <section className="mt-4 flex w-full flex-col gap-0 rounded-[0.6rem] border border-[#343F2D] bg-[#1C231A]">
      <div className="mb-0 px-4 pt-4 pb-0">
        <h3 className="mb-4 text-[1rem] font-bold text-[#E8E4E5]">
          <span className="material-symbols-outlined mr-1 align-middle text-base text-[#B4F542]">
            track_changes
          </span>

          {desafio ? "Seu desafio" : "Seu desafio aparecerá aqui"}
        </h3>

        <p className="text-[0.75rem] text-[#A4AC9D]">
          {desafio?.enunciado ||
            "O enunciado do exercício sorteado aparecerá nesta área."}
        </p>

        <hr className="my-[0.4rem] h-px border-0 border-b border-[#A4AC9D]" />
      </div>

      <div className="mt-[0.2rem] px-4 pt-0 pb-0">
        <h3 className="mb-[0.4rem] text-[1rem] font-bold text-[#E8E4E5]">
          <span className="material-symbols-outlined mr-1 align-middle text-base text-[#B4F542]">
            lightbulb
          </span>
          Dica
        </h3>

        <p className="mb-[0.6rem] text-[0.75rem] text-[#A4AC9D]">
          {desafio?.dica || "Uma pista para ajudar você a resolver o desafio."}
        </p>

        <h3 className="mb-[0.4rem] text-[1rem] font-bold text-[#E8E4E5]">
          <span className="material-symbols-outlined mr-1 align-middle text-base text-[#B4F542]">
            schedule
          </span>
          Tempo estimado
        </h3>

        <p className="mb-[0.6rem] text-[0.75rem] text-[#A4AC9D]">
          {!desafio
            ? "O tempo previsto para concluir o desafio."
            : tempoRestante === 0
              ? "Tempo esgotado! Tente novamente. "
              : `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`}
        </p>
      </div>
    </section>
  );
}
