<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();
const isScrolled = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isCurrentPage = (path) => {
    return route.path === path;
};

const handleScroll = () => {
    isScrolled.value = window.scrollY >= 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header class="black-bg hb-header hb-fixed-nav nav-scroll hb-xs-mobile-nav wow fadeInUp" :class="{ 'nav-strict': isScrolled }" id="hb-header">
        <div class="overlay" @click="toggleMenu" :class="{ active: isMenuOpen }"></div>
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg hb-nav nav-btn">
                    <button class="navbar-toggler" @click="toggleMenu" :class="{ active: isMenuOpen }" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon icon"></span>
                        </button>
        
                    <div class="collapse navbar-collapse" :class="{ active: isMenuOpen }" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ml-auto">
                            <li class="nav-item" :class="{ active: isCurrentPage('/') }">
                                <router-link to="/" @click="toggleMenu" class="nav-link">
                                    <i class="fas fa-house-user"></i> Home
                                </router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/about') }">
                                <router-link to="/about" @click="toggleMenu" class="nav-link">About Me</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/skills') }">
                                <router-link to="/skills" @click="toggleMenu" class="nav-link">Skills and Abilities</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/interests') }">
                                <router-link to="/interests" @click="toggleMenu" class="nav-link">Personal Interests</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/education') }">
                                <router-link to="/education" @click="toggleMenu" class="nav-link">Education</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/experiences') }">
                                <router-link to="/experiences" @click="toggleMenu" class="nav-link">Professional Experiences</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: isCurrentPage('/contact') }">
                                <router-link to="/contact" @click="toggleMenu" class="nav-link">Contact Me</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>

li.nav-item.active a{
    color: #0bceaf;
}

.nav-strict {
    z-index: 99;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #202026;
}

.hb-header.nav-strict {
    padding: 15px 0;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

@media only screen and (max-width: 991px) {
    li.nav-item.active a{
        color: black;
    }
    .nav-strict .navbar-toggler {
        margin-top: 0px;
    }
}

</style>