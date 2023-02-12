export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getData(state) {
      return state.data
    }
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {}
}