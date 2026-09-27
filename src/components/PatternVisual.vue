<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  pattern: {
    type: Object,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})

const failed = ref(false)
watch(
  () => props.pattern.image,
  () => {
    failed.value = false
  },
)
</script>

<template>
  <img
    v-if="pattern.image && !failed"
    class="pattern-visual"
    :src="pattern.image"
    :alt="alt || `${pattern.name}原始档案图`"
    loading="lazy"
    decoding="async"
    @error="failed = true"
  />
  <div v-else class="pattern-placeholder">
    <span>原始图版未载入</span>
    <small>{{ pattern.figure || pattern.code }}</small>
  </div>
</template>
