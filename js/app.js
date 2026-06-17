const STORAGE_KEYS = {
  submitted: "xianfeng_submitted_memories",
  approved: "xianfeng_approved_memories",
  rejected: "xianfeng_rejected_memories",
  questProgress: "xianfeng_quest_progress",
  demoPoints: "xianfeng_demo_points"
};

const LOCAL_MEDIA_LIMIT_BYTES = 4 * 1024 * 1024;
const SUPABASE_MEDIA_LIMIT_BYTES = 6 * 1024 * 1024;
const MEDIA_INPUTS = [
  { id: "photoUpload", type: "photo", label: "照片" },
  { id: "videoUpload", type: "video", label: "视频" },
  { id: "audioUpload", type: "audio", label: "音频" }
];

let supabaseClient = null;

const state = {
  currentSection: "home",
  homePeriodId: "tl-song",
  storyFilter: "全部",
  placeFilter: null,
  periodFilter: "全部",
  credibilityFilter: "全部",
  storySearch: "",
  adminUnlocked: false,
  adminTab: "pending",
  questProgress: [],
  demoPoints: 0
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  initSupabaseClient();
  initNavigation();
  initHomeTimeline();
  populatePlaceSelect();
  renderMapNodes();
  renderTimeline();
  renderStories("全部");
  initSubmitForm();
  initAgentChat();
  loadQuestProgress();
  renderQuests();
  initAdminEvents();
  initModalEvents();
  resetBrokenStorage();
}

function initHomeTimeline() {
  const rail = document.getElementById("homePeriodRail");
  if (!rail) return;

  rail.querySelectorAll("[data-home-period]").forEach((button) => {
    button.addEventListener("click", () => renderHomePeriod(button.dataset.homePeriod));
  });

  rail.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const buttons = [...rail.querySelectorAll("[data-home-period]")];
    const currentIndex = buttons.findIndex((button) => button.dataset.homePeriod === state.homePeriodId);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const nextButton = buttons[(currentIndex + step + buttons.length) % buttons.length];
    nextButton.focus();
    renderHomePeriod(nextButton.dataset.homePeriod);
  });

  document.getElementById("homeViewStories")?.addEventListener("click", () => {
    const item = TIMELINE_ITEMS.find((entry) => entry.id === state.homePeriodId);
    if (item) filterStoriesByPlace(item.placeId);
  });

  document.getElementById("homeViewMap")?.addEventListener("click", () => {
    const item = TIMELINE_ITEMS.find((entry) => entry.id === state.homePeriodId);
    if (!item) return;
    showSection("map");
    openPlaceDetail(item.placeId);
  });

  renderHomePeriod(state.homePeriodId);
}

function renderHomePeriod(periodId) {
  const item = TIMELINE_ITEMS.find((entry) => entry.id === periodId && entry.period !== "未来路线");
  const detail = document.getElementById("homePeriodDetail");
  if (!item || !detail) return;

  state.homePeriodId = item.id;
  const visiblePeriods = TIMELINE_ITEMS.filter((entry) => entry.period !== "未来路线").slice(0, 6);
  const periodIndex = visiblePeriods.findIndex((entry) => entry.id === item.id);

  document.querySelectorAll("[data-home-period]").forEach((button) => {
    const isActive = button.dataset.homePeriod === item.id;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  document.getElementById("homePeriodEyebrow").textContent = `时期 ${String(periodIndex + 1).padStart(2, "0")} · ${item.period}`;
  document.getElementById("homePeriodTitle").textContent = `${item.period} · ${item.title}`;
  document.getElementById("homePeriodDescription").textContent = item.description;
  document.getElementById("homePeriodTags").innerHTML = item.tags.slice(0, 3).map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
  document.getElementById("homePeriodSource").textContent = item.needsVerification
    ? "线索状态：该时期仍有待补证内容。"
    : "线索状态：已整理为社区记忆展示线索。";

  renderHomeStoryPreview(item);
  detail.classList.remove("is-switching");
  void detail.offsetWidth;
  detail.classList.add("is-switching");
}

function renderHomeStoryPreview(item) {
  const preview = document.getElementById("homeStoryPreview");
  if (!preview) return;

  const relatedStories = item.relatedStoryIds
    .map((storyId) => STORIES.find((story) => story.id === storyId))
    .filter(Boolean)
    .slice(0, 3);

  const storyCards = relatedStories.map((story, index) => `
    <button class="home-story-card" type="button" data-home-story-id="${story.id}">
      <span>档案片段 ${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHTML(story.title)}</strong>
      <p>${escapeHTML(story.excerpt)}</p>
      <em>打开档案 ↗</em>
    </button>
  `);

  if (item.detailImage) {
    storyCards.unshift(`
      <article class="home-story-card home-period-image-card">
        <img src="${escapeHTML(item.detailImage)}" alt="${escapeHTML(item.title)}" loading="lazy">
        <span>${escapeHTML(item.detailImageLabel || "当代运营图像")}</span>
      </article>
    `);
  }

  if (storyCards.length < 2) {
    storyCards.push(`
      <article class="home-story-card home-story-clue">
        <span>线索征集 0${storyCards.length + 1}</span>
        <strong>${escapeHTML(item.period)}时期仍待补充</strong>
        <p>${escapeHTML(item.clue)}</p>
        <em>欢迎居民补充照片、口述与地点证据</em>
      </article>
    `);
  }

  preview.innerHTML = storyCards.join("");
  preview.querySelectorAll("[data-home-story-id]").forEach((button) => {
    button.addEventListener("click", () => openStoryDetail(button.dataset.homeStoryId));
  });
}

function initNavigation() {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => showSection(button.dataset.section));
  });
}

function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  document.querySelectorAll(".page-section").forEach((item) => {
    item.classList.toggle("is-active", item.id === sectionId);
  });
  document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.section === sectionId);
  });

  state.currentSection = sectionId;
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (sectionId === "stories") renderStories(state.storyFilter);
  if (sectionId === "admin" && state.adminUnlocked) renderAdminPanel();
  if (sectionId === "passport") renderQuests();
}

function renderMapNodes() {
  const mapNodes = document.getElementById("mapNodes");
  if (!mapNodes) return;

  mapNodes.innerHTML = getVisiblePlaces().map((place) => `
    <button
      class="memory-point"
      type="button"
      data-place-id="${place.id}"
      style="left: ${place.x}%; top: ${place.y}%"
      aria-label="查看${place.name}记忆点"
    >
      <span class="point-core"></span>
      <span class="point-label">${place.name}</span>
    </button>
  `).join("");

  mapNodes.querySelectorAll(".memory-point").forEach((button) => {
    button.addEventListener("click", () => openPlaceDetail(button.dataset.placeId));
  });
}

function openPlaceDetail(placeId) {
  const place = PLACES.find((item) => item.id === placeId);
  const detail = document.getElementById("placeDetail");
  if (!place || !detail) return;

  detail.innerHTML = `
    <p class="kicker">Place Detail</p>
    <div class="place-detail-head">
      <h3>${escapeHTML(place.name)}</h3>
      <p>${escapeHTML(place.intro)}</p>
    </div>
    <dl class="detail-list place-detail-list">
      <div class="place-detail-row">
        <dt>所属历史阶段</dt>
        <dd class="place-period-list">${renderPlacePeriodLines(place.period)}</dd>
      </div>
      <div class="place-detail-row">
        <dt>记忆类型</dt>
        <dd>${escapeHTML(place.type)}</dd>
      </div>
      <div class="place-detail-row">
        <dt>相关故事数量</dt>
        <dd>${place.storyCount} 条</dd>
      </div>
    </dl>
    <div class="tag-row place-detail-tags">
      ${place.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <div class="place-detail-actions">
      <button class="btn btn-primary" type="button" id="viewPlaceStories">查看相关故事</button>
    </div>
  `;

  document.querySelectorAll(".memory-point").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.placeId === placeId);
  });

  document.getElementById("viewPlaceStories").addEventListener("click", () => {
    filterStoriesByPlace(placeId);
  });
}

function renderPlacePeriodLines(period = "") {
  const periods = String(period)
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean);
  if (!periods.length) return "待补充";
  return periods.map((item) => `<span>${escapeHTML(item)}</span>`).join("");
}

function filterStoriesByPlace(placeId) {
  const place = PLACES.find((item) => item.id === placeId);
  if (!place) return;

  state.placeFilter = placeId;
  state.storyFilter = "全部";
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === "全部");
  });
  showSection("stories");
  renderStories("全部");
  showToast(`已筛选：${place.name}的相关故事`, "success");
}

function renderTimeline() {
  const timelineList = document.getElementById("timelineList");
  if (!timelineList) return;

  timelineList.innerHTML = TIMELINE_ITEMS.map((item, index) => `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
      <div class="timeline-content">
        <div class="timeline-card-head">
          <p class="kicker">${escapeHTML(item.theme)}</p>
          <span class="timeline-era">${escapeHTML(item.period)}</span>
        </div>
        <h3>${escapeHTML(item.title)}</h3>
        <p class="timeline-clue">${escapeHTML(item.clue)}</p>
        <div class="timeline-meta">
          <span>${escapeHTML(item.needsVerification ? "待补证线索" : "已整理线索")}</span>
          <span>${escapeHTML(item.relatedStoryIds.length)} 条相关故事</span>
        </div>
        <div class="tag-row timeline-tags">
          ${item.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
        <div class="timeline-card-footer">
          <span>${escapeHTML(item.needsVerification ? "线索状态：仍需继续补证" : "线索状态：已整理为展示线索")}</span>
          <button class="btn btn-secondary" type="button" data-timeline-place="${item.placeId}">查看相关故事</button>
        </div>
      </div>
    </article>
  `).join("");

  timelineList.querySelectorAll("[data-timeline-place]").forEach((button) => {
    button.addEventListener("click", () => filterStoriesByPlace(button.dataset.timelinePlace));
  });
}

function renderStories(filter = "全部") {
  state.storyFilter = filter;
  const storyGrid = document.getElementById("storyGrid");
  const storyCountText = document.getElementById("storyCountText");
  const activeStoryFilter = document.getElementById("activeStoryFilter");
  if (!storyGrid) return;

  document.getElementById("storyArchiveTools")?.remove();

  const publicStories = getPublicStories();
  let visibleStories = [...publicStories];

  if (filter !== "全部") {
    visibleStories = visibleStories.filter((story) => story.category === filter);
  }

  if (state.placeFilter) {
    visibleStories = visibleStories.filter((story) => storyMatchesPlaceFilter(story, state.placeFilter));
  }

  if (state.periodFilter !== "全部") {
    visibleStories = visibleStories.filter((story) => story.period === state.periodFilter || story.timeLabel === state.periodFilter);
  }

  if (state.credibilityFilter !== "全部") {
    visibleStories = visibleStories.filter((story) => story.credibility === state.credibilityFilter);
  }

  if (state.storySearch) {
    const keyword = state.storySearch.toLowerCase();
    visibleStories = visibleStories.filter((story) => getStorySearchText(story).includes(keyword));
  }

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === filter);
    chip.onclick = () => {
      renderStories(chip.dataset.category);
    };
  });
  syncStoryControlValues();

  if (storyCountText) {
    storyCountText.textContent = `共找到 ${visibleStories.length} 条记忆档案`;
  }

  if (activeStoryFilter) {
    const activeLabels = getActiveStoryFilterLabels();
    activeStoryFilter.hidden = activeLabels.length === 0;
    activeStoryFilter.innerHTML = activeLabels.length ? `
      <span>当前筛选：${activeLabels.map(escapeHTML).join(" / ")}</span>
      <button type="button" id="clearPlaceFilter">清除筛选</button>
    ` : "";
    const clearButton = document.getElementById("clearPlaceFilter");
    if (clearButton) {
      clearButton.addEventListener("click", clearStoryFilters);
    }
  }

  if (!visibleStories.length) {
    storyGrid.innerHTML = `<div class="empty-state">暂时没有符合条件的记忆档案。可以清除筛选后再看。</div>`;
    return;
  }

  storyGrid.innerHTML = visibleStories.map((story) => `
    <article class="story-card archive-card">
      ${renderStoryCover(story, "story-image", story.placeName)}
      <div class="story-body">
        <div class="story-meta">
          <span class="badge blue">${escapeHTML(story.category)}</span>
          <span class="badge green">${escapeHTML(statusText(story.reviewStatus))}</span>
          <span class="badge gold">${escapeHTML(story.credibility)}</span>
          ${story.needsVerification ? `<span class="badge red">需人工核对</span>` : ""}
        </div>
        <h3>${escapeHTML(story.title)}</h3>
        <p class="story-subtitle">${escapeHTML(story.subtitle)}</p>
        <p>${escapeHTML(story.excerpt)}</p>
        <dl class="story-facts">
          <div><dt>地点</dt><dd>${escapeHTML(story.placeName)}</dd></div>
          <div><dt>地址</dt><dd>${escapeHTML(story.address)}</dd></div>
          <div><dt>时间</dt><dd>${escapeHTML(story.timeLabel)}</dd></div>
          <div><dt>来源</dt><dd>${escapeHTML(story.sourceType)}</dd></div>
        </dl>
        <div class="tag-row">
          ${story.tags.slice(0, 5).map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
        <button class="btn btn-secondary story-open-btn" type="button" data-story-id="${story.id}">打开档案</button>
      </div>
    </article>
  `).join("");

  storyGrid.querySelectorAll("[data-story-id]").forEach((button) => {
    button.addEventListener("click", () => openStoryDetail(button.dataset.storyId));
  });
}

function openStoryDetail(storyId) {
  const story = getPublicStories().find((item) => item.id === storyId);
  const modal = document.getElementById("storyModal");
  const modalContent = document.getElementById("modalContent");
  if (!story || !modal || !modalContent) return;
  const mapPlaceId = resolveMapPlaceId(story);

  modalContent.innerHTML = `
    <div class="story-detail-hero">
      ${renderStoryCover(story, "story-detail-cover", story.imageCaption)}
      <div class="story-detail-heading">
        <div class="story-meta">
          <span class="badge blue">${escapeHTML(story.category)}</span>
          <span class="badge gold">${escapeHTML(story.period)}</span>
          <span class="badge green">${escapeHTML(story.credibility)}</span>
          ${story.needsVerification ? `<span class="badge red">需人工核对</span>` : ""}
        </div>
        <h2 id="modalTitle">${escapeHTML(story.title)}</h2>
        <p>${escapeHTML(story.subtitle)}</p>
      </div>
    </div>
    <div class="story-detail-sections">
      ${renderStoryDetailSection("故事讲述", story.fullText)}
      ${renderStoryDetailSection("档案细节", story.archiveDetail)}
      ${renderStoryDetailSection("历史依据", story.historicalBasis)}
      ${renderStoryDetailSection("空间观察", story.spatialDetail)}
      ${renderStoryDetailSection("互动提问", story.visitorPrompt)}
      <section class="story-detail-section story-detail-info">
        <h3>基本信息</h3>
        <dl class="modal-details">
          <div><dt>地点</dt><dd>${escapeHTML(story.placeName)}</dd></div>
          <div><dt>地址</dt><dd>${escapeHTML(story.address)}</dd></div>
          <div><dt>时间</dt><dd>${escapeHTML(story.timeLabel)}</dd></div>
          <div><dt>讲述人</dt><dd>${escapeHTML(story.storyteller)}</dd></div>
          <div><dt>公开范围</dt><dd>${escapeHTML(story.visibility)}</dd></div>
          <div><dt>来源类型</dt><dd>${escapeHTML(story.sourceType)}</dd></div>
        </dl>
      </section>
    </div>
    <div class="story-detail-footer">
      <div class="tag-row">
        ${story.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
      </div>
      <div class="story-detail-actions">
        <button class="btn btn-secondary" type="button" data-close-modal>关闭</button>
        <button class="btn btn-primary" type="button" ${mapPlaceId ? `data-go-map="${escapeHTML(mapPlaceId)}"` : "disabled"}>${mapPlaceId ? "去地图看这个点" : "暂无地图点位"}</button>
      </div>
    </div>
  `;

  modalContent.querySelectorAll("[data-close-modal]").forEach((item) => {
    item.addEventListener("click", closeModal);
  });
  modalContent.querySelectorAll("[data-go-map]").forEach((button) => {
    button.addEventListener("click", () => {
      const placeId = button.dataset.goMap;
      closeModal();
      showSection("map");
      openPlaceDetail(placeId);
    });
  });

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  const modal = document.getElementById("storyModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

async function handleMemorySubmit(event) {
  event.preventDefault();
  const validation = validateMemoryForm();
  const formMessage = document.getElementById("formMessage");

  if (!validation.valid) {
    if (formMessage) formMessage.textContent = "请先补全表单中标出的内容。";
    showToast("请检查表单里的中文提示。", "error");
    return;
  }

  let mediaAttachments = [];
  try {
    mediaAttachments = await readSelectedMediaAttachments();
  } catch (error) {
    setFieldError("media", error.message);
    if (formMessage) formMessage.textContent = "媒体文件暂时不能保存，请压缩后再试。";
    showToast("媒体文件太大或读取失败。", "error");
    return;
  }

  const place = PLACES.find((item) => item.id === validation.values.placeId);
  const entry = {
    id: `submitted-${Date.now()}`,
    title: validation.values.title,
    category: validation.values.category,
    placeId: validation.values.placeId,
    placeName: place ? place.name : validation.values.placeId,
    timeLabel: validation.values.timeLabel || "待补充时间线索",
    period: inferPeriod(validation.values.timeLabel),
    storyteller: validation.values.storyteller || "匿名讲述人",
    excerpt: buildExcerpt(validation.values.fullText),
    fullText: validation.values.fullText,
    tags: validation.values.tags,
    credibility: "待考证",
    visibility: validation.values.visibility,
    reviewStatus: "pending",
    sourceType: `${validation.values.ageGroup}提交 / ${isSupabaseStorageReady() ? "Supabase Storage + Demo 本地审核" : "Demo 本地保存"}`,
    imageStyle: "submitted",
    mediaAttachments,
    mediaSummary: buildMediaSummary(mediaAttachments)
  };

  try {
    saveSubmittedMemory(entry);
  } catch (error) {
    setFieldError("media", "浏览器本地存储空间不足，请减少视频/音频大小，或等待正式版接入 Supabase Storage。");
    if (formMessage) formMessage.textContent = "这条记忆没有保存成功：媒体文件超过本地 Demo 可承载范围。";
    showToast("本地存储空间不足。", "error");
    return;
  }
  event.target.reset();
  clearFieldErrors();
  renderMediaPreview();
  if (formMessage) {
    formMessage.textContent = "你的记忆已进入待审核区，感谢你为先锋社区留下新的光点。";
  }
  showToast(mediaAttachments.length ? "已提交文字和媒体到管理员待审核区。" : "已提交到管理员待审核区。", "success");
  if (state.adminUnlocked) renderAdminPanel();
}

function validateMemoryForm() {
  clearFieldErrors();
  const title = document.getElementById("memoryTitle").value.trim();
  const storyteller = document.getElementById("storyteller").value.trim();
  const ageGroup = document.getElementById("ageGroup").value;
  const timeLabel = document.getElementById("timeLabel").value.trim();
  const placeId = document.getElementById("placeSelect").value;
  const category = document.getElementById("categorySelect").value;
  const fullText = document.getElementById("storyText").value.trim();
  const tags = document.getElementById("tagsInput").value
    .split(/[,，]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
  const visibility = document.getElementById("visibility").value;
  const consent = document.getElementById("consent").checked;

  const errors = {};
  if (!title) errors.title = "标题不能为空。";
  if (!placeId) errors.placeId = "请选择地点。";
  if (!category) errors.category = "请选择记忆分类。";
  if (!fullText) errors.fullText = "故事内容不能为空。";
  if (!consent) errors.consent = "必须勾选授权同意。";
  const mediaLimit = getActiveMediaLimit();
  if (getSelectedMediaSize() > mediaLimit) {
    errors.media = `照片、视频、音频总大小不能超过 ${formatBytes(mediaLimit)}。`;
  }

  Object.entries(errors).forEach(([field, message]) => setFieldError(field, message));

  return {
    valid: Object.keys(errors).length === 0,
    values: { title, storyteller, ageGroup, timeLabel, placeId, category, fullText, tags, visibility }
  };
}

function loadSubmittedMemories() {
  return safeReadArray(STORAGE_KEYS.submitted);
}

function saveSubmittedMemory(entry) {
  const submitted = loadSubmittedMemories();
  submitted.unshift(entry);
  safeWriteArray(STORAGE_KEYS.submitted, submitted);
}

function getApprovedStories() {
  return safeReadArray(STORAGE_KEYS.approved);
}

function renderAdminPanel() {
  const adminList = document.getElementById("adminList");
  if (!adminList) return;

  document.querySelectorAll(".admin-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.adminTab === state.adminTab);
  });

  const entries = getAdminEntriesForTab(state.adminTab);
  if (!entries.length) {
    const emptyText = state.adminTab === "pending" ? "暂无待审核记忆。" : state.adminTab === "approved" ? "暂无已通过提交。" : "暂无已拒绝提交。";
    adminList.innerHTML = `<div class="empty-state">${emptyText}</div>`;
    return;
  }

  adminList.innerHTML = entries.map((entry) => `
    <article class="admin-record">
      <div>
        <div class="story-meta">
          <span class="badge ${entry.reviewStatus === "approved" ? "green" : entry.reviewStatus === "rejected" ? "red" : "gold"}">${statusText(entry.reviewStatus)}</span>
          <span class="badge blue">${escapeHTML(entry.category)}</span>
        </div>
        <h3>${escapeHTML(entry.title)}</h3>
        <p>${escapeHTML(entry.excerpt)}</p>
        <dl class="story-facts">
          <div><dt>地点</dt><dd>${escapeHTML(entry.placeName)}</dd></div>
          <div><dt>时间</dt><dd>${escapeHTML(entry.timeLabel)}</dd></div>
          <div><dt>讲述人</dt><dd>${escapeHTML(entry.storyteller)}</dd></div>
          <div><dt>公开范围</dt><dd>${escapeHTML(entry.visibility)}</dd></div>
        </dl>
        ${renderMediaAttachmentList(entry.mediaAttachments)}
      </div>
      <div class="admin-record-actions">
        ${entry.reviewStatus === "pending" ? `
          <button class="btn btn-primary" type="button" data-approve="${entry.id}">通过</button>
          <button class="btn btn-secondary" type="button" data-reject="${entry.id}">拒绝</button>
        ` : ""}
        <button class="btn btn-ghost danger" type="button" data-delete="${entry.id}" data-status="${entry.reviewStatus}">删除</button>
      </div>
    </article>
  `).join("");

  adminList.querySelectorAll("[data-approve]").forEach((button) => {
    button.addEventListener("click", () => approveMemory(button.dataset.approve));
  });
  adminList.querySelectorAll("[data-reject]").forEach((button) => {
    button.addEventListener("click", () => rejectMemory(button.dataset.reject));
  });
  adminList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteMemory(button.dataset.delete));
  });
}

function unlockAdmin() {
  const password = document.getElementById("adminPassword").value;
  const adminMessage = document.getElementById("adminMessage");
  if (password !== "123456") {
    if (adminMessage) adminMessage.textContent = "密码不正确，请输入演示密码 123456。";
    showToast("演示密码不正确。", "error");
    return;
  }

  state.adminUnlocked = true;
  document.getElementById("adminGate").hidden = true;
  document.getElementById("adminPanel").hidden = false;
  renderAdminPanel();
  showToast("已进入 Demo 管理后台。", "success");
}

function approveMemory(id) {
  const submitted = loadSubmittedMemories();
  const entry = submitted.find((item) => item.id === id);
  if (!entry) return;

  const nextSubmitted = submitted.filter((item) => item.id !== id);
  const approved = getApprovedStories();
  const approvedEntry = { ...entry, reviewStatus: "approved", credibility: "个人回忆" };
  safeWriteArray(STORAGE_KEYS.submitted, nextSubmitted);
  safeWriteArray(STORAGE_KEYS.approved, [approvedEntry, ...approved.filter((item) => item.id !== id)]);
  renderAdminPanel();
  renderStories(state.storyFilter);
  showToast("已通过，这条记忆会出现在故事库。", "success");
}

function rejectMemory(id) {
  const submitted = loadSubmittedMemories();
  const entry = submitted.find((item) => item.id === id);
  if (!entry) return;

  const nextSubmitted = submitted.filter((item) => item.id !== id);
  const rejected = safeReadArray(STORAGE_KEYS.rejected);
  const rejectedEntry = { ...entry, reviewStatus: "rejected" };
  safeWriteArray(STORAGE_KEYS.submitted, nextSubmitted);
  safeWriteArray(STORAGE_KEYS.rejected, [rejectedEntry, ...rejected.filter((item) => item.id !== id)]);
  renderAdminPanel();
  showToast("已拒绝，这条记忆不会进入公开故事库。", "success");
}

function deleteMemory(id) {
  const keys = [STORAGE_KEYS.submitted, STORAGE_KEYS.approved, STORAGE_KEYS.rejected];
  keys.forEach((key) => {
    const next = safeReadArray(key).filter((item) => item.id !== id);
    safeWriteArray(key, next);
  });
  renderAdminPanel();
  renderStories(state.storyFilter);
  showToast("已从 Demo 本地数据中删除。", "success");
}

function exportJSON() {
  const data = {
    exportedAt: new Date().toISOString(),
    seedStories: STORIES,
    approvedSubmittedMemories: getApprovedStories()
  };
  downloadFile("xianfeng-memory-demo.json", JSON.stringify(data, null, 2), "application/json");
  showToast("JSON 已生成下载。", "success");
}

function exportCSV() {
  const rows = [STORIES, getApprovedStories()].flat().map((story) => ({
    id: story.id,
    title: story.title,
    category: story.category,
    placeName: story.placeName,
    timeLabel: story.timeLabel,
    storyteller: story.storyteller,
    credibility: story.credibility,
    visibility: story.visibility,
    reviewStatus: story.reviewStatus,
    sourceType: story.sourceType,
    mediaSummary: story.mediaSummary || buildMediaSummary(story.mediaAttachments || [])
  }));
  const header = Object.keys(rows[0] || {
    id: "",
    title: "",
    category: "",
    placeName: "",
    timeLabel: "",
    storyteller: "",
    credibility: "",
    visibility: "",
    reviewStatus: "",
    sourceType: "",
    mediaSummary: ""
  });
  const csv = [
    header.join(","),
    ...rows.map((row) => header.map((key) => csvEscape(row[key])).join(","))
  ].join("\n");

  downloadFile("xianfeng-memory-demo.csv", csv, "text/csv;charset=utf-8");
  showToast("CSV 已生成下载。", "success");
}

function initAgentChat() {
  const chatMessages = document.getElementById("chatMessages");
  const suggestions = document.getElementById("questionSuggestions");
  const chatForm = document.getElementById("chatForm");
  if (!chatMessages || !suggestions || !chatForm) return;

  chatMessages.innerHTML = `
    <div class="message agent-message">
      <strong>拾光仔</strong>
      <p>你好，我是拾光仔。我可以带你认识先锋大街、前锋大街、市桥白卖、蚝壳墙和儿童记忆任务。</p>
    </div>
  `;

  suggestions.innerHTML = AGENT_QA.map((item) => `
    <button type="button" class="suggestion-button" data-question="${escapeHTML(item.question)}">${escapeHTML(item.question)}</button>
  `).join("");

  suggestions.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => sendMockAgentMessage(button.dataset.question));
  });

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("chatInput");
    const question = input.value.trim();
    if (!question) return;
    sendMockAgentMessage(question);
    input.value = "";
  });
}

function sendMockAgentMessage(question) {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;
  const answer = findAgentAnswer(question);

  chatMessages.insertAdjacentHTML("beforeend", `
    <div class="message user-message">
      <strong>你</strong>
      <p>${escapeHTML(question)}</p>
    </div>
    <div class="message agent-message">
      <strong>拾光仔</strong>
      <p>${escapeHTML(answer)}</p>
    </div>
  `);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findAgentAnswer(question) {
  const normalized = question.toLowerCase();
  const matched = AGENT_QA.find((item) => {
    return item.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())) || normalized.includes(item.question.toLowerCase());
  });

  return matched
    ? matched.answer
    : "这个问题正式版会从社区记忆数据库中检索回答。Demo 版我可以先带你看看地图、时间轴和故事库。";
}

function renderQuests() {
  const questList = document.getElementById("questList");
  const pointsValue = document.getElementById("pointsValue");
  const stampValue = document.getElementById("stampValue");
  const stampWall = document.getElementById("stampWall");
  if (!questList) return;

  const completedSet = new Set(state.questProgress);
  const completedCount = completedSet.size;
  if (pointsValue) pointsValue.textContent = String(state.demoPoints);
  if (stampValue) stampValue.textContent = String(completedCount);

  if (stampWall) {
    stampWall.innerHTML = QUESTS.map((quest, index) => `
      <span class="stamp ${completedSet.has(quest.id) ? "is-earned" : ""}" title="${escapeHTML(quest.name)}">${completedSet.has(quest.id) ? "印" : index + 1}</span>
    `).join("");
  }

  questList.innerHTML = QUESTS.map((quest) => {
    const completed = completedSet.has(quest.id);
    return `
      <article class="quest-card ${completed ? "is-complete" : ""}">
        <div>
          <div class="story-meta">
            <span class="badge ${difficultyClass(quest.difficulty)}">${escapeHTML(quest.difficulty)}</span>
            <span class="badge gold">+${quest.points} 分</span>
          </div>
          <h3>${escapeHTML(quest.name)}</h3>
          <p>${escapeHTML(quest.theme)}</p>
        </div>
        <button class="btn ${completed ? "btn-ghost" : "btn-primary"}" type="button" data-quest-id="${quest.id}" ${completed ? "disabled" : ""}>
          ${completed ? "已完成" : "完成任务"}
        </button>
      </article>
    `;
  }).join("");

  questList.querySelectorAll("[data-quest-id]").forEach((button) => {
    button.addEventListener("click", () => completeQuest(button.dataset.questId));
  });
}

function completeQuest(questId) {
  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest || state.questProgress.includes(questId)) return;
  state.questProgress.push(questId);
  state.demoPoints += quest.points;
  saveQuestProgress();
  renderQuests();
  showToast(`已完成任务，获得 ${quest.points} 分。`, "success");
}

function loadQuestProgress() {
  state.questProgress = safeReadArray(STORAGE_KEYS.questProgress);
  const storedPoints = Number(localStorage.getItem(STORAGE_KEYS.demoPoints));
  state.demoPoints = Number.isFinite(storedPoints) ? storedPoints : calculateQuestPoints(state.questProgress);
}

function saveQuestProgress() {
  safeWriteArray(STORAGE_KEYS.questProgress, state.questProgress);
  localStorage.setItem(STORAGE_KEYS.demoPoints, String(state.demoPoints));
}

function resetDemoData() {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  state.placeFilter = null;
  state.storyFilter = "全部";
  state.adminTab = "pending";
  state.questProgress = [];
  state.demoPoints = 0;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === "全部");
  });
  renderStories("全部");
  renderAdminPanel();
  renderQuests();
  showToast("Demo 数据已重置为初始状态。", "success");
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast is-visible ${type}`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.className = "toast";
  }, 3200);
}

function initSubmitForm() {
  const form = document.getElementById("memoryForm");
  if (form) form.addEventListener("submit", handleMemorySubmit);
  MEDIA_INPUTS.forEach(({ id }) => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("change", renderMediaPreview);
  });
  renderMediaPreview();
}

function initAdminEvents() {
  const unlockButton = document.getElementById("adminUnlockBtn");
  const passwordInput = document.getElementById("adminPassword");
  if (unlockButton) unlockButton.addEventListener("click", unlockAdmin);
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") unlockAdmin();
    });
  }

  document.querySelectorAll(".admin-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.adminTab = tab.dataset.adminTab;
      renderAdminPanel();
    });
  });

  document.getElementById("exportJsonBtn").addEventListener("click", exportJSON);
  document.getElementById("exportCsvBtn").addEventListener("click", exportCSV);
  document.getElementById("resetDemoBtn").addEventListener("click", resetDemoData);
}

function initModalEvents() {
  document.querySelectorAll("[data-close-modal]").forEach((item) => {
    item.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function populatePlaceSelect() {
  const placeSelect = document.getElementById("placeSelect");
  if (!placeSelect) return;
  placeSelect.insertAdjacentHTML("beforeend", getVisiblePlaces().map((place) => `
    <option value="${place.id}">${escapeHTML(place.name)}</option>
  `).join(""));
}

function getPublicStories() {
  return [...STORIES, ...getApprovedStories()]
    .map(normalizeStory)
    .filter((story) => story.reviewStatus === "approved" && story.visibility !== "私密存档" && story.visibility !== "仅管理员可见")
    .filter((story) => {
      const place = PLACES.find((item) => item.id === story.placeId);
      return !place || place.isHidden !== true;
    });
}

function getVisiblePlaces() {
  return PLACES.filter((place) => place.isHidden !== true);
}

function normalizeStory(story) {
  const place = PLACES.find((item) => item.id === story.placeId);
  const placeName = story.placeName || (place ? place.name : "未标注地点");
  const fullText = story.fullText || story.excerpt || "这条记忆来自用户提交，正文资料仍需继续补充。";
  return {
    id: story.id || `story-${Date.now()}`,
    title: story.title || "未命名记忆",
    subtitle: story.subtitle || "社区提交记忆，等待补充档案细节",
    category: story.category || "社区记忆",
    placeId: story.placeId || (place ? place.id : ""),
    placeName,
    address: story.address || (place ? place.address : "资料不足，需人工补充"),
    timeLabel: story.timeLabel || "待补充时间线索",
    period: story.period || inferPeriod(story.timeLabel || ""),
    storyteller: story.storyteller || "匿名讲述人",
    excerpt: story.excerpt || buildExcerpt(fullText),
    fullText,
    archiveDetail: story.archiveDetail || "用户提交内容尚未进入正式档案整理，需管理员补充来源、照片或采访记录。",
    historicalBasis: story.historicalBasis || "居民口述模拟或社区提交资料，尚未与官方规划资料交叉核对。",
    spatialDetail: story.spatialDetail || `地点标注为${placeName}，具体空间细节需后续现场采集。`,
    visitorPrompt: story.visitorPrompt || "你能在地图上找到这段记忆发生的大概位置吗？",
    tags: Array.isArray(story.tags) && story.tags.length ? story.tags : ["社区提交", "待整理"],
    credibility: story.credibility || "个人回忆",
    visibility: story.visibility || "公开展示",
    reviewStatus: story.reviewStatus || "approved",
    sourceType: story.sourceType || "居民口述模拟",
    sourceNote: story.sourceNote || "来自用户提交或管理员审核通过的 Demo 本地数据，非正式数据库记录。",
    sourceFile: story.sourceFile || "Demo localStorage 用户提交",
    sourcePage: story.sourcePage ?? null,
    sourceRef: story.sourceRef || "localStorage",
    needsVerification: Boolean(story.needsVerification),
    missingInfo: story.missingInfo || "资料不足，需人工补充来源、地址细节和影像。",
    imageStyle: story.imageStyle && story.imageStyle !== "submitted" ? story.imageStyle : "oral-history",
    sourceImage: story.sourceImage || STORY_SOURCE_IMAGES[story.id] || "",
    imageCaption: story.sourceImage || STORY_SOURCE_IMAGES[story.id]
      ? "社区记忆影像"
      : story.imageCaption || `${placeName}记忆封面`,
    colorTheme: story.colorTheme || "community",
    mediaAttachments: Array.isArray(story.mediaAttachments) ? story.mediaAttachments : [],
    mediaSummary: story.mediaSummary || buildMediaSummary(story.mediaAttachments || [])
  };
}

function renderStoryCover(story, className, caption) {
  const uploadedPhoto = getPrimaryPhotoAttachment(story);
  if (uploadedPhoto) {
    return `
      <figure class="${className} story-source-image">
        <img src="${escapeHTML(uploadedPhoto.src)}" alt="${escapeHTML(story.title || story.placeName)}上传照片" loading="lazy">
      </figure>
    `;
  }

  if (story.sourceImage) {
    return `
      <figure class="${className} story-source-image">
        <img src="${escapeHTML(story.sourceImage)}" alt="${escapeHTML(story.placeName)}来源资料图片" loading="lazy">
      </figure>
    `;
  }

  return `
    <div class="${className} image-style ${escapeHTML(story.imageStyle)}" aria-hidden="true">
      <span>${escapeHTML(caption)}</span>
    </div>
  `;
}

function getPrimaryPhotoAttachment(story) {
  const attachments = Array.isArray(story.mediaAttachments) ? story.mediaAttachments : [];
  const photo = attachments.find((item) => item && item.type === "photo" && (item.publicUrl || item.dataUrl));
  if (!photo) return null;
  return {
    src: photo.publicUrl || photo.dataUrl,
    name: photo.name || "上传照片"
  };
}

function ensureStoryArchiveControls() {
  const storyGrid = document.getElementById("storyGrid");
  if (!storyGrid || document.getElementById("storyArchiveTools")) return;
  const controls = document.createElement("div");
  controls.id = "storyArchiveTools";
  controls.className = "archive-tools";
  controls.innerHTML = `
    <label class="archive-search">
      <span>搜索档案</span>
      <input id="storySearchInput" type="search" placeholder="搜索蚝壳墙、先锋小学、市桥白卖、古井、前锋十八巷……" autocomplete="off">
    </label>
    <div class="archive-select-grid">
      <label>
        <span>地点</span>
        <select id="storyPlaceFilter">
          <option value="全部">全部地点</option>
          ${PLACES.map((place) => `<option value="${escapeHTML(place.id)}">${escapeHTML(place.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>时期</span>
        <select id="storyPeriodFilter">
          <option value="全部">全部时期</option>
          ${getUniqueOptions(getPublicStories().map((story) => story.period)).map((period) => `<option value="${escapeHTML(period)}">${escapeHTML(period)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>可信度</span>
        <select id="storyCredibilityFilter">
          <option value="全部">全部可信度</option>
          ${getUniqueOptions(getPublicStories().map((story) => story.credibility)).map((credibility) => `<option value="${escapeHTML(credibility)}">${escapeHTML(credibility)}</option>`).join("")}
        </select>
      </label>
      <button class="btn btn-secondary" id="clearStoryFilters" type="button">清除筛选</button>
    </div>
  `;
  storyGrid.before(controls);

  document.getElementById("storySearchInput").addEventListener("input", (event) => {
    state.storySearch = event.target.value.trim();
    renderStories(state.storyFilter);
  });
  document.getElementById("storyPlaceFilter").addEventListener("change", (event) => {
    state.placeFilter = event.target.value === "全部" ? null : event.target.value;
    renderStories(state.storyFilter);
  });
  document.getElementById("storyPeriodFilter").addEventListener("change", (event) => {
    state.periodFilter = event.target.value;
    renderStories(state.storyFilter);
  });
  document.getElementById("storyCredibilityFilter").addEventListener("change", (event) => {
    state.credibilityFilter = event.target.value;
    renderStories(state.storyFilter);
  });
  document.getElementById("clearStoryFilters").addEventListener("click", clearStoryFilters);
  syncStoryControlValues();
}

function syncStoryControlValues() {
  const searchInput = document.getElementById("storySearchInput");
  const placeSelect = document.getElementById("storyPlaceFilter");
  const periodSelect = document.getElementById("storyPeriodFilter");
  const credibilitySelect = document.getElementById("storyCredibilityFilter");
  if (searchInput) searchInput.value = state.storySearch;
  if (placeSelect) placeSelect.value = state.placeFilter || "全部";
  if (periodSelect) periodSelect.value = state.periodFilter;
  if (credibilitySelect) credibilitySelect.value = state.credibilityFilter;
}

function clearStoryFilters() {
  state.storyFilter = "全部";
  state.placeFilter = null;
  state.periodFilter = "全部";
  state.credibilityFilter = "全部";
  state.storySearch = "";
  syncStoryControlValues();
  renderStories("全部");
}

function getActiveStoryFilterLabels() {
  const labels = [];
  if (state.storyFilter !== "全部") labels.push(state.storyFilter);
  const place = PLACES.find((item) => item.id === state.placeFilter);
  if (place) labels.push(place.name);
  if (state.periodFilter !== "全部") labels.push(state.periodFilter);
  if (state.credibilityFilter !== "全部") labels.push(state.credibilityFilter);
  if (state.storySearch) labels.push(`搜索“${state.storySearch}”`);
  return labels;
}

function getStorySearchText(story) {
  return [
    story.title,
    story.subtitle,
    story.excerpt,
    story.fullText,
    story.placeName,
    story.address,
    story.historicalBasis,
    story.archiveDetail,
    ...(story.tags || [])
  ].join(" ").toLowerCase();
}

function getUniqueOptions(values) {
  return [...new Set(values.filter(Boolean))];
}

function renderStoryDetailSection(title, text) {
  return `
    <section class="story-detail-section">
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(text || "资料不足，需人工补充。")}</p>
    </section>
  `;
}

function resolveMapPlaceId(story) {
  if (PLACES.some((place) => place.id === story.placeId)) return story.placeId;
  const related = PLACES.find((place) => Array.isArray(place.relatedStoryIds) && place.relatedStoryIds.includes(story.id));
  return related ? related.id : null;
}

function storyMatchesPlaceFilter(story, placeId) {
  if (story.placeId === placeId) return true;
  const place = PLACES.find((item) => item.id === placeId);
  return Boolean(place && Array.isArray(place.relatedStoryIds) && place.relatedStoryIds.includes(story.id));
}

function getSelectedMediaFiles() {
  return MEDIA_INPUTS.flatMap(({ id, type, label }) => {
    const input = document.getElementById(id);
    return input ? [...input.files].map((file) => ({ file, type, label })) : [];
  });
}

function getSelectedMediaSize() {
  return getSelectedMediaFiles().reduce((sum, item) => sum + item.file.size, 0);
}

function initSupabaseClient() {
  const config = getSupabaseConfig();
  if (!config.enabled) return;
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.warn("Supabase JS SDK 未加载，媒体上传将回退到本地 Demo。");
    return;
  }
  if (!isValidSupabaseConfig(config)) {
    console.warn("Supabase 配置未填写完整，媒体上传将回退到本地 Demo。");
    return;
  }
  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
}

function getSupabaseConfig() {
  return window.XIANFENG_SUPABASE_CONFIG || {};
}

function isValidSupabaseConfig(config) {
  return Boolean(
    config &&
    config.enabled &&
    config.url &&
    config.anonKey &&
    config.storageBucket &&
    !String(config.url).includes("YOUR_PROJECT_REF") &&
    !String(config.anonKey).includes("YOUR_SUPABASE_ANON_KEY")
  );
}

function isSupabaseStorageReady() {
  return Boolean(supabaseClient && isValidSupabaseConfig(getSupabaseConfig()));
}

function getActiveMediaLimit() {
  return isSupabaseStorageReady() ? SUPABASE_MEDIA_LIMIT_BYTES : LOCAL_MEDIA_LIMIT_BYTES;
}

async function readSelectedMediaAttachments() {
  const selected = getSelectedMediaFiles();
  const totalSize = selected.reduce((sum, item) => sum + item.file.size, 0);
  if (!selected.length) return [];
  if (isSupabaseStorageReady()) {
    if (totalSize > SUPABASE_MEDIA_LIMIT_BYTES) {
      throw new Error(`当前媒体总大小为 ${formatBytes(totalSize)}，超过本 Demo 的 Supabase 上传上限 ${formatBytes(SUPABASE_MEDIA_LIMIT_BYTES)}。`);
    }
    try {
      return await uploadMediaAttachmentsToSupabase(selected);
    } catch (error) {
      console.warn(error);
      if (totalSize <= LOCAL_MEDIA_LIMIT_BYTES) {
        const localAttachments = await Promise.all(selected.map(({ file, type, label }) => readFileAsAttachment(file, type, label)));
        return localAttachments.map((item) => ({
          ...item,
          storageProvider: "local-fallback",
          uploadError: error.message
        }));
      }
      throw error;
    }
  }
  if (totalSize > LOCAL_MEDIA_LIMIT_BYTES) {
    throw new Error(`当前媒体总大小为 ${formatBytes(totalSize)}，超过本地 Demo 保存上限 ${formatBytes(LOCAL_MEDIA_LIMIT_BYTES)}。请配置 Supabase Storage 或压缩文件。`);
  }
  return Promise.all(selected.map(({ file, type, label }) => readFileAsAttachment(file, type, label)));
}

async function uploadMediaAttachmentsToSupabase(selected) {
  const config = getSupabaseConfig();
  return Promise.all(selected.map(async ({ file, type, label }) => {
    const path = buildSupabaseMediaPath(file, type);
    const { data, error } = await supabaseClient.storage
      .from(config.storageBucket)
      .upload(path, file, {
        cacheControl: "3600",
        contentType: file.type || "application/octet-stream",
        upsert: false
      });
    if (error) throw new Error(`Supabase Storage 上传失败：${error.message}`);

    const attachment = {
      id: `media-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      type,
      label,
      name: file.name,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
      storageProvider: "supabase",
      bucket: config.storageBucket,
      storagePath: data.path,
      collectedAt: new Date().toISOString()
    };

    if (config.publicBucket) {
      const { data: publicData } = supabaseClient.storage
        .from(config.storageBucket)
        .getPublicUrl(data.path);
      attachment.publicUrl = publicData.publicUrl;
    }

    return attachment;
  }));
}

function buildSupabaseMediaPath(file, type) {
  const date = new Date().toISOString().slice(0, 10);
  const safeName = file.name
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "memory-media";
  const unique = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `submissions/${date}/${type}/${unique}-${safeName}`;
}

function readFileAsAttachment(file, type, label) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        id: `media-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        type,
        label,
        name: file.name,
        mimeType: file.type || "application/octet-stream",
        size: file.size,
        dataUrl: reader.result,
        storageProvider: "local",
        collectedAt: new Date().toISOString()
      });
    };
    reader.onerror = () => reject(new Error(`无法读取文件：${file.name}`));
    reader.readAsDataURL(file);
  });
}

function renderMediaPreview() {
  const preview = document.getElementById("mediaPreview");
  if (!preview) return;
  const selected = getSelectedMediaFiles();
  if (!selected.length) {
    preview.innerHTML = `<p class="media-empty">还没有选择照片、视频或音频。</p>`;
    return;
  }
  const totalSize = selected.reduce((sum, item) => sum + item.file.size, 0);
  const mediaLimit = getActiveMediaLimit();
  const storageLabel = isSupabaseStorageReady() ? "Supabase Storage" : "本地 Demo";
  preview.innerHTML = `
    <div class="media-total ${totalSize > mediaLimit ? "is-over" : ""}">
      已选择 ${selected.length} 个文件，共 ${formatBytes(totalSize)}。${storageLabel} 上限 ${formatBytes(mediaLimit)}。
    </div>
    <div class="media-preview-list">
      ${selected.map(({ file, label }) => `
        <div class="media-preview-item">
          <span>${escapeHTML(label)}</span>
          <strong>${escapeHTML(file.name)}</strong>
          <small>${escapeHTML(file.type || "未知格式")} · ${formatBytes(file.size)}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function renderMediaAttachmentList(mediaAttachments = []) {
  if (!Array.isArray(mediaAttachments) || !mediaAttachments.length) return "";
  return `
    <div class="media-admin-list">
      ${mediaAttachments.map((item) => `
        <span>${escapeHTML(item.label || mediaTypeLabel(item.type))}：${escapeHTML(item.name || "未命名文件")}</span>
      `).join("")}
    </div>
  `;
}

function renderMediaArchiveSection(mediaAttachments = []) {
  if (!Array.isArray(mediaAttachments) || !mediaAttachments.length) {
    return renderStoryDetailSection("媒体附件", "这条记忆暂未收集照片、视频或音频。");
  }
  return `
    <section class="story-detail-section media-archive-section">
      <h3>媒体附件</h3>
      <div class="media-archive-grid">
        ${mediaAttachments.map(renderMediaArchiveItem).join("")}
      </div>
    </section>
  `;
}

function renderMediaArchiveItem(item) {
  const src = escapeHTML(item.publicUrl || item.dataUrl || "");
  const name = escapeHTML(item.name || "媒体文件");
  const label = escapeHTML(item.label || mediaTypeLabel(item.type));
  if (item.type === "photo" && src) {
    return `<figure class="media-archive-item"><img src="${src}" alt="${name}"><figcaption>${label} · ${name}</figcaption></figure>`;
  }
  if (item.type === "video" && src) {
    return `<figure class="media-archive-item"><video src="${src}" controls preload="metadata"></video><figcaption>${label} · ${name}</figcaption></figure>`;
  }
  if (item.type === "audio" && src) {
    return `<figure class="media-archive-item"><audio src="${src}" controls></audio><figcaption>${label} · ${name}</figcaption></figure>`;
  }
  return `<div class="media-archive-item media-file-chip"><strong>${label}</strong><span>${name}</span></div>`;
}

function buildMediaSummary(mediaAttachments = []) {
  if (!Array.isArray(mediaAttachments) || !mediaAttachments.length) return "无媒体附件";
  const counts = mediaAttachments.reduce((acc, item) => {
    const label = mediaTypeLabel(item.type);
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).map(([label, count]) => `${label}${count}个`).join("、");
}

function mediaTypeLabel(type) {
  if (type === "photo") return "照片";
  if (type === "video") return "视频";
  if (type === "audio") return "音频";
  return "附件";
}

function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.ceil(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function getAdminEntriesForTab(tab) {
  if (tab === "pending") return loadSubmittedMemories();
  if (tab === "approved") return getApprovedStories();
  return safeReadArray(STORAGE_KEYS.rejected);
}

function safeReadArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.removeItem(key);
    return [];
  }
}

function safeWriteArray(key, value) {
  localStorage.setItem(key, JSON.stringify(Array.isArray(value) ? value : []));
}

function resetBrokenStorage() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    if (key === STORAGE_KEYS.demoPoints) return;
    safeReadArray(key);
  });
}

function setFieldError(field, message) {
  const error = document.querySelector(`[data-error-for="${field}"]`);
  if (error) error.textContent = message;
}

function clearFieldErrors() {
  document.querySelectorAll(".field-error").forEach((item) => {
    item.textContent = "";
  });
  const formMessage = document.getElementById("formMessage");
  if (formMessage) formMessage.textContent = "";
}

function inferPeriod(timeLabel) {
  if (/民国/.test(timeLabel)) return "民国";
  if (/明|清/.test(timeLabel)) return "明清";
  if (/七十|70|建国/.test(timeLabel)) return "建国初期";
  if (/八十|九十|80|90|改革/.test(timeLabel)) return "改革开放";
  if (/宋|石板桥/.test(timeLabel)) return "北宋";
  return "当代";
}

function buildExcerpt(text) {
  return text.length > 54 ? `${text.slice(0, 54)}...` : text;
}

function statusText(status) {
  if (status === "approved") return "已通过";
  if (status === "rejected") return "已拒绝";
  return "待审核";
}

function difficultyClass(difficulty) {
  if (difficulty === "挑战") return "red";
  if (difficulty === "中等") return "blue";
  return "green";
}

function calculateQuestPoints(progress) {
  return progress.reduce((sum, questId) => {
    const quest = QUESTS.find((item) => item.id === questId);
    return sum + (quest ? quest.points : 0);
  }, 0);
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob(["\ufeff", content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// TODO: connect Supabase database
// Supabase Storage is wired for small photos/audio/video; large video should use TUS later.
// TODO: connect real OpenAI-compatible AI API
// TODO: add real user authentication
// TODO: add real moderation workflow
// TODO: add multilingual support
// TODO: add real map layer
// TODO: add oral history recording
// TODO: add vector search / RAG
