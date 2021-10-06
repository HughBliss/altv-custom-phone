const CHANGE_ROUTE = 'CHANGE_ROUTE'

const state = () => ({
  currentRoute: 'main'
})

const mutations = {
  [CHANGE_ROUTE]: (state, payload) => { state.currentRoute = payload }
}

const actions = {

  changeRoute ({ commit }, payload) {
    commit(CHANGE_ROUTE, payload)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
