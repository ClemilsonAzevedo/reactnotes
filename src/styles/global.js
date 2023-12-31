import { createGlobalStyle } from 'styled-components'

export const GlobalStyles =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, text-area{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(.9);
  }

`
