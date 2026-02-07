<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center py-16 position-relative" style="overflow: hidden">
      <!-- Decorative stars -->
      <div class="hero-stars">
        <span
          v-for="i in 20"
          :key="i"
          class="hero-star"
          :style="{
            left: `${starPositions[i - 1].x}%`,
            top: `${starPositions[i - 1].y}%`,
            animationDelay: `${starPositions[i - 1].delay}s`,
            animationDuration: `${starPositions[i - 1].duration}s`,
          }"
        />
      </div>

      <v-container class="position-relative" style="z-index: 1">
        <h1 class="font-serif text-primary mb-4" style="font-size: clamp(2rem, 6vw, 3.5rem)">
          塔羅學習小站
        </h1>
        <p class="text-body-1 mx-auto mb-8" style="color: #9d9bb5; max-width: 500px">
          探索 78 張塔羅牌的奧秘，開啟你的直覺之旅
        </p>
        <div class="d-flex justify-center flex-wrap ga-4">
          <v-btn
            to="/library"
            color="primary"
            size="large"
            class="font-weight-bold"
          >
            <v-icon start icon="mdi-book-open-page-variant-outline" />
            瀏覽牌義圖書館
          </v-btn>
          <v-btn
            to="/daily"
            variant="outlined"
            color="primary"
            size="large"
          >
            <v-icon start icon="mdi-star-four-points-outline" />
            每日一抽
          </v-btn>
        </div>
      </v-container>
    </section>

    <!-- Features -->
    <v-container class="py-12">
      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          md="4"
        >
          <v-card
            color="#1a1a2e"
            class="pa-6 text-center h-100 feature-card"
            border
          >
            <div class="text-h4 text-primary mb-4">{{ feature.icon }}</div>
            <v-card-title class="text-body-1 font-weight-bold pb-2">
              {{ feature.title }}
            </v-card-title>
            <v-card-text style="color: #9d9bb5">
              {{ feature.desc }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Intro Section -->
    <v-container class="py-12 text-center">
      <h2 class="font-serif text-primary text-h5 mb-4">什麼是塔羅牌？</h2>
      <p
        class="mx-auto mb-8 text-body-1"
        style="color: #9d9bb5; max-width: 700px; line-height: 1.8"
      >
        塔羅牌是一套由 78 張牌組成的占卜工具，分為大阿爾克那（Major Arcana）22 張與小阿爾克那（Minor
        Arcana）56 張。大阿爾克那描繪人生重大主題，小阿爾克那則反映日常生活細節。
      </p>

      <v-row justify="center">
        <v-col
          v-for="suit in suits"
          :key="suit.name"
          cols="6"
          sm="3"
        >
          <v-card
            color="#1a1a2e"
            class="pa-4 text-center"
            :style="{ borderColor: suit.color }"
            border
          >
            <div class="text-h5 mb-2" :style="{ color: suit.color }">{{ suit.icon }}</div>
            <div class="text-body-2 font-weight-bold mb-1">{{ suit.name }}</div>
            <div class="text-caption" style="color: #9d9bb5">{{ suit.desc }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '塔羅學習小站 — 探索 78 張塔羅牌的智慧' });

// Pre-computed random positions for stars (avoid hydration mismatch)
const starPositions = Array.from({ length: 20 }, (_, i) => ({
  x: ((i * 37 + 13) % 100),
  y: ((i * 53 + 7) % 100),
  delay: (i * 0.15) % 3,
  duration: 2 + (i % 4),
}));

const features = [
  { icon: '✧', title: '牌義圖書館', desc: '完整收錄 22 張大阿爾克那與 56 張小阿爾克那，含正逆位解說。' },
  { icon: '✨', title: '每日一抽', desc: '每天隨機抽取一張塔羅牌作為今日指引，搭配翻牌動畫效果。' },
  { icon: '✦', title: '關鍵字搜尋', desc: '輸入關鍵字快速搜尋牌名或含義，如「愛情」、「事業」。' },
];

const suits = [
  { name: '權杖（火）', icon: '♠', color: '#e74c3c', desc: '行動、熱情、創造' },
  { name: '聖杯（水）', icon: '♥', color: '#3498db', desc: '情感、直覺、關係' },
  { name: '寶劍（風）', icon: '♦', color: '#95a5a6', desc: '思考、衝突、真相' },
  { name: '星幣（土）', icon: '♣', color: '#f39c12', desc: '物質、金錢、務實' },
];
</script>

<style scoped>
.hero-section {
  background: radial-gradient(ellipse at center, #12121f 0%, #0a0a14 70%);
}

.hero-stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-star {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #c9a84c;
  border-radius: 50%;
  animation: twinkle 3s infinite ease-in-out;
  opacity: 0;
}

.feature-card {
  transition: all 0.25s ease;
}

.feature-card:hover {
  border-color: #c9a84c !important;
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.15);
}
</style>
