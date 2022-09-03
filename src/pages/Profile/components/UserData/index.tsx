import { ImageUser, InformationContainer, UserDataContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function UserData() {
  return (
    <UserDataContainer>
      <ImageUser>
        <img
          src="https://avatars.githubusercontent.com/u/95831951?v=4"
          alt=""
        />
      </ImageUser>
      <InformationContainer>
        <div>
          <h1>Mateus Magalhães</h1>

          <a href="#">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at
          voluptatem impedit reiciendis. Eos, deserunt suscipit ipsum minus,
          molestiae autem reiciendis num
        </p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            <p>cameronwll</p>
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            <p>32 seguidores</p>
          </span>
        </div>
      </InformationContainer>
    </UserDataContainer>
  )
}
