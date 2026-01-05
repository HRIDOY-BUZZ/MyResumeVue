<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const services = ref([]);

onMounted(() => {
    axios.get('/data/data.json')
        .then(response => {
            services.value = response.data.services;
        })
        .catch(error => {
            console.error('Error loading services data:', error);
        });
});
</script>

<template>
    <main class="hb-service">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <h2>What I do</h2>
                    </div>
                    <div class="col-md-4 col-sm-12" v-for="(service, index) in services" :key="index">
                        <div class="hb-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" :data-wow-delay="service.delay">
                            <i :class="service.icon"></i>
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<style scoped>
    .hb-service p{
        text-align: justify;
    }
</style>