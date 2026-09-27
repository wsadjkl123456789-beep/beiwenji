<script setup>
import { RouterLink, RouterView } from 'vue-router'

const navigation = [
  { label: '首页', to: '/' },
  { label: '纹样图库', to: '/gallery' },
  { label: '溯源解读', to: '/origins' },
  { label: '手绘复原图集', to: '/restoration' },
  { label: '引用说明', to: '/citation' },
  { label: '关于本站', to: '/about' },
]
</script>

<template>
  <div class="site-frame">
    <header class="site-header">
      <RouterLink class="brand" to="/" aria-label="北纹集首页">
        <span class="brand-seal">北</span>
        <span class="brand-copy">
          <strong>北纹集</strong>
          <small>东北视觉纹样数字档案馆</small>
        </span>
      </RouterLink>

      <nav class="main-nav" aria-label="全站主导航">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="nav-link"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="page-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="footer-primary">
        <div class="footer-brand">
          <span class="brand-seal">北</span>
          <div>
            <strong>北纹集 | 东北视觉纹样数字档案馆</strong>
            <p>采白山黑水纹样，留黑土地视觉记忆</p>
          </div>
        </div>
        <p class="footer-motto">公益归档 · 文脉传承 · 非遗美学留存</p>
      </div>
      <div class="footer-meta">
        <span>© {{ new Date().getFullYear() }} 北纹集</span>
        <span>部分内容可能由 AI 生成</span>
      </div>
    </footer>
  </div>
</template>
