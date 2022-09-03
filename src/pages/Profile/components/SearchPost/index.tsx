import { SearchForm, SearchPostContainer } from './styles'

export function SearchPost() {
  return (
    <SearchPostContainer>
      <div>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </div>

      <SearchForm>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>
    </SearchPostContainer>
  )
}
