import styled from 'styled-components'

export const QuantityWrapper = styled.div`
  display: flex;
  width: 4.5rem;
  padding: ${(props) => props.theme.space[75]};
  background: ${(props) => props.theme.colors.base.button};
  display: flex;
  gap: ${(props) => props.theme.space[50]};
  border-radius: 6px;
  & > input {
    width: 20px;
    flex: 1;
    border: 0;
    background: none;
    text-align: center;
    cursor: default;
    &:focus {
      outline: none;
    }
  }
`

export const IconWrapper = styled.button`
  border: 0;
  background: none;
  color: ${(props) => props.theme.colors.purple.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    transition: 0.4s;
    color: ${(props) => props.theme.colors.purple.dark};
  }
`
