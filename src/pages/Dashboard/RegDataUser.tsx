import { Typography } from '@mui/material'

export function RegDataUser() {
  return (
    <div>
      <div className="flex flex-col w-[85%] m-auto mt-10">
        <Typography className="font-bold">
          Cadastro de informações {'->'} Cadastro de dados gerais
        </Typography>
        <div className="flex flex-col p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-wrap gap-3">
            <div className="flex flex-col">
              <fieldset className="flex flex-col gap-3 p-3 border border-solid border-gray-700">
                <legend className="px-2 font-semibold">Dados pessoais</legend>
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="nome" className="font-semibold">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Antonio da Silva Pereira"
                    className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="data_nasc" className="font-semibold">
                      Data de nascimento
                    </label>
                    <input
                      type="date"
                      id="data_nasc"
                      name="data_nasc"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="sexo" className="font-semibold">
                      Sexo
                    </label>
                    <select
                      name="sexo"
                      id="sexo"
                      className="bg-zinc-900 py-1.5 px-2 rounded text-sm text-zinc-400"
                    >
                      <option value="">Selecione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="nome_social" className="font-semibold">
                    Nome social
                  </label>
                  <input
                    type="text"
                    id="nome_social"
                    name="nome_social"
                    placeholder="Alécio Crás Cunha"
                    className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                  />
                </div>
                {/* DOCUMENTAÇÃO */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="cpf" className="font-semibold">
                      CPF
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      placeholder="000.000.000-00"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="rg" className="font-semibold">
                      RG
                    </label>
                    <input
                      type="text"
                      id="rg"
                      name="rg"
                      placeholder="0000000000-0"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cnh" className="font-semibold">
                      CNH
                    </label>
                    <input
                      type="text"
                      id="cnh"
                      name="cnh"
                      placeholder="00000000000"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="grau" className="font-semibold">
                      Grau de instrução
                    </label>
                    <select
                      name="grau"
                      id="grau"
                      className="bg-zinc-900 py-1 px-2 w-40 rounded text-sm text-zinc-400 md:w-fit"
                    >
                      <option value="">Selecione</option>
                      <option value="GI_01">
                        Analfabeto, inclusive o que, embora tenha recebido
                        instrução, não se alfabetizou
                      </option>
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
                  <div className="flex flex-col flex-1">
                    <label htmlFor="civil" className="font-semibold">
                      Estado Civil
                    </label>
                    <select
                      name="civil"
                      id="civil"
                      className="bg-zinc-900 text-zinc-400 py-1 px-2 rounded text-sm"
                    >
                      <option value="">Selecione</option>
                      <option value="solteiro">Solteiro</option>
                      <option value="Casado">Casado</option>
                      <option value="Viúvo(a)">Viúvo(a)</option>
                      <option value="Divorciado(a)">Divorciado(a)</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset className="flex flex-col gap-3 p-3 border border-solid border-gray-700">
                <legend className="px-2 font-semibold">Dados pessoais</legend>
                <div className="flex flex-col">
                  <label htmlFor="endereco" className="font-semibold">
                    Endereço
                  </label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    placeholder="Avenida Beira Mar"
                    className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="cidade" className="font-semibold">
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      placeholder="Fortaleza"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="estado" className="font-semibold">
                      Estado
                    </label>
                    <input
                      type="text"
                      id="estado"
                      name="estado"
                      placeholder="Ceará"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="pais" className="font-semibold">
                      País
                    </label>
                    <input
                      type="text"
                      id="pais"
                      name="pais"
                      placeholder="Brasil"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="cep" className="font-semibold">
                      CEP
                    </label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      placeholder="60165-120"
                      className="bg-zinc-900 px-2 py-1 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="example@email.com"
                      className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contato" className="font-semibold">
                      Contato
                    </label>
                    <input
                      type="text"
                      name="contato"
                      id="contato"
                      placeholder="(00) 00000-0000"
                      className="bg-zinc-900 py-1 px-2 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
                    />
                  </div>
                </div>
              </fieldset>
              <footer className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-blue-500 px-5 h-12 rounded-md font-semibold text-white"
                >
                  Cadastrar
                </button>
              </footer>
            </div>
            <div className="flex items-center justify-center mx-auto">
              <div className="relative w-full max-w-sm">
                <img
                  src="https://github.com/pedrojorge148.png"
                  alt="Foto de usuário"
                  className="w-56 h-56 rounded-full"
                />
                <button className="absolute px-5 py-1 rounded bg-zinc-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Button
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
