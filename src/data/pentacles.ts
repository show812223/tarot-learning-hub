import type { TarotCard } from './types';

export const pentacles: TarotCard[] = [
  {
    id: 'pentacles-1', number: 1, name: '星幣一', nameEn: 'Ace of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['新機會', '繁榮', '物質基礎', '潛力'], reversed: ['錯失機會', '財務損失', '不穩定'] },
    description: {
      upright: '一隻手從雲中捧出金幣，下方是繁盛的花園。代表物質層面的新機會，可能是新工作、財富或具體的成果。',
      reversed: '逆位暗示錯過了重要的機會，或財務上不穩定。',
    },
    symbolism: '雲中之手、金色星幣、花園拱門、繁花，象徵物質的豐盛與新起點。',
    love: '感情有穩固的物質基礎，或在務實的基礎上開始新戀情。', career: '新的工作機會或財務上的好消息。',
  },
  {
    id: 'pentacles-2', number: 2, name: '星幣二', nameEn: 'Two of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['平衡', '適應', '多工處理', '靈活'], reversed: ['失衡', '無法應付', '財務壓力'] },
    description: {
      upright: '一人愉快地玩弄兩個以無限符號相連的星幣，代表在多項事務中靈活平衡，適應變化。',
      reversed: '逆位暗示無法同時處理多項事務，失去平衡，財務上出現壓力。',
    },
    symbolism: '雜耍者、無限符號連結的星幣、波浪中的船，象徵靈活的平衡與適應。',
    love: '在感情與其他事務間保持平衡。', career: '同時處理多項工作任務，需要靈活應變。',
  },
  {
    id: 'pentacles-3', number: 3, name: '星幣三', nameEn: 'Three of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['團隊合作', '技能', '學習', '品質'], reversed: ['缺乏合作', '品質低落', '技能不足'] },
    description: {
      upright: '工匠在教堂中與修士和建築師討論工作，代表透過團隊合作與專業技能創造高品質的成果。',
      reversed: '逆位暗示團隊缺乏溝通或合作，工作品質不佳。',
    },
    symbolism: '教堂、三人討論、石雕工藝、建築藍圖，象徵專業技能與團隊合作。',
    love: '共同努力經營關係，互相學習成長。', career: '團隊合作順暢，專業技能獲得認可。',
  },
  {
    id: 'pentacles-4', number: 4, name: '星幣四', nameEn: 'Four of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['保守', '掌控', '安全感', '儲蓄'], reversed: ['慷慨', '放手', '過度消費'] },
    description: {
      upright: '一人緊緊抓住四個星幣不放，代表對物質的高度執著與安全感的需求。保守穩健但可能過度守財。',
      reversed: '逆位代表學會放手與慷慨分享，或反之過度揮霍。',
    },
    symbolism: '緊抱星幣的人、腳下與頭頂的星幣、城市背景，象徵物質的執著與控制。',
    love: '在感情中過於佔有或控制，需要學會放手。', career: '財務保守穩健，但可能錯過投資機會。',
  },
  {
    id: 'pentacles-5', number: 5, name: '星幣五', nameEn: 'Five of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['困難', '貧困', '孤立', '不安'], reversed: ['恢復', '接受幫助', '改善'] },
    description: {
      upright: '兩個衣衫襤褸的人走過教堂的彩色玻璃窗外，代表物質或精神上的匱乏。但幫助其實就在身邊，只是你沒看到。',
      reversed: '逆位代表困難時期即將結束，開始接受他人的幫助，情況改善。',
    },
    symbolism: '衣衫襤褸的兩人、教堂彩色玻璃窗、雪地，象徵物質的困乏與被忽視的幫助。',
    love: '感情中可能經歷困難或孤獨感。', career: '財務困難或失業，但轉機在望。',
  },
  {
    id: 'pentacles-6', number: 6, name: '星幣六', nameEn: 'Six of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['慷慨', '施與受', '公平', '分享'], reversed: ['不公平', '附帶條件', '債務'] },
    description: {
      upright: '富人拿著天秤分配金幣給乞丐，代表慷慨的施予與公平的分配。你可能處於給予或接受的位置。',
      reversed: '逆位暗示施與受之間的不平衡，或帶有附帶條件的慷慨。',
    },
    symbolism: '富人與乞丐、天秤、六個星幣，象徵慷慨、公平與施受的平衡。',
    love: '在感情中需要平衡付出與接受。', career: '獲得加薪或獎金，或進行慈善活動。',
  },
  {
    id: 'pentacles-7', number: 7, name: '星幣七', nameEn: 'Seven of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['耐心', '投資', '長期規劃', '評估'], reversed: ['缺乏耐心', '投資失敗', '浪費'] },
    description: {
      upright: '農夫倚著鋤頭審視著種植的成果，代表長期投入後的評估階段。成果正在慢慢成熟，需要耐心等待。',
      reversed: '逆位暗示對長期投資失去耐心，或發現回報不如預期。',
    },
    symbolism: '農夫、種滿星幣的灌木、鋤頭，象徵耕耘後的等待與反思。',
    love: '對感情的長期投入進行反思與評估。', career: '評估長期職業規劃的成效，考慮是否需要調整。',
  },
  {
    id: 'pentacles-8', number: 8, name: '星幣八', nameEn: 'Eight of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['勤奮', '專注', '技術精進', '工匠精神'], reversed: ['偷工減料', '重複無聊', '完美主義'] },
    description: {
      upright: '工匠專心地雕刻星幣，一個接一個地精進。代表透過勤奮與專注不斷提升技能，追求卓越。',
      reversed: '逆位暗示工作變得枯燥重複，或過於追求完美而無法完成。',
    },
    symbolism: '專注的工匠、八個逐漸完善的星幣、工作台，象徵勤奮學習與技能精進。',
    love: '願意為感情付出努力與時間來經營。', career: '專心學習新技能，勤奮工作的時期。',
  },
  {
    id: 'pentacles-9', number: 9, name: '星幣九', nameEn: 'Nine of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['富裕', '獨立', '自給自足', '優雅'], reversed: ['過度揮霍', '財務依賴', '孤獨'] },
    description: {
      upright: '優雅的女性站在豐盛的葡萄園中，手上停著一隻獵鷹。代表透過自身努力獲得的富裕與獨立。',
      reversed: '逆位暗示財務上的依賴，或富裕帶來的孤獨感。',
    },
    symbolism: '優雅的女性、葡萄園、獵鷹、蝸牛，象徵自給自足的富裕與優雅。',
    love: '享受獨立的生活，不需要依賴他人也能幸福。', career: '事業上的成功帶來財務自由與優質生活。',
  },
  {
    id: 'pentacles-10', number: 10, name: '星幣十', nameEn: 'Ten of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['財富', '傳承', '家族', '長久穩定'], reversed: ['家庭紛爭', '遺產問題', '經濟困難'] },
    description: {
      upright: '三代同堂在繁榮的家族拱門下，代表世代的財富傳承、家族的興盛與長久的穩定。',
      reversed: '逆位暗示家族中的財務紛爭或遺產問題。',
    },
    symbolism: '三代同堂、家族拱門、十個星幣排列成生命之樹、狗，象徵世代傳承與繁榮。',
    love: '深厚的家庭關係，世代的愛與傳承。', career: '建立長久穩定的事業基礎，可能涉及家族企業。',
  },
  {
    id: 'pentacles-page', number: 11, name: '星幣侍者', nameEn: 'Page of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['學習', '機會', '踏實', '好消息'], reversed: ['缺乏遠見', '懶散', '錯失機會'] },
    description: {
      upright: '年輕的侍者仔細端詳手中的星幣，代表認真學習的態度與務實的新機會。腳踏實地追求目標。',
      reversed: '逆位暗示缺乏學習動力，或因不務實而錯失機會。',
    },
    symbolism: '年輕人、仔細端詳的星幣、花園、遠山，象徵認真學習與務實的態度。',
    love: '以穩健務實的態度經營感情。', career: '學習新技能或獲得實習、進修的機會。',
  },
  {
    id: 'pentacles-knight', number: 12, name: '星幣騎士', nameEn: 'Knight of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['務實', '可靠', '勤勞', '穩定前進'], reversed: ['固執', '懶惰', '過於保守'] },
    description: {
      upright: '騎士坐在靜止的馬上仔細審視星幣，代表腳踏實地、穩健可靠的行動方式。不求快但求穩。',
      reversed: '逆位暗示過於保守而錯失時機，或變得固執不通融。',
    },
    symbolism: '靜止的馬與騎士、仔細端詳的星幣、耕地，象徵穩健務實的行動。',
    love: '穩定可靠的伴侶，以務實的方式經營感情。', career: '穩步推進工作，以可靠的表現贏得信任。',
  },
  {
    id: 'pentacles-queen', number: 13, name: '星幣皇后', nameEn: 'Queen of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['豐盛', '務實', '滋養', '安全感'], reversed: ['過度物質', '忽略靈性', '佔有慾'] },
    description: {
      upright: '皇后在花園中呵護著膝上的星幣，代表物質與精神的雙重豐盛，擅長創造溫暖安全的環境。',
      reversed: '逆位暗示過度追求物質安全感，忽略了靈性需求。',
    },
    symbolism: '花園中的皇后、膝上的星幣、兔子、繁花與藤蔓，象徵豐盛的滋養與務實的關愛。',
    love: '在感情中創造溫暖安全的環境，是理想的照顧者。', career: '在事業與家庭間取得美好平衡，務實地經營事業。',
  },
  {
    id: 'pentacles-king', number: 14, name: '星幣國王', nameEn: 'King of Pentacles', suit: 'pentacles', element: 'earth',
    keywords: { upright: ['富裕', '成功', '穩定', '實業家'], reversed: ['貪婪', '物質主義', '固執己見'] },
    description: {
      upright: '國王坐在裝飾豐富的寶座上，周圍是繁盛的花園，代表物質上的巨大成就與穩定。成功的企業家與提供者。',
      reversed: '逆位暗示過度貪婪，只關注金錢而忽略其他重要的事物。',
    },
    symbolism: '華麗的寶座、葡萄與公牛裝飾、金色盔甲、城堡，象徵物質的最高成就。',
    love: '提供穩定安全的物質基礎，是可靠的伴侶。', career: '事業達到頂峰，財務穩定而成功。',
  },
];
