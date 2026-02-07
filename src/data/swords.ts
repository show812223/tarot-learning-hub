import type { TarotCard } from './types';

export const swords: TarotCard[] = [
  {
    id: 'swords-1', number: 1, name: '寶劍一', nameEn: 'Ace of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['真相', '清晰', '突破', '新想法'], reversed: ['混亂', '誤解', '不清晰'] },
    description: {
      upright: '一隻手從雲中握住一把戴著冠冕的寶劍，代表思維的清晰、真相的突破與新的知性洞見。',
      reversed: '逆位暗示思緒混亂、溝通不良或被錯誤的資訊所誤導。',
    },
    symbolism: '雲中之手、戴冠的寶劍、山脈，象徵思想的力量與真相的穿透。',
    love: '在感情中看清真相，做出理性的判斷。', career: '腦中浮現突破性的新想法，適合啟動知識型工作。',
  },
  {
    id: 'swords-2', number: 2, name: '寶劍二', nameEn: 'Two of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['猶豫', '僵局', '逃避', '抉擇'], reversed: ['資訊浮現', '做出決定', '情緒波動'] },
    description: {
      upright: '蒙眼的女性雙手交叉持劍，代表你正面臨兩難的抉擇，故意蒙蔽雙眼不願面對。是時候做出決定了。',
      reversed: '逆位代表新的資訊浮現，幫助你走出僵局做出選擇。',
    },
    symbolism: '蒙眼女性、交叉的雙劍、背後的海與月亮，象徵逃避決定與內在的掙扎。',
    love: '在感情中面臨兩難選擇，需要勇敢面對。', career: '職場上的決定讓你猶豫不決。',
  },
  {
    id: 'swords-3', number: 3, name: '寶劍三', nameEn: 'Three of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['心碎', '悲傷', '痛苦', '分離'], reversed: ['療癒', '走出傷痛', '原諒'] },
    description: {
      upright: '三把劍刺穿一顆紅心，在暴風雨中。代表深刻的心痛、悲傷與情感上的傷害。允許自己感受這份痛苦。',
      reversed: '逆位代表開始從傷痛中療癒，學會原諒並放下。',
    },
    symbolism: '三把劍刺穿的心、暴風雨、灰色天空，象徵心碎的痛苦與情感創傷。',
    love: '感情中的心碎與痛苦，失戀或背叛。', career: '工作上遭遇令人心痛的打擊。',
  },
  {
    id: 'swords-4', number: 4, name: '寶劍四', nameEn: 'Four of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['休息', '恢復', '沉思', '撤退'], reversed: ['躁動', '筋疲力盡', '重新活動'] },
    description: {
      upright: '一位騎士靜臥在教堂中休息，代表身心需要停下來休息與恢復。暫時退出戰場，養精蓄銳。',
      reversed: '逆位暗示休息夠了，是時候重新投入行動。或是即使需要休息也無法停下來。',
    },
    symbolism: '靜臥的騎士、教堂、彩色玻璃窗、三把掛牆的劍，象徵休養與靜思。',
    love: '感情需要暫時的空間與休息。', career: '需要暫停工作、充電休息後再出發。',
  },
  {
    id: 'swords-5', number: 5, name: '寶劍五', nameEn: 'Five of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['衝突', '勝之不武', '欺騙', '失敗'], reversed: ['和解', '放下', '汲取教訓'] },
    description: {
      upright: '一人得意地收集戰場上的劍，兩名敗者沮喪離去。代表一場代價高昂的勝利，或不光彩的手段。',
      reversed: '逆位代表從衝突中學到教訓，願意放下爭鬥，走向和解。',
    },
    symbolism: '得意的勝者、沮喪的敗者、散落的劍、風暴的天空，象徵空洞的勝利。',
    love: '感情中的爭吵讓雙方都受傷。', career: '職場的勝利可能以犧牲人際關係為代價。',
  },
  {
    id: 'swords-6', number: 6, name: '寶劍六', nameEn: 'Six of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['過渡', '離開困境', '前行', '療癒之旅'], reversed: ['困在過去', '抗拒離開', '未解決的問題'] },
    description: {
      upright: '一位船夫載著女人和孩子渡河，從波濤到平靜的水面。代表從困難中過渡到更好的狀態，雖然過程悲傷但方向正確。',
      reversed: '逆位暗示無法離開困境，或試圖逃避而非真正解決問題。',
    },
    symbolism: '渡河的船、六把劍、一邊波濤一邊平靜的水面，象徵離開困境的過渡。',
    love: '離開令人痛苦的感情狀況，走向新的開始。', career: '換工作或搬遷，離開不良的工作環境。',
  },
  {
    id: 'swords-7', number: 7, name: '寶劍七', nameEn: 'Seven of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['欺騙', '策略', '偷偷摸摸', '獨自行動'], reversed: ['被揭穿', '坦白', '良心不安'] },
    description: {
      upright: '一人偷偷摸摸地帶走五把劍，留下兩把。代表狡猾的策略、欺騙行為或需要獨自行動的情境。',
      reversed: '逆位暗示欺騙即將被揭穿，或是你決定坦白面對。',
    },
    symbolism: '偷劍的人、帳篷營地、回望的姿態，象徵策略性的行動與潛在的欺騙。',
    love: '感情中可能存在不忠或隱瞞。', career: '注意職場中的不誠實行為或策略性競爭。',
  },
  {
    id: 'swords-8', number: 8, name: '寶劍八', nameEn: 'Eight of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['被困', '受限', '無助', '自我設限'], reversed: ['解放', '新視角', '釋放恐懼'] },
    description: {
      upright: '蒙眼被綁的女性被八把劍圍繞，但其實她可以掙脫。代表自我設限的信念讓你感到被困住。',
      reversed: '逆位代表意識到限制是自我施加的，開始打破心理障礙。',
    },
    symbolism: '蒙眼被綁的女性、八把圍繞的劍、泥濘的地面、遠處的城堡，象徵心理的囚禁。',
    love: '在感情中感到被困住，但其實你有選擇的自由。', career: '感覺工作中沒有出路，但限制可能是自己造成的。',
  },
  {
    id: 'swords-9', number: 9, name: '寶劍九', nameEn: 'Nine of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['焦慮', '失眠', '噩夢', '過度擔憂'], reversed: ['釋放焦慮', '尋求幫助', '走出黑暗'] },
    description: {
      upright: '一人在深夜從噩夢中驚醒，九把劍掛在牆上。代表焦慮、失眠與內心深處的恐懼。這些擔憂可能被放大了。',
      reversed: '逆位代表開始面對恐懼，焦慮逐漸緩解，願意尋求幫助。',
    },
    symbolism: '驚醒的人、床上的玫瑰雕飾、九把掛牆的劍、黑暗，象徵夜間的焦慮與心理折磨。',
    love: '對感情過度焦慮和擔憂，需要面對恐懼。', career: '工作壓力造成焦慮失眠，需要照顧心理健康。',
  },
  {
    id: 'swords-10', number: 10, name: '寶劍十', nameEn: 'Ten of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['結束', '背叛', '最低點', '新黎明'], reversed: ['復甦', '拒絕放棄', '最壞已過'] },
    description: {
      upright: '一人倒下，背上插著十把劍，但遠方出現黎明。代表痛苦的結束與背叛，但這已是最低點，接下來只會更好。',
      reversed: '逆位代表最壞的已經過去，開始從谷底反彈，拒絕被打倒。',
    },
    symbolism: '倒下的人、十把劍、黑暗的天空與黎明的曙光，象徵最深的痛苦與新開始的希望。',
    love: '感情可能經歷最痛苦的時刻，但已到谷底即將反彈。', career: '工作上的最大挫折，但危機即是轉機。',
  },
  {
    id: 'swords-page', number: 11, name: '寶劍侍者', nameEn: 'Page of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['好奇', '機敏', '新想法', '觀察'], reversed: ['八卦', '尖酸刻薄', '散漫'] },
    description: {
      upright: '年輕的侍者舉劍警惕地觀察四周，代表好奇心、警覺性與敏銳的思維。準備好接收新的資訊。',
      reversed: '逆位暗示用言語傷人、散播八卦，或思維過於散漫。',
    },
    symbolism: '持劍的年輕人、風中飄揚的頭髮、多雲的天空，象徵敏銳的心智與警覺。',
    love: '保持好奇與開放的心態面對感情。', career: '學習新知識或技能，保持敏銳的觀察力。',
  },
  {
    id: 'swords-knight', number: 12, name: '寶劍騎士', nameEn: 'Knight of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['果斷', '直言', '衝鋒', '野心'], reversed: ['衝動', '無方向', '咄咄逼人'] },
    description: {
      upright: '騎士策馬衝鋒陷陣，代表果斷的行動與直言不諱的態度。以強大的智力與決心追求目標。',
      reversed: '逆位暗示行動過於衝動，或言語過於攻擊性。',
    },
    symbolism: '衝鋒的騎馬戰士、飛速的風、暴風雲，象徵思維的快速與果斷的行動。',
    love: '感情中直截了當，可能追求得太過急切。', career: '果斷地追求事業目標，但要注意方法。',
  },
  {
    id: 'swords-queen', number: 13, name: '寶劍皇后', nameEn: 'Queen of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['獨立', '客觀', '清晰溝通', '界限'], reversed: ['冷酷', '偏見', '情感封閉'] },
    description: {
      upright: '皇后高舉寶劍，面容嚴肅而清明。代表獨立思考、客觀判斷與清晰的溝通能力。她不被情緒左右。',
      reversed: '逆位暗示過於冷漠或刻薄，用理性壓抑情感。',
    },
    symbolism: '高舉的劍、蝴蝶裝飾、單獨的寶座、天使雕飾，象徵獨立的智慧與清晰的判斷。',
    love: '在感情中保持獨立與界限，不失去自我。', career: '以客觀與專業的態度處理工作事務。',
  },
  {
    id: 'swords-king', number: 14, name: '寶劍國王', nameEn: 'King of Swords', suit: 'swords', element: 'air',
    keywords: { upright: ['權威', '理性', '公正', '知識'], reversed: ['獨斷', '濫權', '殘酷'] },
    description: {
      upright: '國王端坐持劍，代表以理性與公正治理。他擁有清晰的思維與權威性的判斷力。',
      reversed: '逆位暗示濫用權力或過於獨斷專行，以理性為名行殘酷之事。',
    },
    symbolism: '正坐的國王、直立的寶劍、天使與蝴蝶、雲端的寶座，象徵理性的權威與公正。',
    love: '需要理性地處理感情問題，不被情緒牽著走。', career: '在專業領域展現權威與公正的判斷力。',
  },
];
