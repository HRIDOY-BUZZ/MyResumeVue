<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const routes = computed(() => {
    // Filter out the routes that should not be in the navigation
    const excludedRoutes = ['/portfolio', '/services'];
    return router.options.routes.filter(r => !excludedRoutes.includes(r.path));
});

const currentPageIndex = computed(() => {
    return routes.value.findIndex(r => r.path === route.path);
});

const isLastPage = computed(() => {
    return currentPageIndex.value === routes.value.length - 1;
});

const nextPage = computed(() => {
    if (isLastPage.value) {
        return routes.value[0]; // The first page (Home)
    } else if (currentPageIndex.value < routes.value.length - 1) {
        return routes.value[currentPageIndex.value + 1];
    }
    return null;
});
</script>

<template>
    <div class="page-navigation-container container">
      <div class="page-navigation">
        <router-link v-if="nextPage" :to="nextPage.path" class="nav-button next-button btn btn-fill">
          {{ isLastPage ? 'Back to Home' : nextPage.name }} <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .page-navigation-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .page-navigation {
    width: 100%;
    /* max-width: 1200px; Or your container's max-width */
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0;
    /* padding: 0 15px; */
  }
  
  .next-button {
    margin-left: auto;
  }
  
  @media (max-width: 768px) {
    .page-navigation {
      flex-direction: column;
      align-items: center;
    }
  
    .nav-button {
      margin: 0.5rem 0;
      /* width: 50%; */
      text-align: center;
    }
  }
  </style>