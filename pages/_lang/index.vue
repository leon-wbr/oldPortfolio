<template>
  <section class="Home">
    <section class="ShortBio">
      <p>{{ $t('index.short_bio') }}</p>
    </section>
    <Projects>
      <!--<ProjectsItem
        title="New portfolio"
        description="proper presentation of my work"
        link="jekyll-sites"
        size="full"
      />-->
      <ProjectsItem
        :title="$t('mockup.title')"
        :description="$t('mockup.subtitle')"
        image="https://cdn.dribbble.com/users/33073/screenshots/2403683/800.png"
        link="mockup"
        size="half"
        direction="left"
      />
      <!--<ProjectsItem
        :title="$t('courses.title')"
        :description="$t('courses.subtitle')"
        link="#"
        size="half"
        direction="right"
      />-->
      <ProjectsItem
        :title="$t('about-me.title')"
        :description="$t('about-me.subtitle')"
        image="/portfolio/about-me/1-me.jpg"
        size="half"
        direction="right"
        link='about-me'
      />
      <!--<ProjectsItem
        :title="$t('contact.title')"
        :description="$t('contact.subtitle')"
        size="half"
        direction="right"
        link='contact'
      />-->
      <ProjectsItem
        :title="$t('jekyll-sites.title')"
        :description="$t('jekyll-sites.subtitle')"
        image="/portfolio/jekyll-sites/1-logo.png"
        link="jekyll-sites"
        size="full"
      />
      <ProjectsItem
        title="@leon.wbr"
        description="my instagram"
        image="https://scontent-frx5-1.cdninstagram.com/vp/b8649095defe2c9b4cfe3c957add1136/5B2C5487/t51.2885-15/e35/27878942_2046028679004970_8473985026357198848_n.jpg"
        size="half"
        direction="left"
        link="https://instagram.com/leon.wbr"
      />
      <ProjectsItem
        title="Rendsburg Junior Knights"
        description="a local sports team's instagram"
        image="https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/19932732_721598671373441_1265250082106638336_n.jpg"
        size="half"
        direction="right"
        link="https://instagram.com/knightsrendsburgyouth"
      />
    </Projects>
  </section>
</template>

<script>
import Projects from '~/components/Projects.vue'
import ProjectsItem from '~/components/ProjectsItem.vue'

export default {
  components: {
    Projects,
    ProjectsItem
  }
}
</script>
