<script setup>
import { inject, computed } from 'vue';
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

const skillsData = inject('skillsData');

const PSkills = computed(() => skillsData.value.PSkills || []);
const TSkills = computed(() => skillsData.value.TSkills || []);
// const ESkills = computed(() => skillsData.value.ESkills || []);
</script>

<template>
    <main class="hb-skills" id="hb-skills">
            <div class="container">
                <div class="row section-separator">
                    <div class="section-title text-center col-sm-12">
                        <h3>Technical Skills</h3>
                    </div>
                    <div class="col-sm-12 col-md-6 py-0" v-for="skill in TSkills" :key="skill.id">
                        <div class="hb-skills-inner">
                            <div class="hb-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <div class="each-skills">
                                    <div class="candidatos">
                                        <div class="parcial">
                                            <div class="info">
                                                <div class="nome">{{ skill.name }}</div>
                                                <div class="percentagem-num">{{ skill.percent }}%</div>
                                            </div>
                                            <div class="progressBar">
                                                <div class="percentagem" :style="{ width: skill.percent + '%' }"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
                    <div class="section-title text-center col-sm-12">
                        <h3>Extra Skills</h3>
                    </div>
                    <div class="col-sm-12 col-md-6 py-0" v-for="skill in ESkills" :key="skill.id">
                        <div class="hb-skills-inner">
                            <div class="hb-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <div class="each-skills">
                                    <div class="candidatos">
                                        <div class="parcial">
                                            <div class="info">
                                                <div class="nome">{{ skill.name }}</div>
                                                <div class="percentagem-num">{{ skill.percent }}%</div>
                                            </div>
                                            <div class="progressBar">
                                                <div class="percentagem" :style="{ width: skill.percent + '%' }"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="row section-separator">
                    <div class="section-title text-center col-sm-12">
                        <h3>Professional Skills</h3>
                    </div>
                    <div class="col-12">
                        <div class="hb-professional-skills wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <ul class="hb-professional-progress">
                                <li v-for="skill in PSkills" :key="skill.id">
                                    <circle-progress
                                    :size="100"
                                    :percent="skill.percent"
                                    :fill-color="'#0bceaf'"
                                    :empty-color="'#333333'"
                                    :border-width="6"
                                    :border-bg-width="6"
                                    :transition="2000"
                                    :show-percent="true"
                                    :viewport="true"
                                    :class="'hb-progress hb-progress-circle'"
                                    >
                                    </circle-progress>
                                    <div class="pr-skill-name">{{ skill.name }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<style scoped>

</style>