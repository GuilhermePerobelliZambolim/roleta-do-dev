export default function Footer() {
  return (
    <footer className="mt-2 w-full">
      <div className="flex w-full items-center justify-between">
        <span className="text-[0.7rem] text-[#A4AC9D]">ROLETA-DO-DEV</span>

        <p className="text-[0.7rem] text-[#B4F542]">
          APRENDA ⭢ PRATIQUE ⭢ EVOLUA
        </p>
      </div>

      <div className="mt-5 flex flex-col items-center gap-2 border-t border-[#343F2D] pt-4">
        <p className="text-xs text-[#A4AC9D]">
          Desenvolvido por{" "}
          <span className="font-semi text-[#9b8ad1]">
            Guilherme Perobelli Zambolim
          </span>
        </p>

        <p className="text-[0.65rem] text-[#A4AC9D]">
          © 2026 Roleta do DEV. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
