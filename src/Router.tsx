import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Post } from './pages/Post'
import { Profile } from './pages/Profile'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
