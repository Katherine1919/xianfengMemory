import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";

const projectRoot = "/Users/Zhuanz/Projects/Codex/archive/old-codex-projects/new-project/xianfeng-memory-demo";
const dataFile = path.join(projectRoot, "js/data.js");
const code = fs.readFileSync(dataFile, "utf8");

const context = {
  console
};

vm.createContext(context);
vm.runInContext(
  `${code}
globalThis.__XF_DATA__ = {
  TIMELINE_ITEMS,
  STORIES,
  STORY_SOURCE_IMAGES
};`,
  context,
  { filename: dataFile }
);

const { TIMELINE_ITEMS, STORIES, STORY_SOURCE_IMAGES } = context.__XF_DATA__;
const timelineToday = TIMELINE_ITEMS.find((item) => item.id === "tl-today");
const story016 = STORIES.find((item) => item.id === "story-016");
const story029 = STORIES.find((item) => item.id === "story-029");
const story030 = STORIES.find((item) => item.id === "story-030");
const growthImage = "assets/images/contemporary-growth-space.png";
const artlifeImage = "assets/images/contemporary-artlife-13.png";
const elderImage = "assets/images/contemporary-elder-14.png";

assert.ok(timelineToday, "缺少 tl-today 数据");
assert.ok(story016, "缺少 story-016 数据");
assert.ok(story029, "缺少 story-029 数据");
assert.ok(story030, "缺少 story-030 数据");

assert.equal(
  timelineToday.detailImage,
  "",
  "当代首页不应该显示主图"
);

assert.equal(
  STORY_SOURCE_IMAGES["story-016"],
  growthImage,
  "story-016 不是成长工场对应图片"
);

assert.equal(
  STORY_SOURCE_IMAGES["story-029"],
  artlifeImage,
  "story-029 不是艺文生活对应图片"
);

assert.equal(
  STORY_SOURCE_IMAGES["story-030"],
  elderImage,
  "story-030 不是乐龄邻里对应图片"
);

const blockedWords = ["校园新生", "旧址"];
for (const word of blockedWords) {
  assert.ok(
    !JSON.stringify(timelineToday).includes(word),
    `tl-today 里还包含禁用词：${word}`
  );
  assert.ok(
    !JSON.stringify(story016).includes(word),
    `story-016 里还包含禁用词：${word}`
  );
  assert.ok(
    !JSON.stringify(story029).includes(word),
    `story-029 里还包含禁用词：${word}`
  );
  assert.ok(
    !JSON.stringify(story030).includes(word),
    `story-030 里还包含禁用词：${word}`
  );
}

for (const story of [story016, story029, story030]) {
  assert.equal(story.period, "当代", `${story.id} 应该是纯当代故事`);
  assert.ok(
    String(story.sourceFile).includes("拾光源点•先锋社区 1.0.pdf"),
    `${story.id} 的来源需要统一来自指定 PDF`
  );
}

assert.deepEqual(
  Array.from(timelineToday.relatedStoryIds),
  ["story-016", "story-029", "story-030"],
  "当代首页预览故事不是成长工场/艺文生活/乐龄邻里三条"
);

for (const expectedTag of ["成长工场", "艺文生活", "乐龄邻里"]) {
  assert.ok(
    JSON.stringify(timelineToday).includes(expectedTag),
    `tl-today 里缺少关键当代标签：${expectedTag}`
  );
}

console.log("contemporary-data-check passed");
