<script setup>
import { inject } from 'vue';
import Services from '../sections/Services.vue';

const about = inject('aboutData');
const name = about.value.name;
const photo = about.value.photo;
const description = about.value.description;
const skills = about.value.skill_tags;
const cv = about.value.cv_link;
</script>

<template>
    <main class="hb-about pt-5" id="hb-about">
        <div class="container">
            <div class="row section-separator">
                <div class="col-sm-12 col-md-6">
                    <div class="hb-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                        <img :src="photo" :alt="name" class="img-fluid" loading="lazy">
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="hb-about-inner">
                        <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                        <p class="wow fadeInUp text-justified" data-wow-duration="0.8s" data-wow-delay="0.2s">
                            {{ description }}
                        </p>
                        <div class="hb-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <ul>
                                <li v-for="skill in skills" :key="skill">
                                    <span>{{ skill.skill }}</span>
                                </li>
                            </ul>
                        </div>
                        <a :href="cv" class="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" target="_blank">
                            Download CV <i class="fa fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Services />
</template>