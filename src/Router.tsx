import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Profile } from './pages/Profile'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Profile />} />
      </Route>
    </Routes>
  )
}
