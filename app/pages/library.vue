<template>
  <v-container class="py-8">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="font-serif text-primary text-h4 mb-1">牌義圖書館</h1>
      <p style="color: #9d9bb5">探索 78 張塔羅牌的完整含義</p>
    </div>

    <!-- Search -->
    <v-text-field
      v-model="search"
      placeholder="搜尋牌名、關鍵字、愛情、事業..."
      prepend-inner-icon="mdi-magnify"
      clearable
      class="mx-auto mb-4"
      style="max-width: 500px"
      bg-color="#1a1a2e"
      hide-details
    />

    <!-- Filters -->
    <div class="d-flex flex-wrap justify-center ga-2 mb-2">
      <v-btn
        v-for="t in typeOptions"
        :key="t.value"
        :variant="typeFilter === t.value ? 'flat' : 'outlined'"
        :color="typeFilter === t.value ? 'primary' : undefined"
        size="small"
        @click="setTypeFilter(t.value)"
      >
        {{ t.label }}
      </v-btn>
    </div>

    <div v-if="typeFilter === 'minor'" class="d-flex flex-wrap justify-center ga-2 mb-2">
      <v-btn
        v-for="s in suitOptions"
        :key="s.value"
        :variant="suitFilter === s.value ? 'flat' : 'outlined'"
        :color="suitFilter === s.value ? (s.color || 'primary') : undefined"
        size="small"
        @click="suitFilter = s.value"
      >
        {{ s.label }}
      </v-btn>
    </div>

    <!-- Count -->
    <p class="text-center text-caption mb-6" style="color: #6b6988">
      共 {{ filteredCards.length }} 張牌
    </p>

    <!-- Card Grid -->
    <v-row>
      <v-col
        v-for="card in filteredCards"
        :key="card.id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
      >
        <v-card
          :to="`/card/${card.id}`"
          color="#1a1a2e"
          class="card-item h-100"
          border
        >
          <div
            class="card-top-bar"
            :style="{ backgroundColor: suitColors[card.suit] }"
          />
          <v-card-text class="pa-3">
            <div
              class="text-caption font-weight-bold mb-1"
              :style="{ color: suitColors[card.suit] }"
            >
              {{ card.suit === 'major' ? String(card.number).padStart(2, '0') : suitLabels[card.suit] }}
            </div>
            <div class="text-body-2 font-weight-bold">{{ card.name }}</div>
            <div class="text-caption" style="color: #6b6988">{{ card.nameEn }}</div>
            <div class="d-flex flex-wrap ga-1 mt-2">
              <v-chip
                v-for="kw in card.keywords.upright.slice(0, 3)"
                :key="kw"
                size="x-small"
                color="primary"
                variant="tonal"
              >
                {{ kw }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <div v-if="filteredCards.length === 0" class="text-center py-12">
      <v-icon icon="mdi-magnify-close" size="48" color="#6b6988" class="mb-4" />
      <p style="color: #6b6988" class="mb-4">找不到符合條件的牌</p>
      <v-btn variant="outlined" color="primary" @click="resetFilters">重設篩選</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { allCards } from '~/data/cards';
import { suitLabels, suitColors } from '~/data/types';
import type { Suit } from '~/data/types';

useHead({ title: '牌義圖書館 — 塔羅學習小站' });

const search = ref('');
const typeFilter = ref<'all' | 'major' | 'minor'>('all');
const suitFilter = ref<'all' | Suit>('all');

const typeOptions = [
  { value: 'all' as const, label: '全部' },
  { value: 'major' as const, label: '大阿爾克那' },
  { value: 'minor' as const, label: '小阿爾克那' },
];

const suitOptions = [
  { value: 'all' as const, label: '全部花色', color: 'primary' },
  { value: 'wands' as const, label: '權杖', color: '#e74c3c' },
  { value: 'cups' as const, label: '聖杯', color: '#3498db' },
  { value: 'swords' as const, label: '寶劍', color: '#95a5a6' },
  { value: 'pentacles' as const, label: '星幣', color: '#f39c12' },
];

function setTypeFilter(val: 'all' | 'major' | 'minor') {
  typeFilter.value = val;
  suitFilter.value = 'all';
}

function resetFilters() {
  search.value = '';
  typeFilter.value = 'all';
  suitFilter.value = 'all';
}

const filteredCards = computed(() => {
  let cards = allCards;

  if (search.value?.trim()) {
    const q = search.value.toLowerCase();
    cards = cards.filter(
      (c) =>
        c.name.includes(q) ||
        c.nameEn.toLowerCase().includes(q) ||
        c.keywords.upright.some((k) => k.includes(q)) ||
        c.keywords.reversed.some((k) => k.includes(q)) ||
        c.love.includes(q) ||
        c.career.includes(q)
    );
  }

  if (typeFilter.value === 'major') {
    cards = cards.filter((c) => c.suit === 'major');
  } else if (typeFilter.value === 'minor') {
    cards = cards.filter((c) => c.suit !== 'major');
  }

  if (suitFilter.value !== 'all') {
    cards = cards.filter((c) => c.suit === suitFilter.value);
  }

  return cards;
});
</script>

<style scoped>
.card-top-bar {
  height: 3px;
}

.card-item {
  transition: all 0.25s ease;
}

.card-item:hover {
  border-color: #c9a84c !important;
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(201, 168, 76, 0.15);
}
</style>
