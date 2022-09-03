import { useContext, useEffect, useState } from 'react'
import { PreviewPost } from './components/PreviewPost'
import { SearchPost } from './components/SearchPost'
import { UserData } from './components/UserData'
import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <UserData />
      <SearchPost />
      <PreviewPost />
    </ProfileContainer>
  )
}
