import { ImageUser, InformationContainer, UserDataContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Spinner } from '../../../../components/Spinner'

export interface GithubUserProps {
  id: string
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  followers: string
}

export function UserData() {
  const [user, setUser] = useState<GithubUserProps>({} as GithubUserProps)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        'https://api.github.com/users/MagalhaesDev',
      )

      setUser(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getProfileData()
  }, [getProfileData])

  return (
    <>
      <UserDataContainer key={user.id}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <ImageUser>
              <img src={user.avatar_url} alt="" />
            </ImageUser>
            <InformationContainer>
              <div>
                <h1>{user.name}</h1>

                <a href={user.html_url} target="_blank" rel="noreferrer">
                  GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
              <p>{user.bio}</p>
              <div>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  <p>{user.login}</p>
                </span>

                <span>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <p>{user.followers} seguidores</p>
                </span>
              </div>
            </InformationContainer>
          </>
        )}
      </UserDataContainer>
    </>
  )
}
