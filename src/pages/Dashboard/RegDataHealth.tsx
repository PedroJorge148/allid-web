import { Typography } from '@mui/material'

export function RegDataHealth() {
  return (
    <div>
      <div className="flex flex-col w-[35%] m-auto mt-10">
        <Typography className="font-bold text-center">
          Cadastro de informações {'->'} Dados de saúde
        </Typography>
        <div className="flex p-6 mb-4 bg-gray-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="tipo_sanguineo" className="font-semibold">
                Tipo sanguíneo
              </label>
              <input
                type="text"
                id="tipo_sanguineo"
                name="tipo_sanguineo"
                placeholder="AB+"
                className="bg-zinc-900 py-1 px-2 w-11 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="contato_emergencia" className="font-semibold">
                  Contato de emergencia
                </label>
                <input
                  type="text"
                  id="contato_emergencia"
                  name="contato_emergencia"
                  placeholder="(00) 00000-0000"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cod_covid" className="font-semibold">
                  Código covid
                </label>
                <input
                  type="text"
                  id="cod_covid"
                  name="cod_covid"
                  placeholder="AB09.S"
                  className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="encaminha_hospital" className="font-semibold">
                Hospital a ser encaminhado
              </label>
              <input
                type="text"
                id="encaminha_hospital"
                name="encaminha_hospital"
                placeholder="Hospital Regional de Sobral"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="plano_saude" className="font-semibold">
                  Plano de saúde
                </label>
                <select
                  name="plano_saude"
                  id="plano_saude"
                  className="bg-zinc-900 py-2 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                >
                  <option value="">Selecione</option>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="alergias" className="font-semibold">
                  Alergias
                </label>
                <select
                  name="alergias"
                  id="alergias"
                  className="bg-zinc-900 py-2 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                >
                  <option value="">Selecione</option>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
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
      <div />
    </div>
  )
}
