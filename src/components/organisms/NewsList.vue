<template>
  <div v-if="newsStatus === 'ok'" class="container flex justify-center my-12">
    <div class="grid grid-cols-3 gap-4 items-start justify-center">
      <template v-for="news in newsList" :key="news">
        <NewsCard
          :title="news.title"
          :description="news.description"
          :image="news.urlToImage"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
import NewsCard from '../molecules/NewsCard.vue'
  import { useStore } from 'vuex';

  const storeNews = useStore()
  const queryParams = {
    q: 'tesla',
    language: 'pt',
    from: '2023-07-04',
    sortBy: 'publishedAt',
    pageSize: 6,
    page: 1,
  }
  storeNews.dispatch('fetchNews', queryParams)
  const newsList = computed(() => storeNews.getters.getterNews.articles)
  const newsStatus = computed(() => storeNews.getters.getterNews.status)
</script>
