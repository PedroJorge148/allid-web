import { Barricade, Checks, Database, UserGear } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div className="flex items-center justify-around gap-16 flex-wrap p-8">
      <div className="max-w-md border rounded-lg px-4 py-8 bg-zinc-50 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Database className="h-10 w-10 text-blue-600" weight="fill" />
            <h2 className="text-gray-800 text-xl">Buscar dados</h2>
          </div>
          <NavLink
            to="#"
            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          >
            Acessar
          </NavLink>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
        <p className="mt-3 text-sm text-gray-700">
          Visualize, cadastre, atualize e remova usuários. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="max-w-md border rounded-lg px-4 py-8 bg-zinc-50 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Checks className="h-10 w-10 text-blue-600" weight="fill" />
            <h2 className="text-gray-800 text-xl">Solicitar dados</h2>
          </div>
          <NavLink
            to="#"
            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          >
            Acessar
          </NavLink>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
        <p className="mt-3 text-sm text-gray-700">
          Visualize, cadastre, atualize e remova usuários. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="max-w-md border rounded-lg px-4 py-8 bg-zinc-50 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <UserGear className="h-10 w-10 text-blue-600" weight="fill" />
            <h2 className="text-gray-800 text-xl">Editar perfil</h2>
          </div>
          <NavLink
            to="#"
            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          >
            Acessar
          </NavLink>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
        <p className="mt-3 text-sm text-gray-700">
          Visualize, cadastre, atualize e remova usuários. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="max-w-md border rounded-lg px-4 py-8 bg-zinc-50 shadow hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Barricade className="h-10 w-10 text-blue-600" weight="fill" />
            <h2 className="text-gray-800 text-xl">Revogar dados</h2>
          </div>
          <NavLink
            to="#"
            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          >
            Acessar
          </NavLink>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
        <p className="mt-3 text-sm text-gray-700">
          Visualize, cadastre, atualize e remova usuários. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}
