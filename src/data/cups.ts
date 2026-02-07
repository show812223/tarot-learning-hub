import type { TarotCard } from './types';

export const cups: TarotCard[] = [
  {
    id: 'cups-1', number: 1, name: '聖杯一', nameEn: 'Ace of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['新感情', '愛', '直覺', '靈性'], reversed: ['情感封閉', '空虛', '被拒絕'] },
    description: {
      upright: '一隻手從雲中捧出溢滿的聖杯，代表新的情感體驗、愛的降臨與靈性的覺醒。打開心扉接受。',
      reversed: '逆位暗示情感上的封閉，不願意接受或給予愛。',
    },
    symbolism: '溢滿的聖杯、五道水流、鴿子與聖餐、蓮花，象徵愛的源頭與情感的豐盛。',
    love: '新戀情的開始，或現有感情注入新的深度。', career: '對工作注入新的熱情，或找到真正有意義的事業。',
  },
  {
    id: 'cups-2', number: 2, name: '聖杯二', nameEn: 'Two of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['夥伴', '相互吸引', '連結', '和諧'], reversed: ['分離', '失衡', '信任缺失'] },
    description: {
      upright: '兩人舉杯相對，代表深刻的連結與互相吸引。無論是愛情還是友情，都充滿和諧與平等。',
      reversed: '逆位暗示關係中的失衡或信任問題，可能面臨分離。',
    },
    symbolism: '兩人交換聖杯、雙蛇杖、獅首翅膀，象徵平等的夥伴關係與靈性的結合。',
    love: '深刻的愛情連結，兩人之間的化學反應與和諧。', career: '找到理想的合作夥伴或商業搭檔。',
  },
  {
    id: 'cups-3', number: 3, name: '聖杯三', nameEn: 'Three of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['慶祝', '友誼', '歡聚', '創意合作'], reversed: ['疏離', '八卦', '過度沉溺'] },
    description: {
      upright: '三位女性舉杯歡慶，代表友情、社交歡樂與群體的慶祝。享受與朋友們的美好時光。',
      reversed: '逆位暗示社交圈中的八卦或疏離，或過度沉溺於社交娛樂。',
    },
    symbolism: '三位舞蹈的女性、豐收的果實、高舉的聖杯，象徵喜悅的慶祝與友誼。',
    love: '社交圈中遇到潛在對象，或與朋友一起享樂。', career: '團隊合作成果斐然，值得慶祝。',
  },
  {
    id: 'cups-4', number: 4, name: '聖杯四', nameEn: 'Four of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['倦怠', '不滿足', '冥想', '重新評估'], reversed: ['覺醒', '接受機會', '走出倦怠'] },
    description: {
      upright: '一人坐在樹下冥想，對遞來的第四杯視而不見。代表對現狀的不滿足或冷漠，需要重新審視自己的渴望。',
      reversed: '逆位代表走出倦怠期，開始注意到新的機會並願意接受。',
    },
    symbolism: '冥想者、三個杯子、雲中伸出的手持第四杯、大樹，象徵內在的不滿與反思。',
    love: '對感情感到倦怠，需要重新找回熱情。', career: '對工作失去興趣，需要尋找新的動力。',
  },
  {
    id: 'cups-5', number: 5, name: '聖杯五', nameEn: 'Five of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['失落', '悲傷', '後悔', '專注於損失'], reversed: ['接受', '前進', '從悲傷中恢復'] },
    description: {
      upright: '一人悲傷地注視著三個倒下的杯子，卻沒看到身後兩個仍然立著的杯子。提醒你不要只看到失去的，也要看到仍擁有的。',
      reversed: '逆位代表開始接受失去，願意轉身面對仍存在的美好事物。',
    },
    symbolism: '三個倒下的杯子、兩個立著的杯子、黑色斗篷、河流與橋，象徵失落與希望並存。',
    love: '為失去的感情悲傷，但需要看到仍有新的可能。', career: '工作上的挫折讓人沮喪，但仍有轉機。',
  },
  {
    id: 'cups-6', number: 6, name: '聖杯六', nameEn: 'Six of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['懷舊', '童年', '純真', '重逢'], reversed: ['活在過去', '不成熟', '無法放手'] },
    description: {
      upright: '一個孩子將裝滿花的聖杯遞給另一個孩子，代表美好的回憶、純真的善意與可能的重逢。',
      reversed: '逆位暗示過度沉溺於過去，無法面對當下。或是童年陰影需要被療癒。',
    },
    symbolism: '兩個孩子、六個裝花的杯子、老房子、守衛，象徵純真的回憶與過去的美好。',
    love: '與舊情人重逢，或在回憶中找到療癒。', career: '回到熟悉的工作環境或與舊同事合作。',
  },
  {
    id: 'cups-7', number: 7, name: '聖杯七', nameEn: 'Seven of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['幻想', '選擇', '白日夢', '誘惑'], reversed: ['清醒', '做出選擇', '面對現實'] },
    description: {
      upright: '七個浮在雲中的杯子裡裝著不同的幻象，代表你面前有太多選擇，但需要分辨哪些是真實的，哪些只是幻想。',
      reversed: '逆位代表從幻想中清醒，開始做出實際的選擇，面對現實。',
    },
    symbolism: '雲中的七個杯子、各種幻象（寶石、城堡、蛇等）、影子人，象徵誘惑與幻想。',
    love: '對感情有不切實際的幻想，需要面對現實。', career: '太多選擇反而猶豫不決，需要聚焦。',
  },
  {
    id: 'cups-8', number: 8, name: '聖杯八', nameEn: 'Eight of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['離開', '放下', '追尋意義', '轉身'], reversed: ['害怕改變', '留戀', '逃避'] },
    description: {
      upright: '一人背對八個聖杯，向著月光下的山路走去。代表勇敢放下現有的一切，去追尋更有意義的事物。',
      reversed: '逆位暗示害怕離開熟悉的環境，或在逃避必須面對的問題。',
    },
    symbolism: '背對杯子離去的人、月亮與山路、水邊，象徵主動的離開與靈性的追尋。',
    love: '可能選擇離開不再滿足的關係，追尋真正的幸福。', career: '離開目前的工作崗位，尋找更有意義的職業。',
  },
  {
    id: 'cups-9', number: 9, name: '聖杯九', nameEn: 'Nine of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['滿足', '願望成真', '幸福', '享受'], reversed: ['貪心', '不滿足', '物質主義'] },
    description: {
      upright: '一位心滿意足的人坐在九個排列整齊的杯子前微笑，被稱為「許願牌」。你的願望即將實現，享受這份滿足。',
      reversed: '逆位暗示即使得到想要的仍感到不滿足，或過度追求物質享受。',
    },
    symbolism: '微笑的人、九個高高排列的杯子、交叉的手臂，象徵願望的實現與滿足。',
    love: '感情中的願望即將實現，幸福感滿溢。', career: '事業上獲得理想的成果，心滿意足。',
  },
  {
    id: 'cups-10', number: 10, name: '聖杯十', nameEn: 'Ten of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['幸福', '家庭和樂', '圓滿', '和諧'], reversed: ['家庭衝突', '期望落差', '不和'] },
    description: {
      upright: '一對夫妻與孩子在彩虹下歡慶，天空中出現十個聖杯。代表家庭的圓滿幸福，情感上的完整與和諧。',
      reversed: '逆位暗示家庭中的衝突或期望與現實的落差。',
    },
    symbolism: '幸福的家庭、彩虹中的十個杯子、美麗的家園，象徵情感的圓滿與家庭和樂。',
    love: '感情達到幸福圓滿的境界，家庭和樂。', career: '工作與家庭生活取得美好的平衡。',
  },
  {
    id: 'cups-page', number: 11, name: '聖杯侍者', nameEn: 'Page of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['創意', '直覺', '好消息', '浪漫'], reversed: ['情緒不穩', '逃避', '不切實際'] },
    description: {
      upright: '年輕的侍者驚訝地看著杯中跳出的魚，代表意想不到的創意靈感或情感上的好消息。保持開放與好奇。',
      reversed: '逆位暗示情緒不穩定，或沉溺在不切實際的幻想中。',
    },
    symbolism: '年輕人、杯中的魚、藍色衣裳、海邊，象徵驚喜的情感訊息與直覺。',
    love: '可能收到浪漫的表白或感情上的好消息。', career: '創意靈感湧現，適合藝術或創意工作。',
  },
  {
    id: 'cups-knight', number: 12, name: '聖杯騎士', nameEn: 'Knight of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['浪漫', '魅力', '理想主義', '邀請'], reversed: ['善妒', '情緒化', '不切實際'] },
    description: {
      upright: '騎士優雅地騎馬前行，手持聖杯如同帶著邀請。代表浪漫的追求者、藝術的邀約或感性的行動。',
      reversed: '逆位暗示過度理想主義，或用情感來操控他人。',
    },
    symbolism: '白馬上的騎士、聖杯、翼盔、流水，象徵浪漫的追求與情感的使者。',
    love: '浪漫的追求者出現，帶著真心與美好的承諾。', career: '藝術或創意領域的新機會。',
  },
  {
    id: 'cups-queen', number: 13, name: '聖杯皇后', nameEn: 'Queen of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['共情', '直覺', '溫柔', '療癒'], reversed: ['情緒失控', '依賴', '殉道者心態'] },
    description: {
      upright: '皇后凝視著手中精美的聖杯，代表深層的直覺力、同理心與療癒能力。她能感受並理解他人的情感。',
      reversed: '逆位暗示被他人的情緒淹沒，或過度自我犧牲。',
    },
    symbolism: '水邊的寶座、精美封蓋的聖杯、天使雕飾、鵝卵石，象徵深層的情感智慧。',
    love: '在感情中展現深厚的共情與照顧，是理想的伴侶。', career: '適合諮商、療癒、照護等需要同理心的工作。',
  },
  {
    id: 'cups-king', number: 14, name: '聖杯國王', nameEn: 'King of Cups', suit: 'cups', element: 'water',
    keywords: { upright: ['情緒成熟', '包容', '外交', '平衡'], reversed: ['情緒壓抑', '操控', '冷漠'] },
    description: {
      upright: '國王端坐於波濤中卻穩如泰山，代表情緒上的成熟與掌控力。他能在情感與理性間找到完美平衡。',
      reversed: '逆位暗示壓抑情感，或用情緒來操控他人。',
    },
    symbolism: '波浪中的寶座、聖杯與權杖、魚項鍊、船隻，象徵情緒的掌控與智慧。',
    love: '成熟穩重的伴侶，能夠給予情感上的安全感。', career: '以情商和外交手腕處理職場關係。',
  },
];
