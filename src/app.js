import Vue from 'vue';
import './assest/css/common.scss';
import App from './app.vue';
import router from './router.js';


new Vue({
    router,
    render:h=>h(App)
}).$mount("#root")