<script setup>
import PageHero from '../components/PageHero.vue'

const principles = [
  ['尊重讲述者', '记录资料来源与地方知识贡献者，不将集体文化经验据为个人成果。'],
  ['保留不确定性', '对年代、来源和寓意中无法确认的部分明确标注，不用想象填补空白。'],
  ['开放非商用查阅', '为学生、研究者和设计师提供可引用的公益文化档案。'],
  ['持续更新', '随着田野采集、学术研究与公众反馈，不断修订和补充馆藏。'],
]

const roadmap = [
  ['第一阶段', '完成纹样图库、溯源解读、手绘复原和引用规范的前端框架。'],
  ['第二阶段', '扩充中东铁路建筑、少数民族渔猎和近代商纹档案。'],
  ['第三阶段', '开放后台录入、图像上传、关系检索和公众纠错机制。'],
  ['长期计划', '形成可持续维护的东北视觉纹样开放数字档案。'],
]
</script>

<template>
  <div>
    <PageHero
      index="06"
      eyebrow="ABOUT THE ARCHIVE"
      title="关于本站"
      lead="不以盈利为目的，不做流量传播，只做一件小事：系统化留存东北视觉纹样，年轻化解读关东传统美学。"
    />

    <section class="about-story">
      <div class="section-label">
        <span>建站初衷</span>
        <small>ORIGIN</small>
      </div>
      <div class="prose-columns">
        <p>
          东北文化，常常被大众标签化为美食、雪景、民俗印象，而藏在建筑、手艺、历史里的视觉美学，长期被忽略、被低估、被遗忘。
        </p>
        <p>
          作为深耕视觉设计与地域文化的创作者，我发现：大量江南、中原、川渝传统纹样已有完善的数字化档案与学术研究，而东北本土视觉纹样始终缺乏系统化、轻量化、年轻化的线上归档平台。
        </p>
        <p>
          无数独属于白山黑水的精美纹路，无人整理、无人解读、无人传承，正在随时间悄然消逝。
        </p>
        <p>于是创立「北纹集」。</p>
      </div>
    </section>

    <section class="mission-grid">
      <article>
        <span>01</span>
        <h3>系统化留存</h3>
        <p>收集、整理、复原东北视觉纹样，建立可持续维护的数字档案。</p>
      </article>
      <article>
        <span>02</span>
        <h3>年轻化解读</h3>
        <p>以清晰、现代的语言连接地域历史、民俗传统与当代设计。</p>
      </article>
      <article>
        <span>03</span>
        <h3>公益性开放</h3>
        <p>面向学生、研究者、设计师与文化爱好者免费开放非商用学习。</p>
      </article>
    </section>

    <section class="about-principles">
      <header class="section-header">
        <div>
          <p class="eyebrow">WORKING PRINCIPLES</p>
          <h2>工作原则</h2>
        </div>
        <p>项目以文化保护为出发点，在开放查阅、原创劳动和地方知识之间建立清晰边界。</p>
      </header>
      <div class="standard-grid">
        <article v-for="(item, index) in principles" :key="item[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item[0] }}</h3>
          <p>{{ item[1] }}</p>
        </article>
      </div>
    </section>

    <section class="roadmap-section">
      <div class="section-label">
        <span>项目计划</span>
        <small>ROADMAP</small>
      </div>
      <ol>
        <li v-for="item in roadmap" :key="item[0]">
          <span>{{ item[0] }}</span>
          <p>{{ item[1] }}</p>
        </li>
      </ol>
    </section>

    <section class="about-vision">
      <p class="eyebrow">VISION</p>
      <h2>以纹载史，以艺传城。</h2>
      <p>愿散落白山黑水间的每一缕纹路，皆可被珍藏、被读懂、被延续。</p>
    </section>

    <section class="about-closing">
      <div class="prose-columns">
        <p>
          希望通过微小的数字化存档，为东北地域文脉留存一份可视化记忆，为传统文化创新设计提供一份本土素材参考，让更多人看见：东北不止烟火辽阔，更有千年沉淀的极致美学与细腻文脉。
        </p>
      </div>
      <blockquote>
        <p>山河不语，纹样留痕。</p>
        <strong>守一方北纹，传一脉关东。</strong>
      </blockquote>
    </section>
  </div>
</template>
