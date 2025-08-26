# 📌 插件功能

## 1、录制功能

### 智能捕获元素

::: details 功能介绍

智能读取点击DOM元素的内容

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191139258.png" style="zoom:50%;" />


:::

### 跨标签页录制

::: details 功能介绍

无缝记录多个标签页之间的操作流程

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191004519.png" style="zoom:50%;" />


:::

### github 图床 [v2.0.0](./6loading.md#v2.0.0)

::: details 功能介绍

支持自定义github图床，所有截图都传到自己的github仓库，保证隐私

![](https://raw.gitmirror.com/TWO-ICE/image/main/week/202508221430140.png)

1. 在 GitHub 创建一个私有仓库用于存储图片
2. 生成 Personal Access Token（需要 repo 权限）：
   GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
3. 图片将按日期自动分层存储，便于管理
4. 使用 jsDelivr CDN 加速访问：`https://fastly.jsdelivr.net/gh/用户名/仓库名@分支/路径`
5. 配置完成后，导出时图片将自动上传并生成 CDN 链接

:::

## 2、美化功能

### 编辑步骤标题

::: details 功能介绍

支持手动编辑每个步骤的标题描述

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191330095.png" style="zoom:50%;" />

::: tip 小技巧

标题第一行是默认的markdown的二级标题，换行就支持markdown的其他语法啦

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191338100.png" style="zoom:25%;" />

:::

### 截图编辑器（美化）[v2.1.0](./6loading.md#v2.1.0)

::: details 功能介绍

彻底重构截图编辑器，更加现代化

<center> <img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251031516.png" style="zoom:33%;" /></center>

:::

### 点击元素高亮 [v2.0.0](./6loading.md#v2.0.0)

::: details 功能介绍

开启点击`元素高亮`，录制时自动识别网页 DOM 元素，点击即可实现局部高亮

![](https://pic.fengsutb.com/pic/25822142052.png)


:::

### 拖拽排序

::: details 功能介绍

预判区域还可以拖拽调整每个步骤的顺序

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191341125.png" style="zoom:50%;" />

:::

### 隐藏滚动条

::: details 功能介绍

截图时自动隐藏页面滚动条，美化截图

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191142819.png" style="zoom:50%;" />


:::

## 3、导出功能

### 导出完整zip包

::: details 功能介绍

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508191015339.png" style="zoom:50%;" />

:::

### 复制/导出完整 markdown 文档 [v2.0.0](./6loading.md#v2.0.0)

::: details 功能介绍

配置并开启github图床后，可以直接复制/导出完整的markdown文档

<img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508221749887.png" style="zoom:25%;" />


:::

### 导出文档长图 [v2.0.0](./6loading.md#v2.0.0)

::: details 功能介绍

![](https://raw.gitmirror.com/TWO-ICE/image/main/week/202508221715506.png)

:::

### html格式[v2.1.0](./6loading.md#v2.1.0)

::: details 功能介绍

<center><img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251038898.png" style="zoom:25%;" /></center>

<center><img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251043348.png" style="zoom:33%;" /></center>

:::

### PDF格式[v2.1.0](./6loading.md#v2.1.0)

::: details 功能介绍

<center><img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251040731.png" style="zoom:25%;" /></center>

<center> <img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251042085.png" style="zoom:33%;" /></center>

:::

### 导出word格式[v2.1.0](./6loading.md#v2.1.0)

::: details 功能介绍

<center><img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251041998.png" style="zoom:25%;" /></center>

<center><img src="https://raw.gitmirror.com/TWO-ICE/image/main/week/202508251045945.png" style="zoom:33%;" /></center>

:::
