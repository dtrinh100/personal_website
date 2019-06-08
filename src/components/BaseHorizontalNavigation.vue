<template>
  <nav class="c-navigation js-nav">
    <div class="c-navigation-logo">
      <img
        :src="require('../assets/david-trinh-logo.svg')"
        alt="Logo that says represents David Trinh"
      >
    </div>
    <ul class="c-navigation-list">
      <li
        class="c-navigation-list__item"
        v-for="(section, index) in navLinks"
        :key="`section-${index}`"
        @click="handleClick(section)"
        @keyup.enter="handleClick(section)"
      >
        <span class="c-navigation-list__link" tabindex="0" role="link">{{ section }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import jump from "jump.js";
import { throttle } from "lodash";

export default {
  name: "BaseHorizontalNavigation",
  created() {
    this.navLinks = ["home", "about", "portfolio"];
  },
  mounted() {
    window.addEventListener("scroll", _.throttle(this.handleScroll, 400));
    this.navHeight = document.querySelector(".js-nav").offsetHeight;
    this.handleScroll();
  },
  methods: {
    handleClick: function(toSection) {
      jump(`.js-${toSection}`, {
        offset: -this.navHeight + 10
      });
    },
    handleScroll: function() {
      const links = document.querySelectorAll(".c-navigation-list__link");

      links.forEach(link => {
        link.blur();

        const section = document.querySelector(`.js-${link.textContent}`);
        const sectionHeight =
          link.textContent === "home"
            ? section.offsetTop + section.offsetHeight
            : section.offsetTop + section.offsetHeight - this.navHeight;

        if (
          pageYOffset >= section.offsetTop - this.navHeight &&
          pageYOffset < sectionHeight
        ) {
          link.classList.add("c-navigation-list__link--active");
        } else {
          link.classList.remove("c-navigation-list__link--active");
        }
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
  font-size: 1.4rem;
  justify-content: center;
  padding: 0 var(--grid-gutter);

  @media (--tablet) {
    font-size: 1.6rem;
    justify-content: space-between;
  }
}
.c-navigation-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.c-navigation-list {
  padding-left: 0;
  display: flex;
  list-style: none;
  align-self: flex-end;
  margin-left: var(--space-md);

  @media (--tablet) {
    margin-left: 0;
  }
}

.c-navigation-list__item {
  margin-left: var(--space-md);
  text-transform: capitalize;
  @media (--tablet) {
    margin-left: var(--space-lg);
  }
}

.c-navigation-list__item:first-of-type {
  margin-left: 0;
}

.c-navigation-list__link {
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  padding: var(--space-sm);
}

.c-navigation-list__link--active {
  color: #f4c095;
}

.c-navigation-list__link:hover {
  color: #f4c095;
}

.c-navigation-list__link:focus {
  outline-style: dotted;
  outline-color: #f4c095;
}
</style>
