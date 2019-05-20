<template>
  <section class="c-about">
    <h1 class="c-about__heading" :class="{ 'h-fade-in-left': showContent}" ref="aboutHeader">About</h1>
    <div class="c-about__content" ref="aboutContent">
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
        >I am a web developer that has a passion for working with new and upcoming technologies. I always develop with the user experience in mind.</p>
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
  async mounted() {
    await this.$nextTick();
    const aboutHeader = this.$refs.aboutHeader;
    const aboutContent = this.$refs.aboutContent;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showContent = true;
          this.observer.disconnect();
        }
      });
    });

    this.observer.observe(aboutHeader);
    this.observer.observe(aboutContent);
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
  animation: fade-in-left 0.6s ease-in 0.3s forwards;
}

.c-about__slide-right {
  animation: fade-in-right 0.6s ease-in 0.3s forwards;
}

.c-about {
  min-height: 100vh;
  padding: calc(var(--spacing-baseline) * 2) calc(var(--spacing-baseline) * 3);
  @media (--tablet) {
    padding: calc(var(--spacing-baseline) * 2) calc(var(--spacing-baseline) * 8);
  }
}

.c-about__heading {
  text-align: center;
  font-size: 2.25rem;
  grid-area: heading;
  opacity: 0;
}

.c-about__content {
  display: grid;
  grid-column-gap: 48px;
  grid-template-areas:
    "aboutme"
    "viz";
  grid-row-gap: 24px;
  overflow-x: hidden;

  @media (--tablet) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-template-areas: "aboutme viz";
  }
}

.c-about-me {
  grid-area: aboutme;
  opacity: 0;
}

.c-image-container {
  display: flex;
  justify-content: center;
}

.c-about-me__heading {
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.c-about-me__description {
  margin: 0;
  text-align: center;
}

.c-about-viz {
  grid-area: viz;
  opacity: 0;
}
</style>
