<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        isCurrentPage(path) {
            return this.$route.path === path;
        },
    },
    components: {
        RouterLink,
    },
};
</script>

<template>
    <header class="black-bg hb-header hb-fixed-nav nav-scroll hb-xs-mobile-nav wow fadeInUp" id="hb-header">
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
                            <li class="nav-item" :class="{ active: isCurrentPage('/portfolio') }">
                                <router-link to="/portfolio" @click="toggleMenu" class="nav-link">My Portfolio</router-link>
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

@media only screen and (max-width: 991px) {
    li.nav-item.active a{
    color: black;
}
}

</style>