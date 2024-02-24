export default {
  namespaced: true,
  state: {
    users: [],
    user: null // { name: 'Jack', age: 36 }
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload
    },
    addUser: (state, payload) => {
      state.users.push(payload)
    },
    changeUser: (state, payload) => {
      state.users[payload.index] = payload
      state.users = [...state.users]

      //state.users = state.users.map((i, index) => index === payload.index ? payload : i )
    },
    setUser: (state, user) => {
      state.user = user
    }
  },
  actions: {
    setUser: ({ commit }, payload) => {
      commit('setUser', payload)
    }
  }
}
