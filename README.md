# 拾光源点·先锋社区记忆智能体

一个面向“展厅互动屏 + 学生比赛路演 + 社区试点前期展示”的静态 HTML Demo，用本地 mock data 和 localStorage 演示广州市番禺区市桥先锋社区的 AI 社区记忆系统。

## 项目简介

这个 Demo 展示一个未来可升级的“新岭南数字街区博物馆”：用地图、时间轴、故事库、上传审核、模拟 AI 问答和儿童任务，把先锋大街、前锋大街、市桥老城的历史记忆重新点亮。

Demo 不接后端、不接数据库、不调用真实 AI API、不使用地图 API。所有交互都在浏览器本地完成。

## 技术栈

- HTML
- CSS
- Vanilla JavaScript
- 本地 mock data
- localStorage

## 文件结构

```text
xianfeng-memory-demo/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── app.js
├── assets/
│   └── images/
└── README.md
```

## 如何本地运行

直接打开 `index.html` 即可运行。

也可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 如何部署

### Vercel

1. 新建 Vercel 项目。
2. 导入这个静态目录。
3. Framework Preset 选择 Other。
4. Build Command 留空。
5. Output Directory 留空或使用根目录。

### Netlify

1. 新建 Netlify Site。
2. 上传或连接仓库。
3. Build command 留空。
4. Publish directory 指向 `xianfeng-memory-demo`。

### GitHub Pages

1. 把 `xianfeng-memory-demo` 放入仓库。
2. 在 Settings -> Pages 选择部署分支。
3. 如果仓库根目录就是本项目，选择 root。
4. 如果放在子目录，可用 GitHub Actions 或把内容移动到 Pages 发布目录。

## Demo 功能清单

- 首页强视觉 Hero 和项目能力概览
- 手绘风社区记忆地图
- 10 个可点击记忆点
- 6 个历史阶段时间轴
- 故事库分类筛选
- 故事详情弹窗
- 上传记忆表单和中文校验
- localStorage 本地保存
- Demo 管理审核后台
- 通过、拒绝、删除提交记忆
- JSON / CSV 导出
- 拾光仔模拟 AI 问答
- 儿童记忆通行证任务、积分、印章
- Demo 数据重置
- 手机、笔记本、展厅大屏响应式布局

## 3 分钟演示路径

1. 打开首页，看到“把市桥的记忆，重新点亮”。
2. 点击“开始探索地图”。
3. 在地图上点击“蚝壳墙”或“先锋小学”。
4. 查看地点详情。
5. 点击“查看相关故事”。
6. 进入故事库，看到相关故事。
7. 进入“上传记忆”。
8. 填写一条居民记忆并提交。
9. 进入“管理审核”。
10. 输入密码 `123456`。
11. 在待审核中看到刚提交的记忆。
12. 点击“通过”。
13. 回到故事库，看到刚通过的记忆出现。
14. 进入“拾光仔”。
15. 点击一个建议问题，看到模拟 AI 回答。
16. 进入“儿童任务”。
17. 完成一个任务，积分增加。
18. 进入“关于项目”，展示未来路线图。

## 管理员 Demo 密码

```text
123456
```

## localStorage 数据说明

Demo 使用以下 localStorage keys：

- `xianfeng_submitted_memories`：待审核用户提交记忆
- `xianfeng_approved_memories`：已通过用户提交记忆
- `xianfeng_rejected_memories`：已拒绝用户提交记忆
- `xianfeng_quest_progress`：儿童任务完成记录
- `xianfeng_demo_points`：儿童任务积分

如果 localStorage 为空，页面会使用 seed data 正常运行。如果 localStorage 数据损坏，脚本会自动恢复为空数组，避免页面崩溃。

## 后续升级路线

- React Web App
- Supabase 数据库
- Supabase Storage 文件存储
- 真实 OpenAI-compatible AI API
- 登录与角色权限
- 真实审核流程
- 多语言支持
- 真实地图图层
- 口述历史录音
- Vector Search / RAG
- 展厅互动屏适配
- 移动端 App
- AR 老街导览

## 已知限制

- Demo 版不上传真实图片、音频或视频。
- Demo 版不做真实账号登录与权限安全。
- Demo 版 AI 问答来自 `js/data.js` 的本地 mock 数据。
- Demo 版地图为 CSS 手绘风面板，不代表真实地理坐标。
- localStorage 只保存在当前浏览器，清理浏览器数据后会丢失。
