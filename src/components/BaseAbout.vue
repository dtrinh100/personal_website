<template>
  <section class="c-about">
    <h1 class="c-about__heading">About</h1>
    <div class="c-about__content">
    <div class="c-about-me">
    <div class="c-image-container">
      <img class="c-image-container__image" :src="require('../assets/david-trinh.png')" alt="A cartoon image of me" />
    </div>
      <h2 class="c-about-me__heading">Who am I?</h2>
      <p class="c-about-me__description">I am a web developer that has a passion for working with new and upcoming technologies. I always develop with the user experience in mind.</p>
    </div>
    <div class="c-about-viz">
        <BaseSkillChart />
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
  }
};
</script>

<style scoped>
.c-about {
  min-height: 100vh;
  padding: 16px 24px;
  @media(--tablet) {
        padding: 16px 64px;
    }
}

.c-about__heading {
    text-align: center;
    font-size: 2.25rem;
    grid-area: heading;
}

.c-about__content {
    display: grid;
    grid-column-gap: 16px;
    grid-template-areas: "aboutme"
                         "viz";
    grid-row-gap: 24px;
    @media(--tablet) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-template-areas: "aboutme viz";
    }
}

.c-about-me {
    grid-area: aboutme;
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
}
</style>
