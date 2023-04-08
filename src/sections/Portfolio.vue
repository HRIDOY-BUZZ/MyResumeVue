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
                            <masonry-wall :items="projects" :ssr-columns="1" :column-width="350" :gap="16">
                                <template #default="{ item, index }">
                                    <div class="grid-item  user-interface">
                                        <figure>
                                            <img :src="item.image" :alt="item.title" class="w-100">
                                            <figcaption class="fig-caption">
                                                <i class="fa fa-search"></i>
                                                <h5 class="title">{{ item.title }}</h5>
                                                <p class="sub-title px-3 mt-5">
                                                    {{ item.subtitle }} <br>
                                                    <i>({{ item.linktext }})</i>
                                                </p>
                                                <a :href="item.link" target="_blank">{{ item.linktext }}</a>
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

<script>

import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'

const app = createApp()

app.use(MasonryWall)

export default {
    components: {
        MasonryWall,
    },
    data() {
        return {
            projects: [
                { 
                    title: 'Oxdora I Tech', 
                    subtitle: 'Company Portfolio Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/oxdora_new.jpg', 
                    link: 'https://oxdoraitech.com/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Web CV', 
                    subtitle: 'Personal Web Curriculumn Vitae using Vue.js',
                    image: '/assets/images/portfolio/resume.png', 
                    link: '/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Valor of Bangladesh', 
                    subtitle: 'Company Portfolio Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/vob.png', 
                    link: 'https://valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'CXO Summit 2022', 
                    subtitle: 'Summit Registration Website using Core PHP and Tailwind',
                    image: '/assets/images/portfolio/cxo.png', 
                    link: 'https://cxos2022.valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Strategy Summit 2022', 
                    subtitle: 'Summit Registration Website using Core PHP and Tailwind',
                    image: '/assets/images/portfolio/strategy.png', 
                    link: 'https://strategysummit.valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Bangladesh Cancer Aid Trust Organization', 
                    subtitle: 'Oraganization Portfolio Website with multiple payment getways using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/bancat.png', 
                    link: 'https://bancat.org.bd/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Splendor Transit', 
                    subtitle: 'Online Car Rental Website with multiple payment getways using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/splendor.png', 
                    link: 'https://splendortransit.com/',
                    linktext: 'Click to Visit Site',
                },
                { 
                    title: 'Oz Tech Shopping', 
                    subtitle: 'Tech based E-commerce Website using Wordpress and Woocommerce',
                    image: '/assets/images/portfolio/ozts.png', 
                    link: 'https://oztechshopping.com.au/',
                    linktext: 'Click to Visit Site',
                },
            ]
        }
    },
};
</script>

<style scoped>
.portfolio-nav {
    margin: 0 auto;
    margin-bottom: 40px;
}

.portfolio-nav ul {
    margin: 0 auto;
    float: none;
    text-align: center;
}

.portfolio-nav ul li {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
}

.portfolio-nav ul li:hover {
    color: #0bceaf;
}

.portfolio-nav ul li.active {
    color: #0bceaf;
}

.hb-portfolio-modal {
    display: none;
    background: #282828;
}

.hb-portfolio-modal-inner {
    max-height: 500px;
    overflow-y: scroll;
    margin-right: 20px;
}

.hb-portfolio-modal-inner::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #fff;
}

.hb-portfolio-modal-inner::-webkit-scrollbar {
    width: 10px;
}

.hb-portfolio-modal-inner::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px #000;
}

.hb-portfolio-modal-inner h2 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.hb-portfolio-modal-img img {
    margin-bottom: 20px;
}

.mix {
    display: none;
}
</style>