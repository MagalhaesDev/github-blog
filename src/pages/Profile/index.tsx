import axios from 'axios'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Spinner } from '../../components/Spinner'
import { PreviewPost } from './components/PreviewPost'
import { SearchPost } from './components/SearchPost'
import { UserData } from './components/UserData'
import { ProfileContainer } from './styles'

export interface IssuesProps {
  title: string
  created_at: string
  body: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Profile() {
  const [issues, setIssues] = useState<IssuesProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchIssues = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:MagalhaesDev/github-blog`,
      )

      setIssues(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <ProfileContainer>
      <UserData />
      <SearchPost issuesLength={issues.length} fetchIssues={fetchIssues} />
      {isLoading ? <Spinner /> : <PreviewPost issues={issues} />}
    </ProfileContainer>
  )
}
