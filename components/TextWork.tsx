import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ReferencedTextPiece, TextPiece } from '../models/model'
import { colors, fonts } from '../styles/variables'
import { TextItem, ReferencedTextItem, TitleItem, ReferencedTitleItem, ReferenceTextItemState } from './TextItem'
import { Wrap } from './Work'

interface Props {
  title: string
  stringTitle: string
  texts: Array<TextPiece | ReferencedTextPiece>
  titles: Array<TextPiece | ReferencedTextPiece>
  letterIndex: number
  gutenbergIndex: number
  currentPosition: number
}

const TextWorkWrap = styled(Wrap)<{afterGutenberg: boolean}>`
  font-family: ${({ afterGutenberg }) => afterGutenberg ? fonts.yuMincho : fonts.hui};
`

const TitleItemsWrap = styled.h1`
  font-size: 0;
  line-height: 1.7rem;
  font-weight: normal;
  text-align: center;
`

const TextItemsWrap = styled.div<{isActive: boolean}>`
  margin: 12px auto 0;
  font-size: 0;
  box-sizing: border-box;
  max-width: 700px;
  overflow-y: scroll;
  padding: 24px 32px;
  outline-color: rgba(0, 0, 0, 0.7);
  outline: ${({ isActive }) => isActive ? '1px solid' : 'none'};
  background-color: ${({ isActive }) => isActive ? colors.bgYellowLight : 'transparent'};
`

const TextWork = (props: Props): ReactElement => {
  const textItems = props.texts.map((element, index): ReactElement => {
    if ('reference' in element) {
      let state: ReferenceTextItemState = ReferenceTextItemState.shown
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
  const titleItems = props.titles.map((element, index): ReactElement => {
    if ('reference' in element) {
      let state: ReferenceTextItemState = ReferenceTextItemState.shown
      if (props.currentPosition > element.reference) {
        state = ReferenceTextItemState.shown
      } else if (props.currentPosition === element.reference) {
        state = ReferenceTextItemState.active
      } else {
        state = ReferenceTextItemState.hidden
      }
      return <ReferencedTitleItem
        key={index}
        text={element.text}
        state={state}
      />
    } else {
      return <TitleItem key={index} text={element.text} />
    }
  })

  return (
    <TextWorkWrap afterGutenberg={props.currentPosition >= props.gutenbergIndex}>
      <TitleItemsWrap>
        {titleItems}
      </TitleItemsWrap>
      <TextItemsWrap isActive={props.currentPosition === props.gutenbergIndex || props.currentPosition === props.letterIndex}>
        {textItems}
      </TextItemsWrap>
    </TextWorkWrap>
  )
}

export default TextWork
