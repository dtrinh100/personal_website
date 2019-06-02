<template>
  <nav class="c-navigation js-nav">
    <div class="c-navigation-logo">Testing</div>
    <ul class="c-navigation-list">
      <li
        class="c-navigation-list__item"
        v-for="(section, index) in navLinks"
        :key="`section-${index}`"
        @click="handleClick(section)"
        @keyup.enter="handleClick(section)"
      >
        <span
          class="c-navigation-list__link"
          :class="{ 'c-navigation-list__link--active': active === section }"
          tabindex="0"
          role="link"
        >{{ section }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import jump from "jump.js";

// TODO, fix mobile active bug, add before destroy lifecycle
export default {
  name: "BaseHorizontalNavigation",
  created() {
    this.navLinks = ["home", "about", "portfolio", "contact"];
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.navHeight = document.querySelector(".js-nav").offsetHeight;

    // This is to account for cases where user refresh the page, but lands on a section different from "home"
    // document.querySelectorAll("section").forEach(elem => {
    //   if (pageYOffset >= elem.offsetTop - this.navHeight) {
    //     setTimeout(() => {
    //       this.active = elem.className.match(/js-.+/gi)[0].replace("js-", "");
    //     }, 400);
    //   }
    // });

    this.currElem = document.querySelector(`.js-${this.active}`);
  },
  data: function() {
    return {
      active: "home",
      fromClick: false
    };
  },
  methods: {
    handleClick: function(toSection) {
      // TODO: Improve performance
      this.fromClick = true;
      this.active = toSection;

      jump(`.js-${toSection}`, {
        offset: -this.navHeight + 0.3, // The "0.3" prevents it from conflicting with the active state set by handleScroll
        callback: () => {
          this.fromClick = false;
        }
      });
    },
    handleScroll: function() {
      const topPos = this.currElem.offsetTop - this.navHeight;

      if (pageYOffset >= topPos) {
        if (!this.fromClick) {
          this.active = this.currElem.className
            .match(/js-.+/gi)[0]
            .replace("js-", "");
        }

        if (this.currElem.nextElementSibling) {
          if (this.currElem.nextElementSibling.tagName !== "SECTION") {
            // Skip to the next element if the selected element is not a section
            this.currElem = this.currElem.nextElementSibling;
          }
          this.currElem = this.currElem.nextElementSibling;
        }
      } else {
        if (this.currElem.previousElementSibling) {
          if (this.currElem.previousElementSibling.tagName !== "SECTION") {
            // Skip to the next element if the selected element is not a section
            this.currElem = this.currElem.previousElementSibling;
          }
          this.currElem = this.currElem.previousElementSibling;
        }
      }
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
}

.c-navigation-list__link--active {
  color: #f4c095;
}

.c-navigation-list__link:hover {
  color: #f4c095;
}

.c-navigation-list__link:focus {
  color: #f4c095;
}
</style>
