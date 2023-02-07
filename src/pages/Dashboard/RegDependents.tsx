// import { zodResolver } from '@hookform/resolvers/zod'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
import InputMask from 'react-input-mask'

/* const regDataUserSchema = z.object({
  fullName: z.string(),
  birth: z.date(),
  email: z.string().email(),
  contatc: z.string(),
  maritalState: z.string(),
  schoolDegree: z.string(),
  genre: z.string(),
  socialName: z.string().optional(),
  cpf: z.string(),
  rg: z.string(),
  cnh: z.string(),
  streetAdrress: z.string(),
  city: z.string(),
  country: z.string(),
  cep: z.string(),
})

type RegDataUserFormInputs = z.infer<typeof regDataUserSchema>
*/
export function RegDependents() {
  /*
  const { register, handleSubmit, watch } = useForm<RegDataUserFormInputs>({
    resolver: zodResolver(regDataUserSchema),
  })

  function handleUserFormSubmit(data: RegDataUserFormInputs) {
    console.log(data)
  } */

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
              {/* <pre className="flex flex-wrap">
                {JSON.stringify(watch(), null, 2)}
              </pre> */}
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2">
          <form>
            <div className="overflow-hidden shadow sm:rounded-md mr-4">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 mx-auto">
                  <div className="col-span-6 sm:col-span-6">
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
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="emergency-contact"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Contato
                    </label>
                    <InputMask
                      mask="(99) 99999-9999"
                      type="text"
                      id="emergency-contact"
                      autoComplete="emergency-contact"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                      type="text"
                      id="covid-code"
                      autoComplete="covid-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      maxLength={11}
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
