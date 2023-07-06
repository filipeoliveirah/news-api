<template>
  <nav aria-label="Page navigation">
    <ul class="flex items-center justify-center w-full -space-x-px h-8 text-sm">
      <li>
        <button
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-300 bg-gray-800 border border-gray-700 rounded-l-lg"
          :class="{'cursor-not-allowed' : active === 1}"
          :disabled="active === 1"
          @click="onChangePage(active - 1)"
        >
          <span class="sr-only">Previous</span>
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
        </button>
      </li>
      <template v-for="current in total" :key="current">
        <li>
          <button
            class="flex items-center justify-center px-3 h-8 leading-tight"
            :class="[
              current === active ? 
              'z-10 text-gray-600 border border-gray-300 bg-gray-50 hover:bg-gray-100 hover:text-gray-700' :
              'text-gray-500 bg-gray_100 border border-gray-700 hover:bg-gray-700 hover:text-gray-100'
            ]"
            @click="onChangePage(current)"
          >
            {{ current }}
          </button>
        </li>
      </template>
      <li>
        <button
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-300 bg-gray-800 border border-gray-700 rounded-r-lg"
          :class="{'cursor-not-allowed' : active === total}"
          @click="onChangePage(active + 1)"
          :disabled="active === total"
        >
          <span class="sr-only">Next</span>
          <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { defineProps,  defineEmits } from 'vue';
  const emit = defineEmits(['emitCurrentPage'])
  const props = defineProps({
    total: {
      type: Number,
      default: 1,
    },
    active: {
      type: Number,
      default: 1,
    },
  })

  function onChangePage(page: number) {
    emit('emitCurrentPage', page)
  }
</script>