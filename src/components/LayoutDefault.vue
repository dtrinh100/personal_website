<template>
<main class="l-default">
    <slot name="hero"></slot>
    <div class="l-content">
        <slot name="content" />
    </div>
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
    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
    grid-template-areas: "hero"
                         "about";
}

.l-content {
    margin: 16px 16px;
    @media(--tablet) {
        margin: 16px 64px;
    }
}
</style>

 
