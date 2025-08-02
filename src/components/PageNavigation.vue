<template>
    <div class="page-navigation-container container">
      <div class="page-navigation">
        <router-link v-if="nextPage" :to="nextPage.path" class="nav-button next-button btn btn-fill">
          {{ isLastPage ? 'Back to Home' : nextPage.name }} <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      routes() {
        // Filter out the routes that should not be in the navigation
        const excludedRoutes = ['/portfolio', '/services'];
        return this.$router.options.routes.filter(route => !excludedRoutes.includes(route.path));
      },
      currentPageIndex() {
        return this.routes.findIndex(route => route.path === this.$route.path);
      },
      nextPage() {
        if (this.isLastPage) {
          return this.routes[0]; // The first page (Home)
        } else if (this.currentPageIndex < this.routes.length - 1) {
          return this.routes[this.currentPageIndex + 1];
        }
        return null;
      },
      isLastPage() {
        return this.currentPageIndex === this.routes.length - 1;
      }
    }
  };
  </script>
  
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