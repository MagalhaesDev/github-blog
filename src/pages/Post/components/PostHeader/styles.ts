import styled from 'styled-components'

export const PostItemContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  height: 13.25rem;
  margin-top: -6.625rem;
  padding: 2rem;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-size: 1.5rem;
    align-self: flex-start;
  }
`

export const NavPost = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`

export const InfoPost = styled.div`
  display: flex;
  gap: 2rem;
  align-self: flex-start;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
