import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string | string[]
  stringTitle: string
  afterGutenberg: boolean
}

const Wrap = styled.div<{afterGutenberg: boolean}>`
  font-family: ${({ afterGutenberg }) => afterGutenberg? 'YuMincho' : 'HuiFont'};
`

const Title = styled.h1`
  font-size: 24px;
  color: #f00;
`

const TextWork = (props: Props) => {
  return (
    <Wrap afterGutenberg={props.afterGutenberg}>
      <Title>{props.stringTitle}</Title>
      This is a work component of {props.title}.
      あいうえお！
    </Wrap>
  )
}

export default TextWork