import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => props.theme.space[750]};
  margin-bottom: ${(props) => props.theme.space[750]};
  border-bottom: 1px solid ${(props) => props.theme.colors.base.button};
  & > div:first-child {
    display: flex;
    gap: ${(props) => props.theme.space[600]};
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`

export const NameAndQuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[75]};
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[75]};

    span {
      color: ${(props) => props.theme.colors.base.subtitle};
    }
  }
`

export const RemoveButton = styled.button`
  padding: ${(props) => props.theme.space[75]};
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.base.button};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[50]};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple.medium};
  }

  span {
    color: ${(props) => props.theme.colors.base.text};
    font-size: ${(props) => props.theme.fontSize[200]};
  }

  &:hover {
    transition: 0.4s;
    background: ${(props) => props.theme.colors.base.hover};
    span {
      color: ${(props) => props.theme.colors.base.subtitle};
    }
    svg {
      color: ${(props) => props.theme.colors.purple.dark};
    }
  }
`
