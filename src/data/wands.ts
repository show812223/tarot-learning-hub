import type { TarotCard } from './types';

export const wands: TarotCard[] = [
  {
    id: 'wands-1', number: 1, name: '權杖一', nameEn: 'Ace of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['新開始', '靈感', '熱情', '潛力'], reversed: ['延遲', '缺乏方向', '創意受阻'] },
    description: {
      upright: '一隻手從雲中伸出握住發芽的權杖，代表新的創意靈感與熱情的開始。把握這股能量，開始行動。',
      reversed: '逆位暗示新的計畫可能遭遇延遲，或你尚未找到真正的熱情所在。',
    },
    symbolism: '雲中之手、發芽的權杖、遠處的城堡，象徵創造力的萌芽與新機會。',
    love: '可能遇到令人心動的新對象，或感情中注入新的火花。', career: '新的創業機會或工作項目，充滿潛力。',
  },
  {
    id: 'wands-2', number: 2, name: '權杖二', nameEn: 'Two of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['計劃', '展望', '決定', '探索'], reversed: ['恐懼未知', '缺乏計畫', '安於現狀'] },
    description: {
      upright: '一位人物手持地球儀站在城牆上眺望，代表你已有初步成果，正在規劃更大的版圖與未來方向。',
      reversed: '逆位暗示害怕踏出舒適圈，或對未來缺乏明確的計畫。',
    },
    symbolism: '城牆、地球儀、兩根權杖、遠方的海洋，象徵遠見與探索的渴望。',
    love: '考慮感情的未來走向，可能需要做出重要決定。', career: '事業擴展的規劃期，考慮新的發展方向。',
  },
  {
    id: 'wands-3', number: 3, name: '權杖三', nameEn: 'Three of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['擴展', '遠見', '進展', '等待成果'], reversed: ['受阻', '延遲回報', '眼光狹隘'] },
    description: {
      upright: '人物站在高處望向遠方出發的船隊，代表你的計畫正在展開，成果即將到來。保持耐心與遠見。',
      reversed: '逆位暗示擴展計畫受阻，或因缺乏遠見而錯失機會。',
    },
    symbolism: '三根權杖、遠方的船隊、高地、黃色天空，象徵等待與期待成果的到來。',
    love: '感情正在穩步發展中，對未來抱有美好期待。', career: '事業穩步擴展，國際合作或遠程項目進展順利。',
  },
  {
    id: 'wands-4', number: 4, name: '權杖四', nameEn: 'Four of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['慶祝', '和諧', '家庭', '里程碑'], reversed: ['缺乏和諧', '過渡期', '不穩定'] },
    description: {
      upright: '花環裝飾的四根權杖構成歡迎的門廊，代表慶祝、歡聚與重要里程碑的達成。享受這份喜悅。',
      reversed: '逆位暗示家庭或團隊中的不和諧，或慶祝被延遲。',
    },
    symbolism: '四根權杖搭成的拱門、花環、歡慶的人群、城堡，象徵穩定的基礎與歡慶。',
    love: '感情中的重要時刻，如訂婚、搬家或共同慶祝。', career: '工作中達成重要里程碑，團隊合作愉快。',
  },
  {
    id: 'wands-5', number: 5, name: '權杖五', nameEn: 'Five of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['競爭', '衝突', '挑戰', '多方角力'], reversed: ['避免衝突', '內在衝突', '和解'] },
    description: {
      upright: '五個人各持權杖相互交戰，代表競爭、衝突與多方角力的局面。這些挑戰能激發你的成長。',
      reversed: '逆位暗示你在逃避必要的競爭，或衝突開始緩和，走向和解。',
    },
    symbolism: '五個人各持一根權杖、混亂的姿態，象徵健康的競爭與意見分歧。',
    love: '感情中可能有小爭吵或競爭對手的出現。', career: '職場競爭激烈，需要脫穎而出。',
  },
  {
    id: 'wands-6', number: 6, name: '權杖六', nameEn: 'Six of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['勝利', '認可', '成功', '自信'], reversed: ['失敗', '缺乏認可', '自負'] },
    description: {
      upright: '騎馬的勝利者頭戴桂冠，眾人簇擁歡呼。代表公眾的認可與成功，你的努力得到了回報。',
      reversed: '逆位暗示雖然付出努力但未獲得應有的認可，或因成功而變得自負。',
    },
    symbolism: '騎馬者、桂冠、歡呼的群眾、六根權杖，象徵勝利的榮耀與公眾認可。',
    love: '在感情中獲得伴侶的肯定與支持。', career: '獲得升遷、獎項或公眾認可。',
  },
  {
    id: 'wands-7', number: 7, name: '權杖七', nameEn: 'Seven of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['防禦', '堅持立場', '競爭優勢', '勇氣'], reversed: ['退讓', '不堪重壓', '放棄'] },
    description: {
      upright: '一人站在高處用權杖抵禦下方的攻擊，代表你正在捍衛自己的立場與成就。堅持到底，你有優勢。',
      reversed: '逆位暗示壓力過大而想放棄，或在不必要的戰鬥中消耗精力。',
    },
    symbolism: '高處的防守者、六根攻擊的權杖、不成對的鞋子，象徵捍衛與堅持。',
    love: '需要為感情中的信念堅持立場。', career: '在職場競爭中保護自己的地位與成果。',
  },
  {
    id: 'wands-8', number: 8, name: '權杖八', nameEn: 'Eight of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['快速行動', '進展', '訊息', '旅行'], reversed: ['延遲', '受阻', '倉促'] },
    description: {
      upright: '八根權杖如箭般快速飛越天空，代表事情正在快速推進，行動迅速見效。把握這股勢頭。',
      reversed: '逆位暗示進度遲緩，計畫遭遇延遲，或做事過於倉促。',
    },
    symbolism: '八根飛行的權杖、清澈的天空、遠處的土地，象徵速度與動能。',
    love: '感情快速升溫，或即將收到重要的感情訊息。', career: '項目快速推進，出差或商務旅行。',
  },
  {
    id: 'wands-9', number: 9, name: '權杖九', nameEn: 'Nine of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['堅韌', '毅力', '最後防線', '警惕'], reversed: ['疲憊', '放棄', '偏執'] },
    description: {
      upright: '受傷的戰士仍然緊握權杖，警惕地守衛著。代表你已經歷很多，但還需要最後的堅持。勝利就在前方。',
      reversed: '逆位暗示身心俱疲，過度警惕或考慮放棄。需要適當休息後再繼續。',
    },
    symbolism: '受傷但站立的戰士、九根權杖排成的防線，象徵韌性與堅持。',
    love: '在感情中經歷考驗後仍然堅持，需要勇氣面對最後的挑戰。', career: '項目接近完成但面臨最後的困難，堅持下去。',
  },
  {
    id: 'wands-10', number: 10, name: '權杖十', nameEn: 'Ten of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['負擔', '責任', '過度勞累', '壓力'], reversed: ['放下負擔', '委派', '解脫'] },
    description: {
      upright: '一人艱難地扛著十根權杖前行，代表你承擔了過多的責任與壓力。需要學會分擔或放下不必要的負擔。',
      reversed: '逆位代表開始放下沉重的負擔，學會委派任務，迎來解脫。',
    },
    symbolism: '負重前行的人、十根權杖、遠處的城鎮，象徵過度承擔與責任的重壓。',
    love: '感情中可能感到疲憊，需要與伴侶分擔壓力。', career: '工作量過大，需要重新分配任務或設定界限。',
  },
  {
    id: 'wands-page', number: 11, name: '權杖侍者', nameEn: 'Page of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['探險', '熱忱', '新發現', '好消息'], reversed: ['缺乏方向', '虎頭蛇尾', '衝動'] },
    description: {
      upright: '年輕的侍者好奇地審視手中的權杖，代表對新事物的熱忱與探索精神。一個充滿可能性的訊息即將到來。',
      reversed: '逆位暗示缺乏方向感，做事虎頭蛇尾，或衝動行事。',
    },
    symbolism: '年輕人、發芽的權杖、沙漠中的金字塔，象徵冒險精神與初始的熱情。',
    love: '感情中保持新鮮感與好奇心，可能有令人興奮的發展。', career: '新工作機會或學習新技能的訊號。',
  },
  {
    id: 'wands-knight', number: 12, name: '權杖騎士', nameEn: 'Knight of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['行動力', '冒險', '熱血', '衝勁'], reversed: ['魯莽', '三分鐘熱度', '延遲'] },
    description: {
      upright: '騎士策馬飛奔，充滿行動力與冒險精神。代表大膽追求目標，帶著熱情與自信出發。',
      reversed: '逆位暗示行動過於魯莽，或熱情消退導致半途而廢。',
    },
    symbolism: '奔騰的馬、紅色羽飾、沙漠背景，象徵熱情的行動與冒險精神。',
    love: '可能遇到熱情洋溢的追求者，或感情中充滿激情。', career: '快速行動把握機會，適合需要衝勁的項目。',
  },
  {
    id: 'wands-queen', number: 13, name: '權杖皇后', nameEn: 'Queen of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['自信', '魅力', '獨立', '溫暖'], reversed: ['嫉妒', '自私', '缺乏自信'] },
    description: {
      upright: '皇后自信地坐在寶座上，手持向日葵與權杖。她代表溫暖、自信與個人魅力，能夠激勵周圍的人。',
      reversed: '逆位暗示嫉妒心作祟，或自信心受損，變得控制慾過強。',
    },
    symbolism: '向日葵、黑貓、獅子寶座、權杖，象徵自信的領導力與溫暖的能量。',
    love: '在感情中展現魅力與獨立，吸引理想的伴侶。', career: '以自信與熱情帶領團隊，事業蒸蒸日上。',
  },
  {
    id: 'wands-king', number: 14, name: '權杖國王', nameEn: 'King of Wands', suit: 'wands', element: 'fire',
    keywords: { upright: ['領導力', '遠見', '企業家精神', '大膽'], reversed: ['獨裁', '衝動', '高期望'] },
    description: {
      upright: '國王手持權杖，展現大膽的領導力與遠見。他代表能夠將願景化為現實的企業家精神。',
      reversed: '逆位暗示領導方式過於獨斷，或因衝動做出錯誤決策。',
    },
    symbolism: '獅子與蜥蜴、王座、權杖、紅色斗篷，象徵火元素的領導力與遠見。',
    love: '在感情中扮演主導角色，熱情而慷慨。', career: '天生的領導者，適合創業或帶領大型項目。',
  },
];
