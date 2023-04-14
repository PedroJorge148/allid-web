import { parseCookies } from 'nookies'
import { Navigate, Outlet } from 'react-router-dom'
import { Nav } from './pages/Dashboard/components/Nav'

export function PrivateRoute() {
  const { '@allid.token': token } = parseCookies()

  return token ? (
    <>
      <Nav />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  )
}
