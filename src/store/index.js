import Vue from "vue";
import vuex from  "vuex"; //注意这里是小写的v
import home from "./modules/home.js";
import my from "./modules/my.js";

/*
 * modlues 是vuex 对state 的模块化管理，便于代码的组装而不是所有的state都堆在一起
*/

Vue.use(vuex);
export default new vuex.Store({//store对象
    modules:{
        home,
        my
    }
})