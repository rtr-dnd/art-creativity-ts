import { EventType, HistoryEvent } from './model'

export const kaniEvents: Array<HistoryEvent> = [
  {
    time: '38億年前',
    desc: '雨水はやがて激流となって、地表を覆い始めました。 今からおよそ38億年前には、地球に海が誕生していたといわれています。',
    link: 'https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005402585_00000&p=box',
    type: EventType.none
  },
  {
    time: '6万5000年前',
    desc: '絵画は、基本的には、線や色彩をもちいて、物の形や姿を平面上に描き出したものである。その起源は有史以前に遡り、スペインで6万5000年以上前にネアンデルタール人が描いたと推定される洞窟壁画が発見されている。',
    link: 'https://ja.wikipedia.org/wiki/%E7%B5%B5%E7%94%BB',
    type: EventType.painting
  },
  {
    time: '紀元前4000年頃',
    desc: '最初の文字体系が発明されたのは紀元前4千年紀後半の後期新石器時代に青銅器時代が始まったのとほぼ同時期である。最初の文字体系はシュメールで発明され、紀元前3千年紀後半までにウル第三王朝時代の古代楔形文字へ発達したと一般に信じられている。同時代に、原エラム文字がエラム線文字へと発達していった。',
    link: 'https://ja.wikipedia.org/wiki/%E6%96%87%E5%AD%97%E3%81%AE%E6%AD%B4%E5%8F%B2',
    type: EventType.letter
  },
  {
    time: '1450年頃',
    desc: '金属製の活字を作り、枠に収めてインクをつけて紙に印刷するという現在の活版印刷を始めたのは、一般にドイツのグーテンベルクといわれている。それは1440年ごろと言われているが、正確な時期や彼の素性などは正確には解っていない。',
    link: 'https://www.y-history.net/appendix/wh0902-083.html',
    type: EventType.gutenberg
  }

]