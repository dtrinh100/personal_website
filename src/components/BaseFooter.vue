<template>
  <footer class="c-footer">
    <div class="c-footer__icon-container">
      <font-awesome-icon
        class="c-footer__icons"
        :icon="['fab', 'github-square']"
        size="2x"
      />
      <font-awesome-icon
        class="c-footer__icons"
        :icon="['fab', 'linkedin']"
        size="2x"
      />
    </div>
    <p class="c-footer__content">&copy; David Trinh</p>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter"
};
</script>

<style scoped>
.c-footer {
  width: 100%;
  background-color: #51758a;
  color: white;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-sm);
  @media (--tablet) {
    font-size: 1.6rem;
  }
}

.c-footer__icon-container {
  display: flex;
  justify-content: center;
}

.c-footer__icons {
  cursor: pointer;
}

.c-footer__icons:last-of-type {
  margin-left: var(--space-sm);
}

.c-footer__content {
  margin-top: var(--space-md);
  text-align: center;
}
</style>
