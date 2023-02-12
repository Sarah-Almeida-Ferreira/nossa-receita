import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"
import CategoryModule from "./CategoryModule"

const vuexLocal = new VuexPersistence({ storage: window.localStorage });

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    CategoryModule
  },
  plugins: [vuexLocal.plugin],
});

export default store;
