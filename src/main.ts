import { createApp } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
// @ts-ignore
import { createStore } from './store/miniVuex.js';
import App from './App.vue'
// @ts-ignore
import RateExample from './views/RateExample.vue'
// @ts-ignore
import VuexCount from './views/VuexCount.vue'

const store = createStore({
    state() {
        return { count: 666 };
    },
    mutations: {
        add (state: any) {
            state.count++;
        }
    }
})

const routes: RouteRecordRaw[] = [
    {
        path: '/rate-comp',
        component: RateExample,
    },
    {
        path: '/mini-vuex',
        component: VuexCount,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(store).use(router).mount('#app')
