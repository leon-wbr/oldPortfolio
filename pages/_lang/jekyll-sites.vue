<template>
  <section class="Presentation">
    <section class="Image Image--half">
      <img src="/portfolio/jekyll-sites/1-logo.png" />
      <div>
        <p>Jekyll is the most popular static site generator with over 30,000 stars on GitHub - for a reason: they offer free hosting for static sites.</p>
      </div>
    </section>
    <section class="ImageRight">
      <div>
        <p>When I first started putting my work to show, I had to cut costs and "settled" for a static site. Turns out, it's more of an alternative than a downgrade.</p>
        <p>It provided me with a simple, file-based CMS that was easy to modify and update.</p>
      </div>
      <img
        src="/portfolio/jekyll-sites/2-first-portfolio.png"
        class="moveIn"
      />
    </section>
    <section :style="{ background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url(/portfolio/jekyll-sites/3-liquid.png) center/cover', marginLeft: '-10%', marginRight: '-10%', padding: '10%' }">
      <div>
        <p>Jekyll uses the Liquid templating engine. It provides a lot of basic features for styling and modifying text. The more advanced features, such as includes and loops, turned out to be very powerful tools.</p>
      </div>
    </section>
    <section>
      <div :style="{ display: 'block', paddingBottom: '0' }">
        <a href="https://weusecoins.com">
          <img
            src="https://www.weusecoins.com/images/we-use-coins-what-is-bitcoin.png"
            :style="{ marginRight: '50px' }"
            class="moveIn"
          />
        </a>
        <a href="https://bitcoinmining.com">
          <img src="https://www.bitcoinmining.com/images/logo-bitcoin-mining.png" />
        </a>
      </div>
      <div>
        <p>Not soon after my portfolio went public I was asked to do work on <a href="https://weusecoins.com">WeUseCoins</a> (amongst others), one of the most popular sites about Bitcoin at the time.</p>
        <p>A static website - generating a million views a month.</p>
      </div>
    </section>
    <section class="ImageLeft">
      <img
        src="/portfolio/jekyll-sites/4-weusecoins.png"
        class="moveIn"
      />
      <div>
        <p>Our primary focus was on improving mobile interaction. The site was already fairly responsive, but infographics became unreadable at a small resolution and some elements just didn't scale correctly.</p>
        <p>To ensure that everything was readable and looking nice, I converted some infographics to plain HTML & CSS and improved the outdated code to be more mobile-friendly.</p>
      </div>
    </section>
    <section class="ImageRight">
      <div>
        <p>As content was being added to the site, I created a wiki-like system entirely based on Jekyll. It allows easy adding and editing of persons and companies - but could be modified to include any other type of data.</p>
        <p>With only one file per person, organization was as clean as it could have been without a real database.</p>
      </div>
      <img
        src="/portfolio/jekyll-sites/5-jekyll-wiki.png"
        class="moveIn"
      />
    </section>
    <section class="ImageLeft">
      <img
        src="/portfolio/jekyll-sites/6-jekyll-search.png"
        class="moveIn"
      />
      <div>
        <p>I also created <a href="https://github.com/leon-wbr/jekyll-filter.js">a JavaScript plugin for Jekyll</a> to filter through a given dataset. On a smaller site, FarBeyondTheStars, I was able to integrate a whole-site search.</p>
        <p>Still without a real backend - it was all done client-side. This approach would later contribute to my fascination of Vue.js and React.</p>
        <p>Talk about limitations, huh?</p>
      </div>
    </section>
    <section>
      <div>
        <p>During the development of a personal project I came up with a unique way to make Jekyll-generated sites multilingual. This translation system is still in use on WeUseCoins and BitcoinMining.</p>
        <p>I was later invited to record a talk about it for JekyllConf but couldn't get it done in time (for which I am very sorry).</p>
      </div>
    </section>
    <section>
      <p><Link to='/'>go back</Link></p>
    </section>
  </section>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  components: {
    Link
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300' }
    ]
  }
}
</script>

<style lang="scss">
  /* This stylesheet is trying to recreate the feel of the site I'm presenting. */
  .JekyllSites {
    background: #fff;
    color: #222;
    overflow-x: hidden;
    font-weight: 300;

    p a {
      color: #4183C4;
      text-decoration: none;
    }
  }
</style>
