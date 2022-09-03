import { useContext, useState } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { SearchForm, SearchPostContainer } from './styles'

export function SearchPost() {
  const { issues, fetchIssues } = useContext(IssuesContext)
  const [query, setQuery] = useState('')

  function updateIssues(query: string) {
    setQuery(query)
    fetchIssues(query)
  }

  return (
    <SearchPostContainer>
      <div>
        <h2>Publicações</h2>
        <p>
          {issues.length > 1
            ? `${issues.length} publicações`
            : `${issues.length} publicação`}
        </p>
      </div>

      <SearchForm>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(event) => updateIssues(event.target.value)}
        />
      </SearchForm>
    </SearchPostContainer>
  )
}
