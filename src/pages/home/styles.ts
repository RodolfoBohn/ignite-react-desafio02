import styled from 'styled-components'

export const BannerWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[1400]};
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[2200]} 0;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap ${(props) => props.theme.space[400]};
  flex-direction: column;
   h1 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[1200]};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    line-height: ${(props) => props.theme.lineHeight[200]};
    color: ${(props) => props.theme.colors.base.title};
  }
  p {
    font-size: ${(props) => props.theme.fontSize[600]};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    line-height: ${(props) => props.theme.lineHeight[200]};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`

export const ItemsWrapper = styled.div`
  margin-top: ${(props) => props.theme.space[1700]};
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  row-gap: ${(props) => props.theme.space[600]};
`

interface ItemsWrapperProps {
  color: 'yellow' | 'dark_yellow' | 'gray' | 'purple'
}

export const Item = styled.div<ItemsWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[200]};

  & > div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.base.background};
    background: ${(props) => {
      switch (props.color) {
        case 'dark_yellow':
          return props.theme.colors.yellow.dark
        case 'gray':
          return props.theme.colors.base.text
        case 'yellow':
          return props.theme.colors.yellow.medium
        default:
          return props.theme.colors.purple.medium
      }
    }};
  }

  & > span {
    font-size: ${(props) => props.theme.fontSize[400]};
    color: ${(props) => props.theme.colors.base.text};
  }
`
export const CoffeesListWrapper = styled.main`
  padding: ${(props) => props.theme.space[800]} 0;
  & > h2 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[800]};
    color: ${(props) => props.theme.colors.base.subtitle};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
    margin-bottom: 3.375rem;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    column-gap: ${(props) => props.theme.space[800]};
    row-gap: 2.5rem;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  padding: ${(props) => props.theme.space[600]}
    ${(props) => props.theme.space[750]};
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px 36px 6px 36px;

  & > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -40px;
  }

  & > div {
    margin-top: ${(props) => props.theme.space[200]};
    margin-bottom: ${(props) => props.theme.space[400]};
    display: flex;
    gap: ${(props) => props.theme.space[50]};
  }

  & > h3 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[600]};
    color: ${(props) => props.theme.colors.base.subtitle};
  }

  & > p {
    font-size: ${(props) => props.theme.fontSize[300]};
    color: ${(props) => props.theme.colors.base.label};
    text-align: center;
    margin-top: ${(props) => props.theme.space[75]};
    margin-bottom: ${(props) => props.theme.space[800]};
  }

  & > form {
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
    }
  }
`

export const Tag = styled.span`
  padding: ${(props) => props.theme.space[50]}
    ${(props) => props.theme.space[75]};
  background: ${(props) => props.theme.colors.yellow.light};
  color: ${(props) => props.theme.colors.yellow.dark};
  border-radius: 99999px;
  font-size: ${(props) => props.theme.fontSize[100]};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`
