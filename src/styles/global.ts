import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.base.background};
}

body, textarea, input, button {
  font-family: ${(props) => props.theme.fontFamily.roboto};
  line-height: ${(props) => props.theme.lineHeight[200]};
}

input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`
