<template>
  <Link :to="link" class="ProjectsItem" :class="[size, direction]">
    <article>
      <div class="ProjectsItem__Description">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <div class="ProjectsItem__Image" :style="{ background: 'linear-gradient(-45deg, rgba(74, 194, 154, 0.1), rgba(189, 255, 243, 0.3)), url(' + image + ') center/cover' }"></div>
    </article>
  </Link>
</template>

<script>
import Link from '~/components/Link.vue'

export default {
  props: ['title', 'description', 'image', 'size', 'direction', 'link'],
  components: {
    Link
  },
  data: function () {
    return {
      size: this.size,
      direction: this.direction
    }
  }
}
</script>

<style lang="scss">
.ProjectsItem {
  position: relative;
  display: inline-block;
	overflow: hidden;

  min-height: 350px;
  color: inherit;
  text-decoration: none;

  margin-bottom: 50px;
  text-shadow: 0 0 35px rgba(255, 255, 255, 1);

  flex: 0 1 100%;
  transition: transform .5s;

  @media (max-width: 800px) {
    flex: 0 1 100% !important;
    border: none !important;
  }

  &.half {
    flex: 1 0 45%;
		border-right: 25px solid transparent;
		border-left: 25px solid transparent;

		&.left {
			border-left: none;
		}

		&.right {
			border-right: none;
		}

		font-size: 85%;
		min-height: 0;

		&:after {
			content: "";
			display: block;
			padding-bottom: 100%;
		}
	}

  &__Description, &__Image {
    position: absolute;
  }

  &__Description {
    z-index: 10;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);

    h3 {
      text-transform: uppercase;
    }
  }

  &__Image {
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: cover;
    width: 120%;
    height: 120%;
    opacity: 0.8;
    transition: width .5s, height .5s, opacity .5s;
  }

  &:hover {
    transform: scale(1.1);

    .ProjectsItem__Image {
      width: 100%;
      height: 100%;
      opacity: 0.4;
    }
  }
}
</style>
