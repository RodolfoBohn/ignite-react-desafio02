import styled from 'styled-components'

export const QuantityForm = styled.form`
  display: flex;
  width: 100%;
  & > label {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[750]};
    color: ${(props) => props.theme.colors.base.text};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    margin-right: ${(props) => props.theme.space[600]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > span {
      font-family: ${(props) => props.theme.fontFamily.roboto};
      font-size: ${(props) => props.theme.fontSize[300]};
    }
  }
  & > input {
    width: 4.5rem;
  }

  & > button {
    padding: ${(props) => props.theme.space[75]};
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.colors.purple.dark};
    color: ${(props) => props.theme.colors.base.card};
    margin-left: ${(props) => props.theme.space[400]};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transition: 0.4s;
      background: ${(props) => props.theme.colors.purple.medium};
    }
  }
`

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
