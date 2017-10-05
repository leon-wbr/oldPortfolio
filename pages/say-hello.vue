<template>
  <section class="Presentation SayHello">
    <section>
      <p>In early 2017, I stumbled upon a site called IT-Talents, which offered scholarships and competitions (with prizes) for programmers.</p>
      <p>Though filled with doubts, I decided to give their competition in March a shot. The objective was simple enough: show us your face; develop an application using Microsoft's Face API.</p>
      <p>A few days prior, my father asked me if I knew anything about Vue.js because he knew I was using React. I had only heard about it - but I saw this competition as a good chance to extend my knowledge.</p>
    </section>
    <section>
      <p>I didn't like Microsoft's API, but it was probably due to sponsorship that participants were required to use it. I would have much preferred to try the more complicated OpenCV.</p>
      <p>The API had an unnecessarily complicated setup, restrictions, and inconsistencies that I had to work around with my clientside-only approach.</p>
    </section>
    <section>
      <p>I wanted my application to be able to detect several faces at once and identify them - in real-time.</p>
      <p>Luckily, Microsoft's Face API didn't only have all the functions readily available - they also had an example showcasing almost exactly what I had imagined.</p>
    </section>
    <section class="ScreenRight">
      <div>
        <p>Implementing it all was a breeze. I would've liked to implement more features but I was demotivated by the difficulties of working with the API.</p>
        <p>In the end, my work got an average of 7.2 out of 10 points, mostly because of the simple GUI and lack of features.</p>
      </div>
    </section>
    <section>
      <p>As long as you have an API key you can <a href="https://leon-wbr.github.io/SayHello/">go ahead and try it</a>. </br>The code is available on <a href="https://github.com/leon-wbr/SayHello">GitHub</a>.</p>
      <p>Otherwise, <a href="/">go back</a>.</p>
    </section>
  </section>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla' }
    ]
  },
  fetch ({ store }) {
    store.commit('SET_PAGE_TITLE', 'SayHello')
    store.commit('SET_PAGE_SUBTITLE', 'a competition entry (facial recognition)')
    store.commit('SET_PAGE_CLASS', 'SayHello')
  }
}
</script>

<style lang="scss">
.SayHello {
  background: #111;
  color: #eee;
  font-family: 'Karla', sans-serif;

  a {
    color: inherit;
  }
}
</style>
