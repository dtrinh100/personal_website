<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  }
};
</script>

<style>
:root {
  font-size: 16px;
  --baseline: 1.4; /* The vertical rythem unit */
  line-height: var(--baseline);
  height: 100%;

  @media (--tablet) {
    font-size: 20px;
  }

  @media (--desktop) {
    font-size: 24px;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  height: 100%;
}

p {
  margin: calc(var(--baseline) * 1rem);
}

</style>
