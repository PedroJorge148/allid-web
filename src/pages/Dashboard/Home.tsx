import { Typography } from '@mui/material'

export function Home() {
  return (
    <div>
      <div className="flex m-auto w-[80%] mt-10 items-end">
        <Typography>Hey, Pedro! Você está no All ID</Typography>
      </div>
      <div className="flex justify-around flex-wrap w-[80%] m-auto bg-zinc-700">
        <a
          className="flex items-center justify-center h-20 w-[30%] m-10 rounded-lg bg-teal-300 text-black "
          href="#"
        >
          Buscar dados
        </a>
        <a
          className="flex items-center justify-center h-20 w-[30%] m-10 rounded-lg bg-teal-300 text-black "
          href="#"
        >
          Solicitar dados
        </a>
        <a
          className="flex items-center justify-center h-20 w-[30%] m-10 rounded-lg bg-teal-300 text-black "
          href="#"
        >
          Editar perfil
        </a>
        <a
          className="flex items-center justify-center h-20 w-[30%] m-10 rounded-lg bg-teal-300 text-black "
          href="#"
        >
          Revogar dados
        </a>
      </div>
    </div>
  )
}
