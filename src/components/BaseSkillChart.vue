<template>
  <div class="c-skill-chart">
    <ul class="c-chart">
      <BaseSkillBar
        v-for="(label, index) in labels"
        :key="`label-${index}`"
        :showContent="showContent"
        :label="label"
      />
    </ul>
  </div>
</template>

<script>
import BaseSkillBar from "@/components/BaseSkillBar";

export default {
  name: "BaseSkillChart",
  created() {
    this.labels = [
      "HTML",
      "CSS",
      "Javascript",
      "Vue",
      "React",
      "UX/UI Design",
      "Go",
      "SQL"
    ];
  },
  components: {
    BaseSkillBar
  },
  props: {
    showContent: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.c-skill-chart {
  max-width: 600px;
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
</style>
