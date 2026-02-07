<template>
  <div>
    <!-- App Bar -->
    <v-app-bar :elevation="0" color="rgba(10, 10, 20, 0.9)" class="border-b-thin">
      <template #prepend>
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
        />
      </template>

      <v-app-bar-title>
        <NuxtLink to="/" class="d-flex align-center text-decoration-none" style="gap: 8px">
          <span class="text-primary text-h5">☽</span>
          <span class="font-serif text-body-1 font-weight-bold" style="color: #e8e6f0">
            塔羅學習小站
          </span>
        </NuxtLink>
      </v-app-bar-title>

      <template #append>
        <div class="d-none d-md-flex align-center" style="gap: 8px">
          <v-btn
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            variant="text"
            :color="route.path === item.path ? 'primary' : undefined"
            rounded="lg"
          >
            <v-icon start :icon="item.icon" size="small" />
            {{ item.label }}
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="#12121f"
    >
      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.label"
          :active="route.path === item.path"
          active-color="primary"
          @click="drawer = false"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />

      <!-- Footer -->
      <v-footer class="border-t-thin justify-center pa-6" color="transparent">
        <span class="text-caption" style="color: #6b6988">
          塔羅學習小站 — 探索 78 張塔羅牌的智慧
        </span>
      </v-footer>
    </v-main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const drawer = ref(false);

const navItems = [
  { path: '/', label: '首頁', icon: 'mdi-home-outline' },
  { path: '/library', label: '牌義圖書館', icon: 'mdi-book-open-page-variant-outline' },
  { path: '/daily', label: '每日一抽', icon: 'mdi-star-four-points-outline' },
];
</script>
