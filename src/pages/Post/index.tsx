import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IssuesProps } from '../Profile'
import { GithubUserProps } from '../Profile/components/UserData'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'
import { PostContainer } from './styles'

export function Post() {
  const [postData, setPostData] = useState<IssuesProps>({} as IssuesProps)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await axios.get(
        `https://api.github.com/repos/MagalhaesDev/github-blog/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <PostContainer>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </PostContainer>
  )
}
