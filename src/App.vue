<script setup>
  import { ref, onMounted } from 'vue';
  import Header from './components/Header.vue';
  import Body from './components/Body.vue';
  import Footer from './components/Footer.vue';
  import { AtomSpinner } from 'epic-spinners';

  const loading = ref(true);

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 2000));
    loading.value = false;
  });
</script>

<template>
  <atom-spinner v-if="loading" :size="150" color="#0bceaf" />
  <template v-else>
    <Header />
    <main class="main-content">
      <Body />
    </main>
    <Footer />
  </template>
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    flex: 1;
  }
  .atom-spinner{
    position:absolute;
    margin-top: 40vh;
    margin-left: calc(50vw - 75px);
  }
</style>
