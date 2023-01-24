import { UserCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div className="p-8">
      <div className="max-w-sm border rounded-lg p-4 bg-zinc-50 shadow hover:shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <UserCircle className="h-10 w-10 text-blue-600" weight="fill" />
            <h2 className="text-gray-800 text-xl">Usuários</h2>
          </div>
          <NavLink
            to="#"
            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          >
            Acessar
          </NavLink>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
        <p className="mt-3 text-sm text-gray-700">
          Visualize, cadastre, atualize e remova usuários. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}
