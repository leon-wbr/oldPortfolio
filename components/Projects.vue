<template>
  <section class="Projects">
    <slot>No projects.</slot>
  </section>
</template>

<style lang="scss">
.Projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 0 auto;
  margin-top: 50px;
}
</style>
