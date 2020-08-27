import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cith:''
  },
  mutations: {
    setCith(state,data){
      state.city = data
    }
  },
  actions: {
  },
  modules: {
  }
})
