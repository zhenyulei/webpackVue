const state = {
    myhome:"我的home Vuex"
}
// 处理异步数据的地方
const actions = {
    changeMyHome: ({ commit }, data) => {
        commit("change_my_home", data);
    }
}
// 类似redux的reduce 其实就是一个同步函数,建议用大写，与actions区分
const mutations = {
    change_my_home: (state, data) => {
        state.myhome = data;
    }
}
export default {
    namespaced: true, //  module 命名空间，以后在引用的时候都需要用到文件名/action 或者 mutations 或者 state
    state,
    actions,
    mutations
};