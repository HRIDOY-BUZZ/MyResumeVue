<template>
    <main class="hb-experince" id="hb-experience">
            <div class="bolor-overlay">
                <div class="container section-separator">
                    <h1 class="text-center wow fadeInUp" :class="{ 'fs-3': window.innerWidth < 440 }" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        Professional Experiences
                    </h1>
                    <div class="row pt-5">
                        <div class="col-lg-12 col-xl-6" v-for="exp in experiences" :key="exp">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>{{ exp.designation }} @ <a :href="exp.URL">{{ exp.company }}</a></h4>
                                        <div class="hb-eduyear">{{ exp.duration }}</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li v-for="li in exp.responsibilities" :key="li">
                                                <i class="fa fa-circle"></i>
                                                {{ li }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            experiences: []
        };
    },
    computed: {
            window() {
                return window;
            }
    },
    created() {
        axios.get('/data/data.json')
            .then(response => {
                this.experiences = response.data.experiences;
            })
            .catch(error => {
                console.error('Error loading experiences data:', error);
            });
    }
};
</script>