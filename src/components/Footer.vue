<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const year = ref(new Date().getFullYear());
const route = useRoute();

const isCurrentPage = (path) => {
    return route.path === path;
};
</script>

<template>
    <footer class="hb-footer" id="hb-contact">
        <div class="map-image image-bg">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 hb-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="text-left text-xs-center">
                                    <p>Copyright <i class="far fa-copyright"></i> {{ year }} <a href="#"> Al-Amin Islam Hridoy</a></p>
                                </div>
                            </div>
                            <div v-if="!isCurrentPage('/')" class="col-sm-6 text-center">
                                <ul class="social-icon">
                                    <li>
                                        <a href="https://www.facebook.com/hridoy.al.amin.6/">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/hridoy_alamin">
                                            <span class="fab">&#x1D54F;</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/HRIDOY-BUZZ">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/al-amin-islam-hridoy/">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
