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
.c-chart {
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
