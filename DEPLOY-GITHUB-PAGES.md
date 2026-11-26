# GitHub Pages 发布流程

当前站点部署在 GitHub Pages，是 EXIST-D 账号的用户主页（User Site）。

仓库地址：

- `https://github.com/EXIST-D/exist-d.github.io`

线上地址：

- `https://exist-d.github.io/`

## 自动发布

`.github/workflows/deploy.yml` 会在 `main` 分支收到新提交后自动执行：安装依赖 → `npm run build` → 上传 `dist` → 发布到 GitHub Pages。

仓库的 Settings → Pages → Source 设为 **GitHub Actions**（不再使用「Deploy from a branch」）。

## 本地发布流程

1. `npm run build` 确认构建通过
2. 提交，提交信息带 `EX-` 编号，例如 `EX-12: 修改说明`
3. `git push origin main`，然后在仓库的 `Actions` 页面等部署完成

## 路径说明

仓库名与用户名一致（`exist-d.github.io`），所以站点直接部署在根路径，`astro.config.mjs` 里不设置 `base`。

- 首页：`https://exist-d.github.io/`
- 项目页：`https://exist-d.github.io/projects/`
- Markdown 里引用站内图片或页面时直接写 `/images/xxx.png`、`/notes/xxx/`。

### 旧地址兼容

2026-11 之前站点挂在 `https://exist-d.github.io/exist.github.io/` 下。旧链接（例如简历里贴出去的）会落到根站点的 404 页，`src/pages/404.astro` 里的脚本会把 `/exist.github.io/xxx` 自动跳转到 `/xxx`。

如果以后改成自定义域名，需要同步调整 `astro.config.mjs` 的 `site` 和 `settings.json` 的 `site`。
