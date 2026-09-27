<script setup>
import { computed, onMounted } from 'vue'

import PageHero from '../components/PageHero.vue'
import PatternVisual from '../components/PatternVisual.vue'
import { usePatterns } from '../composables/usePatterns'

const { patternItems, loadPatterns } = usePatterns()
const restorationRecords = computed(() => patternItems.value.slice(2, 8))

const values = [
  { number: '01', title: '抢救留存', text: '修复残缺古纹，留住即将消失的东北视觉遗产。' },
  { number: '02', title: '标准化整理', text: '将随性的民间纹样、破损的建筑花纹，梳理为规整、清晰、可溯源的标准图形。' },
  { number: '03', title: '古今衔接', text: '让古老东北纹样适配现代审美，可为平面设计、文创创作、空间设计、学术研究提供原创素材。' },
]

const process = [
  ['采集残图', '实拍照片、老旧影像与文献记载'],
  ['结构判定', '识别重复单元、对称轴与构图关系'],
  ['线条重构', '补全破损细节，校准纹样比例'],
  ['标准重绘', '形成清晰、可溯源、可应用的数字图形'],
]

const standards = [
  ['不臆造核心结构', '无法确认的部分明确标注，不以装饰性想象替代历史结构。'],
  ['保留工艺偏差', '民间纹样中的轻微不对称和手作痕迹可被记录，而非全部机械校正。'],
  ['区分复原与再设计', '复原稿与当代再设计分别归档，避免混淆原作与创新版本。'],
  ['同步来源说明', '每张复原图保留原始影像、文字记录和引用来源。'],
]

const applications = [
  { title: '学术研究', text: '用于比较纹样结构、地域传播与时代风格。' },
  { title: '视觉设计', text: '为平面、品牌、空间与数字媒体提供有来源的本土素材。' },
  { title: '公共教育', text: '以清晰图版帮助学生理解东北地方视觉文化。' },
]

onMounted(loadPatterns)
</script>

<template>
  <div>
    <PageHero
      index="04"
      eyebrow="HAND-DRAWN RESTORATION"
      title="手绘复原图集"
      lead="岁月侵蚀、建筑老化、图片老旧、手艺断层，大量珍贵的东北传统纹样存在模糊、残缺、变形、失传的问题。"
    />

    <section class="lead-section">
      <div class="prose-columns">
        <p>大量现存实物纹样无法直接用于学习研究与设计创作，古老美学难以被当代看见、活用。</p>
        <p>为此，本站依托设计专业能力，开展传统纹样手绘复原计划。</p>
        <p>基于实拍残图、老旧影像、文献记载，对破损、模糊、失传的东北本土纹样进行线条重构、细节补全、标准化梳理、高清重绘。</p>
      </div>
    </section>

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">RESTORATION VALUE</p>
          <h2>复原价值</h2>
        </div>
        <p>复原不是简单美化，而是在证据、结构与设计判断之间，为旧纹样建立可继续使用的数字版本。</p>
      </header>
      <div class="value-grid">
        <article v-for="item in values" :key="item.number">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="restoration-gallery">
      <header class="section-header">
        <div>
          <p class="eyebrow">RESTORATION PLATES</p>
          <h2>复原图版</h2>
        </div>
        <p>以统一底色、线性和色板呈现重绘结果，保留纹样的结构节奏与工艺气质。</p>
      </header>

      <div class="restoration-grid">
        <article v-for="(pattern, index) in restorationRecords" :key="pattern.code">
          <div class="restoration-art">
            <PatternVisual :pattern="pattern" />
          </div>
          <div class="restoration-caption">
            <span>图版 {{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ pattern.name }}</h3>
            <p>{{ pattern.group }} · {{ pattern.region }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="process-section">
      <div class="section-label">
        <span>复原流程</span>
        <small>WORKFLOW</small>
      </div>
      <ol>
        <li v-for="(step, index) in process" :key="step[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ step[0] }}</strong>
          <p>{{ step[1] }}</p>
        </li>
      </ol>
    </section>

    <section class="restoration-standard">
      <header class="section-header">
        <div>
          <p class="eyebrow">RESTORATION BOUNDARY</p>
          <h2>复原边界</h2>
        </div>
        <p>复原工作需要判断什么可以补全、什么必须保留不确定，避免将推测包装成事实。</p>
      </header>
      <div class="boundary-grid">
        <article v-for="(item, index) in standards" :key="item[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item[0] }}</h3>
          <p>{{ item[1] }}</p>
        </article>
      </div>
    </section>

    <section class="application-section">
      <div class="section-label">
        <span>应用方向</span>
        <small>APPLICATION</small>
      </div>
      <div class="application-grid">
        <article v-for="item in applications" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="quote-band">
      <p>以笔为薪，续百年纹路星火。</p>
      <strong>在复刻与重构之间，让黑土地的古老美学，重获新生。</strong>
    </section>
  </div>
</template>
