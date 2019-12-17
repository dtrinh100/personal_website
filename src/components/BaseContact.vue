<template>
  <section class="c-contact js-contact">
    <h2 class="c-contact__heading">Contact</h2>
    <div class="c-contact__content">
      <div class="c-contact__form-container">
        <ValidationObserver
          v-slot="{ invalid }"
          tag="form"
          class="c-contact__form"
          id="contactform"
          action="https://formspree.io/xbjlnape"
          method="POST"
        >
          <ValidationProvider
            rules="required"
            v-slot="{ errors, valid, invalid, dirty }"
            class="c-contact__form-field"
          >
            <label for="fullname">Full Name</label>
            <input
              type="text"
              class="c-contact__form-input c-contact__form-input--padding"
              :class="{
                'c-contact__form-input--green': valid && dirty,
                'c-contact__form-input--red': invalid && dirty
              }"
              name="fullname"
              v-model="fullname"
              placeholder="Your awesome name"
            />
            <div class="c-contact__error" v-show="invalid && dirty">
              <font-awesome-icon
                class="c-contact__icons"
                icon="exclamation-triangle"
              />
              <span class="c-contact__error-content">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            rules="required|email"
            v-slot="{ errors, valid, invalid, dirty }"
            class="c-contact__form-field"
          >
            <label for="email" class="c-contact__form-label">Email</label>
            <input
              type="text"
              class="c-contact__form-input c-contact__form-input--padding"
              name="email"
              v-model="email"
              placeholder="Place email here"
              :class="{
                'c-contact__form-input--green': valid && dirty,
                'c-contact__form-input--red': invalid && dirty
              }"
            />
            <div class="c-contact__error" v-show="invalid && dirty">
              <font-awesome-icon
                class="c-contact__icons"
                icon="exclamation-triangle"
              />
              <span class="c-contact__error-content">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            v-slot="{ errors, valid, invalid, dirty }"
            class="c-contact__form-field"
          >
            <label for="message" class="c-contact__form-label">Message</label>
            <textarea
              name="message"
              form="contactform"
              rows="10"
              cols="50"
              class="c-contact__form-input c-contact__form-input--padding-left c-contact__form-input--padding-top"
              :class="{
                'c-contact__form-input--green': valid && dirty,
                'c-contact__form-input--red': invalid && dirty
              }"
              placeholder="Write your message here"
              v-model="message"
            ></textarea>
            <div class="c-contact__error" v-show="invalid && dirty">
              <font-awesome-icon
                class="c-contact__icons"
                icon="exclamation-triangle"
              />
              <span class="c-contact__error-content">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <button
            class="c-button"
            type="submit"
            form="contactform"
            :disabled="invalid"
          >
            Send
          </button>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Looks like you need to type something in the box."
});

extend("email", {
  ...email,
  message: "Hmm, looks like you need a valid email."
});

export default {
  name: "BaseContact",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: function() {
    return {
      fullname: "",
      email: "",
      message: ""
    };
  }
};
</script>

<style scoped>
.c-contact {
  display: grid;
  grid-template-columns:
    [left-gutter] var(--grid-gutter) [body] 12fr
    [right-gutter] var(--grid-gutter);
  grid-template-rows: [header] auto [content] 1fr;
  align-content: center;
  padding-bottom: var(--space-lg);
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

.c-contact__form-field {
  display: flex;
  flex-direction: column;
}

.c-contact__form-label {
  margin-top: var(--space-md);
}

.c-contact__form-input {
  margin-top: var(--space-sm);
  font-size: var(--text-xs);
  border: 1px solid black;
  border-radius: 0.6rem;
  transition: 0.6s all;
}

.c-contact__form-input:focus {
  outline-style: none;
}

.c-contact__form-input--green {
  border-color: #23dc3d;
}

.c-contact__form-input--red {
  border-color: #721c24;
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

.c-contact__error {
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
  border-radius: 5px;
  margin-top: var(--space-md);
  font-size: var(--text-xs);
  padding: var(--space-sm);
}

.c-contact__error-content {
  margin-left: var(--space-sm);
}

.c-button {
  padding: var(--space-sm);
  background-color: #51758a;
  border: none;
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: 50%;
  max-width: 20rem;
  padding: 1rem 0;
  margin-top: var(--space-md);
  font-size: 1.6rem;
  display: block;
}

.c-button:disabled {
  background-color: #a8becb;
}
</style>
