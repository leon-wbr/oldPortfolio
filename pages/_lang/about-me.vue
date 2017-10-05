<template>
  <section class="Page About">
    <section class="About__Education">
      <h3>{{ $t('about-me.education.title') }}</h3>
      <article :data-date="$t('about-me.education.school.date')">
        <h4>{{ $t('about-me.education.school.title') }}</h4>
        <p v-html="$t('about-me.education.school.text[0]')" />
        <p v-html="$t('about-me.education.school.text[1]')" />
      </article>
      <article :data-date="$t('about-me.education.exchange.date')">
        <h4>{{ $t('about-me.education.exchange.title') }}</h4>
        <p v-html="$t('about-me.education.exchange.text[0]')" />
        <p v-html="$t('about-me.education.exchange.text[1]')" />
      </article>
    </section>
    <section class="Experience">
  		<h3>{{ $t('about-me.experience.title') }}</h3>
  		<article :data-date="$t('about-me.experience.freelance.date')">
  			<h4>{{ $t('about-me.experience.freelance.title') }}</h4>
        <p v-html="$t('about-me.experience.freelance.text[0]')" />
        <p v-html="$t('about-me.experience.freelance.text[1]')" />
  		</article>
  		<article :data-date="$t('about-me.experience.hansewerk.date')">
  			<h4>{{ $t('about-me.experience.hansewerk.title') }}</h4>
  			<p v-html="$t('about-me.experience.hansewerk.text[0]')" />
  		</article>
  		<article :data-date="$t('about-me.experience.kahl.date')">
  			<h4>{{ $t('about-me.experience.kahl.title') }}</h4>
  			<p v-html="$t('about-me.experience.kahl.text[0]')" />
  		</article>
  		<article :data-date="$t('about-me.experience.czech.date')">
  			<h4>{{ $t('about-me.experience.czech.title') }}</h4>
  			<p v-html="$t('about-me.experience.czech.text[0]')" />
  		</article>
  	</section>
    <section class="Skills">
			<h3>{{ $t('about-me.skills.title') }}</h3>
			<article>
				<h4>{{ $t('about-me.skills.soft.title') }}</h4>
				<ul>
					<li v-html="$t('about-me.skills.soft.items[0]')" />
					<li v-html="$t('about-me.skills.soft.items[1]')" />
					<li v-html="$t('about-me.skills.soft.items[2]')" />
				</ul>
			</article>
			<article>
				<h4>{{ $t('about-me.skills.languages.title') }}</h4>
				<ul style="list-style-type: none;">
					<li>
						<h5>{{ $t('about-me.skills.languages.en.title') }}</h5>
						<p v-html="$t('about-me.skills.languages.en.text')" />
					</li>
					<li>
						<h5>{{ $t('about-me.skills.languages.fr.title') }}</h5>
						<p v-html="$t('about-me.skills.languages.fr.text')" />
					</li>
					<li>
						<h5>{{ $t('about-me.skills.languages.de') }}</h5>
					</li>
				</ul>
			</article>
			<article>
				<h4>{{ $t('about-me.skills.cs.title') }}</h4>
				<ul style="list-style-type: none;">
					<li>
						<h5>{{ $t('about-me.skills.cs.programming.title') }}</h5>
						<ul>
              <li v-html="$t('about-me.skills.cs.programming.items[0]')" />
              <li v-html="$t('about-me.skills.cs.programming.items[1]')" />
              <li v-html="$t('about-me.skills.cs.programming.items[2]')" />
						</ul>
					</li>
					<li>
						<h5>{{ $t('about-me.skills.cs.software.title') }}</h5>
						<ul>
              <li v-html="$t('about-me.skills.cs.software.items[0]')" />
              <li v-html="$t('about-me.skills.cs.software.items[1]')" />
              <li v-html="$t('about-me.skills.cs.software.items[2]')" />
						</ul>
					</li>
				</ul>
			</article>
    </section>
    <section>
      <article>
        <h4>{{ $t('about-me.other.title') }}</h4>
        <ul>
          <li v-html="$t('about-me.other.items[0]')" />
          <li v-html="$t('about-me.other.items[1]')" />
          <li v-html="$t('about-me.other.items[2]')" />
        </ul>
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
  }

  @media print {
    article {
      page-break-inside: avoid;
    }
  }
}
</style>
