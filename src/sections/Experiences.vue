<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';
import MasonryWall from '@yeger/vue-masonry-wall';

const experiences = inject('experiencesData');
const windowWidth = ref(window.innerWidth);

const handleResize = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <main class="hb-experince" id="hb-experience">
            <div class="bolor-overlay">
                <div class="container section-separator">
                    <h1 class="text-center wow fadeInUp" :class="{ 'fs-3': windowWidth < 440 }" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        Professional Experiences
                    </h1>
                    <div class="row pt-5">
                        <masonry-wall :items="experiences" :ssr-columns="1" :max-columns="2" :column-width="500" :gap="16">
                            <template v-slot:default="{ item }">
                                <div class="grid-item  user-interface" :style="{ order: item.id }">
                                    <div class="hb-work">
                                        <div class="hb-experience-deatils">
                                            <!-- Workplace-->
                                            <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                                <h4>{{ item.designation }} @ <a :href="item.URL">{{ item.company }}</a></h4>
                                                <ul class="company-location">
                                                    <li v-for="li in item.location" :key="li">
                                                        {{ li }}
                                                    </li>
                                                </ul>
                                                <div class="hb-eduyear">{{ item.duration }}</div>
                                                <span>Responsibilities :</span>
                                                <ul class="work-responsibility">
                                                    <li v-for="li in item.responsibilities" :key="li">
                                                        <i class="fa fa-circle"></i>
                                                        {{ li }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </masonry-wall>
                    </div>
                </div>
            </div>
        </main>
</template>

<style scoped>

.company-location {
    font-size: 12px;
    line-height: 20px;
    font-style: italic;
}

</style>