import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./sections/Home.vue')
    },
    {
        path: '/about',
        name: 'About Me',
        component: () => import('./sections/About.vue')
    },
    {
        path: '/services',
        name: 'My Services',
        component: () => import('./sections/Services.vue')
    },
    {
        path: '/skills',
        name: 'My Skills & Abilities',
        component: () => import('./sections/Skills.vue')
    },
    {
        path: '/interests',
        name: 'My Personal Interests',
        component: () => import('./sections/Interests.vue')
    },
    {
        path: '/education',
        name: 'My Education Background',
        component: () => import('./sections/Education.vue')
    },
    {
        path: '/experiences',
        name: 'My Professional Experiences',
        component: () => import('./sections/Experiences.vue')
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('./sections/Portfolio.vue')
    },
    {
        path: '/contact',
        name: 'Contact Me',
        component: () => import('./sections/Contact.vue')
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