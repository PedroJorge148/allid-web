import { Typography } from '@mui/material'

export function RegDocuments() {
  return (
    <div>
      <div className="flex flex-col w-[35%] m-auto mt-10">
        <Typography className="font-bold text-4xl">
          Cadastro de informações {'->'} Documentos
        </Typography>
        <div className="flex p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="doc_file" className="font-semibold">
                Arquivo (.pdf, .jpg, .jpeg, .png)
              </label>
              <input
                type="file"
                id="doc_file"
                name="doc_file"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="doc_desc">Descrição</label>
              <input
                type="text"
                id="doc_desc"
                name="doc_desc"
                placeholder="Comprovante de residência"
                className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="doc_visible">Visibilidade</label>
              <select
                name="doc_visible"
                id="doc_visible"
                className="bg-zinc-900 py-2 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              >
                <option value="">Selecione</option>
                <option value="Público">Público</option>
                <option value="Privado">Privado</option>
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
