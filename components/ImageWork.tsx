import { ReactElement } from 'react'
import styled from 'styled-components'
import { Wrap } from './Work'
import { ImageTitle } from './image_data'

interface Props {
  title: string
  paintingIndex: number
  currentPosition: number
  imageTitles: ImageTitle[]
  images: ReactElement[]
}

const ImageWorkWrap = styled(Wrap)`
`

const ImageTitleWrap = styled.div`
  font-size: 24px;
  width: 100%;
  height: 2.2rem;
  position: relative;
`

const ImageWrap = styled.div`
  width: 80%;
  max-width: 700px;
  max-height: 30vh;
  margin: 12px auto 0;
  position: relative;
  padding: 24px 32px;
  flex-grow: 1;
`

const ImageWork = (props: Props): ReactElement => {
  const titleImage = props.imageTitles.find((element) => {
    return element.end >= props.currentPosition
  })

  return (
    <ImageWorkWrap>
      <ImageTitleWrap>
        {titleImage?.image}
      </ImageTitleWrap>
      <ImageWrap>
        {props.images[props.currentPosition + 1] !== undefined ? props.images[props.currentPosition + 1] : props.images[0]}
      </ImageWrap>
    </ImageWorkWrap>
  )
}

export default ImageWork
