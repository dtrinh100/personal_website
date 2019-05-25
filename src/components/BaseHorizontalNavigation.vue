<template>
  <nav class="c-navigation">
    <div class="c-navigation-logo">Testing</div>
    <ul class="c-navigation-list">
      <li class="c-navigation-list__item" @click="handleClick('intro')">
        <span class="c-navigation-list__link" tabindex="0" role="link">Home</span>
      </li>
      <li class="c-navigation-list__item" @click="handleClick('about')">
        <span class="c-navigation-list__link" tabindex="0" role="link">About</span>
      </li>
      <li class="c-navigation-list__item" @click="handleClick('portfolio')">
        <span class="c-navigation-list__link" tabindex="0" role="link">Portfolio</span>
      </li>
      <li class="c-navigation-list__item" @click="handleClick('contact')">
        <span class="c-navigation-list__link" tabindex="0" role="link">Contact</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import jump from "jump.js";

export default {
  name: "BaseHorizontalNavigation",
  methods: {
    handleClick: function(toSection) {
      jump(`.js-${toSection}`, {
        a11y: true
      });
    }
  }
};
</script>

<style scoped>
.c-navigation {
  display: flex;
  background-color: #51758a;
  color: white;
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10000;
  font-size: 14px;
  justify-content: space-between;
  padding: 0 calc(var(--spacing-baseline) * 4);

  @media (--tablet) {
    padding: 0 calc(var(--spacing-baseline) * 8);
    justify-content: unset;
    font-size: 16px;
  }
}
.c-navigation-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (--tablet) {
    flex: 1;
  }
}
.c-navigation-list {
  padding-left: 0;
  display: flex;
  list-style: none;
  align-self: flex-end;

  @media (--tablet) {
    padding-left: calc(var(--spacing-baseline) * 4);
  }
}

.c-navigation-list__item {
  margin: 0 calc(var(--spacing-baseline) * 0.5);
  @media (--tablet) {
    margin: 0 calc(var(--spacing-baseline) * 4);
  }
}

.c-navigation-list__item:last-of-type {
  margin-right: 0;
}

.c-navigation-list__link {
  color: white;
  cursor: pointer;
  outline: none;
}
</style>
