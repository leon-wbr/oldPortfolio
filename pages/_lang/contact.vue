<template>
  <section class="Page Contact">
    <p>{{ $t('contact.text[0]') }}</p>
    <p>
      <a href="mailto:lw.leonweber@gmail.com">lw.leonweber@gmail.com</a>
    </p>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('contact.title')
    }
  }
}
</script>
