import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { PreviewPostContainer, PreviewPostItem } from './styles'

export function PreviewPost() {
  const { issues } = useContext(IssuesContext)

  return (
    <PreviewPostContainer>
      {issues.map((issue) => (
        <PreviewPostItem key={issue.number}>
          <div>
            <h2>{issue.title}</h2>
            <p>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>

          <p>{issue.body.substring(0, 175)}...</p>
        </PreviewPostItem>
      ))}
    </PreviewPostContainer>
  )
}
