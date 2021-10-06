import { SEND_MESSAGE } from '../modules/chat'

export default store => {
  alt.on('addString', (text) => {
    store.dispatch('chatModule/addString', text)
  })
  alt.on('addMessage', (name, text) => {
    store.dispatch('chatModule/addMessage', { name, text })
  })
  alt.on('openChat', () => {
    store.dispatch('chatModule/openChat')
  })
  alt.on('closeChat', () => {
    store.dispatch('chatModule/closeChat')
  })
  store.subscribe(mutation => {
    switch (mutation.type) {
      case SEND_MESSAGE:
        alt.emit('chatmessage', mutation.payload)
        break
    }
  })
}
