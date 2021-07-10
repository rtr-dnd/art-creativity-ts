import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import TextWork from '../../components/TextWork'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { EventType, HistoryEvent } from '../../models/model'
import { kaniEvents } from '../../models/data'

const SliderWrap = styled.div`
  width: 400px;
  margin: 24px;
`

const Content = () => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''
  let historyEvents: Array<HistoryEvent>
  let paintingIndex: number
  let letterIndex: number
  let gutenbergIndex: number

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
  const [position, setPosition] = useState<number>()

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
            <Slider min={0} max={20} defaultValue={20} step={1} onChange={onSliderChange}/>
          </SliderWrap>
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