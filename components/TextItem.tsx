import { ReactElement } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

interface TextItemProps {
  text: string
}

export enum ReferenceTextItemState {
  shown,
  active,
  hidden
}

interface ReferenceTextItemProps {
  text: string
  state: ReferenceTextItemState
}

const Span = styled.span`
  font-size: 16px;
  line-height: 2.2rem;
  letter-spacing: 4px;
  padding: 0.2rem 0 0.2rem 2px;
  box-sizing: border-box;
`

const TextItem = (props: TextItemProps): ReactElement => {
  return (
    <Span>{props.text}</Span>
  )
}

const ActiveSpan = styled(Span)<{state: ReferenceTextItemState}>`
  background-color: ${({ state }) => {
    switch (state) {
      case ReferenceTextItemState.shown:
        return 'rgba(0, 0, 0, 0.1)'
      case ReferenceTextItemState.active:
        return colors.bgYellow
      default:
        return '#000'
    }
  }};
  outline-color: rgba(0, 0, 0, 0.7);
  outline: ${({ state }) => state === ReferenceTextItemState.active ? '1px solid' : 'none'};
`

const ReferencedTextItem = (props: ReferenceTextItemProps): ReactElement => {
  return (
    <ActiveSpan state={props.state}>{props.text}</ActiveSpan>
  )
}

export { TextItem, ReferencedTextItem }
