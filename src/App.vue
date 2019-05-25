<template>
  <div id="app">
    <BaseIntro/>
    <BaseHorizontalNavigation/>
    <BaseAbout/>
  </div>
</template>

<script>
import BaseIntro from "@/components/BaseIntro";
import BaseAbout from "@/components/BaseAbout";
import BaseHorizontalNavigation from "@/components/BaseHorizontalNavigation";

export default {
  name: "app",
  components: {
    BaseIntro,
    BaseAbout,
    BaseHorizontalNavigation
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --spacing-baseline: 8px; /* The vertical rythem unit */
  --primary-color: #8ecdf2;
  --secondary-color: #06d6a0;
  font-size: 16px;
  line-height: 1.5;

  @media (--tablet) {
    font-size: 20px;
  }

  @media (--desktop) {
    font-size: 24px;
  }
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --heading-line-height: 1.1;
  line-height: var(--heading-line-height);
}

h1 {
  font-size: 3.375rem;
}

h2 {
  font-size: 2.25rem;
}

p {
  margin: calc(var(--spacing-baseline) * 2) 0;
}

button:focus {
  outline: 0;
}
</style>
