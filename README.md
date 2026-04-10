# 维护说明

这是[阿木](hushway.github.io/amu-blog)的博客，这份说明给共同维护者使用，只在 GitHub 网页就能完成内容更新（复杂的更新pull到本地再push更方便）。

---

## 1) 如何新增一篇文章

1. 打开仓库，进入 [content/](content/)
2. 进入对应分类目录（例如 [content/02-阿木与狗主/](content/02-%E9%98%BF%E6%9C%A8%E4%B8%8E%E7%8B%97%E4%B8%BB/)）
3. 点击 **Add file** → **Upload files**
4. 直接上传准备好的 `.md` 文件（例如：`新的故事.md`）
5. 提交

---

## 2) 如何编辑已有文章

1. 进入 [content/](content/) 并打开要修改的 `.md` 文件
2. 点击右上角铅笔按钮 **Edit this file** 修改内容
3. 提交

---

## 3) 如何上传照片/视频，并让它在相册中显示

相册目录： [content/照片与视频/](content/%E7%85%A7%E7%89%87%E4%B8%8E%E8%A7%86%E9%A2%91/)

### 第一步：上传照片/视频文件

1. 进入相册目录 [content/照片与视频/](content/%E7%85%A7%E7%89%87%E4%B8%8E%E8%A7%86%E9%A2%91/)
2. 点击 **Add file** → **Upload files**
3. 拖拽上传图片或视频
4. 提交

### 第二步：让它显示在相册页面

1. 打开 [content/照片与视频/album-data.js](content/%E7%85%A7%E7%89%87%E4%B8%8E%E8%A7%86%E9%A2%91/album-data.js)
2. 点击 **Edit this file**
3. 在 `photos` 或 `video` 数组里新增一行

图片示例：

```javascript
{ src: "新照片文件名.jpg", title: "新照片标题" },
```

视频示例：

```javascript
{ src: "新视频文件名.mp4", title: "新视频标题", type: "video" },
```

4. 提交

---

## 发布说明

- 每次提交后，网站会自动发布
- 一般几分钟内可见（稍等 3–5 分钟后刷新）

---

## 常用地址
- 博客地址：hushway.github.io/amu-blog
- 首页目录： [content/index.md](content/index.md)
- 相册数据： [content/照片与视频/album-data.js](content/%E7%85%A7%E7%89%87%E4%B8%8E%E8%A7%86%E9%A2%91/album-data.js)
