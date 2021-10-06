<template>
  <div class="phone-view">
    <div class="main-view">
      <router-view />
    </div>
  </div>
</template>

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
body {
  display: flex;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 100, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
}
.main-view {
  background: #fff;
  border-radius: 40px;
  width: 320px;
  height: 720px;
  overflow: auto;
}
.phone-view {
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
