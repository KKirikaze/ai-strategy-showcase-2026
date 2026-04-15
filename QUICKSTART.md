# 🚀 快速启动指南

## 立即预览（30 秒）

### Windows
```cmd
# 在当前目录打开命令行
start index.html
```

### macOS/Linux
```bash
# 在当前目录打开终端
open index.html
```

---

## 立即部署（3 分钟）

### 前置要求
安装 GitHub CLI：https://cli.github.com/

### Windows 用户
双击运行 `deploy.bat`，按提示操作

### macOS/Linux 用户
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 常见问题

### Q: 能否离线使用？
A: 部分功能依赖 CDN（字体、图标），建议联网使用。完全离线需下载字体到本地。

### Q: 如何修改内容？
A: 编辑 `index.html`，查找对应文字直接修改即可。

### Q: 如何修改颜色？
A: 编辑 `style.css` 顶部的 `:root` 变量。

### Q: 支持多语言吗？
A: 当前仅中文，可复制 `index.html` 创建 `index-en.html` 实现多语言。

### Q: 如何添加表单？
A: 推荐集成 Formspree / Google Forms / Netlify Forms。

### Q: 打开后样式错乱？
A: 检查网络连接（CDN 资源加载失败），或使用本地服务器运行。

---

## 进阶操作

### 本地开发服务器
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### 压缩代码（可选）
```bash
# 安装工具
npm i -g html-minifier clean-css-cli terser

# 压缩
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
cleancss -o style.min.css style.css
terser script.js -o script.min.js -c -m
```

### 性能优化
1. 使用 CDN 托管（Cloudflare CDN / jsDelivr）
2. 启用 Gzip 压缩（服务器配置）
3. 添加 Service Worker（PWA）
4. 图片使用 WebP 格式（如添加图片）

---

## 一键命令速查

```bash
# 创建 GitHub 仓库 + 启用 Pages
gh repo create ai-strategy-showcase --public --source=. --remote=origin
git branch -M main && git push -u origin main
gh repo edit --enable-pages --pages-branch main

# 部署到 Vercel
vercel --prod

# 部署到 Netlify
netlify deploy --prod
```

---

## 需要帮助？

- 📖 完整文档：查看 `README.md`
- 🐛 报告问题：GitHub Issues
- 💬 社区讨论：GitHub Discussions
- 📧 邮件支持：contact@ai2026.com

---

**💡 提示**：首次部署 GitHub Pages 需要 1-2 分钟生效，刷新页面前请稍候。
