<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    },
};
</script>

<template>
    <header class="black-bg hb-header hb-fixed-nav nav-scroll hb-xs-mobile-nav wow fadeInUp" id="hb-header">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg hb-nav nav-btn">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ml-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">
                                    <i class="fas fa-house-user"></i> Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">About Me</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/skills" class="nav-link">Skills & Interests</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/education" class="nav-link">Education</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/experiences" class="nav-link">Professional Experiences</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/portfolio" class="nav-link">My Portfolio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Contact Me</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>