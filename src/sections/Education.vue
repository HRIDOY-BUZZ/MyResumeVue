<script setup>
import { inject } from 'vue';

const educationData = inject('educationData');
</script>

<template>
    <main class="hb-experince" id="hb-education">
            <div class="bolor-overlay">
                <div class="container section-separator">
                    <h1 class="text-center wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        Education
                    </h1>
                    <div class="row pt-5">
                        <div class="col-sm-12 col-md-6" v-for="(education, index) in educationData" :key="index">
                            <div class="hb-education">
                                <div class="hb-education-deatils">
                                    <!-- Education Institutes-->
                                    <div class="hb-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                        <h4>{{ education.degree }} <i>From</i> <br />
                                            <a :href="education.institutionUrl">{{ education.institution }}</a>
                                        </h4>
                                        <div class="hb-eduyear" v-if="education.department">{{ education.department }}</div>
                                        <div class="hb-eduyear">{{ education.year }}</div>
                                        <p>
                                            <b>Campus:</b><br>
                                            <span v-for="(campus, idx) in education.campus" :key="idx">
                                                {{ campus }}
                                                <br v-if="idx < education.campus.length - 1">
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>