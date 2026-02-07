<template>
  <v-container class="py-8" style="max-width: 700px">
    <div class="text-center mb-10">
      <h1 class="font-serif text-primary text-h4 mb-1">每日一抽</h1>
      <p style="color: #9d9bb5">抽取一張塔羅牌作為今日指引</p>
    </div>

    <!-- Draw Area -->
    <div class="d-flex flex-column align-center mb-10">
      <div
        class="card-container mb-6"
        :class="{ 'flip-animation': isFlipping }"
      >
        <!-- Card Back (not drawn yet) -->
        <div v-if="!showCard" class="card-back" @click="handleDraw">
          <div class="card-back-inner">
            <div class="card-back-border">
              <div class="star-pattern">
                <div
                  v-for="i in 8"
                  :key="i"
                  class="ray"
                  :style="{ transform: `rotate(${(i - 1) * 45}deg)` }"
                />
              </div>
              <div class="moon-symbol">☽</div>
            </div>
          </div>
        </div>

        <!-- Card Front (drawn) -->
        <NuxtLink
          v-else-if="result"
          :to="`/card/${result.card.id}`"
          class="card-front text-decoration-none"
        >
          <v-chip
            v-if="result.reversed"
            size="x-small"
            color="secondary"
            variant="tonal"
            class="reversed-badge"
          >
            逆位
          </v-chip>
          <div class="text-center">
            <div class="font-serif text-h4 text-primary" style="opacity: 0.6">
              {{ result.card.suit === 'major' ? result.card.number : '' }}
            </div>
            <div class="font-serif text-h5 font-weight-bold my-2" style="color: #e8e6f0">
              {{ result.card.name }}
            </div>
            <div class="text-caption" style="color: #6b6988">
              {{ result.card.nameEn }}
            </div>
          </div>
        </NuxtLink>
      </div>

      <v-btn
        v-if="!result"
        color="primary"
        size="x-large"
        class="font-weight-bold"
        style="letter-spacing: 0.1em"
        @click="handleDraw"
      >
        <v-icon start icon="mdi-star-four-points" />
        抽牌
      </v-btn>
      <p v-else class="text-caption" style="color: #6b6988">點擊牌面查看完整解讀</p>
    </div>

    <!-- Result Section -->
    <v-card v-if="result" color="#1a1a2e" border class="pa-6 mb-8">
      <h2 class="font-serif text-h6 text-primary mb-4">
        今日指引 — {{ result.card.name }}
        <span v-if="result.reversed" class="text-body-2" style="color: #b47ed8">（逆位）</span>
      </h2>

      <div class="mb-4">
        <div class="text-caption font-weight-medium mb-2" style="color: #6b6988">
          {{ result.reversed ? '逆位關鍵字' : '正位關鍵字' }}
        </div>
        <div class="d-flex flex-wrap ga-1">
          <v-chip
            v-for="kw in (result.reversed ? result.card.keywords.reversed : result.card.keywords.upright)"
            :key="kw"
            size="small"
            color="primary"
            variant="tonal"
          >
            {{ kw }}
          </v-chip>
        </div>
      </div>

      <p class="text-body-2 mb-4" style="color: #9d9bb5; line-height: 1.8">
        {{ result.reversed ? result.card.description.reversed : result.card.description.upright }}
      </p>

      <v-btn
        :to="`/card/${result.card.id}`"
        variant="text"
        color="primary"
        class="px-0"
      >
        查看完整牌義
        <v-icon end icon="mdi-arrow-right" size="small" />
      </v-btn>
    </v-card>

    <!-- History -->
    <div v-if="history.length > 1">
      <v-btn
        variant="outlined"
        block
        size="small"
        color="#6b6988"
        class="mb-4"
        @click="showHistory = !showHistory"
      >
        <v-icon start :icon="showHistory ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
        {{ showHistory ? '收起' : '展開' }}抽牌紀錄 ({{ history.length }})
      </v-btn>

      <v-list v-if="showHistory" bg-color="transparent" class="pa-0">
        <v-list-item
          v-for="rec in history"
          :key="rec.date"
          :to="`/card/${rec.card.id}`"
          class="mb-1 rounded-lg"
          color="#1a1a2e"
        >
          <template #prepend>
            <span class="text-caption mr-4" style="color: #6b6988; min-width: 90px">
              {{ rec.date }}
            </span>
          </template>
          <v-list-item-title class="text-body-2">
            {{ rec.card.name }}
            <span v-if="rec.reversed" class="text-caption" style="color: #b47ed8">(逆位)</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { DailyDrawResult } from '~/composables/useDailyDraw';

useHead({ title: '每日一抽 — 塔羅學習小站' });

const { drawCard, getTodayDraw, getHistory } = useDailyDraw();

const result = ref<DailyDrawResult | null>(null);
const isFlipping = ref(false);
const showCard = ref(false);
const showHistory = ref(false);
const history = ref<DailyDrawResult[]>([]);

onMounted(() => {
  const today = getTodayDraw();
  if (today) {
    result.value = today;
    showCard.value = true;
  }
  history.value = getHistory();
});

function handleDraw() {
  if (isFlipping.value) return;
  isFlipping.value = true;
  showCard.value = false;

  setTimeout(() => {
    result.value = drawCard();
    showCard.value = true;
    history.value = getHistory();
    setTimeout(() => { isFlipping.value = false; }, 600);
  }, 400);
}
</script>

<style scoped>
.card-container {
  width: 200px;
  aspect-ratio: 2/3;
  perspective: 1000px;
}

.card-back {
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #1a1a3e, #0d0d2b);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
}

.card-back:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.2), 0 8px 24px rgba(0, 0, 0, 0.5);
}

.card-back-inner {
  position: absolute;
  inset: 6px;
  border-radius: 8px;
  border: 1px solid #c9a84c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back-border {
  width: 80%;
  height: 80%;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.star-pattern {
  position: relative;
  width: 50px;
  height: 50px;
}

.ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 50px;
  background: linear-gradient(to bottom, #c9a84c, transparent);
  transform-origin: 50% 0;
  margin-left: -1px;
  opacity: 0.4;
}

.moon-symbol {
  font-size: 2rem;
  color: #c9a84c;
  opacity: 0.7;
}

.card-front {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #1e1e40, #14142e);
  border-radius: 12px;
  border: 2px solid #c9a84c;
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.2), 0 8px 24px rgba(0, 0, 0, 0.5);
  transition: transform 0.25s;
  position: relative;
}

.card-front:hover {
  transform: translateY(-4px);
}

.reversed-badge {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>
