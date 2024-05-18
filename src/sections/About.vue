<script setup>
    import Services from '../sections/Services.vue'
</script>
<template>
    <main class="hb-about pt-5" id="hb-about">
            <div class="container">
                <div class="row section-separator">
                    <div class="col-sm-12 col-md-6">
                        <div class="hb-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src="/assets/images/ab-img.webp" alt="Al-Amin Islam Hridoy" class="img-fluid" loading="lazy">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="hb-about-inner">
                            <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                            <p class="wow fadeInUp text-justified" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                I am a full-stack Web Developer (Laravel/PHP), having 2+ years of hands-on
                                experience in both front-end designing and back-end development. Familiar with all
                                stages of the development cycle for dynamic web projects. Currently looking for a
                                place where I can learn more and grow.
                            </p>
                            <div class="hb-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul>
                                    <li v-for="skill in skills" :key="skill">
                                        <span>{{ skill.skill }}</span>
                                    </li>
                                </ul>
                            </div>
                            <a href="/assets/files/CV_Al-Amin_Islam_Hridoy.pdf" class="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i class="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Services />
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            skills: []
        };
    },
    created() {
        axios.get('/data/data.json')
            .then(response => {
                this.skills = response.data.about;
            })
            .catch(error => {
                console.error('Error loading about data:', error);
            });
    }
};
</script>