<template>
  <a :href="url" v-if="external" target="_blank"><slot>Click here.</slot></a>
  <nuxt-link :to="url" v-else><slot>Click here.</slot></nuxt-link>
</template>

<script>
export default {
  props: ['to'],
  computed: {
    external: function () {
      return this.to.startsWith('http')
    },
    url: function () {
      if (this.external || this.$i18n.locale === 'en') {
        return this.to
      }

      if (this.to === '/') {
        return '/' + this.$i18n.locale
      }

      return '/' + this.$i18n.locale + '/' + this.to
    }
  }
}
</script>
