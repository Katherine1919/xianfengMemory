const STORAGE_KEYS = {
  submitted: "xianfeng_submitted_memories",
  approved: "xianfeng_approved_memories",
  rejected: "xianfeng_rejected_memories",
  questProgress: "xianfeng_quest_progress",
  demoPoints: "xianfeng_demo_points"
};

const state = {
  currentSection: "home",
  storyFilter: "全部",
  placeFilter: null,
  adminUnlocked: false,
  adminTab: "pending",
  questProgress: [],
  demoPoints: 0
};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  initNavigation();
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

  mapNodes.innerHTML = PLACES.map((place) => `
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
    <h3>${escapeHTML(place.name)}</h3>
    <p>${escapeHTML(place.intro)}</p>
    <dl class="detail-list">
      <div>
        <dt>所属历史阶段</dt>
        <dd>${escapeHTML(place.period)}</dd>
      </div>
      <div>
        <dt>记忆类型</dt>
        <dd>${escapeHTML(place.type)}</dd>
      </div>
      <div>
        <dt>相关故事数量</dt>
        <dd>${place.storyCount} 条</dd>
      </div>
    </dl>
    <div class="tag-row">
      ${place.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <button class="btn btn-primary" type="button" id="viewPlaceStories">查看相关故事</button>
  `;

  document.querySelectorAll(".memory-point").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.placeId === placeId);
  });

  document.getElementById("viewPlaceStories").addEventListener("click", () => {
    filterStoriesByPlace(placeId);
  });
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
      <div class="timeline-marker">${String(index + 1).padStart(2, "0")}</div>
      <div class="timeline-content">
        <p class="kicker">${escapeHTML(item.theme)}</p>
        <h3>${escapeHTML(item.period)}</h3>
        <p>${escapeHTML(item.clue)}</p>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
        <button class="btn btn-secondary" type="button" data-timeline-place="${item.placeId}">查看相关故事</button>
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

  const publicStories = getPublicStories();
  let visibleStories = publicStories;

  if (filter !== "全部") {
    visibleStories = visibleStories.filter((story) => story.category === filter);
    state.placeFilter = null;
  }

  if (state.placeFilter) {
    visibleStories = visibleStories.filter((story) => story.placeId === state.placeFilter);
  }

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === filter);
    chip.onclick = () => {
      state.placeFilter = null;
      renderStories(chip.dataset.category);
    };
  });

  if (storyCountText) {
    storyCountText.textContent = `当前展示 ${visibleStories.length} 条已通过公开故事。`;
  }

  if (activeStoryFilter) {
    const place = PLACES.find((item) => item.id === state.placeFilter);
    activeStoryFilter.hidden = !place;
    activeStoryFilter.innerHTML = place ? `
      <span>地点筛选：${escapeHTML(place.name)}</span>
      <button type="button" id="clearPlaceFilter">清除筛选</button>
    ` : "";
    const clearButton = document.getElementById("clearPlaceFilter");
    if (clearButton) {
      clearButton.addEventListener("click", () => {
        state.placeFilter = null;
        renderStories(state.storyFilter);
      });
    }
  }

  if (!visibleStories.length) {
    storyGrid.innerHTML = `<div class="empty-state">暂时没有符合条件的已通过故事。</div>`;
    return;
  }

  storyGrid.innerHTML = visibleStories.map((story) => `
    <article class="story-card ${escapeHTML(story.imageStyle || "paper")}">
      <button class="story-card-button" type="button" data-story-id="${story.id}" aria-label="打开故事：${escapeHTML(story.title)}">
        <div class="story-image" aria-hidden="true">
          <span>${escapeHTML(story.placeName)}</span>
        </div>
        <div class="story-body">
          <div class="story-meta">
            <span class="badge blue">${escapeHTML(story.category)}</span>
            <span class="badge green">${escapeHTML(story.reviewStatus === "approved" ? "已通过" : story.reviewStatus)}</span>
          </div>
          <h3>${escapeHTML(story.title)}</h3>
          <p>${escapeHTML(story.excerpt)}</p>
          <dl class="story-facts">
            <div><dt>地点</dt><dd>${escapeHTML(story.placeName)}</dd></div>
            <div><dt>时间</dt><dd>${escapeHTML(story.timeLabel)}</dd></div>
            <div><dt>讲述人</dt><dd>${escapeHTML(story.storyteller)}</dd></div>
          </dl>
          <div class="tag-row">
            ${story.tags.slice(0, 4).map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
          </div>
          <div class="credibility-row">
            <span>${escapeHTML(story.credibility)}</span>
            <span>${escapeHTML(story.sourceType)}</span>
          </div>
        </div>
      </button>
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

  modalContent.innerHTML = `
    <p class="kicker">${escapeHTML(story.category)} · ${escapeHTML(story.period)}</p>
    <h2 id="modalTitle">${escapeHTML(story.title)}</h2>
    <p class="modal-story">${escapeHTML(story.fullText)}</p>
    <dl class="modal-details">
      <div><dt>地点</dt><dd>${escapeHTML(story.placeName)}</dd></div>
      <div><dt>时间</dt><dd>${escapeHTML(story.timeLabel)}</dd></div>
      <div><dt>讲述人</dt><dd>${escapeHTML(story.storyteller)}</dd></div>
      <div><dt>公开范围</dt><dd>${escapeHTML(story.visibility)}</dd></div>
      <div><dt>可信度</dt><dd>${escapeHTML(story.credibility)}</dd></div>
      <div><dt>数据来源说明</dt><dd>${escapeHTML(story.sourceType)}</dd></div>
    </dl>
    <div class="tag-row">
      ${story.tags.map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
    </div>
  `;

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

function handleMemorySubmit(event) {
  event.preventDefault();
  const validation = validateMemoryForm();
  const formMessage = document.getElementById("formMessage");

  if (!validation.valid) {
    if (formMessage) formMessage.textContent = "请先补全表单中标出的内容。";
    showToast("请检查表单里的中文提示。", "error");
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
    sourceType: `${validation.values.ageGroup}提交 / Demo 本地保存`,
    imageStyle: "submitted"
  };

  saveSubmittedMemory(entry);
  event.target.reset();
  clearFieldErrors();
  if (formMessage) {
    formMessage.textContent = "你的记忆已进入待审核区，感谢你为先锋社区留下新的光点。";
  }
  showToast("已提交到管理员待审核区。", "success");
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
    sourceType: story.sourceType
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
    sourceType: ""
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
  placeSelect.insertAdjacentHTML("beforeend", PLACES.map((place) => `
    <option value="${place.id}">${escapeHTML(place.name)}</option>
  `).join(""));
}

function getPublicStories() {
  return [...STORIES, ...getApprovedStories()]
    .filter((story) => story.reviewStatus === "approved" && story.visibility !== "私密存档" && story.visibility !== "仅管理员可见");
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
// TODO: connect Supabase Storage for photos/audio/video
// TODO: connect real OpenAI-compatible AI API
// TODO: add real user authentication
// TODO: add real moderation workflow
// TODO: add multilingual support
// TODO: add real map layer
// TODO: add oral history recording
// TODO: add vector search / RAG
