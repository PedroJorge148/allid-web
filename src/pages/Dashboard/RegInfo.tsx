import { Typography } from '@mui/material'

export function RegInfo() {
  return (
    <>
      <div className="flex flex-col w-[80%] m-auto mt-10">
        <Typography className="font-bold">Cadastro de informações</Typography>
        <div className="grid grid-cols-2 p-6 gap-8 bg-zinc-700 md:grid-cols-4 rounded-lg border-b-2-cyan-500">
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Cadastro de dados gerais
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Dados de saúde
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Dados profissionais
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Documentos
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Redes Sociais
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Dados escolares
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Cadastro de dependentes
          </a>
          <a
            className="flex items-center justify-center m-2 p-6 rounded-lg bg-teal-300 text-black"
            href="#"
          >
            Cadastro de pets
          </a>
        </div>
      </div>
    </>
  )
}
