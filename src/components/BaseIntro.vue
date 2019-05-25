<template>
  <section class="c-intro js-intro">
    <div class="c-intro-content">
      <h1 class="c-intro__heading">David Trinh</h1>
      <div class="c-intro__typewriter">
        <h2 class="c-intro__subheading">Web Developer</h2>
      </div>
      <button type="button" class="c-button c-button--outline" @click="handleClick">
        <span class="c-button__text">Find out more</span>
        <font-awesome-icon size="lg" class="c-button__icon" icon="arrow-down"/>
      </button>
    </div>
  </section>
</template>

<script>
import jump from "jump.js";

export default {
  name: "BaseIntro",
  methods: {
    handleClick: function() {
      jump(".js-about", {
        a11y: true
      });
    }
  }
};
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 15.8rem;
  }
}

.c-intro {
  background: url(../assets/bg-mobile.jpg) no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: grid;
  align-content: center;
  grid-template-columns: [left-gutter] 16px [body] 12fr [right-gutter] 16px;

  @media (--tablet) {
    background: url(../assets/bg-tablet.jpg) no-repeat center center;
    background-size: cover;
  }

  @media (--desktop) {
    background: url(../assets/bg-desktop.jpg) no-repeat center center;
    background-size: cover;
  }
}

.c-intro-content {
  color: white;
  grid-column: body / right-gutter;
  text-align: center;
}
.c-intro__heading {
  line-height: 0;
}

.c-intro__typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  animation: typing 2s steps(25, end);
  grid-column: body / right-gutter;
  text-align: center;
  margin: -32px auto 8px auto;
}

.c-intro__subheading {
  color: white;
  white-space: nowrap; /* Keeps the content on a single line */
  line-height: 0;
}

.c-button {
  height: 3rem;
  min-width: 6rem;
  border: 3px solid white;
  padding: 0 16px;
  transition: all 0.3s linear;
  max-width: max-content;

  @media (--desktop) {
    height: 2rem;
  }
}

.c-button--outline {
  background-color: transparent;
}

.c-button:hover {
  cursor: pointer;
  background-color: #06d6a0;
  border-color: #06d6a0;
  transition: all 0.3s linear;
}

.c-button__text {
  color: white;
  font-size: 0.75rem;
}

.c-button__icon {
  color: white;
  margin-left: calc(var(--spacing-baseline) * 1);
  vertical-align: -0.1rem;
}
</style>
