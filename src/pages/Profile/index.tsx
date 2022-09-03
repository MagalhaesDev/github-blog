import { useEffect } from 'react'
import { apiGithub } from '../../lib/axios'
import { PreviewPost } from './components/PreviewPost'
import { SearchPost } from './components/SearchPost'
import { UserData } from './components/UserData'
import { ProfileContainer } from './styles'

export function Profile() {
  useEffect(() => {
    apiGithub.get('Magalhaesdev').then((res) => console.log(res))
  }, [])

  return (
    <ProfileContainer>
      <UserData />
      <SearchPost />
      <PreviewPost />
    </ProfileContainer>
  )
}
