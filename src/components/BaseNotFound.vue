<template>
  <section class="c-not-found">
    <h1 class="c-not-found__headline">404</h1>
    <p class="c-not-found__description">
      Sorry, looks like you have stumble upon a page that does not exist. Please
      click on the button below to get home.
    </p>
    <router-link class="c-button" to="/">Send Me Home</router-link>
  </section>
</template>

<script>
export default {
  name: "BaseNotFound"
};
</script>

<style scoped>
.c-not-found {
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  padding: var(--space-lg);
}

.c-not-found__headline {
  font-size: calc(var(--text-xxl) * 3);
}

.c-not-found__description {
  margin: 0;
}

.c-button {
  padding: var(--space-sm);
  background-color: white;
  border: none;
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: 50%;
  max-width: 20rem;
  padding: 1rem 0;
  margin-top: var(--space-lg);
  font-size: 1.6rem;
  display: block;
  border-radius: 2.5rem;
}
</style>
