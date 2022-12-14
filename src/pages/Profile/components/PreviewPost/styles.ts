import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PreviewPostContainer = styled.main`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`

export const PreviewPostItem = styled(Link)`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  color: ${(props) => props.theme['gray-300']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    border-color: ${(props) => props.theme['gray-500']};
  }

  & > div {
    display: flex;
    justify-content: space-between;

    h2 {
      flex-basis: 65%;
      font-size: 1.25rem;
      font-weight: bold;
      color: ${(props) => props.theme['gray-100']};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-400']};
    }
  }
`
