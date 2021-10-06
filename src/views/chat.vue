<template>
  <div class="chat-view">
    <p v-for="(m, key) in chat" :key="key">
      {{ m }}
    </p>

    <form class="message-bar" @submit.prevent="send">
      <input type="text" class="message-bar__input" v-model="message" />
      <button class="message-bar__btn" type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data: () => ({
    message: '',
    chat: []
  }),
  methods: {
    send () {
      if (this.message === '') return
      this.chat = [...this.chat, this.message]
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
.chat-view {
  height: 100%;
  width: 100%;
  position: relative;
}
.message-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: row;

  background: linear-gradient(90deg, #3887c4 0%, #409424 53.65%, #dbab32 100%);
  &__input {
    height: 100%;
    border-radius: 50px;
    border: none;
    flex: 1;
    padding: 0 10px;
  }
  &__btn {
    height: 100%;
    aspect-ratio: 1 / 1;
    margin-left: 10px;
    border-radius: 50px;
    border: none;
    background: white;
  }
}
</style>
