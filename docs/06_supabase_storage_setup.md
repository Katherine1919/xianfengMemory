# Supabase Storage 配置说明

本项目已为“上传记忆”里的照片、视频、音频接入 Supabase Storage。当前仍是 HTML Demo：文字、审核状态、公开范围继续保存在 `localStorage`，媒体文件在配置完成后上传到 Supabase Storage。

## 1. 创建 Bucket

在 Supabase Dashboard 创建：

- Bucket name: `xianfeng-memory-media`
- 建议 Demo 阶段设为 Public bucket

如果不设为 Public bucket，页面需要改成 signed URL 模式；当前代码默认用 public URL 展示媒体。

## 2. 配置前端

编辑 `js/supabase-config.js`：

```js
window.XIANFENG_SUPABASE_CONFIG = {
  enabled: true,
  url: "https://你的项目.ref.supabase.co",
  anonKey: "你的 Supabase anon key",
  storageBucket: "xianfeng-memory-media",
  publicBucket: true
};
```

不要填写 service role key。浏览器端只能放 anon key，权限必须靠 Supabase RLS / Storage policy 控制。

## 3. Demo 用 Storage Policy

如果需要让未登录访客在静态 Demo 里上传，请在 Supabase SQL Editor 执行类似策略：

```sql
create policy "Public demo uploads for xianfeng memory"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'xianfeng-memory-media'
  and (storage.foldername(name))[1] = 'submissions'
);
```

如果 bucket 不是 Public，还需要读策略：

```sql
create policy "Public demo reads for xianfeng memory"
on storage.objects
for select
to anon
using (
  bucket_id = 'xianfeng-memory-media'
);
```

Demo 允许匿名上传只适合路演或内测。正式版应改成登录用户上传，并用审核表控制公开。

## 4. 当前代码行为

- 未配置 Supabase：媒体小于 4MB 时转为本地 `dataUrl`，随提交保存在浏览器。
- 已配置 Supabase：媒体小于 6MB 时上传到 Storage，并把 `publicUrl` 写入故事附件。
- Supabase 上传失败且文件总量小于 4MB：自动回退本地保存，并记录 `uploadError`。
- 超过 6MB 的视频：当前不上传，后续应接 TUS 断点续传。

## 5. 正式版还缺什么

- Supabase Database：保存故事正文、审核状态、公开范围、来源说明。
- Auth：区分居民、学生、管理员。
- Storage signed URL：用于非公开媒体。
- 删除/撤回机制：拒绝或删除故事时同步删除 Storage 文件。
- 真实审核后台：不要用前端演示密码。
