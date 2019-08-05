import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index';
//import My from './pages/my';
const My = ()=> import (/* webpackPrefetch: true */ /* webpackChunkName: 'my' */ './pages/my');

Vue.use(VueRouter);

const routes = [
    {path:"/",component:Index},
    {path:"/my",component:My}
]

const router = new VueRouter({
    mode:"hash",
    routes
})

export default router;