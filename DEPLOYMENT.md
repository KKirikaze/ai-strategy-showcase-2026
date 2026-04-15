# 📦 部署清单

## 部署前检查

### ✅ 必须完成
- [ ] 测试所有链接可点击
- [ ] 检查响应式布局（桌面/平板/手机）
- [ ] 验证所有动画正常
- [ ] 确认统计数字显示正确
- [ ] 测试滚动效果
- [ ] 检查控制台无错误

### ⚙️ 可选优化
- [ ] 添加 favicon.ico
- [ ] 配置 SEO meta 标签
- [ ] 添加 Open Graph 图片
- [ ] 集成 Google Analytics
- [ ] 添加表单提交功能
- [ ] 配置自定义域名

---

## 部署方案对比

| 平台 | 速度 | 免费额度 | 自定义域名 | SSL | CDN | 推荐场景 |
|------|------|----------|------------|-----|-----|----------|
| **GitHub Pages** | ⭐⭐⭐ | 无限 | ✅ | ✅ | ✅ | 开源项目 |
| **Vercel** | ⭐⭐⭐⭐⭐ | 100GB/月 | ✅ | ✅ | ✅ | 商业项目 |
| **Netlify** | ⭐⭐⭐⭐ | 100GB/月 | ✅ | ✅ | ✅ | 需要表单 |
| **Cloudflare Pages** | ⭐⭐⭐⭐⭐ | 无限 | ✅ | ✅ | ✅ | 高流量 |

---

## 详细部署步骤

### 1️⃣ GitHub Pages（推荐新手）

#### 方法 A：使用脚本（最快）
```bash
# Windows
deploy.bat

# macOS/Linux
chmod +x deploy.sh && ./deploy.sh
```

#### 方法 B：手动部署
```bash
# 1. 初始化仓库
git init
git add .
git commit -m "🚀 Initial commit"

# 2. 创建 GitHub 仓库
gh repo create ai-strategy-showcase --public --source=. --remote=origin

# 3. 推送代码
git branch -M main
git push -u origin main

# 4. 启用 GitHub Pages
gh repo edit --enable-pages --pages-branch main

# 5. 访问 https://<username>.github.io/ai-strategy-showcase/
```

**⏰ 等待时间**：1-2 分钟

---

### 2️⃣ Vercel（推荐商业）

#### 方法 A：CLI 部署
```bash
# 安装 CLI
npm i -g vercel

# 部署
vercel --prod
```

#### 方法 B：Git 集成
1. 推送到 GitHub
2. 访问 https://vercel.com/new
3. 选择仓库
4. 点击 Deploy

**⏰ 等待时间**：30 秒

---

### 3️⃣ Netlify（推荐表单）

#### 方法 A：拖拽部署
1. 访问 https://app.netlify.com/drop
2. 拖拽整个文件夹
3. 完成！

#### 方法 B：CLI 部署
```bash
# 安装 CLI
npm i -g netlify-cli

# 部署
netlify deploy --prod
```

**⏰ 等待时间**：30 秒

---

### 4️⃣ Cloudflare Pages（推荐高流量）

1. 推送到 GitHub
2. 访问 https://pages.cloudflare.com/
3. 连接 Git 仓库
4. 构建设置：
   - **Build command**：留空
   - **Build output directory**：`/`
5. 点击 Save and Deploy

**⏰ 等待时间**：1 分钟

---

## 自定义域名配置

### GitHub Pages
```bash
# 1. 添加 CNAME 文件
echo "ai2026.com" > CNAME
git add CNAME && git commit -m "Add custom domain"
git push

# 2. 配置 DNS（在域名商后台）
# A 记录：
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# 或 CNAME 记录：
<username>.github.io
```

### Vercel / Netlify / Cloudflare
在控制台 Settings > Domains 添加域名，按提示配置 DNS

---

## 性能优化建议

### 1. 启用 Gzip 压缩
**Vercel/Netlify**：自动启用  
**GitHub Pages**：自动启用  
**自建服务器**：配置 nginx/apache

### 2. 添加 Service Worker
```javascript
// sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js'
      ]);
    })
  );
});
```

### 3. 启用 HTTP/2
**所有推荐平台默认支持**

### 4. 优化字体加载
```css
/* 在 style.css 添加 */
@font-face {
  font-family: 'Inter';
  font-display: swap; /* 防止字体闪烁 */
  src: url('fonts/inter.woff2') format('woff2');
}
```

---

## SEO 优化清单

### 必须添加的 meta 标签
```html
<!-- 在 index.html <head> 添加 -->

<!-- 基础 SEO -->
<meta name="description" content="企业 AI 全员落地 2026 战略方案，80%日活率，27%效率提升，32.5x ROI">
<meta name="keywords" content="AI战略,企业AI,AI落地,数字化转型,人工智能">
<meta name="author" content="AI 2026">

<!-- Open Graph (社交分享) -->
<meta property="og:title" content="企业 AI 全员落地 2026 战略方案">
<meta property="og:description" content="从战略到执行的完整 AI 落地方案">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="企业 AI 全员落地 2026">
<meta name="twitter:description" content="80%日活率 | 27%效率提升 | 32.5x ROI">
<meta name="twitter:image" content="https://yourdomain.com/twitter-card.jpg">

<!-- Favicon -->
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

---

## 监控与分析

### Google Analytics
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

### Cloudflare Web Analytics
在 Cloudflare 控制台启用，自动注入

---

## 故障排查

### 问题：样式加载失败
**原因**：CDN 资源被墙或网络问题  
**解决**：下载字体/图标到本地，修改引用路径

### 问题：GitHub Pages 404
**原因**：仓库设置错误或未等待部署完成  
**解决**：
1. 检查 Settings > Pages 是否启用
2. 确认分支为 `main`
3. 等待 1-2 分钟重试

### 问题：动画不流畅
**原因**：浏览器性能不足或动画过多  
**解决**：减少 blob 数量，调整动画时长

### 问题：移动端布局错乱
**原因**：未测试响应式  
**解决**：用 Chrome DevTools 测试各种屏幕尺寸

---

## 持续集成 (CI/CD)

### GitHub Actions（自动部署）
创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 总结

✅ **最快部署**：Netlify 拖拽（1 分钟）  
✅ **最稳定**：Vercel（商业推荐）  
✅ **完全免费**：GitHub Pages + Cloudflare Pages  
✅ **最佳 SEO**：配置自定义域名 + HTTPS  

---

**🎉 完成部署后，记得分享链接！**
