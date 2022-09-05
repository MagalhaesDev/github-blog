import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchForm, SearchPostContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchPostProps {
  issuesLength: number
  fetchIssues: (data: string) => Promise<void>
}

export function SearchPost({ issuesLength, fetchIssues }: SearchPostProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    fetchIssues(data.query)
  }

  return (
    <SearchPostContainer>
      <div>
        <h2>Publicações</h2>
        <p>
          {issuesLength > 1
            ? `${issuesLength} publicações`
            : `${issuesLength} publicação`}
        </p>
      </div>

      <SearchForm onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </SearchForm>
    </SearchPostContainer>
  )
}
