import { createStore } from 'vuex'

export default createStore({
  state: {
    jwt: "jwt token",
    db:'https://968f-2a03-d000-158e-5fee-850-49ec-82fb-dcf9.ngrok-free.app'
  },
  getters: {
  },
  mutations: {
    setJWT(state, jwt)
    {
      state.jwt=jwt;
    }
  },
  actions: {
  },
  modules: {
  }
})
