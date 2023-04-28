import styled, { css } from 'styled-components'

export const ShippingWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: ${(props) => props.theme.space[800]};
`

export const MainWrapper = styled.main`
  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[500]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: ${(props) => props.theme.space[400]};
  }
  display: flex;
  flex-direction: column;
`

interface TitleWrapperProps {
  iconColor: 'yellow' | 'purple'
}

export const TitleWrapper = styled.div<TitleWrapperProps>`
  display: flex;
  gap: ${(props) => props.theme.space[75]};
  color: ${(props) =>
    props.iconColor === 'yellow'
      ? props.theme.colors.yellow.dark
      : props.theme.colors.purple.medium};
  div {
    h3 {
      font-size: ${(props) => props.theme.fontSize[400]};
      font-weight: ${(props) => props.theme.fontWeight.regular};
      color: ${(props) => props.theme.colors.base.subtitle};
    }

    span {
      font-size: ${(props) => props.theme.fontSize[300]};
      color: ${(props) => props.theme.colors.base.text};
    }
  }
`

export const ContentWrapper = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.colors.base.card};
  & + & {
    margin-top: ${(props) => props.theme.space[200]};
  }
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.space[800]};
  gap: ${(props) => props.theme.space[400]};
`

export const GroupInputWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[200]};
`

interface InputWrapperProps {
  hasError?: boolean
  useMaxWidth?: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  span {
    font-size: ${(props) => props.theme.fontSize[200]};
    color: #ff2e2e;
  }
  ${(props) =>
    props.hasError &&
    css`
      input {
        border-color: #ff2e2e;
      }
    `}

  ${(props) =>
    props.useMaxWidth &&
    css`
      flex: 1;
    `}
`

const BaseInput = styled.input`
  padding: ${(props) => props.theme.space[200]};
  color: ${(props) => props.theme.colors.base.label};
  background: ${(props) => props.theme.colors.base.input};
  border: 1px solid ${(props) => props.theme.colors.base.button};
  border-radius: 4px;
`

export const CEPInput = styled(BaseInput)`
  max-width: 12.5rem;
`
export const StreeetInput = styled(BaseInput)``

export const NumberInput = styled(BaseInput)`
  max-width: 12.5rem;
`
export const ComplementInput = styled(BaseInput)`
  flex: 1;
`
export const NeighborhoodInput = styled(BaseInput)`
  max-width: 12.5rem;
`
export const CityInput = styled(BaseInput)`
  flex: 1;
`
export const StateInput = styled(BaseInput)`
  max-width: 5rem;
`

export const PaymentWrapper = styled.div`
  margin-top: ${(props) => props.theme.space[800]};
  width: 100%;
  display: flex;
  gap: ${(props) => props.theme.space[300]};
`

export const PaymentButton = styled.label`
  padding: ${(props) => props.theme.space[400]};
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.base.button};
  flex: 1;
  color: ${(props) => props.theme.colors.purple.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    font-size: ${(props) => props.theme.fontSize[200]};
    color: ${(props) => props.theme.colors.base.text};
    white-space: nowrap;
    margin-left: ${(props) => props.theme.space[200]};
  }
  input {
    appearance: none;
  }
  &:has(:checked) {
    background: green;
  }
`

export const PaymentFormError = styled.p`
  text-align: center;
  margin-top: 8px;
  color: #ff2e2e;
  font-size: ${(props) => props.theme.fontSize[300]};
`

export const AsideWrapper = styled.aside`
  flex: 1;
  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[500]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin-bottom: ${(props) => props.theme.space[400]};
  }
`

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[200]};
  margin-bottom: ${(props) => props.theme.space[800]};
`

export const SubtotalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: ${(props) => props.theme.fontSize[300]};
    color: ${(props) => props.theme.colors.base.text};
  }
`

export const TotalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: ${(props) => props.theme.fontSize[600]};
    color: ${(props) => props.theme.colors.base.subtitle};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: ${(props) => props.theme.space[200]};
  background: ${(props) => props.theme.colors.yellow.medium};
  color: ${(props) => props.theme.colors.base.white};
  font-size: ${(props) => props.theme.fontSize[300]};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transition: 0.4s;
    background: ${(props) => props.theme.colors.yellow.dark};
  }
`
