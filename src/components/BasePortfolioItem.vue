<template>
  <section class="c-portfolio">
    <div class="c-portfolio__content">
      <router-link class="c-portfolio__nav" to="/">
        <font-awesome-icon class="c-portfolio__icon" icon="home" />David Trinh
      </router-link>
      <h1 class="c-portfolio__heading">{{ portfolioItem.title }}</h1>
      <BasePrimaryButton class="c-portfolio__button" :to="portfolioItem.url"
        >Live Site</BasePrimaryButton
      >
      <carousel class="c-carousel" :perPage="1">
        <slide
          v-for="(image, index) in portfolioItem.images"
          :key="`image-${index}`"
        >
          <div class="c-carousel__image-container">
            <img class="c-carousel__image" :src="image.url" :alt="image.alt" />
          </div>
        </slide>
      </carousel>
      <h2 class="c-portfolio__subheading">Details About Project</h2>
      <div v-html="portfolioItem.about"></div>
      <h2 class="c-portfolio__subheading">Skills Used</h2>
      <ul class="c-portfolio__list">
        <li
          v-for="(item, index) in portfolioItem.technology"
          :key="`item-${index}`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import BasePrimaryButton from "@/components/BasePrimaryButton";

import portfoliolMap from "@/dataMapping/portfolioMapping";

export default {
  name: "BasePortfolioItem",
  components: {
    Carousel,
    Slide,
    BasePrimaryButton
  },
  data: function() {
    return {
      portfolioItem: portfoliolMap.get(this.$route.params.id.toString())
    };
  }
};
</script>

<style scoped>
.c-portfolio {
  display: flex;
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 var(--space-xl) var(--space-xxl) var(--space-xl);
  width: 100%;
}

.c-portfolio__nav {
  font-size: var(--text-md);
  text-decoration: none;
  color: black;
  margin-top: var(--space-lg);
}

.c-portfolio__icon {
  color: #05b082;
  margin-right: var(--space-sm);
}

.c-portfolio__content {
  margin-top: var(--space-xl);
  width: 100%;
}

.c-portfolio__heading {
  font-size: var(--text-lg);
  margin-top: var(--space-xl);
}

.c-portfolio__button {
  margin-top: var(--space-lg);
}

.c-carousel {
  margin-top: var(--space-xl);
}

.c-carousel__image-container {
  width: 100%;
}

.c-carousel__image {
  width: 100%;
  height: auto;
  display: block;
}

.c-portfolio__subheading {
  font-size: var(--text-md);
  margin-top: var(--space-lg);
}

.c-portfolio__list {
  list-style-type: circle;
  margin-top: var(--space-lg);
  padding: 0;
  list-style-position: inside;
}
</style>
