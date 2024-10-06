import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json'
import AR from './locale/ar.json'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store';
import './index.css'
import App from './App.vue'
import home from './pages/home.vue';
import sign from './pages/sign.vue'
import login from './pages/login.vue'
import papers from './pages/papers.vue'
import papersSubmitted from './pages/papersSubmitted.vue';
import alltrips from './pages/alltrips.vue';
import agency from './pages/agencytrips.vue';
import tourtrips from './pages/tourtrips.vue';
import localtrips from './pages/localtrips.vue';
import filteredSearch from './pages/filteredSearch.vue';
import booking from './pages/booking.vue';
import profile from './pages/profile.vue';
import tripdetails from './pages/tripdetails.vue';
import gallery from './pages/gallery.vue';
import checkoutdone from './pages/checkoutdone.vue';
import checkoutFailed from './pages/checkoutFailed.vue';
import error from './pages/error.vue'

const routes = [
    { path: '/', component: home },
    { path: '/home', component: home },
    {
        path: '/signup', component: sign, meta: {
            hideNavBar: true,
            hideLoading: true,
            hideFooter: true
        }
    },
    {
        path: '/login', component: login, meta: {
            hideNavBar: true,
            hideLoading: true,
            hideFooter: true
        }
    },
    {
        path: '/profile', component: profile, meta: {
            hideNavBar: true,
            hideFooter: true
        }
    },
    {
        path: '/papers', component: papers, meta: {
            hideNavBar: true,
            hideLoading: true,
            hideFooter: true
        }
    },
    {
        path: '/papersSubmitted', component: papersSubmitted, meta: {
            hideNavBar: true,
            hideLoading: true,
            hideFooter: true
        }
    },
    {
        path: '/checkoutdone', component: checkoutdone, meta: {
            hideLoading: true
        }
    },
    {
        path: '/checkoutFailed', component: checkoutFailed, meta: {
            hideLoading: true
        }
    },
    { path: '/alltrips', component: alltrips },
    { path: '/agency', component: agency },
    { path: '/tourtrips', component: tourtrips },
    { path: '/localtrips', component: localtrips },
    { path: '/gallery', component: gallery },
    { path: '/filteredSearch', component: filteredSearch },
    { path: '/booking/:id', component: booking },
    { path: '/tripdetails/:id', component: tripdetails },
    {
        path: "/:NotFound(.*)*", component: error, meta: {
            hideLoading: true,
            hideFooter: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.hideLoading) {
        store.commit('SET_LOADING', true);
    }
    next();
});

router.afterEach((to) => {
    if (!to.meta.hideLoading) {
        setTimeout(() => {
            store.commit('SET_LOADING', false);
        }, 3000);
    }
});



const i18n = createI18n({
    locale: localStorage.getItem("lang")||"EN",
    messages: {
        EN: EN,
        AR: AR,
    }
})



createApp(App).use(router).use(store).use(i18n).mount('#app')
