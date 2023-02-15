import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputMask from 'react-input-mask'

const regDataDepedentSchema = z.object({
  dependentName: z.string(),
  dependentBirth: z.date(),
  dependentContact: z.string(),
  dependentCpf: z.string().min(14, 'Digite um CPF válido'),
  dependentRG: z.string().max(11),
})

type RegDataDependentFormInputs = z.infer<typeof regDataDepedentSchema>

export function RegDependents() {
  const { register, handleSubmit } = useForm<RegDataDependentFormInputs>({
    resolver: zodResolver(regDataDepedentSchema),
  })

  function handleDependentFormSubmit(data: RegDataDependentFormInputs) {
    console.log(data)
  }

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 white py-4">
        <div className="md:col-span-1">
          <div className="px-4 sm:p-4">
            <h3 className="text-lg font-bold leading-6 text-gray-800">
              Cadastrar dados de dependentes
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Confira os dados antes de cadastrar.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2">
          <form onSubmit={handleSubmit(handleDependentFormSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md mr-4">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 mx-auto">
                  <div className="col-span-6">
                    <label
                      htmlFor="dependent-name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Nome do dependente
                    </label>
                    <input
                      type="text"
                      id="dependent-name"
                      autoComplete="dependent-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('dependentName')}
                    />
                  </div>
                  <div className="col-span-6 md:col-span-3">
                    <label
                      htmlFor="dependent-birth"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      id="dependent-birth"
                      autoComplete="dependent-birth"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('dependentBirth', { valueAsDate: true })}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="dependent-contact"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Contato
                    </label>
                    <InputMask
                      mask="(99) 99999-9999"
                      type="text"
                      id="dependent-contact"
                      autoComplete="dependent-contact"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('dependentContact')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="covid-code"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      CPF
                    </label>
                    <InputMask
                      mask="999.999.999.99"
                      type="text"
                      id="covid-code"
                      autoComplete="covid-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('dependentCpf')}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="covid-code"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      RG
                    </label>
                    <input
                      type="number"
                      id="covid-code"
                      autoComplete="covid-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      maxLength={11}
                      {...register('dependentRG')}
                    />
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
