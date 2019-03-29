<template>
  <div class="l-grid">
    <BaseIntro />
  </div>
</template>

<script>
import BaseIntro from "@/components/BaseIntro";

export default {
  name: "app",
  components: {
    BaseIntro
  }
};
</script>

<style>
:root {
  --baseline: 1.5; /* The vertical rythem unit */
  --primary-color: #8ECDF2;
  --secondary-color: #06D6A0;
  font-size: 16px;
  line-height: var(--baseline);

  @media (--tablet) {
    font-size: 20px;
  }
  
  @media (--desktop) {
    font-size: 24px;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3.375rem;
  margin: calc(var(--baseline) * 1rem);

}

h2 {
  font-size: 2.25rem;
  margin: calc(var(--baseline) * 1rem);

}

p {
  margin: calc(var(--baseline) * 1rem);
}

.l-grid {
  display: grid;
}

</style>
