<template>
  <header>
    <Link to='/'>
      <h1>{{ $t(`${localeRoute}.title`) }}</h1>
      <h2>{{ $t(`${localeRoute}.subtitle`) }}</h2>
    </Link>
    <nav class="Lang">
      <a :href="$route.fullPath" class="Lang__EN" v-on:click.prevent="changeLang('en')">EN</a>
      <a :href="$route.fullPath" class="Lang__DE" v-on:click.prevent="changeLang('de')">DE</a>
      <a :href="$route.fullPath" class="Lang__FR" v-on:click.prevent="changeLang('fr')">FR</a>
    </nav>
    <nav class="Other">
      <Link to='contact'>{{ $t('contact.title') }}</Link>
    </nav>
  </header>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  props: ['title'],
  components: {
    Link
  },
  computed: {
    localeRoute: function () {
      return this.$route.name === 'lang' ? 'index' : this.$route.name.replace('lang-', '').toLowerCase()
    }
  },
  methods: {
    changeLang: function (locale) {
      // TODO: change locale in url
      // Change locale
      this.$store.commit('SET_LANG', locale)
      this.$i18n.locale = locale
    }
  }
}
</script>

<style lang="scss">
  header {
    position: relative;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;

    h1 {
      text-transform: uppercase;
    }

    h1, h2 {
      color: inherit;
    }

    // I don't usually name my classes this way
    .Other, .Lang {
      position: absolute;
      bottom: 0;
      font-size: 0.9em;

      a {
        margin: 0 0.125em;
      }
    }

    .Lang {
      left: 0;
    }

    .Other {
      right: 0;
      text-align: right;
    }
  }

  @media print {
    h1, h2 {
      span {
        display: none;
      }
    }

    h1:after {
      content: 'Leon Weber';
    }

    h2:after {
      content: 'leonweber.co';
    }

    .Back {
      display: none;
    }
  }
</style>
