import Header from "./components/Header";
import Footer from "./components/Footer";
import SeletorDesafio from "./components/SeletorDesafio";
import ResultadoDesafio from "./components/ResultadoDesafio";
import { useState, useEffect } from "react";
import type { Linguagem, Dificuldade, Desafio } from "./types";


function App() {
  const [linguagem, setLinguagemSelecionada] =
    useState<Linguagem>("javascript");
  const [dificuldade, setDificuldadeSelecionada] =
    useState<Dificuldade>("iniciante");
  const [desafio, setDesafio] = useState<Desafio | null>(null);
  const [tempoRestante, setTempoRestante] = useState(0);

  useEffect(() => {
    if (tempoRestante <= 0) {
      return;
    }

    const intervalo = setInterval(() => {
      setTempoRestante((tempoAnterior) => tempoAnterior - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tempoRestante]);

  function girarRoleta() {
    const desafiosFiltrados = desafios.filter((desafio) => {
      return (
        desafio.dificuldade === dificuldade && desafio.linguagem === linguagem
      );
    });
    if (desafiosFiltrados.length === 0) {
      console.log("Nenhum desafio encontrado!");
      return;
    }

    const quantidade = desafiosFiltrados.length;

    const indiceAleatorio = Math.floor(Math.random() * quantidade);

    const desafioSorteado = desafiosFiltrados[indiceAleatorio];
    setDesafio(desafioSorteado);
    setTempoRestante(desafioSorteado.tempo * 60);
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0F1410] px-4 py-6">
      <div className="flex w-full max-w-[42rem] flex-col">
        <Header />

        <div className="mt-[1.3rem] mb-8 flex w-full flex-col items-center text-center">
          <h1 className="mb-2 text-[30px] font-bold leading-tight text-[#B4F542]">
            HORA DE CODAR!
          </h1>

          <h3 className="mb-2 text-base font-bold text-[#E8E4E5]">
            APRENDA PRATICANDO!
          </h3>

          <p className="text-[0.7rem] text-[#A4AC9D]">
            Escolha suas configurações e deixe a roleta decidir seu próximo
            desafio.
          </p>
        </div>

        <main className="flex w-full flex-col">
          <SeletorDesafio
            onGirar={girarRoleta}
            onLinguagemChange={setLinguagemSelecionada}
            onDificuldadeChange={setDificuldadeSelecionada}
            linguagem={linguagem}
            dificuldade={dificuldade}
          />

          <ResultadoDesafio desafio={desafio} tempoRestante={tempoRestante} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;