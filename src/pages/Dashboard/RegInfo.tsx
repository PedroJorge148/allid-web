import {
  Baby,
  Briefcase,
  ChatsCircle,
  Files,
  Folders,
  Heartbeat,
  PawPrint,
  Student,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

const cards = [
  {
    title: 'Dados gerais',
    Icon: <Folders className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regdatauser',
  },
  {
    title: 'Dados de saúde',
    Icon: <Heartbeat className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regdatahealth',
  },
  {
    title: 'Dados profissionais',
    Icon: <Briefcase className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/#',
  },
  {
    title: 'Documentos',
    Icon: <Files className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regdocuments',
  },
  {
    title: 'Redes sociais',
    Icon: <ChatsCircle className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regsocialmedia',
  },
  {
    title: 'Dados escolares',
    Icon: <Student className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/#',
  },
  {
    title: 'Dependentes',
    Icon: <Baby className="h-10 w-10 text-blue-600" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regdependents',
  },
  {
    title: 'Pets',
    Icon: <PawPrint className="h-10 w-10 text-blue-600" weight="fill" />,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, incidunt?',
    href: '/dashboard/regpets',
  },
]

export function RegInfo() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-8 p-8">
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              className="max-w-xs border rounded-lg px-4 py-4 bg-zinc-50 shadow hover:shadow-lg"
            >
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center gap-1">
                  {card.Icon}
                  <h2 className="text-gray-800 text-xl text-center">
                    {card.title}
                  </h2>
                </div>
              </div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
              <p className="text-center my-3 text-sm text-gray-700">
                {card.description}
              </p>
              <NavLink
                to={card.href}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
              >
                Acessar
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}
