<template>
  <section class="c-about js-about">
    <h1
      class="c-about__heading"
      :class="{ 'c-about__slide-left': showContent}"
      ref="aboutHeader"
    >About</h1>
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
  display: grid;
  grid-template-columns: [left-gutter] 16px [body] 12fr [right-gutter] 16px;
  grid-template-rows: [header] auto [content] 1fr;
  padding-bottom: 32px;
}

.c-about__heading {
  text-align: center;
  font-size: 2.25rem;
  opacity: 0;
  display: block;
  grid-column: body / right-gutter;
  grid-row: header;
  margin-top: 32px;
}

.c-about__content {
  grid-column: body / right-gutter; /* The content itself is part of the container grid */
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 24px;
  overflow-x: hidden;
}

.c-about-me {
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
  overflow: visible;
}

.c-about-viz {
  opacity: 0;
}
</style>
