<template>
  <div class="home">
    <div class="apps-grid">
      <router-link
        class="apps-grid__item apps-item"
        v-for="i in 20"
        :key="i"
        tabindex="0"
        to="/chat"
      >
        <div
          class="apps-item__icon"
        ></div>

<!--          :style="`background: linear-gradient(45deg,rgba(2, 1, 36, 1) 0%,rgba(1${i}1, 1, 100, 1) 35%,rgba(0, 212, 255, 1) 100%          );`"-->
        <h5 class="apps-item__name">Lorem {{ i }}</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.apps-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 20px;
  &__item {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 10px auto;
  }
}
.apps-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  height: 90px;
  // zoom: 1.2;
  // background: radial-gradient(
  //   50% 50% at 50% 50%,
  //   rgba(69, 179, 32, 1) 0%,
  //   rgba(0, 0, 0, 0) 100%
  // );

  &__icon {
    aspect-ratio: 1 / 1;
    width: 70%;
    border-radius: 10px;
    margin-bottom: 5px;
    transition: inherit;  background: #ababab;

  }
  &__name {
    transition: inherit;
  }
  &:focus,
  &:hover {
    .apps-item__icon {
      width: 80%;
    }
  }
}
</style>
