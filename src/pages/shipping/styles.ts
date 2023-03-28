import styled from 'styled-components'

export const ShippingWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  justify-content: space-between;
`

export const MainWrapper = styled.main`
  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[500]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[75]};
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
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.space[800]};
  gap: ${(props) => props.theme.space[400]};
  div {
    display: flex;
    gap: ${(props) => props.theme.space[200]};
  }
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
  button {
    padding: ${(props) => props.theme.space[400]};
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.base.button};
    flex: 1;
    color: ${(props) => props.theme.colors.purple.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[200]};
    span {
      font-size: ${(props) => props.theme.fontSize[200]};
      color: ${(props) => props.theme.colors.base.text};
      white-space: nowrap;
    }
  }
`

export const AsideWrapper = styled.aside`
  h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[500]};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`
