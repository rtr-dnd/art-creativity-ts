/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'
import TextWork from '../../components/TextWork'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { EventType, HistoryEvent, ReferencedTextPiece, TextPiece } from '../../models/model'
import { kaniEvents } from '../../models/history_data'
import Event from '../../components/Event'
import { kaniTexts } from '../../models/text_data'

const LowerSection = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SliderWrap = styled.div`
  width: 400px;
  margin: 24px auto 0;
  padding: 32px 24px;
`

const Content = (): ReactElement => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''
  let historyEvents: HistoryEvent[] = []
  let texts: Array<TextPiece | ReferencedTextPiece> = []
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
        texts = kaniTexts
        setIndex(kaniEvents)
        break
      default:
        stringTitle = ''
    }
  }

  // initializing states
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    setPosition(historyEvents.length)
  }, [historyEvents.length])

  const onSliderChange = (value: number): void => {
    setPosition(value)
    console.log('position: ' + position.toString())
  }

  // rendering
  if (typeof (id) === 'string' && stringTitle !== '') {
    return (
      <>
        <TextWork
          title={id}
          stringTitle={stringTitle}
          texts={texts}
          letterIndex={letterIndex}
          gutenbergIndex={gutenbergIndex}
          currentPosition={position}/>
        <LowerSection>
          <SliderWrap>
            <Slider
              min={-1}
              max={historyEvents.length}
              defaultValue={historyEvents.length}
              step={1}
              trackStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
              }}
              handleStyle={{
                borderColor: 'rgba(0, 0, 0, 0.4',
                boxShadow: 'none'
              }}
              onChange={onSliderChange}/>
          </SliderWrap>
          {
            historyEvents[position] !== undefined &&
              <Event event={historyEvents[position]}/>
          }
        </LowerSection>
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
