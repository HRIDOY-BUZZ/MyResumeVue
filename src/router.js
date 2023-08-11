import { createRouter, createWebHistory } from "vue-router";
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Services from './sections/Services.vue';
import Skills from './sections/Skills.vue';
import Interests from './sections/Interests.vue';
import Education from './sections/Education.vue';
import Experiences from './sections/Experiences.vue';
import Contact from './sections/Contact.vue';
import Portfolio from './sections/Portfolio.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
    },
    {
        path: '/interests',
        name: 'Interests',
        component: Interests
    },
    {
        path: '/education',
        name: 'Education',
        component: Education
    },
    {
        path: '/experiences',
        name: 'Experiences',
        component: Experiences
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    // Scroll to the top of the page before each route change
    window.scrollTo(0, 0);
    next();
});

export default router