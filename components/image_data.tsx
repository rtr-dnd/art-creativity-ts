/* eslint-disable react/jsx-key */
import { ReactElement } from 'react'
import Image from 'next/image'

// export const kaniImages: ReactElement[] = [
//   <Image src="/images/kanikousen/-1.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/0.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/1.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/2.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/3.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/4.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/5.png" alt="カニの画像" layout="fill" objectFit="contain"/>,
//   <Image src="/images/kanikousen/6.png" alt="カニの画像" layout="fill" objectFit="contain"/>
// ]

export const kaniImages: string[] = [
  '/images/kanikousen/-1.png',
  '/images/kanikousen/0.png',
  '/images/kanikousen/1.png',
  '/images/kanikousen/2.png',
  '/images/kanikousen/3.png',
  '/images/kanikousen/4.png',
  '/images/kanikousen/5.png',
  '/images/kanikousen/6.png'
]

export interface ImageTitle {
  image: ReactElement
  start: number
  end: number
}

export const kaniTitleImages: ImageTitle[] = [
  {
    image: <Image src="/images/kanikousen/empty.png" alt="無の画像" layout="fill" objectFit="contain"/>,
    start: -100,
    end: 1
  },
  {
    image: <Image src="/images/kanikousen/kani-image.gif" alt="カニの写真" layout="fill" objectFit="contain"/>,
    start: 2,
    end: 3
  },
  {
    image: <Image src="/images/kanikousen/kani-picture.png" alt="カニの絵" layout="fill" objectFit="contain"/>,
    start: 4,
    end: 100
  }
]
