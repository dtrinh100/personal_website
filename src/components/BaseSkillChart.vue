<template>
  <div class="c-skill-chart">
    <ul class="c-chart">
      <li class="c-chart__item">
        <span class="c-chart__label">HTML</span>
        <div
          class="c-chart__comfort c-chart__comfort--html"
          :class="{'c-chart--fill': showContent}"
        >
          <span class="c-chart__text" :class="{'c-chart--fade-in': showContent}">Very Comfortable</span>
        </div>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">CSS</span>
        <span class="c-chart__comfort c-chart__comfort--css">Very Comfortable</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">Javascript</span>
        <span class="c-chart__comfort c-chart__comfort--js">Very Comfortable</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">Vue</span>
        <span class="c-chart__comfort c-chart__comfort--vue">Comfortable</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">React</span>
        <span class="c-chart__comfort c-chart__comfort--react">Very Comfortable</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">UX/UI Design</span>
        <span class="c-chart__comfort c-chart__comfort--design">Novice</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">Go</span>
        <span class="c-chart__comfort c-chart__comfort--go">Beginner</span>
      </li>
      <li class="c-chart__item">
        <span class="c-chart__label">SQL</span>
        <span class="c-chart__comfort c-chart__comfort--sql">Novice</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillChart",
  props: {
    showContent: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
@keyframes fill {
  0% {
    width: 0%;
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  100% {
    opacity: 1;
  }
}

.c-chart {
  list-style: none;
  font-size: 0.75rem;
  margin: 0;
  padding: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.c-chart__item {
  display: flex;
  background-color: #e6e6e6;
  margin: 8px;
}

.c-chart__label {
  min-width: 20%;
  background-color: var(--secondary-color);
  padding: 0.25rem;
  text-align: center;
}

.c-chart__comfort {
  background-color: #05b083;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 0.5rem;
}

.c-chart__text {
  opacity: 0;
}

.c-chart__comfort--html {
  width: 80%;
  opacity: 0;
}

.c-chart__comfort--css {
  width: 80%;
}

.c-chart__comfort--js {
  width: 80%;
}

.c-chart__comfort--vue {
  width: 60%;
}

.c-chart__comfort--react {
  width: 80%;
}

.c-chart__comfort--design {
  width: 20%;
}

.c-chart__comfort--go {
  width: 40%;
}

.c-chart__comfort--sql {
  width: 20%;
}

.c-chart--fill {
  animation: fill 1.2s ease-in 0.5s forwards;
}

.c-chart--fade-in {
  animation: fade-in 1.2s ease-in 1s forwards;
}
</style>
