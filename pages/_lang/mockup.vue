<template>
  <section class="Presentation">
    <section>
      <div>
        <p v-for="(item, index) in $t('mockup.introduction')">{{ item }}</p>
      </div>
    </section>
    <section class="Image">
      <img src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/inspire/2012/08/ten-steps-photoshop-cs6/fig04.jpg" :style="{ marginRight: '50px' }" />
      <div>
        <p v-for="(item, index) in $t('mockup.dribbble')" v-html="item" />
      </div>
    </section>
    <section class="Image ImageRight">
      <div>
        <p v-for="(item, index) in $t('mockup.moviestreaming')" v-html="item" />
      </div>
      <img src="https://cdn.dribbble.com/users/33073/screenshots/2403683/800.png" />
    </section>
  </section>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  components: {
    Link
  },
  head () {
    return {
      title: this.$t('mockup.title')
    }
  }
}
</script>

<style lang="scss">
  /* This stylesheet is trying to recreate the feel of the site I'm presenting. */
  .Mockup {
    color: #e6e6e6;
    background: #344652;

    transition-delay: 0.5s;

    p {
      font-size: 0.9em;
      transition-delay: 0.5s;

      a {
        opacity: 1;
        text-decoration: underline;
      }
    }

    img {
      box-shadow: 0px 5px 40px 0 rgba(0, 0, 0, 0.5);
      transition: transform 0.5s;

      &:hover {
				transform: scale(1.1);
			}
    }
  }
</style>
