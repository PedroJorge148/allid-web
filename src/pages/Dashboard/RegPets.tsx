import { Typography } from '@mui/material'

export function RegPets() {
  return (
    <div>
      <div className="flex flex-col w-[35%] m-auto mt-10">
        <Typography className="font-bold">
          Cadastro de informações {'->'} Pets
        </Typography>
        <div className="flex p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome_pet" className="font-semibold">
                Nome do pet
              </label>
              <input
                type="text"
                id="nome_pet"
                name="nome_pet"
                placeholder="Rex"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="raca_pet" className="font-semibold">
                Raça
              </label>
              <input
                type="text"
                id="raca_pet"
                name="raca_pet"
                placeholder="Labrador"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tipo_pet" className="font-semibold">
                Tipo
              </label>
              <input
                type="text"
                id="tipo_pet"
                name="tipo_pet"
                placeholder="Cachorro"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="font-semibold">
                Vacinado?
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
