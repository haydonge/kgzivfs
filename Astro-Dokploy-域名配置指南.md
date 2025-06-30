# Astro 项目在 Dokploy 上的自定义域名配置指南

## 问题描述

当 Astro 项目部署到 Dokploy 平台并配置自定义域名时，经常会遇到以下错误：

```
Blocked request. This host ("your-domain.com") is not allowed.
To allow this host, add "your-domain.com" to `preview.allowedHosts` in vite.config.js.
```

## 解决方案

通过以下三步配置，可以彻底解决自定义域名访问问题：

### 步骤 1：创建 `vite.config.js` 文件

在项目根目录创建 `vite.config.js` 文件（注意：必须是 `.js` 扩展名，不是 `.mjs`）：

```js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: ['your-domain.com'] // 替换为你的实际域名
  }
});
```

### 步骤 2：修改 `package.json` 脚本

修改 `package.json` 中的 `start` 和 `preview` 脚本，添加 `--allowed-hosts` 参数：

```json
{
  "scripts": {
    "dev": "astro dev --host 0.0.0.0",
    "start": "astro preview --host 0.0.0.0 --port 3000 --allowed-hosts your-domain.com",
    "build": "astro build",
    "preview": "astro preview --host 0.0.0.0 --allowed-hosts your-domain.com",
    "astro": "astro"
  }
}
```

### 步骤 3：修改 `astro.config.mjs`

在 `astro.config.mjs` 中添加 `vite` 配置块：

```js
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  
  vite: {
    preview: {
      host: true,
      port: 3000,
      allowedHosts: ['your-domain.com'] // 替换为你的实际域名
    }
  },

  integrations: [
    starlight({
      // 你的 Starlight 配置
    })
  ]
});
```

## 配置说明

### 关键要点

1. **文件扩展名**：必须创建 `vite.config.js`（不是 `.mjs`），因为 Dokploy 的错误信息明确要求 `.js` 文件。

2. **启动命令**：Dokploy 通常使用 `npm start` 启动服务，确保修改 `start` 脚本。

3. **监听地址**：使用 `host: true` 而不是 `host: '0.0.0.0'`，这样更通用且兼容性更好。

4. **多重保障**：同时配置命令行参数和配置文件，确保在不同环境下都能正常工作。

### 域名配置

将配置中的 `your-domain.com` 替换为你的实际域名，例如：

```js
allowedHosts: ['example.com', 'www.example.com']
```

如果有多个域名，可以添加到数组中：

```js
allowedHosts: ['domain1.com', 'domain2.com', 'subdomain.domain1.com']
```

## 部署流程

1. 完成上述三步配置
2. 提交代码到 Git 仓库：
   ```bash
   git add .
   git commit -m "Fix: Add domain allowlist for Dokploy deployment"
   git push
   ```
3. 在 Dokploy 中重新部署项目
4. 配置自定义域名并测试访问

## 常见问题

### Q: 为什么需要三种配置方式？

A: 因为不同的部署环境可能读取不同的配置文件：
- `vite.config.js`：Vite 原生配置文件
- `package.json` 脚本：命令行参数配置
- `astro.config.mjs`：Astro 内联 Vite 配置

### Q: 本地开发是否受影响？

A: 不会。这些配置只影响 `preview` 模式，不影响本地 `dev` 开发环境。

### Q: 能否只配置其中一种？

A: 建议全部配置，因为不同的部署平台可能有不同的读取优先级。

## 适用范围

此解决方案适用于：
- 所有 Astro 项目
- 使用 Dokploy 部署平台
- 需要配置自定义域名的场景
- 基于 Vite 的其他静态站点生成器

## 总结

通过创建 `vite.config.js` 文件、修改 `package.json` 脚本和 `astro.config.mjs` 配置，可以彻底解决 Astro 项目在 Dokploy 上的自定义域名访问问题。这套配置方案具有良好的兼容性和可移植性，适用于所有类似的 Astro 项目部署需求。
