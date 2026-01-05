<script setup>
import { inject } from 'vue';

const home_data = inject('homeData');
const social_data = inject('socialData');
</script>

<template>
    <main class="hb-home" id="hb-home">
        <div class="home-ovimg">
            <div class="container">
                <div class="row xs-column-reverse section-separator vertical-middle-content home-padding">
                    <div class="col-sm-6">
                        <div class="hb-header-info">
                            <div class="hb-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                                <span>Hello I'm</span>
                            </div>
                            
                            <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                {{ home_data.name }}
                            </h2>
                            <h4 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                {{ home_data.title }}
                            </h4>
                            
                            <ul>
                                <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                    <i class="fa fa-envelope"></i>
                                    <a :href="'mailto:' + home_data.email">
                                        {{ home_data.email }}
                                    </a>
                                </li>
                                <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                                    <i class="fa fa-phone"></i>
                                    <a :href="'callto:' + home_data.phone">
                                        {{ home_data.phone }}
                                    </a>
                                </li>
                                <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                    <i class="fa fa-map-marker"></i>
                                    <address>
                                        {{ home_data.address }}
                                    </address>
                                </li>
                            </ul>
                            
                            <ul class="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                                <li>
                                    <a :href="social_data.facebook">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="social_data.twitter">
                                        <span class="fab">&#x1D54F;</span>
                                    </a>
                                </li>
                                <li>
                                    <a :href="social_data.linkedin">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a :href="social_data.github">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                            <div class="img-border">
                                <img :src="home_data.image" :alt="home_data.name" class="img-fluid" loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>