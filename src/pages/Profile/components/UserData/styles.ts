import styled from 'styled-components'

export const UserDataContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  height: 13.25rem;
  margin-top: -6.625rem;
  padding: 2rem;

  border-radius: 10px;

  display: flex;
  gap: 2rem;
`

export const ImageUser = styled.div`
  img {
    height: 148px;
    width: 148px;
  }
`

export const InformationContainer = styled.div`
  & > div:first-child {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
    }

    a {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: 0.75rem;
      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme.blue};

      img {
        width: 0.7rem;
      }
    }
  }

  & > p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['gray-300']};
  }

  & > div:last-child {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme['gray-500']};

      p {
        color: ${(props) => props.theme['gray-200']};
      }
    }
  }
`
