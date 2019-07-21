<template>
  <section ref="portfolio" class="c-portfolio js-portfolio">
    <h2 class="c-portfolio__heading">Portfolio</h2>
    <div class="c-box-container">
      <div class="c-box">
        <div class="c-box__image-container">
          <img
            class="c-box__img"
            :src="require('../assets/usaspending.png')"
            alt="USASpending.gov project"
          />
          <div class="c-box__overlay"></div>
        </div>
      </div>
      <div class="c-box">
        <div class="c-box__image-container">
          <img
            class="c-box__img"
            :src="require('../assets/custom-avatar.png')"
            alt="Custom Avatar Personal project"
          />
        </div>
      </div>
      <div class="c-box">
        <div class="c-box__image-container">
          <img
            class="c-box__img"
            :src="require('../assets/the-labs.png')"
            alt="The Labs Personal project"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BasePortfolio",
  data: function() {
    return {
      observer: null,
      showContent: false
    };
  },
  mounted() {
    const portfolio = this.$refs.portfolio;

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.showContent = true;
          this.observer.disconnect();
        }
      });
    });

    this.observer.observe(portfolio);
  }
};
</script>

<style scoped>
.c-portfolio {
  display: grid;
  grid-template-columns: [left-gutter] var(--grid-gutter) [body] 12fr [right-gutter] var(
      --grid-gutter
    );
  grid-template-rows: [header] auto [content] 1fr;
  padding-bottom: var(--space-xxl);
  background-color: #2f2f2f;
  height: auto;
}

.c-portfolio__heading {
  text-align: center;
  display: block;
  grid-column: body / right-gutter;
  grid-row: header;
  align-items: center;
  color: white;
  margin-top: var(--space-xxl);
}

.c-box-container {
  grid-row: content;
  grid-column: body / right-gutter;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  column-gap: var(--grid-gutter);
  row-gap: var(--space-xl);
  margin-top: var(--space-xl);
  justify-content: center;

  @media (--tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.c-box__image-container {
  box-shadow: 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.15);
  position: relative;
}

.c-box__img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.c-box__overlay {
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.c-box__overlay:hover {
  opacity: 1;
}
</style>
