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
                                <template #default="{ item, index }">
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
                    id: 1,
                    title: 'Oxdora I Tech', 
                    subtitle: 'Company Portfolio Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/oxdora_new.webp', 
                    link: 'https://oxdoraitech.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 2,
                    title: 'Web CV', 
                    subtitle: 'Personal Web Curriculumn Vitae using Vue.js',
                    image: '/assets/images/portfolio/resume.webp', 
                    link: '/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 3,
                    title: 'Valor of Bangladesh', 
                    subtitle: 'Company Portfolio Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/vob.webp', 
                    link: 'https://valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 4,
                    title: 'CXO Summit 2022', 
                    subtitle: 'Summit Registration Website using Core PHP and Tailwind',
                    image: '/assets/images/portfolio/cxo.webp', 
                    link: 'https://cxos2022.valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 5,
                    title: 'Strategy Summit 2022', 
                    subtitle: 'Summit Registration Website using Core PHP and Tailwind',
                    image: '/assets/images/portfolio/strategy.webp', 
                    link: 'https://strategysummit.valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 6,
                    title: 'Strategy Summit 2023', 
                    subtitle: 'Summit Registration Website using Core PHP and Tailwind',
                    image: '/assets/images/portfolio/ss23.webp', 
                    link: 'https://strategysummit.valorofbangladesh.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 7,
                    title: 'Bangladesh Cancer Aid Trust Organization', 
                    subtitle: 'Oraganization Portfolio Website with multiple payment getways using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/bancat.webp', 
                    link: 'https://bancat.org.bd/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 8,
                    title: 'Oz Tech Shopping', 
                    subtitle: 'Tech based E-commerce Website using Wordpress and Woocommerce',
                    image: '/assets/images/portfolio/ozts.webp', 
                    link: 'https://oztechshopping.com.au/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 9,
                    title: 'Splendor Transit', 
                    subtitle: 'Online Car Rental Website with multiple payment getways using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/splendor.webp', 
                    link: 'https://splendortransit.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 10,
                    title: 'XiT Solution Career Portal', 
                    subtitle: 'Employee Apply and Recruitment portal using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/xit.webp', 
                    link: 'https://xitsolution.com/career/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 11,
                    title: 'Pricepond Old site', 
                    subtitle: 'Price Comparison Shopping Engine (Maintenance Only) using Core PHP, Javascript and CSS',
                    image: '/assets/images/portfolio/pp_old.webp', 
                    link: 'https://pricepond.com.au/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 12,
                    title: 'XiT HRM Software', 
                    subtitle: 'Employee Attendance Management system using Core PHP and Bootstrap',
                    image: '/assets/images/portfolio/hrm.webp', 
                    link: 'https://hrm.xitsolution.com/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 13,
                    title: 'BUZZ Love Calculator',
                    subtitle: 'Personal Fun Project using Vue.js and Bootstrap',
                    image: '/assets/images/portfolio/love.webp', 
                    link: 'https://love.hridoybuzz.me/',
                    linktext: 'Click to Visit Site',
                    linkClass: 'fst-italic',
                },
                {
                    id: 14,
                    title: 'Green Earth Technologies', 
                    subtitle: 'Portfolio and Product Display website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/get.webp', 
                    link: '#',
                    linktext: 'Under Development',
                    linkClass: 'fst-italic text-danger',
                },
                {
                    id: 15,
                    title: 'Pricepond New Site', 
                    subtitle: 'Price Comparison Shopping Engine using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/pp_new.webp', 
                    link: 'https://new.pricepond.com.au/',
                    linktext: 'Under Development',
                    linkClass: 'fst-italic text-danger',
                },
                {
                    id: 16,
                    title: 'Pricepond Merchant Panel', 
                    subtitle: 'A Complete panel for Pricepond Merchants using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/merchant.webp', 
                    link: 'https://merchant.pricepond.com.au/',
                    linktext: 'Under Development',
                    linkClass: 'fst-italic text-danger',
                },
                {
                    id: 17,
                    title: 'Ponyo Posari', 
                    subtitle: 'Online Grocery Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/ponyoposari.webp', 
                    link: 'https://ponyoposari.com/',
                    linktext: 'Under Development',
                    linkClass: 'fst-italic text-danger',
                    
                },
                {
                    id: 18,
                    title: 'Hungry Cuisine', 
                    subtitle: 'Online Restaurant Website using Core PHP and Materialize CSS',
                    image: '/assets/images/portfolio/hungry.webp', 
                    link: '#',
                    linktext: 'Discontinued',
                    linkClass: 'fst-italic text-danger',
                    
                },
                {
                    id: 19,
                    title: 'Madina News BD', 
                    subtitle: 'Online News Portal using Wordpress',
                    image: '/assets/images/portfolio/news.webp', 
                    link: '#',
                    linktext: 'Discontinued',
                    linkClass: 'fst-italic text-danger',
                    
                },
                {
                    id: 20,
                    title: 'Akond Style', 
                    subtitle: 'Online Shopping Ecommerce Website using Wordpress and Woocommerce',
                    image: '/assets/images/portfolio/akond.webp', 
                    link: '#',
                    linktext: 'Discontinued',
                    linkClass: 'fst-italic text-danger',
                    
                },
                {
                    id: 21,
                    title: 'Poricharika', 
                    subtitle: 'Online House Maid Service Website using Laravel, Bootstrap and JQuery',
                    image: '/assets/images/portfolio/poricharika.webp', 
                    link: '#',
                    linktext: 'Under Development',
                    linkClass: 'fst-italic text-danger',
                    
                },
            ]
        }
    },
};
</script>