import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeSlash } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import * as z from 'zod'

const loginValidationSchema = z.object({
  email: z
    .string()
    .min(1, 'Informe o email.')
    .email({ message: 'Endereço de email inválido.' }),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
  remember: z.boolean().optional().default(false),
})

type LoginData = z.infer<typeof loginValidationSchema>

export function SignIn() {
  const [passwordEye, setPasswordEye] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<LoginData>({
    resolver: zodResolver(loginValidationSchema),
  })

  function handlePasswordClick() {
    setPasswordEye(!passwordEye)
  }

  function handleLoginSubmit(data: LoginData) {
    console.log(data)
  }

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0 mb-12 w-full">
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
              <div className="flex flex-row items-center">
                <p className="text-lg mb-0 mr-2">Entrar com</p>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="flex items-center gap-2 p-3 bg-blue-600 text-white font-semibold leading-tight capitalize rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  Google
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Ou</p>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="email-address"
                  className="text-sm text-gray-700 font-semibold"
                >
                  Endereço de Email
                </label>
                <input
                  type="text"
                  id="email-address"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="example@email.com"
                  {...register('email', { required: 'Campo obrigatório.' })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors?.email?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-6 relative">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-700 font-semibold"
                >
                  Senha
                </label>
                <input
                  type={passwordEye ? 'text' : 'password'}
                  id="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="***************"
                  {...register('password', { required: 'Campo obrigatório.' })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors?.password?.message}
                  </span>
                )}
                <div className="text-2xl absolute inset-y-10 right-3 text-blue-600 hover:text-blue-700">
                  {passwordEye ? (
                    <EyeSlash onClick={handlePasswordClick} />
                  ) : (
                    <Eye onClick={handlePasswordClick} />
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="remember"
                    {...register('remember')}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="remember"
                  >
                    Manter conectado
                  </label>
                </div>
                <a href="#!" className="text-gray-800">
                  Esqueceu sua senha?
                </a>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Entrar
                </button>
                <p className="flex items-center justify-center gap-1 text-sm font-semibold mt-2 pt-1 mb-6 md:mb-0 ">
                  Não tem uma conta?
                  <NavLink
                    to="/signup"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Registre-se
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
