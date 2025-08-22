# 📝 更新日志

## v2.0.0

#### 1、新增`点击元素`高亮显示

::: details 功能介绍

开启点击`元素高亮`，录制时自动识别网页 DOM 元素，点击即可实现局部高亮

![](https://pic.fengsutb.com/pic/25822142052.png)

:::

#### 2、新增 github 图床

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

#### 3、新增复制 markdown 全文

::: details 功能介绍

配置图床后，可一件复制完整markdown文档

![](https://raw.gitmirror.com/TWO-ICE/image/main/week/202508221438321.png)

:::

#### 4、新增导出文档长图

::: details 功能介绍

支持导出文档长图，便于分享

![](https://raw.gitmirror.com/TWO-ICE/image/main/week/202508221439386.png)


:::

