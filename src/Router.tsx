import { Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Dashboard/Home'
import { RegInfo } from './pages/Dashboard/RegInfo'
import { RegDataUser } from './pages/Dashboard/RegDataUser'
import { RegDataHealth } from './pages/Dashboard/RegDataHealth'
import { RegSocialMedia } from './pages/Dashboard/RegSocialMedia'
import { RegDependents } from './pages/Dashboard/RegDependents'
import { RegPets } from './pages/Dashboard/RegPets'
import { RegDocuments } from './pages/Dashboard/RegDocuments'
import { Search } from './pages/Dashboard/Search'
import { ShareData } from './pages/Dashboard/ShareData'
import { DashboardLayout } from './layouts/DashboardLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/reginfo" element={<RegInfo />} />
        <Route path="/dashboard/regdatauser" element={<RegDataUser />} />
        <Route path="/dashboard/regdatahealth" element={<RegDataHealth />} />
        <Route path="/dashboard/regsocialmedia" element={<RegSocialMedia />} />
        <Route path="/dashboard/regdependents" element={<RegDependents />} />
        <Route path="/dashboard/regpets" element={<RegPets />} />
        <Route path="/dashboard/regdocuments" element={<RegDocuments />} />

        <Route path="/dashboard/search" element={<Search />} />
        <Route path="/dashboard/sharedata" element={<ShareData />} />
      </Route>
    </Routes>
  )
}
