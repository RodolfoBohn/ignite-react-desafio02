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
