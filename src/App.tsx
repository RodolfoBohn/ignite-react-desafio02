import styled from 'styled-components'

const Componente1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-weight: ${(props) => props.theme.fontWeight};
  font-size: ${(props) => props.theme.fontSize[100]};
`

function App() {
  return (
    <>
      <Componente1>Fala galera</Componente1>
    </>
  )
}

export default App
