<template>
  <div class="c-skill-chart">
      <ul class="c-chart">
        <li class="c-chart__item"><span class="c-chart__label">HTML</span> <span class="c-chart__comfort c-chart__comfort--html">Very Comfortable</span></li>
        <li class="c-chart__item"><span class="c-chart__label">CSS</span> <span class="c-chart__comfort c-chart__comfort--css">Very Comfortable</span></li>
        <li class="c-chart__item"><span class="c-chart__label">Javascript</span> <span class="c-chart__comfort c-chart__comfort--js">Very Comfortable</span></li>
        <li class="c-chart__item"><span class="c-chart__label">Vue</span> <span class="c-chart__comfort c-chart__comfort--vue">Comfortable</span></li>
        <li class="c-chart__item"><span class="c-chart__label">React</span> <span class="c-chart__comfort c-chart__comfort--react">Very Comfortable</span></li>
        <li class="c-chart__item"><span class="c-chart__label">UX/UI Design</span> <span class="c-chart__comfort c-chart__comfort--design">Novice</span></li>
        <li class="c-chart__item"><span class="c-chart__label">Go</span> <span class="c-chart__comfort c-chart__comfort--go">Beginner</span></li>
        <li class="c-chart__item"><span class="c-chart__label">SQL</span> <span class="c-chart__comfort c-chart__comfort--sql">Novice</span></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "SkillChart"
};
</script>

<style scoped>
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
    width: 20%;
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

.c-chart__comfort--html {
    width: 80%;
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
</style>
