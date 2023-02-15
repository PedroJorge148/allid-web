// import { zodResolver } from '@hookform/resolvers/zod'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'

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
export function RegDocuments() {
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
              Cadastrar dados de Documento
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Confira os dados antes de cadastrar.
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2">
          <form>
            <div className="overflow-hidden shadow sm:rounded-md mr-4">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 mx-auto">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="description-document"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Descrição do documento
                    </label>
                    <input
                      type="text"
                      id="description-document"
                      autoComplete="description-document"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="visibility"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Visibilidade do arquivo
                    </label>
                    <select
                      id="visibility"
                      autoComplete="visibility"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option selected disabled>
                        Selecione
                      </option>
                      <option value="0">Público</option>
                      <option value="1">Privado</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Arquivo do documento
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                          >
                            <span>Envie um arquivo</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">ou arraste e solte</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, PDF até 10MB
                        </p>
                      </div>
                    </div>
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
