import { EventType, HistoryEvent } from './model'

export const kaniEvents: HistoryEvent[] = [
  {
    title: '海',
    time: '38億年前',
    desc: '雨水はやがて激流となって、地表を覆い始めました。 今からおよそ38億年前には、地球に海が誕生していたといわれています。',
    link: 'https://www2.nhk.or.jp/school/movie/clip.cgi?das_id=D0005402585_00000&p=box',
    type: EventType.none
  },
  {
    title: '蝸牛',
    time: '3億年前',
    desc: '最も古い陸生（陸に住む）腹足類としては、ヨーロッパの石炭紀に生息するMaturipupaが知られているが、現代の陸生カタツムリの親戚は、おなじみのらせん構造が初めて登場した白亜紀以前では珍しい。',
    link: 'https://en.wikipedia.org/wiki/Gastropoda',
    type: EventType.none
  },
  {
    title: '蟹',
    time: '2億年前',
    desc: '最も古いカニの化石はジュラ紀初期のもので、最も古いものはイギリスのプリエンスバニアン初期に産出されたEocarcinusで、現代のカニを特徴づけるいくつかの重要な形態的特徴を欠いていることから、幹群の系統である可能性が高い。',
    link: 'https://en.wikipedia.org/wiki/Crab#Evolution',
    type: EventType.none
  },
  {
    title: '人類',
    time: '700万年前',
    desc: 'およそ700万年前にアフリカで誕生した人類は、その後、いくつもの種に枝分かれし、誕生と絶滅を繰り返しながら進化してきた。最新の研究によれば、分かっているだけでもおよそ20種もの人類が地球上に暮らしていたと考えられている。',
    link: 'https://www.nhk.or.jp/special/jinrui/',
    type: EventType.none
  },
  {
    title: '絵',
    time: '6万5000年前',
    desc: '絵画は、基本的には、線や色彩をもちいて、物の形や姿を平面上に描き出したものである。その起源は有史以前に遡り、スペインで6万5000年以上前にネアンデルタール人が描いたと推定される洞窟壁画が発見されている。',
    link: 'https://ja.wikipedia.org/wiki/%E7%B5%B5%E7%94%BB',
    type: EventType.painting
  },
  {
    title: '漁夫',
    time: '4万年前',
    desc: '魚釣りの歴史は古く、少なくとも約4万年前の後期旧石器時代の始まりにまで遡ることができます。',
    link: 'https://en.wikipedia.org/wiki/Fishing',
    type: EventType.none
  },
  {
    title: '酒',
    time: '1万4000年前',
    desc: '酒の歴史は非常に古く、有史（文字の歴史）以前から作られた。 最古の酒とされている蜂蜜酒（ミード）は農耕が始まる以前から存在し、およそ1万4千年前に狩人がクマなどに荒らされて破損した蜂の巣に溜まっている雨水を飲んだことが始まりとされている。',
    link: 'https://ja.wikipedia.org/wiki/%E9%85%92#%E6%AD%B4%E5%8F%B2',
    type: EventType.none
  },
  {
    title: '文字',
    time: '紀元前4000年',
    desc: '最初の文字体系が発明されたのは紀元前4千年紀後半の後期新石器時代に青銅器時代が始まったのとほぼ同時期である。最初の文字体系はシュメールで発明され、紀元前3千年紀後半までにウル第三王朝時代の古代楔形文字へ発達したと一般に信じられている。同時代に、原エラム文字がエラム線文字へと発達していった。',
    link: 'https://ja.wikipedia.org/wiki/%E6%96%87%E5%AD%97%E3%81%AE%E6%AD%B4%E5%8F%B2',
    type: EventType.letter
  },
  {
    title: '船',
    time: '紀元前4000年',
    desc: '紀元前4,000年頃にはエジプト・ナイル川流域の他、チグリス川・ユーフラテス川流域のメソポタミアでも帆走船が使われていた形跡が残っている。',
    link: 'https://ja.wikipedia.org/wiki/%E8%88%B9#%E6%AD%B4%E5%8F%B2',
    type: EventType.none
  },
  {
    title: '地獄',
    time: '紀元前1000年',
    desc: '天国と地獄の起源はいくつかあるようですが、特に古いものにはゾロアスター教でしょう。四層の天国界と地獄界の概念があります。',
    link: 'https://jp.quora.com/tengoku-ya-jigoku-toiu-gainen-ha-doko-kara-rai-ta-no-desu-ka',
    type: EventType.none
  },
  {
    title: '煙草',
    time: '600年',
    desc: '7世紀ごろ[原始的な喫煙]のマヤ文明・パレンケ遺跡においてはすでに神がたばこをくゆらすレリーフが発見されており、このころにはすでに喫煙の習慣がはじまっていたことを示している。',
    link: 'https://ja.wikipedia.org/wiki/%E3%81%9F%E3%81%B0%E3%81%93#%E6%AD%B4%E5%8F%B2',
    type: EventType.none
  },
  {
    title: '活字',
    time: '1440年',
    desc: '金属製の活字を作り、枠に収めてインクをつけて紙に印刷するという現在の活版印刷を始めたのは、一般にドイツのグーテンベルクといわれている。それは1440年ごろと言われているが、正確な時期や彼の素性などは正確には解っていない。',
    link: 'https://www.y-history.net/appendix/wh0902-083.html',
    type: EventType.gutenberg
  },
  {
    title: '函館',
    time: '1454年',
    desc: '享徳3年（1454年）：河野政通が宇須岸（ウスケシ）に館を築く。館が箱の形に似ていることに因んでこの地を「箱館」と呼んだとされている。',
    link: 'https://ja.wikipedia.org/wiki/%E5%87%BD%E9%A4%A8%E5%B8%82#%E6%AD%B4%E5%8F%B2',
    type: EventType.none
  },
  {
    title: '巻煙草',
    time: '1800年',
    desc: '18世紀末から、それまでほぼスペインのみで消費されていた葉巻が徐々にヨーロッパ大陸に広まるようになり、19世紀には流行を見せた。',
    link: 'https://ja.wikipedia.org/wiki/%E3%81%9F%E3%81%B0%E3%81%93#%E6%AD%B4%E5%8F%B2',
    type: EventType.none
  }
]

/*
  {
    title: '人類',
    time: '700万年前',
    desc: 'およそ700万年前にアフリカで誕生した人類は、その後、いくつもの種に枝分かれし、誕生と絶滅を繰り返しながら進化してきた。最新の研究によれば、分かっているだけでもおよそ20種もの人類が地球上に暮らしていたと考えられている。',
    link: 'https://www.nhk.or.jp/special/jinrui/',
    type: EventType.none
  },
  {
    title: '絵',
    time: '6万5000年前',
    desc: '絵画は、基本的には、線や色彩をもちいて、物の形や姿を平面上に描き出したものである。その起源は有史以前に遡り、スペインで6万5000年以上前にネアンデルタール人が描いたと推定される洞窟壁画が発見されている。',
    link: 'https://ja.wikipedia.org/wiki/%E7%B5%B5%E7%94%BB',
    type: EventType.painting
  },
  {
    title: '文字',
    time: '紀元前4000年',
    desc: '最初の文字体系が発明されたのは紀元前4千年紀後半の後期新石器時代に青銅器時代が始まったのとほぼ同時期である。最初の文字体系はシュメールで発明され、紀元前3千年紀後半までにウル第三王朝時代の古代楔形文字へ発達したと一般に信じられている。同時代に、原エラム文字がエラム線文字へと発達していった。',
    link: 'https://ja.wikipedia.org/wiki/%E6%96%87%E5%AD%97%E3%81%AE%E6%AD%B4%E5%8F%B2',
    type: EventType.letter
  },
  {
    title: '活字',
    time: '1440年',
    desc: '金属製の活字を作り、枠に収めてインクをつけて紙に印刷するという現在の活版印刷を始めたのは、一般にドイツのグーテンベルクといわれている。それは1440年ごろと言われているが、正確な時期や彼の素性などは正確には解っていない。',
    link: 'https://www.y-history.net/appendix/wh0902-083.html',
    type: EventType.gutenberg
  },
*/
