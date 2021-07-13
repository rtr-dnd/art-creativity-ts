/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import styled from 'styled-components'
import TextWork from '../../components/TextWork'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { EventType, HistoryEvent, ReferencedTextPiece, TextPiece } from '../../models/model'
import { kaniEvents } from '../../models/history_data'
import Event from '../../components/Event'
import { kaniTexts, kaniTitle } from '../../models/text_data'
import ImageWork from '../../components/ImageWork'
import { ImageTitle, kaniImages, kaniTitleImages } from '../../components/image_data'
import { colors } from '../../styles/variables'
import { kaniTitleTag } from '../../models/kaniTitle'
import Header from '../../components/Header'
import Statement from '../statement'

const Wrap = styled.div`
  position: relative;
`

const LowerSection = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-color: ${colors.bgGreyLight};
`

const SliderWrap = styled.div`
  // width: 400px;
  width: 90%;
  max-width: 400px;
  margin: 24px auto 0;
  padding: 32px 24px;
`

const Content = (): ReactElement => {
  const router = useRouter()
  const { id } = router.query
  let stringTitle = ''
  let historyEvents: HistoryEvent[] = []
  let texts: Array<TextPiece | ReferencedTextPiece> = []
  let titles: Array<TextPiece | ReferencedTextPiece> = []
  let imageTitles: ImageTitle[] = []
  let titleTag: (currentPosition: number) => string = (currentPosition: number) => { return '' }
  let images: string[] = []
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
      case 'kani':
        stringTitle = '蟹工船'
        historyEvents = kaniEvents
        texts = kaniTexts
        titles = kaniTitle
        imageTitles = kaniTitleImages
        images = kaniImages
        titleTag = kaniTitleTag
        setIndex(kaniEvents)
        break
      case '':
        stringTitle = ''
        break
      default:
        stringTitle = 'error'
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

  const [isStatementDisplayed, setIsStatementDisplayed] = useState<boolean>(false)

  const showStatement = (): void => {
    setIsStatementDisplayed(true)
  }
  const hideStatement = (): void => {
    setIsStatementDisplayed(false)
  }

  // rendering
  if (typeof (id) === 'string' && stringTitle !== '' && stringTitle !== 'error') {
    return (
      <Wrap>
        <Head>
          <title>{titleTag(position)} | 38億年前の蟹工船</title>
          <meta property="og:title" content="38億年前の蟹工船" />
          {/* <meta property="og:url" content="ページのURL" /> */}
          <meta property="og:image" content="https://kani38.vercel.app/ogp.png" />
          {/* <meta property="og:description" content="「おい、□□さ行ぐんだで！」" /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@rtr_dnd" />
        </Head>
        <Statement isDisplayed={isStatementDisplayed} hideFunc={hideStatement}/>
        <Header onClickFunc={showStatement} iconImageSrc="/info.svg" />
          {
            position >= letterIndex
              ? <TextWork
            title={id}
            stringTitle={stringTitle}
            texts={texts}
            titles={titles}
            letterIndex={letterIndex}
            gutenbergIndex={gutenbergIndex}
            currentPosition={position}/>
              : <ImageWork
              title={id}
              paintingIndex={paintingIndex}
              currentPosition={position}
              imageTitles={imageTitles}
              images={images}
            />
          }
          <LowerSection>
            <SliderWrap>
              <Slider
                min={-1}
                max={historyEvents.length}
                defaultValue={historyEvents.length}
                step={1}
                // dots
                dotStyle={{
                  borderColor: 'rgba(0, 0, 0, 0.3)'
                  // border: 'none',
                  // backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}
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
      </Wrap>
    )
  }
  if (stringTitle === 'error') {
    return (
      <>
        Content not found. query is {id}
      </>
    )
  }

  return (
    <>
      {/* Content not found. query is {id} */}
    </>
  )
}

export default Content
