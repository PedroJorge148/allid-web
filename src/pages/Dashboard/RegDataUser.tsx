import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z } from 'zod'

const regDataUserSchema = z.object({
  fullName: z.string(),
  birth: z.date(),
  email: z.string().email(),
  contatc: z.string(),
  maritalState: z.enum([
    'Solteiro',
    'Casado',
    'Divorciado',
    'Separado',
    'ViViúvoúvo',
  ]),
  schoolDegree: z.string(),
  genre: z.enum(['Masculino', 'Feminino', 'Outro']),
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

export function RegDataUser() {
  const [hasSocialName, setHasSocialName] = useState(false)

  const { register, handleSubmit, watch } = useForm<RegDataUserFormInputs>({
    resolver: zodResolver(regDataUserSchema),
  })

  function handleUserFormSubmit(data: RegDataUserFormInputs) {
    console.log(data)
  }

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 white py-4">
        <div className="md:col-span-1">
          <div className="px-4 sm:p-4">
            <h3 className="text-lg font-bold leading-6 text-gray-800">
              Cadastrar dados gerais
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Confira os dados antes de cadastrar.
            </p>
            <pre className="flex flex-col">
              {JSON.stringify(watch(), null, 2)}
            </pre>
          </div>
        </div>
        <div className="mt-5 md:col-span-2">
          <form onSubmit={handleSubmit(handleUserFormSubmit)}>
            <div className="overflow-hidden shadow sm:rounded-md mr-4">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 mx-auto">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('fullName')}
                    />
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="birth"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      id="birth"
                      autoComplete="birth"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('birth', { valueAsDate: true })}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Endereço de Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('email')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="contact"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Contato
                    </label>
                    <InputMask
                      mask="(99) 99999-9999"
                      type="text"
                      id="contact"
                      autoComplete="contact"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('contatc')}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="maritalState"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Estado civil
                    </label>
                    <select
                      id="maritalState"
                      autoComplete="maritalState"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('maritalState')}
                    >
                      <option value="">Selecione</option>
                      <option value="Solteiro">Solteiro</option>
                      <option value="Casado">Casado</option>
                      <option value="Divorciado">Divorciado</option>
                      <option value="Separado">Separado</option>
                      <option value="Viúvo">Viúvo</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="schoolDegree"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Grau de formação
                    </label>
                    <select
                      id="schoolDegree"
                      autoComplete="schoolDegree"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('schoolDegree')}
                    >
                      <option value="">Selecione</option>
                      <option value="GI_01">Analfabeto</option>
                      <option value="GI_02">
                        Até o 5º ano incompleto do ensino fundamental
                      </option>
                      <option value="GI_03">
                        5º ano completo do ensino fundamental
                      </option>
                      <option value="GI_04">
                        Do 6º ao 9º ano do ensino fundamental incompleto
                      </option>
                      <option value="GI_05">Ensino fundamental completo</option>
                      <option value="GI_06">Ensino médio incompleto</option>
                      <option value="GI_07">Ensino médio completo</option>
                      <option value="GI_08">
                        Educação superior incompleta
                      </option>
                      <option value="GI_09">Educação superior completa</option>
                      <option value="GI_10">Pós-graduação completa</option>
                      <option value="GI_11">Mestrado completo</option>
                      <option value="GI_12">Doutorado completo</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="genre"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Gênero
                    </label>
                    <select
                      id="genre"
                      autoComplete="genre"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('genre')}
                    >
                      <option value="">Selecione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  {hasSocialName && (
                    <div className="col-span-6">
                      <label
                        htmlFor="socialName"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Nome social
                      </label>
                      <input
                        type="text"
                        id="socialName"
                        autoComplete="socialName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        {...register('socialName', { shouldUnregister: true })}
                      />
                    </div>
                  )}
                  <div className="col-span-6">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="remember"
                      checked={hasSocialName}
                      onClick={() => {
                        setHasSocialName(!hasSocialName)
                      }}
                      readOnly
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="remember"
                    >
                      Possui nome social?
                    </label>
                  </div>

                  <div className="col-span-6">
                    <div className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="cpf"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      CPF
                    </label>
                    <InputMask
                      mask="999.999.999-99"
                      type="text"
                      id="cpf"
                      autoComplete="cpf"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('cpf')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="rg"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      RG
                    </label>
                    <input
                      type="number"
                      id="rg"
                      autoComplete="rg"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      maxLength={11}
                      {...register('rg')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="cnh"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      CNH
                    </label>
                    <input
                      type="number"
                      id="cnh"
                      autoComplete="cnh"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('cnh')}
                    />
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5" />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="street-address"
                      autoComplete="street-address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('streetAdrress')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('city')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Estado
                    </label>
                    <input
                      type="text"
                      id="country"
                      autoComplete="country"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('country')}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      CEP
                    </label>
                    <InputMask
                      mask="99999-999"
                      type="text"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      {...register('cep')}
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
