export const SEND_MESSAGE = 'SEND_MESSAGE'
const TOGGLE_PHONE = 'TOGGLE_PHONE'

const state = () => ({
  messages: [],
  isOpen: true
})

const mutations = {
  [TOGGLE_PHONE]: (state, payload) => { state.isOpen = payload }
}

const actions = {

  openChat ({ commit }) {
    commit(TOGGLE_PHONE, true)
  },

  closeChat ({ commit }) {
    commit(TOGGLE_PHONE, false)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
