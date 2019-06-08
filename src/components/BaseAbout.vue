<template>
  <section ref="about" class="c-about js-about">
    <h1 class="c-about__heading" :class="{ 'c-about__slide-left': showContent}">About</h1>
    <div class="c-about__content">
      <div class="c-about-me" :class="{'c-about__slide-left': showContent}">
        <div class="c-image-container">
          <img
            class="c-image-container__image"
            :src="require('../assets/david-trinh.png')"
            alt="A cartoon image of me"
          >
        </div>
        <h2 class="c-about-me__heading">Who am I?</h2>
        <p
          class="c-about-me__description"
        >I am a web developer that has a passion for working with new and upcoming technologies. I also enjoy interacting with breathing humans.</p>
      </div>
      <div class="c-about-viz" :class="{'c-about__slide-right': showContent}">
        <BaseSkillChart :showContent="showContent"/>
      </div>
    </div>
  </section>
</template>

<script>
import BaseSkillChart from "@/components/BaseSkillChart";

export default {
  name: "BaseAbout",
  components: {
    BaseSkillChart
  },
  data: function() {
    return {
      observer: null,
      showContent: false
    };
  },
  mounted() {
    const about = this.$refs.about;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showContent = true;
          this.observer.disconnect();
        }
      });
    });

    this.observer.observe(about);
  }
};
</script>

<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.c-about__slide-left {
  @media (--tablet) {
    animation: fade-in-left 0.6s ease-in 0.3s forwards;
  }
}

.c-about__slide-right {
  @media (--tablet) {
    animation: fade-in-right 0.6s ease-in 0.3s forwards;
  }
}

.c-about {
  display: grid;
  grid-template-columns:
    [left-gutter] var(--grid-gutter) [body] 12fr
    [right-gutter] var(--grid-gutter);
  grid-template-rows: [header] auto [content] 1fr;
  overflow-x: hidden;
  align-content: center;
  padding-bottom: var(--space-xl);
}

.c-about__heading {
  text-align: center;
  display: block;
  grid-column: body / right-gutter;
  grid-row: header;
  align-items: center;
  margin-top: var(--space-xxl);
  @media (--tablet) {
    opacity: 0;
  }
}

.c-about__content {
  grid-column: body / right-gutter;
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--grid-gutter);
  margin-top: var(--space-xl);
}

.c-about-me {
  @media (--tablet) {
    opacity: 0;
  }
}

.c-image-container {
  display: flex;
  justify-content: center;
}

.c-about-me__heading {
  margin-top: var(--space-md);
  text-align: center;
}

.c-about-me__description {
  text-align: center;
  overflow: visible;
}

.c-about-viz {
  @media (--tablet) {
    opacity: 0;
  }
}
</style>
