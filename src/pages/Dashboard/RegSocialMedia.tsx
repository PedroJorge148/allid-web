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
export function RegSocialMedia() {
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
              Cadastrar redes sociais
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
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Instagram
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://instagram.com/
                      </span>
                      <input
                        type="text"
                        id="instagram"
                        autoComplete="instagram"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Facebook
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://facebook.com/
                      </span>
                      <input
                        type="text"
                        id="facebook"
                        autoComplete="facebook"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Linkedin
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://linkedin.com/
                      </span>
                      <input
                        type="text"
                        id="linkedin"
                        autoComplete="linkedin"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Twitter
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://twitter.com/
                      </span>
                      <input
                        type="text"
                        id="twitter"
                        autoComplete="twitter"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="twitch"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Twitch
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://twitch.tv/
                      </span>
                      <input
                        type="text"
                        id="twitch"
                        autoComplete="twitch"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="youtube"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Youtube
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://youtube.com/
                      </span>
                      <input
                        type="text"
                        id="youtube"
                        autoComplete="youtube"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Tik Tok
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        https://www.tiktok.com/@
                      </span>
                      <input
                        type="text"
                        id="facebook"
                        autoComplete="facebook"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Kwai
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <input
                        type="text"
                        id="facebook"
                        autoComplete="facebook"
                        placeholder="@usuário"
                        className="block w-full flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
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
