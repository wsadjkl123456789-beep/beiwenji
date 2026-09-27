<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import PageHero from '../components/PageHero.vue'
import PatternVisual from '../components/PatternVisual.vue'
import { usePatterns } from '../composables/usePatterns'

const route = useRoute()
const { patternItems, loadPatterns } = usePatterns()

const directions = [
  {
    number: '01',
    title: '地域溯源',
    text: '区分长白山山林纹样、松花江流域纹样、铁路城市纹样的地域差异，解读水土如何塑造美学。',
  },
  {
    number: '02',
    title: '民族溯源',
    text: '解读满、赫哲、汉杂糅的多元纹样特征，展现东北多民族文化交融的独特性。',
  },
  {
    number: '03',
    title: '时代溯源',
    text: '对比清代民俗纹样、民国铁路纹样、建国近代商纹的风格演变，见证东北百年变迁。',
  },
  {
    number: '04',
    title: '寓意溯源',
    text: '拆解民俗纹样的祈福寓意、渔猎纹样的自然崇拜、建筑纹样的美学表达。',
  },
]

const eraTimeline = [
  ['清代', '民俗礼制与地方信仰', '剪纸、刺绣、萨满纹样在日常生活与节庆礼俗中持续流传。'],
  ['1898—1931', '铁路带来的新形式', '新艺术曲线、几何窗格和铸铁装饰进入东北城市建筑。'],
  ['民国—建国初期', '商业与工业视觉', '老商标、粮油包装、齿轮与几何边饰记录近代城市商业。'],
  ['当代', '非遗保护与数字复原', '田野记录、矢量重绘与开放档案共同延长纹样的生命周期。'],
]

const readingSteps = [
  ['先看结构', '判断重复单元、对称轴、边界和主次关系。'],
  ['再看材料', '结合木、布、纸、皮、金属等材料理解线条形成方式。'],
  ['最后回到现场', '把图形放回建筑、服饰、器物与节庆语境中解释。'],
]

const caseRecords = computed(() => {
  const requested = route.query.record
  const records = patternItems.value
  const selected = requested ? records.find((item) => item.code === requested) : null
  const base = selected ? [selected, ...records.filter((item) => item.code !== selected.code)] : records
  return base.slice(0, 3)
})

onMounted(loadPatterns)
</script>

<template>
  <div>
    <PageHero
      index="03"
      eyebrow="ORIGIN INTERPRETATION"
      title="溯源解读"
      lead="纹样从来不是单纯的装饰线条，每一道曲线、每一个图案、每一种构图，都是时代的缩影、地域的印记、文化的载体。"
    />

    <section class="lead-section">
      <p>
        北纹集不止做纹样的图片收纳，更深耕纹样溯源研究。结合东北地域历史、民族文化、建筑发展、民俗传统，解读每一组纹样的创作寓意、文化内涵、演变历程、地域特色，让静态的花纹，拥有鲜活的历史生命力。
      </p>
    </section>

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">FOUR DIRECTIONS</p>
          <h2>核心解读方向</h2>
        </div>
        <p>从水土、民族、时代与寓意四条路径进入纹样，让图像重新连接具体的人、地点和年代。</p>
      </header>

      <div class="direction-grid">
        <article v-for="item in directions" :key="item.number">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="case-section">
      <header class="section-header">
        <div>
          <p class="eyebrow">CASE READING</p>
          <h2>纹样个案</h2>
        </div>
        <p>以馆藏档案为例，将视觉结构放回地域、工艺与生活语境中阅读。</p>
      </header>

      <article v-for="(pattern, index) in caseRecords" :key="pattern.code" class="case-study">
        <div class="case-art">
          <PatternVisual :pattern="pattern" />
        </div>
        <div class="case-copy">
          <span class="case-index">0{{ index + 1 }} / {{ pattern.code }}</span>
          <p class="eyebrow">{{ pattern.group }} · {{ pattern.type }}</p>
          <h2>{{ pattern.name }}</h2>
          <p>{{ pattern.description }}</p>
          <dl>
            <div><dt>地域</dt><dd>{{ pattern.region }}</dd></div>
            <div><dt>年代</dt><dd>{{ pattern.period }}</dd></div>
            <div><dt>来源</dt><dd>{{ pattern.source }}</dd></div>
          </dl>
          <p class="case-context">{{ pattern.context }}</p>
          <div class="source-record">
            <p><strong>原始来源：</strong>{{ pattern.source }}</p>
            <p v-if="pattern.figure"><strong>图号：</strong>{{ pattern.figure }}</p>
            <p v-if="pattern.license"><strong>许可：</strong>{{ pattern.license }}</p>
            <a v-if="pattern.sourceUrl" :href="pattern.sourceUrl" target="_blank" rel="noopener noreferrer">
              查看原始来源 ↗
            </a>
          </div>
        </div>
      </article>
    </section>

    <section class="origin-timeline">
      <header class="section-header">
        <div>
          <p class="eyebrow">HISTORICAL LAYERS</p>
          <h2>时代层积</h2>
        </div>
        <p>同一地区不同历史阶段留下不同视觉结构，纹样因此成为可被分层的时代档案。</p>
      </header>
      <div class="timeline-list">
        <article v-for="item in eraTimeline" :key="item[0]">
          <span>{{ item[0] }}</span>
          <h3>{{ item[1] }}</h3>
          <p>{{ item[2] }}</p>
        </article>
      </div>
    </section>

    <section class="reading-method">
      <div class="section-label">
        <span>阅读方法</span>
        <small>READING METHOD</small>
      </div>
      <div class="method-list">
        <article v-for="(step, index) in readingSteps" :key="step[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ step[0] }}</h3>
          <p>{{ step[1] }}</p>
        </article>
      </div>
    </section>

    <section class="quote-band">
      <p>以纹为证，回望关东岁月。</p>
      <strong>方寸线条之间，藏着东北千年山河变迁、民族交融、市井烟火的全部答案。</strong>
    </section>
  </div>
</template>
