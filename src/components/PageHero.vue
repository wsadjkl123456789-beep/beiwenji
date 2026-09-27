<script setup>
defineProps({
  index: {
    type: String,
    required: true,
  },
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  lead: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="page-hero">
    <div class="page-hero-index">{{ index }}</div>
    <div class="page-hero-copy">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ lead }}</p>
    </div>
    <div class="page-hero-rule" aria-hidden="true"></div>
  </section>
</template>
