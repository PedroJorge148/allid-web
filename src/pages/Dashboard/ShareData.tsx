export function ShareData() {
  return (
    <div>
      <div className="flex flex-col w-[65%] h-screen m-auto mt-10">
        <label className="py-3 font-bold">Compartilhamento de dados</label>
        <div className="flex p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <div className="grid grid-rows-2 gap-3">
            <a
              href="#"
              className="bg-zinc-100 text-black py-8 px-4 rounded-md text-sm text-center hover:bg-zinc-300 transition-colors"
            >
              Listar Pendentes
            </a>
            <a
              href="#"
              className="bg-zinc-100 text-black py-8 px-4 rounded-md text-sm text-center hover:bg-zinc-300 transition-colors"
            >
              Remover compartilhamento
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
