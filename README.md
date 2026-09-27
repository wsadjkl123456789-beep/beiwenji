# 北纹集

东北视觉纹样数字档案馆的 Vue 3 前台。

## 本地开发

```bash
npm install
npm run dev
```

## 静态构建

```bash
npm run build:static
npm run preview:static
```

构建产物位于 `dist/`。

## GitHub Pages

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。工作流位于 `.github/workflows/deploy-pages.yml`。

站点使用 Vue Router Hash 模式，因此无需额外的服务器重写规则。
