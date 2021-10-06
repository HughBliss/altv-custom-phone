import Vue from 'vue'
import Vuex from 'vuex'
import chatPlugin from './plugins/chat_plugin'
import chatModule from './modules/chat'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { chatModule, router },
  plugins: [chatPlugin]
})
