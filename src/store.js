import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    sideBarOpen: false
};

const getters = {
    isSideBarOpen: state => {
        return state.sideBarOpen
    }
};

const actions = {
    OpenSideBar({ commit }){
        commit('openSideBar')
    },
};

const mutations = {
    openSideBar (state) {
        state.sideBarOpen = !state.sideBarOpen;
    }
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
