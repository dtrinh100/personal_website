<template>
  <layout-default>
    <template v-slot:hero>
      <BaseIntro/>
      <BaseHorizontalNavigation/>
    </template>
    <template v-slot:content>
      <BaseAbout/>
    </template>
  </layout-default>
</template>

<script>
import BaseIntro from "@/components/BaseIntro";
import BaseAbout from "@/components/BaseAbout";
import BaseHorizontalNavigation from "@/components/BaseHorizontalNavigation";
import LayoutDefault from "@/components/LayoutDefault";

export default {
  name: "app",
  components: {
    BaseIntro,
    BaseAbout,
    LayoutDefault,
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

h1 {
  font-size: 3.375rem;
  margin: calc(var(--spacing-baseline) * 2) 0;
}

h2 {
  font-size: 2.25rem;
  margin: calc(var(--spacing-baseline) * 2) 0;
}

p {
  margin: calc(var(--spacing-baseline) * 2) 0;
}
</style>
