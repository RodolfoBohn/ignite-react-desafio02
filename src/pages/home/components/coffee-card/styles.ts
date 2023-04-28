import styled from 'styled-components'

export const CoffeeWrapper = styled.div`
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
