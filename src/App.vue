<script setup>
  import Header from './components/Header.vue'
  import Body from './components/Body.vue'
  import Footer from './components/Footer.vue'
  import { AtomSpinner } from 'epic-spinners'
</script>

<template>
  <atom-spinner v-if="loading" :size="150" color="#0bceaf" />
  <template v-else>
    <Header />
    <Body />
    <Footer />
  </template>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    },
    components: {
      AtomSpinner,
    },
    async mounted() {
      await new Promise((r) => setTimeout(r, 2000));
      this.loading = false
    }
  }
</script>

<style>
  .atom-spinner{
    position:absolute;
    margin: 40vh 50vw;
  }
</style>