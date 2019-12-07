<template>
  <a class="c-button" :href="to" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  name: "BasePrimaryButton",
  props: {
    to: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.c-button {
  padding: var(--space-sm);
  background-color: #05b082;
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: 20rem;
  padding: 1rem 0;
  align-self: center;
  margin-top: var(--space-sm);
  font-size: 1.6rem;
  display: block;
}
</style>
