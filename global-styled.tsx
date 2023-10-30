import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F4F9;
    font-family: "Jost", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #D1D5DB;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #6F7379;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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
