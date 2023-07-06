<template>
  <div class="container py-6 mr-auto ml-auto">
    <img alt="Live News" class="w-32 ml-auto mr-auto py-6" src="../assets/svg/live-news.svg">
    <NewsList/>
  </div>
</template>

<script lang="ts">
  import NewsList from '@/components/organisms/NewsList.vue'

  import { onBeforeMount, defineComponent} from 'vue'

  export default defineComponent({
    components: { NewsList },
    setup() {
      onBeforeMount(() => {
        document.title = 'Live News';
      })
    }
  })
</script>
