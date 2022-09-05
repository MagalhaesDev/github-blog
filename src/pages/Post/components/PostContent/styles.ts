import styled from 'styled-components'

export const PostContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  margin-bottom: 8rem;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  img {
    width: 100%;
  }

  pre {
    background: ${(props) => props.theme['gray-600']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`
