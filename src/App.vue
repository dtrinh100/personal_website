<template>
  <layout-default>
    <template v-slot:hero>
      <BaseIntro />
    </template>
    <template v-slot:content>
      <BaseAbout />
    </template>
  </layout-default>
</template>

<script>
import BaseIntro from "@/components/BaseIntro";
import BaseAbout from "@/components/BaseAbout";
import LayoutDefault from "@/components/LayoutDefault";

export default {
  name: "app",
  components: {
    BaseIntro,
    BaseAbout,
    LayoutDefault
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
  margin: calc(var(--baseline) * 1rem) 0;

}

h2 {
  font-size: 2.25rem;
  margin: calc(var(--baseline) * 1rem) 0;

}

p {
  margin: calc(var(--baseline) * 1rem) 0;
}

</style>
