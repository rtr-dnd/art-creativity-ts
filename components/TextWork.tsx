import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ReferencedTextPiece, TextPiece } from '../models/model'
import { colors } from '../styles/colors'
import { TextItem, ReferencedTextItem, ReferenceTextItemState } from './TextItem'

interface Props {
  title: string
  stringTitle: string
  texts: Array<TextPiece | ReferencedTextPiece>
  letterIndex: number
  gutenbergIndex: number
  currentPosition: number
}

const Wrap = styled.div<{afterGutenberg: boolean}>`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgGrey};
  font-family: ${({ afterGutenberg }) => afterGutenberg ? 'YuMincho' : 'HuiFont'};
`

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.7rem;
  font-weight: normal;
  text-align: center;
`

const TextItemsWrap = styled.div<{isActive: boolean}>`
  margin: 0 auto;
  font-size: 0;
  box-sizing: border-box;
  max-width: 700px;
  padding: 24px 32px;
  outline-color: rgba(0, 0, 0, 0.7);
  outline: ${({ isActive }) => isActive ? '1px solid' : 'none'};
  background-color: ${({ isActive }) => isActive ? colors.bgYellowLight : 'transparent'};
`

const TextWork = (props: Props): ReactElement => {
  const textItems = props.texts.map((element, index): ReactElement => {
    let state: ReferenceTextItemState = ReferenceTextItemState.shown
    if ('reference' in element) {
      if (props.currentPosition > element.reference) {
        state = ReferenceTextItemState.shown
      } else if (props.currentPosition === element.reference) {
        state = ReferenceTextItemState.active
      } else {
        state = ReferenceTextItemState.hidden
      }
      return <ReferencedTextItem
        key={index}
        text={element.text}
        state={state}
      />
    } else {
      return <TextItem key={index} text={element.text} />
    }
  })

  return (
    <Wrap afterGutenberg={props.currentPosition >= props.gutenbergIndex}>
      <Title>{props.stringTitle}</Title>
      <TextItemsWrap isActive={props.currentPosition === props.gutenbergIndex || props.currentPosition === props.letterIndex}>
        {textItems}
      </TextItemsWrap>
    </Wrap>
  )
}

export default TextWork
