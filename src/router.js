import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = ()=> import (/* webpackPrefetch: true */ /* webpackChunkName: 'home' */ './pages/home');
const My = ()=> import (/* webpackPrefetch: true */ /* webpackChunkName: 'my' */ './pages/my');
const Try = ()=> import (/* webpackPrefetch: true */ /* webpackChunkName: 'try' */ './pages/try');

Vue.use(VueRouter);

const routes = [
    {path:"/",component:Home},
    {path:"/my",component:My},
    {path:"/try",component:Try}
]

const router = new VueRouter({
    mode:"hash",
    routes
})

export default router;