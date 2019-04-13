<template>
<main class="l-default">
    <slot name="hero"></slot>
    <slot name="content" />
</main>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style scoped>
.l-default {
    display: grid;
    grid-template-areas: "hero"
                         "about";
}
</style>

 
