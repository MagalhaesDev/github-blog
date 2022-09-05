import { InfoPost, NavPost, PostItemContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom'
import { IssuesProps } from '../../../Profile'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: IssuesProps
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostItemContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <NavPost>
            <a onClick={goBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <p>VOLTAR</p>
            </a>
            <a href={postData.html_url} target="_blank" rel="noreferrer">
              <p>VER NO GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </NavPost>
          <h1>{postData.title}</h1>
          <InfoPost>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              {relativeDateFormatter(postData.created_at)}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </span>
          </InfoPost>
        </>
      )}
    </PostItemContainer>
  )
}
