import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations'
Vue.use(Vuex);
export const store = new Vuex.Store({
  actions,
  mutations,
  state: {
    todos: [],
    done: false
  }
});
