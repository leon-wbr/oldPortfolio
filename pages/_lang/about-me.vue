<template>
  <section class="Page About">
    <section v-for="(item, index) in $t('about-me.items')" :class="item.id">
      <h3>{{ item.title }}</h3>
      <article v-for="(subitem) in item.items" :class="subitem.id" :data-date="subitem.date">
        <h4>{{ subitem.title }}</h4>

        <ul v-if="subitem.type === 'list'">
          <li v-for="(listitem) in subitem.items">
            <h5>{{ listitem.title }}</h5>
            <p v-for="(text) in listitem.text" v-html="text" />

            <ul v-if="listitem.items">
              <li v-for="(text) in listitem.items" v-html="text" />
            </ul>
          </li>

          <li v-for="(text) in subitem.text" v-html="text" />
        </ul>

        <p v-for="(text) in subitem.text" v-html="text" v-else />
      </article>
    </section>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('about-me.title')
    }
  }
}
</script>

<style lang="scss">
.About {
  text-align: left;

  h3, h4, h5, p, ul, li {
    font-size: inherit;
    max-width: 35em;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  h3, h4 {
    text-align: center;
  }

  h3 {
    opacity: .9;
    font-size: 1.4em;
  }

  h4 {
    opacity: .8;
    font-size: 1.1em;
  }

  h5 {
    margin: 0;
    margin-left: -25px;
    opacity: 0.7;
    font-size: inherit;
  }

  p, li {
    font-size: 0.9em;
  }

  li > p, li > ul > li {
    font-size: 1em;
  }

  ul > li > ul {
    padding-top: 10px;
  }

  section {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;

    &:last-of-type {
      border-bottom: none;
    }
  }

  article {
    margin-bottom: 50px;
    text-align: justify;

    &:after {
      content: attr(data-date);
      opacity: .7;
      text-align: center;
      display: block;
    }

    &.Languages, &.CS {
      & > ul {
        list-style-type: none;
      }
    }
  }

  @media print {
    article {
      page-break-inside: avoid;
    }
  }
}
</style>
