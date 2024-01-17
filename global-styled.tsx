import { createGlobalStyle, styled } from 'styled-components';

const webFont = require('webfontloader');
webFont.load({ google: { families: ['Montserrat', 'Jost:400,500'] } });

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F4F9;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #0F172A;
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
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px;
  height: 100vh;

  @media (max-width: 1000px) {
    margin: 0 70px;
  }

    @media (max-width: 870px) {
        margin: 0 30px;
    }

    @media (max-width: 480px) {
        margin: 0 15px;
    }

    @media (max-width: 375px) {
        margin: 0 10px;
    }
`;
