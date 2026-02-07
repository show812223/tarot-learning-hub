<template>
  <v-container class="py-8" style="max-width: 900px">
    <!-- Not Found -->
    <div v-if="!card" class="text-center py-16">
      <v-icon icon="mdi-help-circle-outline" size="64" color="#6b6988" class="mb-4" />
      <h2 class="text-h6 mb-4" style="color: #6b6988">找不到這張牌</h2>
      <v-btn to="/library" color="primary" variant="outlined">返回牌義圖書館</v-btn>
    </div>

    <template v-else>
      <!-- Breadcrumb -->
      <v-breadcrumbs class="px-0 mb-4">
        <v-breadcrumbs-item to="/library">牌義圖書館</v-breadcrumbs-item>
        <v-breadcrumbs-divider>/</v-breadcrumbs-divider>
        <v-breadcrumbs-item>{{ card.name }}</v-breadcrumbs-item>
      </v-breadcrumbs>

      <!-- Card Header -->
      <v-row class="mb-8">
        <!-- Card Visual -->
        <v-col cols="12" sm="4" class="d-flex justify-center">
          <div
            class="card-visual d-flex align-center justify-center"
            :style="{ borderColor: suitColors[card.suit] }"
          >
            <div class="text-center">
              <div class="font-serif text-h5 text-primary" style="opacity: 0.7">
                {{ card.suit === 'major' ? toRoman(card.number) : card.number }}
              </div>
              <div class="font-serif text-h5 font-weight-bold my-2">{{ card.name }}</div>
              <div class="text-caption" style="color: #6b6988">{{ card.nameEn }}</div>
            </div>
          </div>
        </v-col>

        <!-- Meta -->
        <v-col cols="12" sm="8">
          <h1 class="font-serif text-primary text-h4 mb-1">{{ card.name }}</h1>
          <p class="text-body-2 mb-4" style="color: #6b6988">{{ card.nameEn }}</p>

          <div class="d-flex ga-2 mb-6">
            <v-chip
              variant="outlined"
              size="small"
              :color="suitColors[card.suit]"
            >
              {{ suitLabels[card.suit] }}
            </v-chip>
            <v-chip variant="outlined" size="small">
              {{ elementLabels[card.element] }}元素
            </v-chip>
          </div>

          <!-- Keywords -->
          <div class="mb-4">
            <div class="text-caption font-weight-medium mb-2" style="color: #6b6988">正位關鍵字</div>
            <div class="d-flex flex-wrap ga-1">
              <v-chip
                v-for="kw in card.keywords.upright"
                :key="kw"
                size="small"
                color="primary"
                variant="tonal"
              >
                {{ kw }}
              </v-chip>
            </div>
          </div>

          <div>
            <div class="text-caption font-weight-medium mb-2" style="color: #6b6988">逆位關鍵字</div>
            <div class="d-flex flex-wrap ga-1">
              <v-chip
                v-for="kw in card.keywords.reversed"
                :key="kw"
                size="small"
                color="secondary"
                variant="tonal"
              >
                {{ kw }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Detail Sections -->
      <v-card color="#1a1a2e" border class="mb-4 pa-5">
        <h2 class="text-body-1 font-weight-bold text-primary mb-2">正位牌義</h2>
        <p class="text-body-2" style="color: #9d9bb5; line-height: 1.8">{{ card.description.upright }}</p>
      </v-card>

      <v-card color="#1a1a2e" border class="mb-4 pa-5">
        <h2 class="text-body-1 font-weight-bold text-primary mb-2">逆位牌義</h2>
        <p class="text-body-2" style="color: #9d9bb5; line-height: 1.8">{{ card.description.reversed }}</p>
      </v-card>

      <v-card color="#1a1a2e" border class="mb-4 pa-5">
        <h2 class="text-body-1 font-weight-bold text-primary mb-2">圖像象徵</h2>
        <p class="text-body-2" style="color: #9d9bb5; line-height: 1.8">{{ card.symbolism }}</p>
      </v-card>

      <v-row class="mb-8">
        <v-col cols="12" md="6">
          <v-card color="#1a1a2e" border class="pa-5 h-100">
            <h2 class="text-body-1 font-weight-bold text-primary mb-2">
              <v-icon icon="mdi-heart-outline" size="small" class="mr-1" />
              感情解讀
            </h2>
            <p class="text-body-2" style="color: #9d9bb5; line-height: 1.8">{{ card.love }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="#1a1a2e" border class="pa-5 h-100">
            <h2 class="text-body-1 font-weight-bold text-primary mb-2">
              <v-icon icon="mdi-briefcase-outline" size="small" class="mr-1" />
              事業解讀
            </h2>
            <p class="text-body-2" style="color: #9d9bb5; line-height: 1.8">{{ card.career }}</p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Prev / Next -->
      <v-divider class="mb-6" />
      <div class="d-flex justify-space-between">
        <v-btn
          v-if="prevCard"
          :to="`/card/${prevCard.id}`"
          variant="text"
          color="primary"
        >
          <v-icon start icon="mdi-chevron-left" />
          {{ prevCard.name }}
        </v-btn>
        <div v-else />

        <v-btn
          v-if="nextCard"
          :to="`/card/${nextCard.id}`"
          variant="text"
          color="primary"
        >
          {{ nextCard.name }}
          <v-icon end icon="mdi-chevron-right" />
        </v-btn>
        <div v-else />
      </div>
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { getCardById, allCards } from '~/data/cards';
import { suitLabels, elementLabels, suitColors } from '~/data/types';

const route = useRoute();
const id = route.params.id as string;
const card = getCardById(id);

useHead({ title: card ? `${card.name} — 塔羅學習小站` : '找不到牌' });

const currentIndex = card ? allCards.findIndex((c) => c.id === card.id) : -1;
const prevCard = currentIndex > 0 ? allCards[currentIndex - 1] : null;
const nextCard = currentIndex < allCards.length - 1 ? allCards[currentIndex + 1] : null;

function toRoman(num: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) {
      result += syms[i];
      num -= vals[i];
    }
  }
  return result || '0';
}
</script>

<style scoped>
.card-visual {
  width: 200px;
  aspect-ratio: 2/3;
  background: linear-gradient(145deg, #1a1a3e, #0d0d2b);
  border-radius: 12px;
  border: 2px solid;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}
</style>
