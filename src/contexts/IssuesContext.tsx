import axios from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

export interface IssuesProps {
  title: string
  number: number
  created_at: string
  body: string
}

interface IssueContextType {
  issues: IssuesProps[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([])

  const fetchIssues = useCallback(async (query: string = '') => {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}%20repo:MagalhaesDev/github-blog`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
