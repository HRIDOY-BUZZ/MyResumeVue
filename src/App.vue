<script setup>
  import PreLoader from './components/PreLoader.vue'
  import Header from './components/Header.vue'
  import Body from './components/Body.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <PreLoader v-if="!loaded"></PreLoader>
  <Header />
  <Body />
  <Footer />
</template>

<script>
  export default {
  components: {
    PreLoader,
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>