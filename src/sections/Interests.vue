<template>
    <main class="hb-skills" id="hb-interests">
        <div class="container">
            <div class="row section-separator">
                <div class="section-title text-center col-sm-12">
                    <h3>Personal Interests</h3>
                </div>
                <div class="col-sm-12 col-md-6" v-for="(interest, index) in interestData" :key="index">
                    <div class="hb-skills-inner">
                        <div class="hb-professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                            <div class="each-skills text-center">
                                <div class="candidatos">
                                    <div class="parcial">
                                        <h4>{{ interest.title }}</h4>
                                        <p class="small-text" v-html="interest.description"></p>
                                    </div>
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
            interestData: []
        };
    },
    created() {
        axios.get('/data/data.json')
            .then(response => {
                this.interestData = response.data.interests;
            })
            .catch(error => {
                console.error('Error loading interests data:', error);
            });
    }
};
</script>

<style scoped>
    .hb-skills-inner{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .small-text{
        text-align: justify;
    }
</style>