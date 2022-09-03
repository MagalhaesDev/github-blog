import styled from 'styled-components'

export const SearchPostContainer = styled.div`
  margin-top: 4.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['gray-200']};
    }

    p {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`

export const SearchForm = styled.form`
  margin-top: 1.25rem;

  input {
    width: 100%;
    height: 3.125rem;
    background-color: ${(props) => props.theme['gray-1000']};
    padding: 1rem 0.75rem;
    color: ${(props) => props.theme.white};

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['gray-600']};
  }
`
