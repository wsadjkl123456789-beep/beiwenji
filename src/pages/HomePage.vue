<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import PatternVisual from '../components/PatternVisual.vue'
import { usePatterns } from '../composables/usePatterns'

const { patternItems, loadPatterns } = usePatterns()
const featured = computed(() => patternItems.value.slice(0, 3))

const sections = [
  {
    number: '01',
    title: '纹样图库 · 藏关东万象',
    text: '整合东北四大核心纹样体系，分类归档建筑雕花、渔猎图腾、民间剪纸、近代商纹，高清留存本土原生视觉符号。',
    to: '/gallery',
  },
  {
    number: '02',
    title: '溯源解读 · 解纹路深意',
    text: '不止收录图形，更深度拆解每一组纹样的诞生背景、民俗寓意、地域特征与时代故事，让线条有历史，让花纹有温度。',
    to: '/origins',
  },
  {
    number: '03',
    title: '手绘复原 · 续传统新生',
    text: '针对模糊老旧、破损残缺的传统纹样，通过设计手绘修复重构，标准化梳理纹样线条，适配现代设计应用与学术研究。',
    to: '/restoration',
  },
  {
    number: '04',
    title: '文化科普 · 传东北美学',
    text: '以通俗文字解读东北小众传统美学，打破大众对东北文化的刻板印象，挖掘黑土地独有的精致、浪漫与厚重。',
    to: '/origins',
  },
  {
    number: '05',
    title: '引用规范 · 守公益初心',
    text: '本站所有内容为公益文化存档，开放非商用学习使用，明确素材引用规范，守护本土文化版权与传播边界。',
    to: '/citation',
  },
  {
    number: '06',
    title: '建站初衷 · 怀敬畏前行',
    text: '记录建站初心与研究历程，以青年设计视角，践行文化保护与文脉传承。',
    to: '/about',
  },
]

const eras = [
  { period: '清代', title: '民俗纹样成形', text: '剪纸、刺绣、窗棂与器物装饰形成稳定的地方图式。' },
  { period: '1898—1931', title: '铁路城市美学', text: '新艺术曲线、铸铁窗格与站房山花进入东北城市建筑。' },
  { period: '民国—建国初期', title: '商纹与包装', text: '老商标、粮油包装和工业图形记录城市商业变迁。' },
  { period: '当代', title: '数字归档与复原', text: '以矢量重绘、口述记录和开放档案保存地方视觉文脉。' },
]

const principles = [
  { title: '来源可溯', text: '记录采集地区、年代、材料与讲述者，避免纹样脱离原有语境。' },
  { title: '结构优先', text: '先理解重复单元、对称关系和工艺路径，再进行标准化重绘。' },
  { title: '克制表达', text: '保留纹样的时代质感，不以过度修饰替代历史证据。' },
]

onMounted(loadPatterns)
</script>

<template>
  <div class="home-page">
    <section class="home-hero">
      <div class="home-hero-copy">
        <p class="eyebrow">NORTHEAST VISUAL ARCHIVE</p>
        <h1>采白山黑水纹样<br />留黑土地视觉记忆</h1>
        <p class="home-lead">白山为骨，黑水为韵，方寸纹样，藏尽关东百年风骨。</p>
        <div class="hero-actions">
          <RouterLink class="text-link" to="/gallery">进入纹样图库 <span>→</span></RouterLink>
          <RouterLink class="text-link" to="/about">了解建站初衷 <span>→</span></RouterLink>
        </div>
      </div>

      <div class="home-pattern-board" aria-label="北纹集精选纹样">
        <article v-for="(pattern, index) in featured" :key="pattern.code" :class="`board-item board-item-${index + 1}`">
          <PatternVisual :pattern="pattern" />
          <div>
            <span>{{ pattern.code }}</span>
            <strong>{{ pattern.name }}</strong>
          </div>
        </article>
        <div class="board-caption">北纹集 · 视觉档案</div>
      </div>
    </section>

    <section class="home-intro">
      <div class="section-label">
        <span>引言</span>
        <small>ARCHIVE STATEMENT</small>
      </div>
      <div class="prose-columns">
        <p>
          在宏大的东北历史叙事之外，最动人的传承，往往藏在细碎的线条、雕刻与花纹之中。百年铁路建筑的卷曲雕花、赫哲族渔猎的图腾纹路、满族刺绣的民俗图案、老关东市井的剪纸纹样、近代东北老商标的复古图形……
        </p>
        <p>
          这些生长于黑土地的视觉符号，是东北自然风貌、民族生活、时代变迁最直观的视觉见证。
        </p>
        <p>
          遗憾的是，多数东北传统纹样散落于旧建筑、老物件、民间手艺之中，无官方系统归档，无完整文字释义，随着城市更新与时代更迭，正逐渐淡出大众视野，濒临失传。
        </p>
        <p>
          北纹集，致力于做东北视觉文化的记录者与留存者。我们以数字化归档的方式，收录、解读、复原东北本土传统纹样，梳理纹样背后的历史渊源、民俗寓意与美学特征。
        </p>
      </div>
      <p class="home-closing">让散落山海的关东纹路，得以留存、得以延续、得以新生。</p>
    </section>

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">SIX CHAPTERS</p>
          <h2>六大内容章节</h2>
        </div>
        <p>从图像收录、历史溯源到手绘复原和公益引用，以完整而克制的档案结构保存东北视觉文脉。</p>
      </header>

      <div class="chapter-grid">
        <RouterLink v-for="section in sections" :key="section.number" class="chapter-card" :to="section.to">
          <span>{{ section.number }}</span>
          <h3>{{ section.title }}</h3>
          <p>{{ section.text }}</p>
          <small>进入页面 →</small>
        </RouterLink>
      </div>
    </section>

    <section class="timeline-section">
      <header class="section-header">
        <div>
          <p class="eyebrow">VISUAL TIMELINE</p>
          <h2>百年视觉切片</h2>
        </div>
        <p>东北纹样并非单一传统，它由民俗生活、铁路城市、工业商业与当代设计共同塑造。</p>
      </header>
      <div class="timeline-list">
        <article v-for="era in eras" :key="era.period">
          <span>{{ era.period }}</span>
          <h3>{{ era.title }}</h3>
          <p>{{ era.text }}</p>
        </article>
      </div>
    </section>

    <section class="principle-section">
      <div class="section-label">
        <span>档案原则</span>
        <small>METHOD</small>
      </div>
      <div class="principle-grid">
        <article v-for="(item, index) in principles" :key="item.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="quote-band">
      <p>让散落山海的关东纹路</p>
      <strong>得以留存、得以延续、得以新生。</strong>
    </section>
  </div>
</template>
