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

                <div class="row">
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
                </div>
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
                                    :transition="1000"
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

<script>
    import "vue3-circle-progress/dist/circle-progress.css";
    import CircleProgress from "vue3-circle-progress";
    export default {
        data(){
            return {
                PSkills: [
                    { id: 1, name: 'Communication', percent: 93 },
                    { id: 2, name: 'Team Work', percent: 85 },
                    { id: 3, name: 'Project Management', percent: 88},
                    { id: 4, name: 'Creativity', percent: 90 },
                ],

                TSkills: [
                    { id: 1, name: 'Laravel', percent: 77 },
                    { id: 2, name: 'PHP', percent: 86 },
                    { id: 3, name: 'MySQL', percent: 82 },
                    { id: 4, name: 'WordPress', percent: 74 },
                    { id: 5, name: 'Vue.Js', percent: 55 },
                    { id: 6, name: 'Javascript & JQuery', percent: 65 },
                    { id: 7, name: 'HTML', percent: 90 },
                    { id: 9, name: 'CSS / Bootstrap', percent: 88 },
                    { id: 10, name: 'C / C++', percent: 88 },
                    { id: 11, name: 'C#', percent: 47 },
                    { id: 12, name: 'Java', percent: 55 },
                    { id: 13, name: 'Python', percent: 45 },
                    { id: 14, name: 'Linux', percent: 81 },
                    { id: 15, name: 'Web Server', percent: 75 },
                ],

                ESkills: [
                    { id: 1, name: 'Adobe Photoshop', percent: 79 },
                    { id: 2, name: 'Adobe Illustrator', percent: 50 },
                    { id: 3, name: 'Canva', percent: 71 },
                    { id: 4, name: 'GIMP', percent: 58 },
                    { id: 5, name: 'Arduino', percent: 60 },
                    { id: 6, name: 'Proteus', percent: 57 },
                ],
            }
        },
        components: {CircleProgress}
    }
</script>

<style scoped>

</style>