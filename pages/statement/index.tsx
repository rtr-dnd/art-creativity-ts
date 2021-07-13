import { ReactElement } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'

const Background = styled.div<{isDisplayed: boolean}>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(252, 252, 252, 0.8);
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  transition: 0.3s ease;
  ${
    ({ isDisplayed }) => isDisplayed
     ? 'opacity: 1; pointer-events: all; backdrop-filter: blur(5px);'
     : 'opacity: 0; pointer-events: none; backdrop-filter: blur(3px);'
  }
`

const Wrap = styled.div`
  color: rgba(0, 0, 0, 0.7);
  min-height: 100vh;
  width: 100%;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  max-width: 700px;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0.1em;
  margin-bottom: 32px;
`

const Desc = styled.div`
  max-width: 700px;
  letter-spacing: 0.05em;
  font-size: 14px;
  line-height: 1.7rem;
  padding: 8px 0;
  p {
    margin: 8px auto;
  }
  a {
    color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

const DescWrap = styled.div`
  max-width: 700px;
  padding: 24px 0;
`

interface Props {
  isDisplayed: boolean
  hideFunc: () => void
}

export default function Statement (props: Props): ReactElement {
  return (
    <Background isDisplayed={props.isDisplayed}>
      <Header onClickFunc={props.hideFunc} iconImageSrc="/close.svg"/>
    <Wrap>
      <Title>38億年前の蟹工船</Title>
      <DescWrap>
        <Desc>
          <p>芸術作品、技術、その他文明や文化と呼ばれているものはほとんどの場合、その時点で地球上に存在する概念の組み合わせでしかありません。</p>
          <p>作品制作時点でどんな概念が発明されているかによって、表現や想像力の幅は大きく狭められます。 例えば縄文時代に生きていた人は、現代の芸術作品、例えばソーシャルメディアを批判する風刺画を理解できないし、そんな作品を作ろうと想像すらしなかったでしょう。</p>
        </Desc>
        <Desc>
          <p>様々な技術や文化が、生物の進化系統樹のように発達したその先端で、新しい表現・新しい技術が生まれます。我々は歴史の各時点で、常にその時点での系統樹に縛られながら暮らしています。</p>
        </Desc>
        <Desc>
          <p>『蟹工船』は1929年に発表されたプロレタリアート文学の代名詞ですが、もし1800年の人が読むことができたら、どこから先が理解できなくなるのか？紀元前5000年の人は？38億年前の地球にこの本が存在したら、どこから先が「まだ地球に存在しない概念」となるのか？</p>
          <p>歴史の各時点に行って、そこからこの作品の完成までにどれだけの概念が新しく誕生したか、また古典だと感じている作品がどれだけ多くの「まだ見ぬ」概念に依存しているかを体験できるように、このページを作りました。</p>
        </Desc>
        <Desc>
          <p>系統樹に新しい概念が追加されるとき、「視界の広がり」が起きます。</p>
          <p>新しい概念がもたらしたであろう視界の広がりを、追体験していただけたら幸いです。</p>
        </Desc>
      </DescWrap>
      <DescWrap>
        <Desc>
          <p><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rtr_dnd">@rtr_dnd</a></p>
        </Desc>
      </DescWrap>
    </Wrap>
    </Background>
  )
}
