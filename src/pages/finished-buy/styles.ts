import styled from 'styled-components'

export const FinishedBuyWrapper = styled.main`
  margin-top: 5rem;
  & > h1 {
    font-family: ${(props) => props.theme.fontFamily.baloo_2};
    font-size: ${(props) => props.theme.fontSize[800]};
    color: ${(props) => props.theme.colors.yellow.dark};
    font-weight: ${(props) => props.theme.fontWeight.extraBold};
  }

  & > h3 {
    font-size: ${(props) => props.theme.fontSize[600]};
    color: ${(props) => props.theme.colors.base.subtitle};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`

export const InfoImageWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img {
    margin-left: 6rem;
  }
`

export const InfoWrapper = styled.div`
  position: relative;
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[800]};

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const InfoItem = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[200]};
  align-items: center;
`

interface InfoItemIconWrapperProps {
  color: 'yellow' | 'dark_yellow' | 'purple'
}

export const InfoItemIconWrapper = styled.div<InfoItemIconWrapperProps>`
  padding: ${(props) => props.theme.space[75]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    switch (props.color) {
      case 'yellow':
        return props.theme.colors.yellow.medium
      case 'dark_yellow':
        return props.theme.colors.yellow.dark
      case 'purple':
        return props.theme.colors.purple.medium
    }
  }};

  svg {
    color: ${(props) => props.theme.colors.base.white};
  }
`
