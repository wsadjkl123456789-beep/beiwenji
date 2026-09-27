<script setup>
import PatternVisual from './PatternVisual.vue'

defineProps({
  pattern: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <article class="pattern-card">
    <button
      class="pattern-card-button"
      type="button"
      :aria-label="`查看纹样档案：${pattern.name}`"
      @click="$emit('select', pattern)"
    >
      <div class="pattern-preview">
        <PatternVisual :pattern="pattern" />
        <span class="pattern-code">{{ pattern.code }}</span>
        <span class="pattern-open">打开档案 ↗</span>
      </div>

      <div class="pattern-card-copy">
        <div class="pattern-meta">
          <span>{{ pattern.group }}</span>
          <span>{{ pattern.type }}</span>
        </div>
        <h3>{{ pattern.name }}</h3>
        <p>{{ pattern.region }} · {{ pattern.period }}</p>
        <small v-if="pattern.figure">{{ pattern.figure }} · 原始图版</small>
      </div>
    </button>
  </article>
</template>
