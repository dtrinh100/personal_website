<template>
  <section class="c-portfolio-item">
    <div class="c-content-container">
      <h1 class="c-portfolio-heading">{{ portfolioItem.title }}</h1>
      <carousel class="c-carousel" :perPage="1">
        <slide v-for="(image, index) in portfolioItem.images" :key="`image-${index}`">
          <div class="c-carousel__image-container">
            <img class="c-carousel__image" :src="image.url" :alt="image.alt" />
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import portfoliolMap from "@/dataMapping/portfolioMapping";

export default {
  name: "BasePortfolioItem",
  components: {
    Carousel,
    Slide
  },
  data: function() {
    return {
      portfolioItem: portfoliolMap.get(this.$route.params.id.toString())
    };
  }
};
</script>

<style scoped>
.c-portfolio-item {
  display: flex;
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 var(--space-xl) var(--space-xxl) var(--space-xl);
  width: 100%;
}

.c-content-container {
  margin-top: var(--space-xl);
  width: 100%;
}

.c-portfolio-heading {
  font-size: var(--text-lg);
}

.c-carousel {
  margin-top: var(--space-lg);
}

.c-carousel__image-container {
  width: 100%;
}

.c-carousel__image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
