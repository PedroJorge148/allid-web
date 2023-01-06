import { Outlet } from 'react-router-dom'
import { Nav } from '../pages/Dashboard/components/Nav'

export function DashboardLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}
