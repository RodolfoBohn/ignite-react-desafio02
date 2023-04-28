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
