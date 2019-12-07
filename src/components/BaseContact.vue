<template>
  <section class="c-about js-contact">
    <h2 class="c-contact__heading">Contact</h2>
    <div class="c-contact__content">
      <div class="c-contact__form-container">
        <form class="c-contact__form" id="contactform">
          <label for="fullname">Full Name</label>
          <input
            type="text"
            class="c-contact__form-input c-contact__form-input--padding"
            name="fullname"
          />
          <label for="email" class="c-contact__form-label">Email</label>
          <input
            type="text"
            class="c-contact__form-input c-contact__form-input--padding"
            name="email"
          />
          <label for="message" class="c-contact__form-label">Message</label>
          <textarea
            name="message"
            form="contactform"
            rows="10"
            cols="50"
            class="c-contact__form-input c-contact__form-input--padding-left c-contact__form-input--padding-top"
            placeholder="Write your message here"
          ></textarea>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseContact"
};
</script>

<style scoped>
.c-about {
  display: grid;
  grid-template-columns:
    [left-gutter] var(--grid-gutter) [body] 12fr
    [right-gutter] var(--grid-gutter);
  grid-template-rows: [header] auto [content] 1fr;
  overflow-x: hidden;
  align-content: center;
  padding-bottom: var(--space-xxl);
  height: 100vh;
}

.c-contact__heading {
  text-align: center;
  display: block;
  grid-column: body / right-gutter;
  grid-row: header;
  align-items: center;
  margin-top: var(--space-xxl);
}

.c-contact__content {
  grid-column: body / right-gutter;
  grid-row: content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--grid-gutter);
  margin-top: var(--space-xl);
}

.c-contact__form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.c-contact__form {
  display: flex;
  flex-direction: column;
  max-width: 24rem;

  @media (--tablet) {
    max-width: 50rem;
  }
}

.c-contact__form-label {
  margin-top: var(--space-md);
}

.c-contact__form-input {
  margin-top: var(--space-sm);
  font-size: var(--text-xs);
  border: 1px solid black;
  border-radius: 0.6rem;
}

.c-contact__form-input:focus {
  border: 1px solid var(--secondary-color);
  transition: all 0.5s;
}

.c-contact__form-input--padding {
  padding: 1rem 0.8rem;
}

.c-contact__form-input--padding-left {
  padding-left: 0.8rem;
}

.c-contact__form-input--padding-top {
  padding-top: 0.8rem;
}
</style>