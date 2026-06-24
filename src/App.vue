<script setup>
import { ref, onMounted, provide } from 'vue';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';
import { AtomSpinner } from 'epic-spinners';

const loading = ref(true);

const homeData = ref({});
const socialData = ref({});
const aboutData = ref([]);
const skillsData = ref({});
const servicesData = ref([]);
const interestsData = ref([]);
const experiencesData = ref([]);
const educationData = ref([]);

provide('homeData', homeData);
provide('socialData', socialData);
provide('aboutData', aboutData);
provide('skillsData', skillsData);
provide('servicesData', servicesData);
provide('interestsData', interestsData);
provide('experiencesData', experiencesData);
provide('educationData', educationData);

onMounted(async () => {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        homeData.value = data.home;
        socialData.value = data.social;
        aboutData.value = data.about;
        const skills = data.skills[0];
        skillsData.value = {
            PSkills: skills.PSkills,
            TSkills: skills.TSkills,
            ESkills: skills.ESkills,
        }
        servicesData.value = data.services;
        interestsData.value = data.interests;
        experiencesData.value = data.experiences;
        educationData.value = data.education;
    } catch (error) {
        console.error('Error loading initial data:', error);
    } finally {
        await new Promise((r) => setTimeout(r, 2000));
        loading.value = false;
    }
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
  html {
    scroll-behavior: smooth;
  }

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
