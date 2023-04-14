import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'

interface SignInCredentials {
  email: string
  password: string
}

interface User {
  email: String
  permissions: string[]
  roles: string[]
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>
  signOut: () => void
  user: User | undefined
  isAuthenticated: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user
  const navigate = useNavigate()

  function signOut() {
    destroyCookie(undefined, '@allid.token')
    destroyCookie(undefined, '@allid.refreshToken')

    navigate('/')
  }

  useEffect(() => {
    const { '@allid.token': token } = parseCookies()

    if (token) {
      api
        .get('/me')
        .then((response) => {
          const { email, permissions, roles }: User = response.data

          setUser({ email, permissions, roles })
        })
        .catch(() => {
          signOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, '@allid.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/',
      })
      setCookie(undefined, '@allid.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 dias
        path: '/',
      })

      setUser({
        email,
        permissions,
        roles,
      })

      api.defaults.headers.Authorization = `Bearer ${token}`

      navigate('/dashboard')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
