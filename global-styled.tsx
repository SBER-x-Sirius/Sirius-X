import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F4F9;
    font-family: "Jost", sans-serif;
    font-style: normal;
    font-weight: 400;
  }
`

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  margin: 0 100px;
  height: 100vh;

  @media (max-width: 1024px) {
    margin: 0 50px;
  }
`
