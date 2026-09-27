<script setup>
import { computed, onMounted, ref } from 'vue'

import PageHero from '../components/PageHero.vue'
import PatternCard from '../components/PatternCard.vue'
import { usePatterns } from '../composables/usePatterns'
import { groups, motifTypes } from '../data/patterns'

const { patternItems, loadPatterns } = usePatterns()
const searchTerm = ref('')
const activeGroup = ref('全部')
const activeType = ref('全部')

const collections = [
  {
    number: '壹',
    title: '赫哲族历史图版',
    summary: '凌纯声《松花江下游的赫哲族》原书图版。',
    detail: '当前收录烟袋花、衣物袋花、鞋花、蝶形花、几何花和桦皮盒纹等图版，直接使用公共领域扫描图像，不进行现代造型改写。',
  },
  {
    number: '贰',
    title: '鄂伦春族桦皮与刺绣',
    summary: '博物馆藏桦树皮器、刺绣与狍头帽实物。',
    detail: '来源包括中国国家博物馆、内蒙古博物院和中国（哈尔滨）森林博物馆，记录器物形态、刺绣针脚和材料结构。',
  },
  {
    number: '叁',
    title: '达斡尔族与蒙古族刺绣',
    summary: '内蒙古博物院蒙古族文化展厅实物。',
    detail: '当前收录达斡尔族丝绣与佩刀、蒙古族刺绣照片，用于观察针法、卷曲结构和色彩关系。',
  },
  {
    number: '肆',
    title: '满族与中东铁路实物',
    summary: '清代满族女袍团花刺绣和中东铁路建筑实例。',
    detail: '满族女袍来自上海博物馆；中东铁路记录为哈尔滨建筑实例照片。两类资料均附原始来源与许可信息。',
  },
]

const standards = [
  { title: '来源记录', text: '登记采集地区、年代、使用场景与资料来源。' },
  { title: '图形判定', text: '识别重复单元、对称结构、色彩和工艺边界。' },
  { title: '分级整理', text: '区分原始影像、结构线稿、标准重绘和可应用色板。' },
  { title: '持续校订', text: '根据新资料和研究者反馈持续修订档案信息。' },
]

const filteredPatterns = computed(() => {
  const keyword = searchTerm.value.trim().toLowerCase()

  return patternItems.value.filter((pattern) => {
    const groupMatches = activeGroup.value === '全部' || pattern.group === activeGroup.value
    const typeMatches = activeType.value === '全部' || pattern.type === activeType.value
    const searchMatches =
      !keyword ||
      [pattern.name, pattern.code, pattern.group, pattern.type, pattern.region, ...pattern.tags]
        .join(' ')
        .toLowerCase()
        .includes(keyword)
    return groupMatches && typeMatches && searchMatches
  })
})

function resetFilters() {
  searchTerm.value = ''
  activeGroup.value = '全部'
  activeType.value = '全部'
}

onMounted(loadPatterns)
</script>

<template>
  <div>
    <PageHero
      index="02"
      eyebrow="PATTERN GALLERY"
      title="纹样图库"
      lead="一方纹路，一方水土。东北纹样生于山林、长于江畔、兴于市井、盛于时代。不同于江南的温婉细腻、中原的庄重规整，东北传统纹样自带辽阔、硬朗、质朴、灵动的北方气质。"
    />

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">FOUR SYSTEMS</p>
          <h2>四大核心体系</h2>
        </div>
        <p>本站将东北现存传统视觉纹样，梳理为四大核心体系，分门别类、系统归档，全方位呈现黑土地多元交融的视觉美学。</p>
      </header>

      <div class="collection-grid">
        <article v-for="item in collections" :key="item.number" class="collection-card">
          <span>{{ item.number }}</span>
          <h3>{{ item.title }}</h3>
          <p class="collection-summary">{{ item.summary }}</p>
          <p>{{ item.detail }}</p>
        </article>
      </div>
    </section>

    <section class="archive-panel">
      <header class="archive-heading">
        <div>
          <p class="eyebrow">SELECTED RECORDS</p>
          <h2>精选档案</h2>
        </div>
        <div class="archive-search">
          <label class="sr-only" for="gallery-search">检索档案</label>
          <input id="gallery-search" v-model="searchTerm" type="search" placeholder="检索名称、编号、族群、地区或标签" />
        </div>
      </header>

      <div class="filter-row">
        <span>谱系</span>
        <button
          v-for="group in groups"
          :key="group"
          type="button"
          :class="{ active: activeGroup === group }"
          @click="activeGroup = group"
        >
          {{ group }}
        </button>
      </div>
      <div class="filter-row">
        <span>类型</span>
        <button
          v-for="type in motifTypes"
          :key="type"
          type="button"
          :class="{ active: activeType === type }"
          @click="activeType = type"
        >
          {{ type }}
        </button>
      </div>

      <div v-if="filteredPatterns.length" class="pattern-grid">
        <PatternCard
          v-for="pattern in filteredPatterns"
          :key="pattern.code"
          :pattern="pattern"
          @select="$router.push({ name: 'origins', query: { record: pattern.code } })"
        />
      </div>
      <div v-else class="empty-state">
        <h3>未找到匹配档案</h3>
        <p>尝试减少筛选条件，或使用其他族群、类型与关键词检索。</p>
        <button type="button" @click="resetFilters">清除全部条件</button>
      </div>
    </section>

    <section class="catalog-summary">
      <article>
        <strong>{{ patternItems.length }}</strong>
        <span>当前前端馆藏条目</span>
      </article>
      <article>
        <strong>{{ groups.length - 1 }}</strong>
        <span>视觉谱系分类</span>
      </article>
      <article>
        <strong>{{ motifTypes.length - 1 }}</strong>
        <span>纹样结构类型</span>
      </article>
      <article>
        <strong>04</strong>
        <span>核心体系章节</span>
      </article>
    </section>

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">CATALOG STANDARD</p>
          <h2>馆藏整理标准</h2>
        </div>
        <p>图库不仅提供可浏览的纹样，也记录档案来源、图形结构和整理层级。</p>
      </header>
      <div class="standard-grid">
        <article v-for="(item, index) in standards" :key="item.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="browse-guide">
      <div class="section-label">
        <span>浏览指南</span>
        <small>GUIDE</small>
      </div>
      <div class="prose-columns">
        <p>可以按族群、地域与工艺谱系浏览，也可以按窗棂、云纹、盘长、鱼纹、花草、几何和山林等结构类型筛选。</p>
        <p>每张卡片代表一条独立档案。点击后将进入溯源解读页，查看其地域、年代、文化语境、色彩谱和来源信息。</p>
        <p>当前馆藏为前端扩展数据集，后续可继续将新增条目同步至 Django 数据模型和后台管理。</p>
      </div>
    </section>
  </div>
</template>
