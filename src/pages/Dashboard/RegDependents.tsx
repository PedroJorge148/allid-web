import { Typography } from '@mui/material'

export function RegDependents() {
  return (
    <div>
      <div className="flex flex-col w-[35%] m-auto mt-10">
        <Typography className="font-bold">
          Cadastro de informações {'->'} Dependentes
        </Typography>
        <div className="flex p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="font-semibold">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Antonio Levi Parente"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="data_nasc" className="font-semibold">
                  Data de nascimento
                </label>
                <input
                  type="date"
                  id="data_nasc"
                  name="data_nasc"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contato" className="font-semibold">
                  Contato
                </label>
                <input
                  type="text"
                  id="contato"
                  name="contato"
                  placeholder="(00) 00000-0000"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="rg" className="font-semibold">
                  RG
                </label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  placeholder="0000000000-0"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cpf" className="font-semibold">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm placeholder:text-zinc-400"
                />
              </div>
            </div>
            <footer className="flex justify-end mt-4">
              <button
                type="submit"
                className="flex items-center gap-3 bg-blue-500 px-5 h-12 rounded-md font-semibold text-white"
              >
                Cadastrar
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}
