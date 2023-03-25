import styled from 'styled-components'

export const HeaderBase = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[800]} 0;
`

export const LocationCartWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[200]};
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[50]};
  padding: ${(props) => props.theme.space[75]};
  border-radius: 6px;
  background: ${(props) => props.theme.colors.purple.light};
  color: ${(props) => props.theme.colors.purple.dark};
  & > svg {
    color: ${(props) => props.theme.colors.purple.medium};
  }
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[75]};
  border-radius: 6px;
  background: ${(props) => props.theme.colors.yellow.light};
  color: ${(props) => props.theme.colors.yellow.dark};
`
