import { IssuesProps } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PreviewPostContainer, PreviewPostItem } from './styles'

interface PreviewPostProps {
  issues: IssuesProps[]
}

export function PreviewPost({ issues }: PreviewPostProps) {
  return (
    <PreviewPostContainer>
      {issues.map((issue) => (
        <PreviewPostItem key={issue.number} to={'post/' + issue.number}>
          <div>
            <h2>{issue.title}</h2>
            <p>{relativeDateFormatter(issue.created_at)}</p>
          </div>

          <p>{issue.body.substring(0, 175)}...</p>
        </PreviewPostItem>
      ))}
    </PreviewPostContainer>
  )
}
