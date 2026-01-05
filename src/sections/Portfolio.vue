<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import MasonryWall from '@yeger/vue-masonry-wall';

const projects = ref([]);

onMounted(() => {
    axios.get('/data/data.json')
        .then(response => {
            projects.value = response.data.projects;
            console.log(projects.value);
        })
        .catch(error => {
            console.error('Error loading projects data:', error);
        });
});
</script>

<template>
    <main class="hb-portfolio" id="hb-portfolio">
        <div class="container">
            <div class="row">
                <div class="section-title col-sm-12 wow fadeInUp mt-5" data-wow-duration="0.8s" data-wow-delay="0.1s">
                    <h3 class="pt-5">Some of My Works</h3>
                </div>
                <div class="part col-sm-12">
                    <div class="hb-project-gallery col-sm-12 wow fadeInUp" id="project-gallery" data-wow-duration="0.8s" data-wow-delay="0.5s">
                        <div class="container portfolioContainer row">
                            <masonry-wall :items="projects" :ssr-columns="1" :column-width="300" :gap="20">
                                <template v-slot:default="{ item }">
                                    <div class="grid-item  user-interface">
                                        <figure>
                                            <img :src="item.image" :alt="item.title" class="w-100">
                                            <figcaption class="fig-caption">
                                                <i class="fa fa-search"></i>
                                                <h5 class="title">{{ item.title }}</h5>
                                                <p :class="['sub-title', 'px-3', `${ item.id == 6 ? 'mt-3':''}`]">
                                                    {{ item.subtitle }} <br>
                                                    <i :class="item.linkClass">({{ item.linktext }})</i>
                                                </p>
                                                <a v-if="item.link == '#'">{{ item.linktext }}</a>
                                                <a v-else :href="item.link" target="_blank">{{ item.linktext }}</a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </template>
                            </masonry-wall>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>