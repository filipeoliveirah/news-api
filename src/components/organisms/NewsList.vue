<template>
  <div v-if="newsStatus === 'ok'" class="container max-w-6xl ml-auto mr-auto">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4">
      <template v-for="news in newsList" :key="news">
        <div class="flex items-start justify-center">
          <NewsCard
            :title="news.title"
            :description="news.description"
            :image="news.urlToImage"
          />
        </div>
      </template>
    </div>
    <div class="mt-12">
      <PaginationDefault
        :total="totalPages"
        :active="state.page"
        @emitCurrentPage="onEmitChangePage($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import NewsCard from '../molecules/NewsCard.vue'
  import PaginationDefault from '../atoms/PaginationDefault.vue'
  import { useStore } from 'vuex';

  const storeNews = useStore()

  const state = reactive({
    q: 'tesla',
    language: 'pt',
    from: '2023-07-04',
    sortBy: 'publishedAt',
    pageSize: 6,
    page: 1,
  })

  storeNews.dispatch('fetchNews', {...state})

  const newsList = computed(() => storeNews.getters.getterNews.articles)
  const newsStatus = computed(() => storeNews.getters.getterNews.status)
  const newstotal = computed(() => storeNews.getters.getterNews.totalResults)
  const totalPages = computed(() => Math.ceil(newstotal.value % state.pageSize))

  function onEmitChangePage(event: number) {
    state.page = event
    storeNews.dispatch('fetchNews', {...state})
  }
</script>
