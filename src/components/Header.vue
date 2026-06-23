<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('hb-home');

const sections = ['hb-home', 'hb-about', 'hb-services', 'hb-skills', 'hb-interests', 'hb-education', 'hb-experience', 'hb-contact'];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (id) => {
    isMenuOpen.value = false;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScroll = () => {
    isScrolled.value = window.scrollY >= 50;

    // Check if we are at the very bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20) {
        activeSection.value = 'hb-contact';
        return;
    }

    let currentSection = 'hb-home';
    for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
            const rect = el.getBoundingClientRect();
            // Use 150px offset to account for fixed navbar height and padding
            if (rect.top <= 150 && rect.bottom > 150) {
                currentSection = sectionId;
                break;
            }
        }
    }

    // Highlight "About Me" when viewing Services
    if (currentSection === 'hb-services') {
        activeSection.value = 'hb-about';
    } else {
        activeSection.value = currentSection;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial active section calculation after components are loaded
    setTimeout(handleScroll, 100);
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
                            <li class="nav-item" :class="{ active: activeSection === 'hb-home' }">
                                <a href="#hb-home" @click.prevent="scrollToSection('hb-home')" class="nav-link">
                                    <i class="fas fa-house-user"></i> Home
                                </a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-about' }">
                                <a href="#hb-about" @click.prevent="scrollToSection('hb-about')" class="nav-link">About Me</a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-skills' }">
                                <a href="#hb-skills" @click.prevent="scrollToSection('hb-skills')" class="nav-link">Skills and Abilities</a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-interests' }">
                                <a href="#hb-interests" @click.prevent="scrollToSection('hb-interests')" class="nav-link">Personal Interests</a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-education' }">
                                <a href="#hb-education" @click.prevent="scrollToSection('hb-education')" class="nav-link">Education</a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-experience' }">
                                <a href="#hb-experience" @click.prevent="scrollToSection('hb-experience')" class="nav-link">Professional Experiences</a>
                            </li>
                            <li class="nav-item" :class="{ active: activeSection === 'hb-contact' }">
                                <a href="#hb-contact" @click.prevent="scrollToSection('hb-contact')" class="nav-link">Contact Me</a>
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