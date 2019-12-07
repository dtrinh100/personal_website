<template>
  <div id="c-home">
    <BaseIntro />
    <BaseHorizontalNavigation />
    <BaseAbout />
    <BasePortfolio />
    <BaseContact />
  </div>
</template>

<script>
import BaseIntro from "@/components/BaseIntro";
import BaseHorizontalNavigation from "@/components/BaseHorizontalNavigation";
import BaseAbout from "@/components/BaseAbout";
import BasePortfolio from "@/components/BasePortfolio";
import BaseContact from "@/components/BaseContact";

export default {
  name: "BaseHome",
  components: {
    BaseIntro,
    BaseHorizontalNavigation,
    BaseAbout,
    BasePortfolio,
    BaseContact
  }
};
</script>

<style>
/*
* IMPORTANT: For margins, use only margin-top and margin-left to avoid the collapsing margins issue. To learn more 
* about the issue, please read this article: https://css-tricks.com/what-you-should-know-about-collapsing-margins/.
*
* For this application, I have chosen to keep all of my styles within components, allowing me to easily track
* where my styles are being used. 
*
* This App component should only hold styles that are used throughout the application. It should start with the variables
* in the :root selector as well as setting the font size. This should be followed by generic selectors, such as the
* h1, h2, h3, a, p tags, etc. And lastly, utility classes should be included here as well. All component classes should
* belong in the actual Vue components.
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
* Global variables should be defined here. 
*/

:root {
  font-size: 62.5%;
  --text-base-size: 1.6rem;

  /* Spacing scale, based on the 8pt grid */
  --spacing-unit: 0.8rem;
  --space-xs: calc(var(--spacing-unit) * 0.5);
  --space-sm: var(--spacing-unit);
  --space-md: calc(var(--spacing-unit) * 2);
  --space-lg: calc(var(--spacing-unit) * 3);
  --space-xl: calc(var(--spacing-unit) * 4);
  --space-xxl: calc(var(--spacing-unit) * 7);

  /* Size of the left and right grid gutter */
  --grid-gutter: var(--text-base-size);

  /* Type scale, calculations are based off a variation of the formula found at: https://codyhouse.co/ds/docs/globals/typography */
  --text-scale: 1.25;
  --text-xs: calc(var(--text-base-size) / var(--text-scale));
  --text-sm: calc(var(--text-xs) * var(--text-scale));
  --text-md: calc(var(--text-sm) * var(--text-scale) * var(--text-scale));
  --text-lg: calc(var(--text-md) * var(--text-scale));
  --text-xl: calc(var(--text-lg) * var(--text-scale));
  --text-xxl: calc(var(--text-xl) * var(--text-scale));

  /* Theme */
  --primary-color: #8ecdf2;
  --secondary-color: #06d6a0;

  @media (--tablet) {
    --text-base-size: 2rem;
  }

  @media (--desktop) {
    --text-base-size: 2.4rem;
  }
}

/*
* Generic selectors should be defined here.  
*/

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: var(--text-base-size);
}

img {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --heading-line-height: 1.1;
  line-height: var(--heading-line-height);
  margin: 0;
}

h1 {
  font-size: var(--text-xl);
}

h2 {
  font-size: var(--text-lg);
}

p {
  margin: var(--space-md) 0 0 0;
}

button:focus {
  outline: 0;
}
</style>
