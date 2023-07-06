<template>
  <div class="max-w-sm bg-slate-700 border border-gray-700 rounded-lg shadow">
    <img class="rounded-t-lg object-cover max-h-40 w-full" :src="image" :alt="title" />
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ formatedTitle }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ description.toString().substring(0, 70)}} [...]
      </p>
      <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Leia mais
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'NewsCard',
  props: {
    title: {
      type: String,
      default: 'Title Here',
    },
    description: {
      type: String,
      default: 'Description Here',
    },
    image: {
      type: String,
      default: 'https://placehold.co/600x400',
    }
  },  
  setup(props) {
    const formatedTitle = computed(() => {
      return props.title.length > 38 ? 
      `${props.title.toString().substring(0, 38)} ...` :
      props.title
    })

    return {
      formatedTitle,
    }
  }  
});
</script>
