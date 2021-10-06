<template>
  <div class="content">
    <div class="phone-view" v-if="isPhoneOpen">
      <div class="main-view">
        <template v-if="currentRoute === 'main'">
          <home></home>
        </template>
        <template v-else-if="currentRoute === 'chat'">
          <chat></chat>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import chat from './views/chat.vue'
import Home from './views/Home.vue'

export default {
  components: { chat, Home },
  // data: () => ({}),
  computed: {
    ...mapState('chatModule', {
      isPhoneOpen: 'isOpen'
    }),
    ...mapState('router', ['currentRoute'])
    // isPhoneOpen () {
    //   return this.$store.state
    // }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  outline: none;
}
a {
  text-transform: none;
  color: #000;
  text-decoration: none;
}
// body {
//   display: flex;
//   justify-content: center;
//   background: linear-gradient(
//     90deg,
//     rgba(2, 0, 36, 1) 0%,
//     rgba(121, 9, 100, 1) 35%,
//     rgba(0, 212, 255, 1) 100%
//   );
// }
.main-view {
  background: #fff;
  border-radius: 40px;
  overflow: auto;
  height: 100%;
  width: 100%;
}
.phone-view {
  height: 800px;
  width: 360px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px auto;
  background: #000;
  padding: 20px;
  border-radius: 50px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    display: block;
    height: 40px;
    width: 150px;
    top: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    border-radius: 0 0 15px 15px;
  }
  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 100px;
    width: 20px;
    top: 25%;
    right: -15px;
    transform: translate(-50%, -50%);
    background: #000;
    border-radius: 0 15px 15px 0;
  }
}
</style>
