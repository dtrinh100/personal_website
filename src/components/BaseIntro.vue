<template>
  <div class="c-intro">
    <h1 class="c-intro__heading">David Trinh</h1>
    <div class="c-intro__typewriter">
      <h2 class="c-intro__subheading">Web Developer</h2>
    </div>
    <button type="button" class="c-button c-button--secondary"><span class="c-button__text">Find out more</span><font-awesome-icon size="lg" class="c-button__icon" icon="arrow-down" /></button>
  </div>
</template>

<script>
export default {
  name: "BaseIntro",
};
</script>

<style scoped>
.c-intro {
  background: url(../assets/bg-mobile.jpg) no-repeat center center fixed; 
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 0;
  
  @media(--tablet) {
    background: url(../assets/bg-tablet.jpg) no-repeat center center fixed; 
    background-size: cover;
  }

  @media(--desktop) {
    background: url(../assets/bg-desktop.jpg) no-repeat center center fixed; 
    background-size: cover;
  }
}

.c-intro__heading {
  color: white;
}

@keyframes typing {
  from { width: 0 }
  to { width: 19rem }
}

.c-intro__typewriter {
    overflow: hidden;  /* Ensures the content is not revealed until the animation */
    animation: typing 2s steps(25, end);
}

.c-intro__subheading {
  color: white;
  margin-bottom: calc(var(--baseline) * 2rem);
  white-space: nowrap; /* Keeps the content on a single line */
}

.c-button {
  height: 3rem;
  min-width: 6rem;
  border: 3px solid white;
  padding: 0 16px;
  transition: all 0.3s linear;

  @media(--desktop) {
    height: 2rem;
  }
}

.c-button--secondary {
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
  margin-left: calc(var(--baseline) * 0.25rem);
  vertical-align: -0.1rem;
}
</style>
