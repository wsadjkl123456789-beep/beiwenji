import { ref } from 'vue'

import { patterns as fallbackPatterns } from '../data/patterns'

const patternItems = ref(fallbackPatterns)
const loaded = ref(false)
let pendingRequest = null

async function loadPatterns() {
  if (loaded.value) return
  if (pendingRequest) return pendingRequest

  pendingRequest = fetch('/api/patterns/')
    .then((response) => {
      if (!response.ok) throw new Error('Pattern API request failed')
      return response.json()
    })
    .then((data) => {
      if (Array.isArray(data.results) && data.results.length) {
        const verifiedPatterns = new Map(
          fallbackPatterns.map((pattern) => [pattern.code, pattern]),
        )
        data.results.forEach((pattern) => {
          if (verifiedPatterns.has(pattern.code)) {
            verifiedPatterns.set(pattern.code, {
              ...verifiedPatterns.get(pattern.code),
              ...pattern,
              image: verifiedPatterns.get(pattern.code).image,
              sourceUrl: verifiedPatterns.get(pattern.code).sourceUrl,
              license: verifiedPatterns.get(pattern.code).license,
            })
          }
        })
        patternItems.value = [...verifiedPatterns.values()]
      }
      loaded.value = true
    })
    .catch(() => {
      // 保留前端内置档案，确保静态部署或 API 暂不可用时页面仍可浏览。
    })
    .finally(() => {
      pendingRequest = null
    })

  return pendingRequest
}

export function usePatterns() {
  return {
    patternItems,
    loadPatterns,
  }
}
