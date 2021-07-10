import { ReactElement } from 'react'
import styled from 'styled-components'
import { HistoryEvent } from '../models/model'

const Wrap = styled.div`
  padding: 0 24px;
  max-width: 600px;
`
const Title = styled.h2`
  text-align: center;
`
const Desc = styled.div`
  line-height: 1.7rem;
  text-align: center;
`
const Link = styled.a`
  display: block;
  width: 100%;
  margin-top: 12px;
  text-align: center;
  overflow-wrap: anywhere;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
`

const Event = (props: {event: HistoryEvent}): ReactElement => {
  if (event === undefined) return <Wrap />
  return (
    <Wrap>
      <Title>{props.event.time}</Title>
      <Desc>{props.event.desc}</Desc>
      <Link href={props.event.link}>{props.event.link}</Link>
    </Wrap>
  )
}

export default Event
