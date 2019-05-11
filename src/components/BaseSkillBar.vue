<template>
  <li class="c-skill-bar">
    <span class="c-bar__label">{{ label }}</span>
    <div class="c-bar__comfort c-bar__comfort--label" :class="{'c-bar--fill': showContent}">
      <span class="c-bar__text" :class="{'c-bar--fade-in': showContent}">{{ comfort }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "BaseSkillBar",
  props: {
    showContent: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
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

.c-skill-bar {
  display: flex;
  background-color: #e6e6e6;
  margin: 8px;
}

.c-bar__label {
  min-width: 20%;
  background-color: var(--secondary-color);
  padding: 0.25rem;
  text-align: center;
}

.c-bar__comfort {
  background-color: #05b083;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 0.5rem;
}

.c-bar__text {
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

.c-bar--fill {
  animation: fill 1.2s ease-in 0.5s forwards;
}

.c-bar--fade-in {
  animation: fade-in 1.2s ease-in 1s forwards;
}
</style>
