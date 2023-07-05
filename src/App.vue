<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex';

  const store = useStore()
  store.dispatch('fetchNews')
</script>
