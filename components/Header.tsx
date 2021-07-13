import { ReactElement } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const HeaderBar = styled.header`
  background: transparent;
  padding: 24px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`

const Spacer = styled.div`
  background: transparent;
  pointer-events: none;
  flex-grow: 1;
  flex-shrink: 1;
`

const IconWrap = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

interface Props {
  onClickFunc: () => void
  iconImageSrc: string
}

const Header = (props: Props): ReactElement => {
  return <HeaderBar>
    <Spacer />
    <IconWrap>
      <Image onClick={props.onClickFunc} src={props.iconImageSrc} alt="info-icon" layout="fill" objectFit="contain" />
    </IconWrap>
  </HeaderBar>
}

export default Header
