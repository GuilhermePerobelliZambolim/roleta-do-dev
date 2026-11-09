export default function Header() {
  return (
    <header className="my-2 w-full bg-[#0F1410] p-2">
      <div className="flex items-center justify-between border-b border-[#A4AC9D] px-[6px] py-2">
        <div className="flex items-center gap-2">
          <p className="flex items-center justify-center rounded-xl bg-[#B4F542] p-[0.6rem] text-sm text-[#0F1410]">
            &lt;/&gt;
          </p>

          <div>
            <h2 className="m-0 text-2xl font-bold text-[#E5E7EB]">
              Roleta-do-dev
            </h2>

            <p className="m-0 text-[0.6rem] text-[#A4AC9D]">
              DESAFIOS DE PROGRAMAÇÃO
            </p>
          </div>
        </div>

        <span className="inline-block rounded-[0.6rem] border border-[#B4F542] px-[9px] py-[5px] text-[0.8rem] text-[#B4F542]">
          v1
        </span>
      </div>
    </header>
  );
}
