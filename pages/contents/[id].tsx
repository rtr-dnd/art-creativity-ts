import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import TextWork from '../../components/TextWork'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { EventType, HistoryEvent } from '../../models/model'
import { kaniEvents } from '../../models/data'
import Event from '../../components/Event'

const SliderWrap = styled.div`
  width: 400px;
  margin: 24px;
`

const Content = () => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''
  let historyEvents: Array<HistoryEvent> = []
  let paintingIndex: number = 0
  let letterIndex: number = 0
  let gutenbergIndex: number = 0

  const setIndex = (events: Array<HistoryEvent>) => {
    paintingIndex = events.findIndex((e) => {e.type == EventType.painting})
    letterIndex = events.findIndex((e) => {e.type == EventType.letter})
    gutenbergIndex = events.findIndex((e) => {e.type == EventType.gutenberg})
  }

  // initializing props
  if (typeof(id) == 'string') {
    switch(id) {
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
    setPosition(historyEvents.length - 1)
  }, [historyEvents.length])

  const onSliderChange = (value: number) => {
    setPosition(value)
  }

  // rendering
  if (typeof(id) == 'string' && stringTitle != '') {
    return (
        <>
          <p>Current position is {position}</p>
          <TextWork title={id} stringTitle={stringTitle} afterGutenberg={true}/>
          <TextWork title={id} stringTitle={stringTitle} afterGutenberg={false}/>
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