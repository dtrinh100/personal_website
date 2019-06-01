<template>
  <li class="c-skill-bar">
    <span class="c-skill-bar__label">{{ label }}</span>
    <div
      class="c-skill-bar__comfort"
      :class="{'c-skill-bar--fill': showContent}"
      :style="{width: barWidth, animationDelay: fillAnimDelay}"
    >
      <span
        class="c-skill-bar__text"
        :class="{'c-skill-bar--fade-in': showContent}"
        :style="{animationDelay: fadeAnimDelay}"
      >{{ comfortLevel }}</span>
    </div>
  </li>
</template>

<script>
import skillMap from "@/dataMapping/skillsMapping";

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
  },
  computed: {
    barWidth: function() {
      return skillMap.has(this.label) ? skillMap.get(this.label).width : "0%";
    },
    comfortLevel: function() {
      return skillMap.has(this.label)
        ? skillMap.get(this.label).comfortLevel
        : "";
    },
    fillAnimDelay: function() {
      return skillMap.has(this.label)
        ? `${skillMap.get(this.label).fillAnimDelay}s`
        : "0";
    },
    fadeAnimDelay: function() {
      return skillMap.has(this.label)
        ? `${skillMap.get(this.label).fadeAnimDelay}s`
        : "0";
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
  margin-top: var(--space-md);
}

.c-skill-bar:first-of-type {
  margin-top: 0;
}

.c-skill-bar__label {
  min-width: 30%;
  max-width: 30%;
  background-color: var(--secondary-color);
  padding: var(--space-sm);
  text-align: center;
}

.c-skill-bar__comfort {
  background-color: #05b083;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
  @media (--tablet) {
    opacity: 0;
  }
}

.c-skill-bar__text {
  @media (--tablet) {
    opacity: 0;
  }
}

.c-skill-bar--fill {
  @media (--tablet) {
    animation: fill 1.2s ease-in forwards;
  }
}

.c-skill-bar--fade-in {
  @media (--tablet) {
    animation: fade-in 1.2s ease-in forwards;
  }
}
</style>
