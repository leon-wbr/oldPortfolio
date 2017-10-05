<template>
  <section :class="'Container ' + $store.state.pageClassName">
    <Header/>
    <nuxt/>
  </section>
</template>

<style lang="scss">
.Container {
  min-height: 100vh;
  padding: 50px 10%;
  overflow-x: hidden;
  background: #fff;
  color: #000;

  transition: background .5s, color .5s;
  transition-delay: 0s;

  p {
    transition: font-size 0s;
    transition-delay: 0.5s;
  }

  @media (max-width: 800px) {
    padding: 50px 5%;
  }
}
</style>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
