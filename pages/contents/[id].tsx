/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import TextWork from '../../components/TextWork'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { EventType, HistoryEvent } from '../../models/model'
import { kaniEvents } from '../../models/history_data'
import Event from '../../components/Event'

const SliderWrap = styled.div`
  width: 400px;
  margin: 24px;
`

const Content = (): ReactElement => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''
  let historyEvents: HistoryEvent[] = []
  let paintingIndex: number = 0
  let letterIndex: number = 0
  let gutenbergIndex: number = 0

  const setIndex = (events: HistoryEvent[]): void => {
    paintingIndex = events.findIndex((e) => { return e.type === EventType.painting })
    letterIndex = events.findIndex((e) => { return e.type === EventType.letter })
    gutenbergIndex = events.findIndex((e) => { return e.type === EventType.gutenberg })
  }

  // initializing props
  if (typeof (id) === 'string') {
    switch (id) {
      case 'kanikousen':
        stringTitle = '蟹工船'
        historyEvents = kaniEvents
        setIndex(kaniEvents)
        break
      default:
        stringTitle = ''
    }
  }

  // initializing states
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    console.log('position: ' + position.toString())
  })

  useEffect(() => {
    setPosition(historyEvents.length - 1)
  }, [historyEvents.length])

  const onSliderChange = (value: number): void => {
    setPosition(value)
  }

  // rendering
  if (typeof (id) === 'string' && stringTitle !== '') {
    return (
      <>
        <p>Current position is {position}</p>
        <TextWork title={id} stringTitle={stringTitle} afterGutenberg={position >= gutenbergIndex}/>
        <SliderWrap>
          <Slider min={0} max={historyEvents.length - 1} defaultValue={historyEvents.length - 1} step={1} onChange={onSliderChange}/>
        </SliderWrap>
        <Event event={historyEvents[position]}/>
      </>
    )
  }

  return (
    <>
      Content not found. query is {id}
    </>
  )
}

export default Content
