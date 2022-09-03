import { ImageUser, InformationContainer, UserDataContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const [user, setUser] = useState<GithubUserProps[]>([])

  useEffect(() => {
    const response = axios.get('https://api.github.com/users/MagalhaesDev')

    response.then((response) => setUser([response.data]))
  }, [])

  return (
    <>
      {user.map((data) => (
        <UserDataContainer key={data.id}>
          <ImageUser>
            <img src={data.avatar_url} alt="" />
          </ImageUser>
          <InformationContainer>
            <div>
              <h1>{data.name}</h1>

              <a href={data.html_url} target="_blank" rel="noreferrer">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <p>{data.bio}</p>
            <div>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                <p>{data.login}</p>
              </span>

              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                <p>{data.followers} seguidores</p>
              </span>
            </div>
          </InformationContainer>
        </UserDataContainer>
      ))}
    </>
  )
}
