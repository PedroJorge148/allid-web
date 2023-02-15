import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const regDataPetsSchema = z.object({
  petName: z.string(),
  race: z.string(),
  type: z.string(),
  vaccined: z.enum(['Sim', 'Não']),
})

type RegDataPetsFormInputs = z.infer<typeof regDataPetsSchema>

export function RegPets() {
  const { register, handleSubmit } = useForm<RegDataPetsFormInputs>({
    resolver: zodResolver(regDataPetsSchema),
  })

  function handlePetsFormSubmit(data: RegDataPetsFormInputs) {
    console.log(data)
  }

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 white py-4">
        <div className="md:col-span-1">
          <div className="px-4 sm:p-4">
            <h3 className="text-lg font-bold leading-6 text-gray-800">
              Cadastrar dados do pet
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Confira os dados antes de cadastrar.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2">
          <form onSubmit={handleSubmit(handlePetsFormSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md mr-4">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 mx-auto">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="pet-name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Nome do pet
                    </label>
                    <input
                      type="text"
                      id="pet-name"
                      autoComplete="pet-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('petName')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="race"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Raça
                    </label>
                    <input
                      type="text"
                      id="race"
                      autoComplete="race"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('race')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="type"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Tipo
                    </label>
                    <input
                      type="text"
                      id="type"
                      autoComplete="type"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('type')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="visibility"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Vacinado
                    </label>
                    <select
                      id="visibility"
                      autoComplete="visibility"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('vaccined')}
                    >
                      <option>Selecione</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
