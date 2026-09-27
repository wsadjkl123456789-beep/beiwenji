<script setup>
import PageHero from '../components/PageHero.vue'

const rules = [
  '本站所有纹样图文、复原手绘、文字解读，免费开放给学生、研究者、设计师非商用学习参考使用。',
  '禁止将本站原创复原纹样、原创文案用于商业售卖、商用文创、商业宣传、二次盈利。',
  '学术引用、毕业设计、课程作业、公益科普使用，可正常标注来源「北纹集-东北视觉纹样数字档案馆」。',
  '禁止私自篡改、冒用本站原创内容进行虚假创作、版权申报。',
]

const faqs = [
  ['可以用于课程作业吗？', '可以。请在作品或文档中标注「北纹集-东北视觉纹样数字档案馆」及具体档案编号。'],
  ['可以用于自媒体配图吗？', '公益科普且不产生商业收益时可以使用；涉及广告、带货或品牌宣传须取得授权。'],
  ['可以修改纹样后再发布吗？', '非商用学习可以基于档案进行再设计，但不得将原档案或改编稿申报为他人原创。'],
  ['可以用于文创产品吗？', '不可以直接用于商业文创。如有合作或授权需求，应另行联系项目方。'],
]
</script>

<template>
  <div>
    <PageHero
      index="05"
      eyebrow="CITATION POLICY"
      title="引用说明"
      lead="北纹集为纯公益、非商用、学术性东北地域文化数字档案站点。"
    />

    <section class="lead-section">
      <div class="prose-columns">
        <p>建站初衷为文化保护、学术记录、知识普及，所有内容均为自主整理、手绘原创、公开溯源，无任何商业盈利行为。</p>
        <p>本站希望在不设门槛地开放知识的同时，明确素材使用边界，让公益传播与原创劳动得到共同尊重。</p>
      </div>
    </section>

    <section class="section-block">
      <header class="section-header">
        <div>
          <p class="eyebrow">USAGE RULES</p>
          <h2>使用规范</h2>
        </div>
        <p>非商用学习、研究和公益科普可规范引用；任何商业用途均须停止使用或另行取得授权。</p>
      </header>

      <div class="citation-rules">
        <article v-for="(rule, index) in rules" :key="rule">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ rule }}</p>
        </article>
      </div>
    </section>

    <section class="citation-boundary">
      <article>
        <p class="eyebrow">PERMITTED</p>
        <h2>允许使用</h2>
        <ul>
          <li>非商用学习与个人研究</li>
          <li>课堂作业、毕业设计与学术引用</li>
          <li>公益科普与地方文化传播</li>
        </ul>
      </article>
      <article>
        <p class="eyebrow">NOT PERMITTED</p>
        <h2>禁止使用</h2>
        <ul>
          <li>商业售卖与商业宣传</li>
          <li>商用文创和二次盈利</li>
          <li>篡改、冒用或虚假版权申报</li>
        </ul>
      </article>
    </section>

    <section class="citation-format">
      <p class="eyebrow">CITATION FORMAT</p>
      <h2>建议引用格式</h2>
      <blockquote>
        北纹集. 《纹样名称》[数字纹样档案]. 北纹集-东北视觉纹样数字档案馆. 访问日期：____年__月__日.
      </blockquote>
    </section>

    <section class="faq-section">
      <header class="section-header">
        <div>
          <p class="eyebrow">COMMON QUESTIONS</p>
          <h2>常见问题</h2>
        </div>
        <p>引用边界以非商用学习、研究和公益传播为核心，商业用途不属于默认开放范围。</p>
      </header>
      <div class="faq-list">
        <article v-for="(item, index) in faqs" :key="item[0]">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item[0] }}</h3>
          <p>{{ item[1] }}</p>
        </article>
      </div>
    </section>

    <section class="copyright-section">
      <div class="section-label">
        <span>版权声明</span>
        <small>COPYRIGHT</small>
      </div>
      <p>
        本站点所有复原作品、文字内容均为原创整理，依托地域文化调研创作。尊重传统文化，尊重原创劳动，共同守护东北小众文化的传播净土。
      </p>
    </section>
  </div>
</template>
