import { createRouter, createWebHashHistory } from 'vue-router'

import AboutPage from '../pages/AboutPage.vue'
import CitationPage from '../pages/CitationPage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import HomePage from '../pages/HomePage.vue'
import OriginsPage from '../pages/OriginsPage.vue'
import RestorationPage from '../pages/RestorationPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: '首页' } },
  { path: '/gallery', name: 'gallery', component: GalleryPage, meta: { title: '纹样图库' } },
  { path: '/origins', name: 'origins', component: OriginsPage, meta: { title: '溯源解读' } },
  {
    path: '/restoration',
    name: 'restoration',
    component: RestorationPage,
    meta: { title: '手绘复原图集' },
  },
  { path: '/citation', name: 'citation', component: CitationPage, meta: { title: '引用说明' } },
  { path: '/about', name: 'about', component: AboutPage, meta: { title: '关于本站' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title || '首页'}｜北纹集 东北视觉纹样数字档案馆`
})

export default router
