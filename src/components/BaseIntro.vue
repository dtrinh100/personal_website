<template>
  <section class="c-intro js-home">
    <div class="c-intro-content">
      <h1 class="c-intro__heading">David Trinh</h1>
      <div class="c-intro__typewriter">
        <h2 class="c-intro__subheading">Web Developer</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseIntro"
};
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.c-intro {
  background: url(../assets/bg-mobile.jpg) no-repeat center center;
  background-size: cover;
  height: 70vh;
  display: grid;
  align-content: center;
  grid-template-columns: [left-gutter] var(--grid-gutter) [body] 12fr [right-gutter] var(
      --grid-gutter
    );

  @media (--desktop) {
    background: url(../assets/bg-desktop.jpg) no-repeat center center;
    background-size: cover;
    height: 93vh;
  }
}

.c-intro-content {
  color: white;
  grid-column: body / right-gutter;
  text-align: center;
}

.c-intro__heading {
  font-size: var(--text-xxl);
}

.c-intro__typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  animation: typing 3s steps(60, end);
  grid-column: body / right-gutter;
  text-align: center;
  margin: var(--space-sm) auto 0 auto;
}

.c-intro__subheading {
  color: white;
  white-space: nowrap; /* Keeps the content on a single line */
}

.c-button {
  height: 3rem;
  min-width: 6rem;
  border: 3px solid white;
  padding: 0 16px;
  transition: all 0.3s linear;
  max-width: max-content;
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
  margin-left: var(--space-sm);
  vertical-align: -0.1rem;
}
</style>
