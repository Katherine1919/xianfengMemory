// Xianfeng Memory Demo data layer
// Generated from docs/ knowledge base. Do not add unsourced historical claims here.

const DATA_VERSION = "xianfeng-memory-data-v2";
const DATA_SUMMARY = {
  "stories": 30,
  "places": 14,
  "timelineItems": 7,
  "quests": 12,
  "agentQa": 16,
  "knowledgeFacts": 14
};

const KNOWLEDGE_FACTS = [
  {
    "id": "fact-location",
    "topic": "区位",
    "fact": "先锋社区位于广州市番禺区市桥街道，处在市桥老城核心区，接近地铁3号线市桥站。",
    "sourceNote": "来源：拾光源点•先锋社区 1.0.pdf，第2页",
    "needsVerification": false,
    "tags": [
      "市桥老城",
      "区位"
    ]
  },
  {
    "id": "fact-street-relation",
    "topic": "街巷关系",
    "fact": "先锋大街与前锋大街所在的谢地，早期以谢地大街为主干，南北分出十数条巷道，形成鱼骨状格局。",
    "sourceNote": "来源：2说明书第41页",
    "needsVerification": false,
    "tags": [
      "先锋大街",
      "前锋大街",
      "鱼骨状街巷"
    ]
  },
  {
    "id": "fact-qianfeng-name",
    "topic": "街名演变",
    "fact": "谢地大街建国后被新命名为前锋大街；文峰巷推测改名为先锋巷，后为先锋大街。",
    "sourceNote": "来源：2说明书第42页",
    "needsVerification": true,
    "tags": [
      "谢地大街",
      "文峰巷",
      "街名"
    ]
  },
  {
    "id": "fact-oyster-count",
    "topic": "历史环境要素",
    "fact": "先锋社区内有蚝壳墙7处、巷道门楼3处、麻石巷5处、古井2处、传统街巷27条。",
    "sourceNote": "来源：2说明书第48页；4宣传册第10页",
    "needsVerification": false,
    "tags": [
      "蚝壳墙",
      "古井",
      "麻石巷"
    ]
  },
  {
    "id": "fact-ma-stone-missing",
    "topic": "资料缺口",
    "fact": "麻石巷总数为5处，但地址表只提取到4处位置，第5处需人工补充或OCR图纸。",
    "sourceNote": "来源：02知识库第5章；05提取报告资料不足清单",
    "needsVerification": true,
    "tags": [
      "麻石巷",
      "资料不足"
    ]
  },
  {
    "id": "fact-heritage-house",
    "topic": "保护对象",
    "fact": "前锋大街十二巷1号古民居是区登记不可移动文物，清代三间两廊式二层民居。",
    "sourceNote": "来源：1文本第42页",
    "needsVerification": false,
    "tags": [
      "古民居",
      "不可移动文物"
    ]
  },
  {
    "id": "fact-gatehouse",
    "topic": "保护对象",
    "fact": "先锋四巷门楼为历史建筑，正面青砖丝缝砖墙饰面，下有麻石墙基及线脚石门框。",
    "sourceNote": "来源：1文本第43页",
    "needsVerification": false,
    "tags": [
      "门楼",
      "历史建筑"
    ]
  },
  {
    "id": "fact-water-trade",
    "topic": "历史定位",
    "fact": "谢地南临市桥水道，水体和码头围绕市镇形成市场，是以水为脉的商业市镇。",
    "sourceNote": "来源：2说明书第51页",
    "needsVerification": false,
    "tags": [
      "水陆贸易",
      "以水为脉"
    ]
  },
  {
    "id": "fact-qilou",
    "topic": "民国商业",
    "fact": "民国1931年后，市桥开辟马路，多条道路建成骑楼，后来因交通需求改建为更宽道路。",
    "sourceNote": "来源：2说明书第39页",
    "needsVerification": false,
    "tags": [
      "民国",
      "骑楼"
    ]
  },
  {
    "id": "fact-xianfeng-school",
    "topic": "学校记忆",
    "fact": "先锋小学原址与谢氏文峰祠、民国文峰小学相关，1949年定名先锋小学。",
    "sourceNote": "来源：拾光源点第10页；2说明书第41页",
    "needsVerification": false,
    "tags": [
      "先锋小学",
      "文峰小学"
    ]
  },
  {
    "id": "fact-food",
    "topic": "地方美食",
    "fact": "市桥白卖、广式腊味、姜埋奶、菊花糕、薄饼、娥姐粉果等被资料列为传统美食或传统技艺线索。",
    "sourceNote": "来源：2说明书第49页；拾光源点第3页",
    "needsVerification": true,
    "tags": [
      "市桥白卖",
      "广式腊味",
      "姜埋奶"
    ]
  },
  {
    "id": "fact-intangible",
    "topic": "非遗文化",
    "fact": "资料整理了番禺水色、三堂凤舞、关帝十乡会、广东醒狮、番禺灰塑、市桥广绣、香云纱等非遗与地方文化线索。",
    "sourceNote": "来源：2说明书第49页；1文本第20页",
    "needsVerification": false,
    "tags": [
      "非遗",
      "广绣",
      "香云纱"
    ]
  },
  {
    "id": "fact-bridge-missing",
    "topic": "资料缺口",
    "fact": "北宋石板桥目前只有拾光源点展陈线索，缺具体桥址、桥名、文献依据和图像。",
    "sourceNote": "来源：拾光源点第3页；05提取报告资料不足清单",
    "needsVerification": true,
    "tags": [
      "北宋石板桥",
      "资料不足"
    ]
  },
  {
    "id": "fact-vision",
    "topic": "规划定位",
    "fact": "规划将先锋社区定位为老城市新活力的番禺新样本、宜居社区、街区博物馆和广府文化体验街区。",
    "sourceNote": "来源：4宣传册第19页",
    "needsVerification": false,
    "tags": [
      "老城市新活力",
      "街区博物馆"
    ]
  }
];

const PLACES = [
  {
    "id": "xianfeng-street",
    "name": "先锋大街",
    "type": "主街 / 街巷记忆",
    "address": "先锋大街",
    "shortIntro": "与前锋大街共同构成先锋社区历史空间格局。",
    "longIntro": "资料说明先锋大街旧时与文峰巷、谢地大街演变有关，沿街界面主要为青砖房侧立面，是理解鱼骨状街巷的重要主街。",
    "periodTags": [
      "明清",
      "建国初期",
      "当代"
    ],
    "categoryTags": [
      "街巷",
      "青砖",
      "社区生活"
    ],
    "relatedStoryIds": [
      "story-007",
      "story-008",
      "story-027",
      "story-030"
    ],
    "x": 22,
    "y": 46,
    "sourceNote": "来源：2先锋大街前锋大街保护发展规划(说明书）.pdf，第41、48、65页",
    "needsVerification": false,
    "imageStyle": "archive-map",
    "intro": "与前锋大街共同构成先锋社区历史空间格局。",
    "period": "明清 / 建国初期 / 当代",
    "tags": [
      "街巷",
      "青砖",
      "社区生活"
    ],
    "storyCount": 4
  },
  {
    "id": "qianfeng-street",
    "name": "前锋大街",
    "type": "主街 / 街巷肌理",
    "address": "前锋大街",
    "shortIntro": "谢地大街建国后被新命名为前锋大街。",
    "longIntro": "规划资料认为前锋大街是谢地大街演变而来，与先锋大街作为主干，南北分出十数条支巷，形成鱼骨状格局。",
    "periodTags": [
      "明清",
      "民国",
      "当代"
    ],
    "categoryTags": [
      "鱼骨状街巷",
      "主街",
      "商业活力轴"
    ],
    "relatedStoryIds": [
      "story-004",
      "story-013",
      "story-027",
      "story-030"
    ],
    "x": 54,
    "y": 58,
    "sourceNote": "来源：2先锋大街前锋大街保护发展规划(说明书）.pdf，第41-42页",
    "needsVerification": false,
    "imageStyle": "archive-map",
    "intro": "谢地大街建国后被新命名为前锋大街。",
    "period": "明清 / 民国 / 当代",
    "tags": [
      "鱼骨状街巷",
      "主街",
      "商业活力轴"
    ],
    "storyCount": 4
  },
  {
    "id": "qianfeng-lane-18",
    "name": "前锋十八巷",
    "type": "支巷 / 红砖建筑群",
    "address": "前锋大街十八巷",
    "shortIntro": "五十年代后形成大量红砖建筑，是规划中的芳华记忆轴。",
    "longIntro": "规划建议修葺沿街巷红砖建筑，引入番禺地道美食，形成具有五六十年代回忆的商业街区。",
    "periodTags": [
      "建国初期",
      "当代"
    ],
    "categoryTags": [
      "红砖",
      "芳华记忆",
      "美食路线"
    ],
    "relatedStoryIds": [
      "story-013",
      "story-017",
      "story-018"
    ],
    "x": 39,
    "y": 72,
    "sourceNote": "来源：2先锋大街前锋大街保护发展规划(说明书）.pdf，第42页；4宣传册第20页",
    "needsVerification": false,
    "imageStyle": "red-brick",
    "intro": "五十年代后形成大量红砖建筑，是规划中的芳华记忆轴。",
    "period": "建国初期 / 当代",
    "tags": [
      "红砖",
      "芳华记忆",
      "美食路线"
    ],
    "storyCount": 3
  },
  {
    "id": "xianfeng-school",
    "name": "先锋小学",
    "type": "学校旧址 / 社区核心",
    "address": "先锋社区原先锋小学",
    "shortIntro": "从谢氏文峰祠、文峰小学到先锋小学，承载教育记忆。",
    "longIntro": "拾光源点资料说明原址为谢氏文峰祠，民国时期兴办文峰小学，1949年定名先锋小学；规划也将原先锋小学视作核心节点。",
    "periodTags": [
      "民国",
      "建国初期",
      "当代"
    ],
    "categoryTags": [
      "学校",
      "儿童",
      "社区核心"
    ],
    "relatedStoryIds": [
      "story-016",
      "story-025",
      "story-029"
    ],
    "x": 71,
    "y": 35,
    "sourceNote": "来源：拾光源点•先锋社区 1.0.pdf，第10页；2说明书第41页",
    "needsVerification": false,
    "imageStyle": "old-school",
    "intro": "从谢氏文峰祠、文峰小学到先锋小学，承载教育记忆。",
    "period": "民国 / 建国初期 / 当代",
    "tags": [
      "学校",
      "儿童",
      "社区核心"
    ],
    "storyCount": 3
  },
  {
    "id": "oyster-wall-cluster",
    "name": "蚝壳墙",
    "type": "历史环境要素",
    "address": "7处地址见故事库",
    "shortIntro": "规划列出7处蚝壳墙，是可触摸的建筑材料档案。",
    "longIntro": "蚝壳墙分布于前锋大街、先锋大街、新兴大街、塘边大街多处，保护要求是修缮、加固并维持整体风格。",
    "periodTags": [
      "明清至近代"
    ],
    "categoryTags": [
      "蚝壳墙",
      "历史环境要素",
      "建筑"
    ],
    "relatedStoryIds": [
      "story-001",
      "story-002",
      "story-003",
      "story-004",
      "story-005",
      "story-006",
      "story-007",
      "story-008"
    ],
    "x": 63,
    "y": 74,
    "sourceNote": "来源：2说明书第48页；1文本第20页",
    "needsVerification": true,
    "imageStyle": "oyster-wall",
    "intro": "规划列出7处蚝壳墙，是可触摸的建筑材料档案。",
    "period": "明清至近代",
    "tags": [
      "蚝壳墙",
      "历史环境要素",
      "建筑"
    ],
    "storyCount": 8
  },
  {
    "id": "old-well",
    "name": "古井",
    "type": "历史环境要素",
    "address": "塘边大街三巷6号旁；前锋大街五巷11号北侧",
    "shortIntro": "规划列出2处古井，可作为公共景观和生活记忆节点。",
    "longIntro": "古井保护要求包括不宜覆盖、保持材质和砌筑形式、保护水质，并设置历史信息标识。",
    "periodTags": [
      "传统生活线索"
    ],
    "categoryTags": [
      "古井",
      "水系",
      "公共空间"
    ],
    "relatedStoryIds": [
      "story-009",
      "story-010",
      "story-011"
    ],
    "x": 31,
    "y": 28,
    "sourceNote": "来源：2说明书第48页；1文本第19页",
    "needsVerification": false,
    "imageStyle": "well-water",
    "intro": "规划列出2处古井，可作为公共景观和生活记忆节点。",
    "period": "传统生活线索",
    "tags": [
      "古井",
      "水系",
      "公共空间"
    ],
    "storyCount": 3
  },
  {
    "id": "qilou-street",
    "name": "骑楼街面",
    "type": "城市发展 / 商业记忆",
    "address": "大北路、桥东路、大东路、大西路、大南路等",
    "shortIntro": "民国1931年后市桥开辟马路，多条道路建成骑楼。",
    "longIntro": "骑楼街面体现市桥从水路商业到马路商业的变化，后来又因交通需求被更宽的城市道路替代。",
    "periodTags": [
      "民国"
    ],
    "categoryTags": [
      "骑楼",
      "商业",
      "马路"
    ],
    "relatedStoryIds": [
      "story-026"
    ],
    "x": 45,
    "y": 39,
    "sourceNote": "来源：2说明书第39页",
    "needsVerification": true,
    "imageStyle": "qilou-street",
    "intro": "民国1931年后市桥开辟马路，多条道路建成骑楼。",
    "period": "民国",
    "tags": [
      "骑楼",
      "商业",
      "马路"
    ],
    "storyCount": 1
  },
  {
    "id": "baimai",
    "name": "市桥白卖",
    "type": "传统美食 / 非遗技艺",
    "address": "先锋社区经营业态待定",
    "shortIntro": "规划和拾光源点都提到的老番禺传统美食。",
    "longIntro": "市桥白卖被列为传统技艺/传统美食，规划鼓励嵌入先锋社区经营业态，但具体店铺、做法和传承资料仍需补充。",
    "periodTags": [
      "传统技艺",
      "当代活化"
    ],
    "categoryTags": [
      "美食",
      "非遗",
      "老番禺味道"
    ],
    "relatedStoryIds": [
      "story-017"
    ],
    "x": 78,
    "y": 62,
    "sourceNote": "来源：2说明书第49、67页；拾光源点第3页",
    "needsVerification": true,
    "imageStyle": "food-memory",
    "intro": "规划和拾光源点都提到的老番禺传统美食。",
    "period": "传统技艺 / 当代活化",
    "tags": [
      "美食",
      "非遗",
      "老番禺味道"
    ],
    "storyCount": 1
  },
  {
    "id": "lap-mei",
    "name": "广式腊味",
    "type": "传统美食 / 商业记忆",
    "address": "先锋社区经营业态待定",
    "shortIntro": "广式腊味制作技艺被列为传统技艺。",
    "longIntro": "拾光源点将广式腊味列为先锋记忆中的传统美食，可与前锋十八巷美食路线结合，但具体作坊和社区点位待补充。",
    "periodTags": [
      "传统技艺",
      "当代活化"
    ],
    "categoryTags": [
      "美食",
      "腊味",
      "年味"
    ],
    "relatedStoryIds": [
      "story-018"
    ],
    "x": 18,
    "y": 68,
    "sourceNote": "来源：1文本第10、20页；拾光源点第3页",
    "needsVerification": true,
    "imageStyle": "food-memory",
    "intro": "广式腊味制作技艺被列为传统技艺。",
    "period": "传统技艺 / 当代活化",
    "tags": [
      "美食",
      "腊味",
      "年味"
    ],
    "storyCount": 1
  },
  {
    "id": "stone-lane",
    "name": "麻石巷",
    "type": "历史环境要素 / 铺装",
    "address": "新兴大街；先锋大街四巷；前锋大街五巷18号内院；塘边大街八巷；第5处待补充",
    "shortIntro": "规划列出5处麻石巷，但地址表只提取到4处。",
    "longIntro": "麻石板街巷不宜移除或覆盖，修缮应采用传统工艺并保留原有格局、肌理和风貌。",
    "periodTags": [
      "传统街巷线索"
    ],
    "categoryTags": [
      "麻石",
      "石板路",
      "街巷肌理"
    ],
    "relatedStoryIds": [
      "story-012"
    ],
    "x": 28,
    "y": 64,
    "sourceNote": "来源：2说明书第48页；1文本第19-20页",
    "needsVerification": true,
    "imageStyle": "stone-lane",
    "intro": "规划列出5处麻石巷，但地址表只提取到4处。",
    "period": "传统街巷线索",
    "tags": [
      "麻石",
      "石板路",
      "街巷肌理"
    ],
    "storyCount": 1
  },
  {
    "id": "old-city-gate",
    "name": "市桥老城入口",
    "type": "入口 / 导览起点",
    "address": "市桥老城核心区入口线索",
    "shortIntro": "从城市道路进入老街尺度的转换点。",
    "longIntro": "拾光源点资料说明项目处在市桥老城核心区，接近市桥地铁站，适合作为展厅导览和记忆地图的入口概念。",
    "periodTags": [
      "当代"
    ],
    "categoryTags": [
      "市桥老城",
      "入口",
      "导览"
    ],
    "relatedStoryIds": [
      "story-030"
    ],
    "x": 83,
    "y": 24,
    "sourceNote": "来源：拾光源点•先锋社区 1.0.pdf，第2页；4宣传册第19页",
    "needsVerification": false,
    "imageStyle": "community-future",
    "intro": "从城市道路进入老街尺度的转换点。",
    "period": "当代",
    "tags": [
      "市桥老城",
      "入口",
      "导览"
    ],
    "storyCount": 1
  },
  {
    "id": "song-bridge-clue",
    "name": "北宋石板桥线索",
    "type": "待考证历史线索",
    "address": "具体位置资料不足",
    "shortIntro": "拾光源点提出“始于北宋，从石板桥发展而来”。",
    "longIntro": "该线索适合放在时间轴开端，但资料缺具体桥址、桥名、文献和图像，必须标注待补充。",
    "periodTags": [
      "北宋"
    ],
    "categoryTags": [
      "石板桥",
      "待考证",
      "时间轴起点"
    ],
    "relatedStoryIds": [
      "story-028"
    ],
    "x": 14,
    "y": 22,
    "sourceNote": "来源：拾光源点•先锋社区 1.0.pdf，第3页",
    "needsVerification": true,
    "imageStyle": "archive-map",
    "intro": "拾光源点提出“始于北宋，从石板桥发展而来”。",
    "period": "北宋",
    "tags": [
      "石板桥",
      "待考证",
      "时间轴起点"
    ],
    "storyCount": 1
  },
  {
    "id": "water-festival",
    "name": "番禺水色",
    "type": "非遗民俗",
    "address": "市桥水系相关，先锋社区内承载空间待定",
    "shortIntro": "水上出“色”的地方民俗线索。",
    "longIntro": "番禺水色列为传统民俗，市桥水色常取民间传说或戏曲故事并与水有关，可连接以水为脉的历史叙事。",
    "periodTags": [
      "传统民俗"
    ],
    "categoryTags": [
      "水色",
      "非遗",
      "水系"
    ],
    "relatedStoryIds": [
      "story-021"
    ],
    "x": 62,
    "y": 20,
    "sourceNote": "来源：2说明书第49页；市桥复心计划2025第33页",
    "needsVerification": true,
    "imageStyle": "water-festival",
    "intro": "水上出“色”的地方民俗线索。",
    "period": "传统民俗",
    "tags": [
      "水色",
      "非遗",
      "水系"
    ],
    "storyCount": 1
  },
  {
    "id": "roller-skating",
    "name": "全国轮滑之乡",
    "type": "社区生活 / 儿童运动",
    "address": "先锋小学及市桥相关空间",
    "shortIntro": "拾光源点将全国轮滑之乡列为先锋记忆。",
    "longIntro": "复心计划提到先锋小学轮滑队参与轮滑凤舞创作，可把儿童运动、非遗创新和社区活动串起来。",
    "periodTags": [
      "当代"
    ],
    "categoryTags": [
      "轮滑",
      "儿童",
      "三堂凤舞"
    ],
    "relatedStoryIds": [
      "story-025",
      "story-029"
    ],
    "x": 73,
    "y": 48,
    "sourceNote": "来源：拾光源点第3页；市桥复心计划2025第32页",
    "needsVerification": true,
    "imageStyle": "sports-memory",
    "intro": "拾光源点将全国轮滑之乡列为先锋记忆。",
    "period": "当代",
    "tags": [
      "轮滑",
      "儿童",
      "三堂凤舞"
    ],
    "storyCount": 2
  }
];

const TIMELINE_ITEMS = [
  {
    "id": "tl-song",
    "period": "北宋",
    "title": "石板桥线索与墟市开端",
    "description": "拾光源点资料把先锋记忆开场放在北宋石板桥，但桥址和文献仍需补证。",
    "relatedPlaces": [
      "song-bridge-clue"
    ],
    "relatedStoryIds": [
      "story-028"
    ],
    "tags": [
      "北宋",
      "石板桥",
      "待考证"
    ],
    "sourceNote": "来源：拾光源点•先锋社区 1.0.pdf，第3页",
    "needsVerification": true,
    "theme": "石板桥线索与墟市开端",
    "clue": "拾光源点资料把先锋记忆开场放在北宋石板桥，但桥址和文献仍需补证。",
    "placeId": "song-bridge-clue"
  },
  {
    "id": "tl-mingqing",
    "period": "明清",
    "title": "水陆贸易和谢地街巷",
    "description": "先锋大街-前锋大街所处谢地南临市桥水道，水体、码头、街市和氏族聚落共同形成以水为脉的商业市镇。",
    "relatedPlaces": [
      "xianfeng-street",
      "qianfeng-street",
      "fishbone-lanes"
    ],
    "relatedStoryIds": [
      "story-001",
      "story-027"
    ],
    "tags": [
      "明清",
      "水陆贸易",
      "鱼骨状街巷"
    ],
    "sourceNote": "来源：2说明书第41、51页",
    "needsVerification": false,
    "theme": "水陆贸易和谢地街巷",
    "clue": "先锋大街-前锋大街所处谢地南临市桥水道，水体、码头、街市和氏族聚落共同形成以水为脉的商业市镇。",
    "placeId": "xianfeng-street"
  },
  {
    "id": "tl-republic",
    "period": "民国",
    "title": "马路兴起与骑楼街面",
    "description": "民国1931年后市桥开辟马路，多条道路建成骑楼，老街商业从水路时代走向马路界面。",
    "relatedPlaces": [
      "qilou-street",
      "xianfeng-school"
    ],
    "relatedStoryIds": [
      "story-016",
      "story-026"
    ],
    "tags": [
      "民国",
      "骑楼",
      "文峰小学"
    ],
    "sourceNote": "来源：2说明书第39、41页；拾光源点第10页",
    "needsVerification": false,
    "theme": "马路兴起与骑楼街面",
    "clue": "民国1931年后市桥开辟马路，多条道路建成骑楼，老街商业从水路时代走向马路界面。",
    "placeId": "qilou-street"
  },
  {
    "id": "tl-early-prc",
    "period": "建国初期",
    "title": "先锋小学与红砖街巷",
    "description": "1949年先锋小学定名；五十年代之后前锋十八巷建成大量红砖建筑，形成后来的芳华记忆线索。",
    "relatedPlaces": [
      "xianfeng-school",
      "qianfeng-lane-18"
    ],
    "relatedStoryIds": [
      "story-013",
      "story-016"
    ],
    "tags": [
      "建国初期",
      "先锋小学",
      "红砖"
    ],
    "sourceNote": "来源：拾光源点第10页；2说明书第42页",
    "needsVerification": false,
    "theme": "先锋小学与红砖街巷",
    "clue": "1949年先锋小学定名；五十年代之后前锋十八巷建成大量红砖建筑，形成后来的芳华记忆线索。",
    "placeId": "xianfeng-school"
  },
  {
    "id": "tl-reform",
    "period": "改革开放",
    "title": "新兴大街、塘边大街与生活业态",
    "description": "改革开放前后，塘边大街和新兴大街出现；传统美食、社区商业和日常生活继续成为街区记忆。",
    "relatedPlaces": [
      "qianfeng-lane-18",
      "baimai",
      "lap-mei",
      "stone-lane"
    ],
    "relatedStoryIds": [
      "story-003",
      "story-006",
      "story-017",
      "story-018"
    ],
    "tags": [
      "改革开放",
      "新兴大街",
      "塘边大街",
      "美食"
    ],
    "sourceNote": "来源：2说明书第42、49页；拾光源点第3页",
    "needsVerification": true,
    "theme": "新兴大街、塘边大街与生活业态",
    "clue": "改革开放前后，塘边大街和新兴大街出现；传统美食、社区商业和日常生活继续成为街区记忆。",
    "placeId": "qianfeng-lane-18"
  },
  {
    "id": "tl-today",
    "period": "当代",
    "title": "拾光源点与老城市新活力",
    "description": "规划提出宜居社区、街区博物馆、广府文化体验街区；拾光源点面向儿童、乐龄、青年和亲子家庭。",
    "relatedPlaces": [
      "old-city-gate",
      "old-city-new-life",
      "xianfeng-school"
    ],
    "relatedStoryIds": [
      "story-016",
      "story-029",
      "story-030"
    ],
    "tags": [
      "当代",
      "老城市新活力",
      "街区博物馆"
    ],
    "sourceNote": "来源：4宣传册第19-22页；拾光源点第4、11页",
    "needsVerification": false,
    "theme": "拾光源点与老城市新活力",
    "clue": "规划提出宜居社区、街区博物馆、广府文化体验街区；拾光源点面向儿童、乐龄、青年和亲子家庭。",
    "placeId": "old-city-gate"
  },
  {
    "id": "tl-future",
    "period": "未来路线",
    "title": "从HTML Demo到社区长期数据库",
    "description": "项目路线建议从静态数据层升级到真实上传、管理员审核、Supabase数据库、AI问答、AR导览和线下互动屏。",
    "relatedPlaces": [
      "old-city-gate"
    ],
    "relatedStoryIds": [
      "story-030"
    ],
    "tags": [
      "未来路线",
      "Supabase",
      "AI问答",
      "审核"
    ],
    "sourceNote": "来源：01_project_brief.md；05_source_extraction_report.md",
    "needsVerification": false,
    "theme": "从HTML Demo到社区长期数据库",
    "clue": "项目路线建议从静态数据层升级到真实上传、管理员审核、Supabase数据库、AI问答、AR导览和线下互动屏。",
    "placeId": "old-city-gate"
  }
];

const STORIES = [
  {
    "id": "story-001",
    "title": "一面蚝壳墙，七个地址",
    "subtitle": "从墙体材料看见市桥水乡的建筑智慧",
    "category": "建筑记忆",
    "placeId": "oyster-wall-cluster",
    "placeName": "先锋社区蚝壳墙",
    "address": "前锋大街二巷10号；新兴大街2号；前锋大街27号；前锋大街十巷5-7号；塘边大街28号；先锋大街20号；先锋大街18号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "规划列出先锋社区蚝壳墙7处，并建议修缮、加固，与周边墙体一同保持建筑整体风格和结构完整。",
    "historicalBasis": "依据《保护发展规划说明书》第48页的历史环境要素地址表，以及《规划文本》第20页的蚝壳墙保护要求。",
    "spatialDetail": "7处蚝壳墙分布在前锋大街、先锋大街、新兴大街、塘边大街多个点位，是可被观察的墙体材料线索。",
    "visitorPrompt": "你能在墙面里找到贝壳排列的方向吗？",
    "tags": [
      "蚝壳墙",
      "历史环境要素",
      "青砖",
      "街巷"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：贝壳纹理墙面，不是真实照片",
    "colorTheme": "shell-cream",
    "excerpt": "从墙体材料看见市桥水乡的建筑智慧。规划列出先锋社区蚝壳墙7处，并建议修缮、加固，与周边墙体一同保持建筑整体风格和结构完整。",
    "fullText": "规划列出先锋社区蚝壳墙7处，并建议修缮、加固，与周边墙体一同保持建筑整体风格和结构完整。7处蚝壳墙分布在前锋大街、先锋大街、新兴大街、塘边大街多个点位，是可被观察的墙体材料线索。给孩子和游客的问题是：你能在墙面里找到贝壳排列的方向吗？依据《保护发展规划说明书》第48页的历史环境要素地址表，以及《规划文本》第20页的蚝壳墙保护要求。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-002",
    "title": "前锋大街二巷10号的蚝壳墙",
    "subtitle": "支巷深处的一处墙体遗存",
    "category": "建筑记忆",
    "placeId": "qianfeng-2-10",
    "placeName": "前锋大街二巷10号蚝壳墙",
    "address": "前锋大街二巷10号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "地址被列入7处蚝壳墙之一，但本轮资料未提取到单体建筑详表。",
    "historicalBasis": "依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "spatialDetail": "位于前锋大街支巷系统，适合从主街进入支巷寻找材料细节。",
    "visitorPrompt": "如果只能拍一张墙面细节，你会拍材料、转角还是门框？",
    "tags": [
      "前锋大街二巷",
      "蚝壳墙",
      "支巷"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少该地址单体建筑详表、建造年代和现状照片。",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：支巷里的蚝壳墙肌理",
    "colorTheme": "shell-cream",
    "excerpt": "支巷深处的一处墙体遗存。地址被列入7处蚝壳墙之一，但本轮资料未提取到单体建筑详表。",
    "fullText": "地址被列入7处蚝壳墙之一，但本轮资料未提取到单体建筑详表。位于前锋大街支巷系统，适合从主街进入支巷寻找材料细节。给孩子和游客的问题是：如果只能拍一张墙面细节，你会拍材料、转角还是门框？这条故事先保留为资料线索，不扩写成具体居民故事。依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-003",
    "title": "新兴大街2号的青砖与蚝壳",
    "subtitle": "一处跨门牌记录的传统建筑线索",
    "category": "建筑记忆",
    "placeId": "xinxing-2",
    "placeName": "新兴大街2号 / 前锋大街40号",
    "address": "新兴大街2号；前锋大街40号",
    "timeLabel": "清末",
    "period": "清末",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "图集详表写为清末镬耳山墙青砖民居，墙体含青砖墙、蚝壳墙，装修含砖雕、浮雕，保存状况一般。",
    "historicalBasis": "依据《保护发展规划文本》第48页单体建筑详表，同时说明书第48页将新兴大街2号列入蚝壳墙地址。",
    "spatialDetail": "该点位把新兴大街与前锋大街40号联系在一起，显示门牌和街巷关系需要在现场继续核对。",
    "visitorPrompt": "一个房子有两个地址，会给后人找档案带来什么麻烦？",
    "tags": [
      "新兴大街",
      "蚝壳墙",
      "镬耳山墙",
      "清末"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "1先锋大街前锋大街保护发展规划(文本）.pdf",
    "sourcePage": "第48页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：青砖、蚝壳墙和镬耳山墙",
    "colorTheme": "heritage-teal",
    "excerpt": "一处跨门牌记录的传统建筑线索。图集详表写为清末镬耳山墙青砖民居，墙体含青砖墙、蚝壳墙，装修含砖雕、浮雕，保存状况一般。",
    "fullText": "图集详表写为清末镬耳山墙青砖民居，墙体含青砖墙、蚝壳墙，装修含砖雕、浮雕，保存状况一般。该点位把新兴大街与前锋大街40号联系在一起，显示门牌和街巷关系需要在现场继续核对。给孩子和游客的问题是：一个房子有两个地址，会给后人找档案带来什么麻烦？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：1先锋大街前锋大街保护发展规划(文本）.pdf，第48页",
    "sourceRef": "1先锋大街前锋大街保护发展规划(文本）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-004",
    "title": "前锋大街27号的蚝壳墙",
    "subtitle": "主街界面上的材料观察点",
    "category": "建筑记忆",
    "placeId": "qianfeng-27",
    "placeName": "前锋大街27号蚝壳墙",
    "address": "前锋大街27号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "地址被列入7处蚝壳墙之一，但未提取到单体建筑详表。",
    "historicalBasis": "依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "spatialDetail": "位于前锋大街主街界面，可用于观察传统材料如何出现在日常街道中。",
    "visitorPrompt": "站在主街上看，这面墙是显眼还是容易被忽略？",
    "tags": [
      "前锋大街",
      "蚝壳墙",
      "主街"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少该地址单体建筑详表、现状照片和具体保护状态。",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：主街边的蚝壳墙",
    "colorTheme": "shell-cream",
    "excerpt": "主街界面上的材料观察点。地址被列入7处蚝壳墙之一，但未提取到单体建筑详表。",
    "fullText": "地址被列入7处蚝壳墙之一，但未提取到单体建筑详表。位于前锋大街主街界面，可用于观察传统材料如何出现在日常街道中。给孩子和游客的问题是：站在主街上看，这面墙是显眼还是容易被忽略？这条故事先保留为资料线索，不扩写成具体居民故事。依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-005",
    "title": "十巷还是七巷？5-7号的档案校对",
    "subtitle": "一处必须保留冲突状态的蚝壳墙线索",
    "category": "建筑记忆",
    "placeId": "qianfeng-5-7-conflict",
    "placeName": "前锋大街十巷5-7号 / 七巷5-7号",
    "address": "前锋大街十巷5-7号；另见前锋大街七巷5-7号",
    "timeLabel": "清末线索",
    "period": "清末线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "说明书地址表写“十巷5-7号”；图集详表写“七巷5-7号”，且描述为清末镬耳山墙青砖民居，一侧山墙为蚝壳墙。",
    "historicalBasis": "依据《保护发展规划说明书》第48页和《保护发展规划文本》第49页，两份资料出现巷名差异。",
    "spatialDetail": "该建筑体量较大，蚝壳墙面积巨大，保存状况较差；但巷名冲突不能在数据层擅自合并。",
    "visitorPrompt": "请带着地图去现场核对：到底是十巷还是七巷？",
    "tags": [
      "蚝壳墙",
      "地址冲突",
      "档案校对"
    ],
    "credibility": "conflict",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf；1先锋大街前锋大街保护发展规划(文本）.pdf",
    "sourcePage": "说明书第48页；文本第49页",
    "needsVerification": true,
    "missingInfo": "需现场或图纸核对巷名，确认“十巷5-7号”和“七巷5-7号”是否为同一处。",
    "imageStyle": "archive-map",
    "imageCaption": "CSS示意：待核对的档案地图卡",
    "colorTheme": "archive-ink",
    "excerpt": "一处必须保留冲突状态的蚝壳墙线索。说明书地址表写“十巷5-7号”；图集详表写“七巷5-7号”，且描述为清末镬耳山墙青砖民居，一侧山墙为蚝壳墙。",
    "fullText": "说明书地址表写“十巷5-7号”；图集详表写“七巷5-7号”，且描述为清末镬耳山墙青砖民居，一侧山墙为蚝壳墙。该建筑体量较大，蚝壳墙面积巨大，保存状况较差；但巷名冲突不能在数据层擅自合并。给孩子和游客的问题是：请带着地图去现场核对：到底是十巷还是七巷？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf；1先锋大街前锋大街保护发展规划(文本）.pdf，说明书第48页；文本第49页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf；1先锋大街前锋大街保护发展规划(文本）.pdf 说明书第48页；文本第49页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-006",
    "title": "塘边大街28号的蚝壳墙",
    "subtitle": "街名里保留着水边地形的记忆",
    "category": "建筑记忆",
    "placeId": "tangbian-28",
    "placeName": "塘边大街28号蚝壳墙",
    "address": "塘边大街28号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "塘边大街28号被列为7处蚝壳墙之一，但单体建筑细节未提取。",
    "historicalBasis": "依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "spatialDetail": "位于塘边大街片区，提示先锋社区的历史环境要素并不只在先锋、前锋两条主街。",
    "visitorPrompt": "你觉得“塘边”这个名字保留了什么地形记忆？",
    "tags": [
      "塘边大街",
      "蚝壳墙",
      "水系记忆"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少该地址单体建筑详表、墙体现状和现场照片。",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：水边街名与蚝壳墙",
    "colorTheme": "water-blue",
    "excerpt": "街名里保留着水边地形的记忆。塘边大街28号被列为7处蚝壳墙之一，但单体建筑细节未提取。",
    "fullText": "塘边大街28号被列为7处蚝壳墙之一，但单体建筑细节未提取。位于塘边大街片区，提示先锋社区的历史环境要素并不只在先锋、前锋两条主街。给孩子和游客的问题是：你觉得“塘边”这个名字保留了什么地形记忆？依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-007",
    "title": "先锋大街20号的蚝壳墙",
    "subtitle": "在先锋大街比较青砖与贝壳肌理",
    "category": "建筑记忆",
    "placeId": "xianfeng-20",
    "placeName": "先锋大街20号蚝壳墙",
    "address": "先锋大街20号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "地址被列入7处蚝壳墙之一，资料建议蚝壳墙修缮时保持建筑总体风格和结构完整。",
    "historicalBasis": "依据《保护发展规划说明书》第48页地址表和《规划文本》第20页保护要求。",
    "spatialDetail": "位于先锋大街主街系统，可和先锋大街18号形成连续观察点。",
    "visitorPrompt": "你能分辨青砖墙和蚝壳墙的触感差异吗？",
    "tags": [
      "先锋大街",
      "蚝壳墙",
      "材料观察"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少该地址单体建筑详表和现状照片。",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：先锋大街墙体材料观察",
    "colorTheme": "shell-cream",
    "excerpt": "在先锋大街比较青砖与贝壳肌理。地址被列入7处蚝壳墙之一，资料建议蚝壳墙修缮时保持建筑总体风格和结构完整。",
    "fullText": "地址被列入7处蚝壳墙之一，资料建议蚝壳墙修缮时保持建筑总体风格和结构完整。位于先锋大街主街系统，可和先锋大街18号形成连续观察点。给孩子和游客的问题是：你能分辨青砖墙和蚝壳墙的触感差异吗？依据《保护发展规划说明书》第48页地址表和《规划文本》第20页保护要求。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-008",
    "title": "先锋大街18号的蚝壳墙",
    "subtitle": "和20号一起形成连续遗存任务",
    "category": "建筑记忆",
    "placeId": "xianfeng-18",
    "placeName": "先锋大街18号蚝壳墙",
    "address": "先锋大街18号",
    "timeLabel": "明清至近代线索",
    "period": "明清至近代线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "地址被列入7处蚝壳墙之一，但单体细节未提取。",
    "historicalBasis": "依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "spatialDetail": "与先锋大街20号相近，适合设计“找到18号后继续找20号”的儿童地图任务。",
    "visitorPrompt": "找到18号后，试着继续找20号，看看墙面有什么变化。",
    "tags": [
      "先锋大街",
      "蚝壳墙",
      "儿童任务"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少该地址单体建筑详表、现状照片和准确相邻关系。",
    "imageStyle": "oyster-wall",
    "imageCaption": "CSS示意：连续门牌的蚝壳墙路线",
    "colorTheme": "shell-cream",
    "excerpt": "和20号一起形成连续遗存任务。地址被列入7处蚝壳墙之一，但单体细节未提取。",
    "fullText": "地址被列入7处蚝壳墙之一，但单体细节未提取。与先锋大街20号相近，适合设计“找到18号后继续找20号”的儿童地图任务。给孩子和游客的问题是：找到18号后，试着继续找20号，看看墙面有什么变化。依据《保护发展规划说明书》第48页蚝壳墙地址表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "oyster"
  },
  {
    "id": "story-009",
    "title": "两口古井的公共记忆",
    "subtitle": "水边生活不只在河涌，也在井旁",
    "category": "建筑记忆",
    "placeId": "old-well",
    "placeName": "先锋社区古井",
    "address": "塘边大街三巷6号旁；前锋大街五巷11号北侧",
    "timeLabel": "传统生活线索",
    "period": "传统生活线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "规划列出古井2处，并建议设置标识牌、整治周边环境，保护材质、砌筑形式和水质。",
    "historicalBasis": "依据《保护发展规划说明书》第48页古井地址表，以及《规划文本》第19页古井保护要求。",
    "spatialDetail": "两口古井分别位于塘边大街三巷和前锋大街五巷，可作为公共景观和生活记忆节点。",
    "visitorPrompt": "如果给古井旁加一块牌，你最想写哪三个问题？",
    "tags": [
      "古井",
      "公共空间",
      "生活记忆"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "well-water",
    "imageCaption": "CSS示意：古井与水纹",
    "colorTheme": "water-blue",
    "excerpt": "水边生活不只在河涌，也在井旁。规划列出古井2处，并建议设置标识牌、整治周边环境，保护材质、砌筑形式和水质。",
    "fullText": "规划列出古井2处，并建议设置标识牌、整治周边环境，保护材质、砌筑形式和水质。两口古井分别位于塘边大街三巷和前锋大街五巷，可作为公共景观和生活记忆节点。给孩子和游客的问题是：如果给古井旁加一块牌，你最想写哪三个问题？依据《保护发展规划说明书》第48页古井地址表，以及《规划文本》第19页古井保护要求。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "well"
  },
  {
    "id": "story-010",
    "title": "塘边大街三巷6号旁的古井",
    "subtitle": "一口井旁的小型公共景观节点",
    "category": "建筑记忆",
    "placeId": "tangbian-well",
    "placeName": "塘边大街三巷古井",
    "address": "塘边大街三巷6号旁",
    "timeLabel": "传统生活线索",
    "period": "传统生活线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "该地址被列为两处古井之一，规划建议古井不宜覆盖，并保持原有色彩、材质、砌筑形式。",
    "historicalBasis": "依据《保护发展规划说明书》第48页和《规划文本》第19页。",
    "spatialDetail": "位于塘边大街三巷旁，街名和古井共同提示水边生活尺度。",
    "visitorPrompt": "这口井旁边适合放座椅、故事牌还是儿童观察任务？",
    "tags": [
      "古井",
      "塘边大街",
      "水边生活"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少井龄、井名、使用故事和现状照片。",
    "imageStyle": "well-water",
    "imageCaption": "CSS示意：塘边大街古井",
    "colorTheme": "water-blue",
    "excerpt": "一口井旁的小型公共景观节点。该地址被列为两处古井之一，规划建议古井不宜覆盖，并保持原有色彩、材质、砌筑形式。",
    "fullText": "该地址被列为两处古井之一，规划建议古井不宜覆盖，并保持原有色彩、材质、砌筑形式。位于塘边大街三巷旁，街名和古井共同提示水边生活尺度。给孩子和游客的问题是：这口井旁边适合放座椅、故事牌还是儿童观察任务？依据《保护发展规划说明书》第48页和《规划文本》第19页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "well"
  },
  {
    "id": "story-011",
    "title": "前锋大街五巷11号北侧的古井",
    "subtitle": "五巷里的水与宅线索",
    "category": "建筑记忆",
    "placeId": "qianfeng-well",
    "placeName": "前锋大街五巷古井",
    "address": "前锋大街五巷11号北侧",
    "timeLabel": "传统生活线索",
    "period": "传统生活线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "该地址被列为两处古井之一，可与前锋大街五巷18、20号传统民居线索组成支巷路线。",
    "historicalBasis": "依据《保护发展规划说明书》第48页古井地址表。",
    "spatialDetail": "位于前锋大街五巷，适合观察古井、内院、花岗岩条石铺地和传统民居之间的关系。",
    "visitorPrompt": "沿五巷走一遍，哪些地方还看得出老宅和水的关系？",
    "tags": [
      "古井",
      "前锋五巷",
      "支巷路线"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "缺少井龄、井名、使用故事和现场状态。",
    "imageStyle": "well-water",
    "imageCaption": "CSS示意：支巷里的古井",
    "colorTheme": "water-blue",
    "excerpt": "五巷里的水与宅线索。该地址被列为两处古井之一，可与前锋大街五巷18、20号传统民居线索组成支巷路线。",
    "fullText": "该地址被列为两处古井之一，可与前锋大街五巷18、20号传统民居线索组成支巷路线。位于前锋大街五巷，适合观察古井、内院、花岗岩条石铺地和传统民居之间的关系。给孩子和游客的问题是：沿五巷走一遍，哪些地方还看得出老宅和水的关系？依据《保护发展规划说明书》第48页古井地址表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "well"
  },
  {
    "id": "story-012",
    "title": "麻石巷，脚下的档案",
    "subtitle": "低头看见街巷肌理",
    "category": "建筑记忆",
    "placeId": "stone-lane",
    "placeName": "麻石巷石板路",
    "address": "新兴大街；先锋大街四巷；前锋大街五巷18号内院；塘边大街八巷；第5处待补充",
    "timeLabel": "传统街巷线索",
    "period": "传统街巷线索",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "规划列出麻石巷5处，但可提取地址只有4处；保护要求是不宜移除或覆盖，修缮应保留格局、肌理和风貌。",
    "historicalBasis": "依据《保护发展规划说明书》第48页和《规划文本》第19-20页。",
    "spatialDetail": "麻石板出现在新兴大街、先锋四巷、前锋五巷内院、塘边八巷等位置，是脚下可见的历史环境要素。",
    "visitorPrompt": "你走过麻石板时，会不会放慢脚步？",
    "tags": [
      "麻石巷",
      "石板路",
      "街巷肌理"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第48页",
    "needsVerification": true,
    "missingInfo": "资料写麻石巷5处，但地址表只提取到4处，第5处需人工补充或OCR图纸。",
    "imageStyle": "stone-lane",
    "imageCaption": "CSS示意：麻石板铺装",
    "colorTheme": "heritage-teal",
    "excerpt": "低头看见街巷肌理。规划列出麻石巷5处，但可提取地址只有4处；保护要求是不宜移除或覆盖，修缮应保留格局、肌理和风貌。",
    "fullText": "规划列出麻石巷5处，但可提取地址只有4处；保护要求是不宜移除或覆盖，修缮应保留格局、肌理和风貌。麻石板出现在新兴大街、先锋四巷、前锋五巷内院、塘边八巷等位置，是脚下可见的历史环境要素。给孩子和游客的问题是：你走过麻石板时，会不会放慢脚步？依据《保护发展规划说明书》第48页和《规划文本》第19-20页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第48页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第48页",
    "legacyImageStyle": "lane"
  },
  {
    "id": "story-013",
    "title": "前锋十八巷，红砖里的芳华记忆",
    "subtitle": "从红砖建筑读五六十年代街区想象",
    "category": "建筑记忆",
    "placeId": "qianfeng-lane-18",
    "placeName": "前锋十八巷",
    "address": "前锋大街十八巷",
    "timeLabel": "20世纪50-60年代以后",
    "period": "建国初期",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "五十年代之后，前锋大街西侧部分被拆除，在今前锋十八巷建成大量红砖建筑；规划将其设为芳华记忆轴。",
    "historicalBasis": "依据《保护发展规划说明书》第42页和《规划宣传册》第20页。",
    "spatialDetail": "红砖建筑集中，部分有二层阳台结构，规划建议修葺后引入番禺地道美食和休闲业态。",
    "visitorPrompt": "红砖、阳台、小店面，哪一个最能让你想到旧年代？",
    "tags": [
      "前锋十八巷",
      "红砖建筑",
      "芳华记忆"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf；4先锋大街前锋大街保护发展规划（宣传册）.pdf",
    "sourcePage": "说明书第42页；宣传册第20页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "red-brick",
    "imageCaption": "CSS示意：红砖窄巷",
    "colorTheme": "red-brick",
    "excerpt": "从红砖建筑读五六十年代街区想象。五十年代之后，前锋大街西侧部分被拆除，在今前锋十八巷建成大量红砖建筑；规划将其设为芳华记忆轴。",
    "fullText": "五十年代之后，前锋大街西侧部分被拆除，在今前锋十八巷建成大量红砖建筑；规划将其设为芳华记忆轴。红砖建筑集中，部分有二层阳台结构，规划建议修葺后引入番禺地道美食和休闲业态。给孩子和游客的问题是：红砖、阳台、小店面，哪一个最能让你想到旧年代？依据《保护发展规划说明书》第42页和《规划宣传册》第20页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf；4先锋大街前锋大街保护发展规划（宣传册）.pdf，说明书第42页；宣传册第20页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf；4先锋大街前锋大街保护发展规划（宣传册）.pdf 说明书第42页；宣传册第20页",
    "legacyImageStyle": "market"
  },
  {
    "id": "story-014",
    "title": "先锋大街四巷门楼",
    "subtitle": "一条巷子的入口和边界",
    "category": "建筑记忆",
    "placeId": "xianfeng-gatehouse",
    "placeName": "先锋四巷门楼",
    "address": "先锋大街四巷巷口",
    "timeLabel": "明清",
    "period": "明清",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "先锋四巷门楼为广州市历史建筑，砖木结构，正面青砖丝缝砖墙饰面，檐口下有雕花封檐板，两侧砖雕墀头。",
    "historicalBasis": "依据《保护发展规划文本》第43页历史建筑详表。",
    "spatialDetail": "门楼下有麻石墙基及线脚石门框，内侧有神龛，是巷道入口的识别物。",
    "visitorPrompt": "门楼让你觉得这是通道，还是一个小社区的门面？",
    "tags": [
      "门楼",
      "历史建筑",
      "先锋四巷"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "1先锋大街前锋大街保护发展规划(文本）.pdf",
    "sourcePage": "第43页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "stone-lane",
    "imageCaption": "CSS示意：青砖门楼与麻石门框",
    "colorTheme": "heritage-teal",
    "excerpt": "一条巷子的入口和边界。先锋四巷门楼为广州市历史建筑，砖木结构，正面青砖丝缝砖墙饰面，檐口下有雕花封檐板，两侧砖雕墀头。",
    "fullText": "先锋四巷门楼为广州市历史建筑，砖木结构，正面青砖丝缝砖墙饰面，檐口下有雕花封檐板，两侧砖雕墀头。门楼下有麻石墙基及线脚石门框，内侧有神龛，是巷道入口的识别物。给孩子和游客的问题是：门楼让你觉得这是通道，还是一个小社区的门面？依据《保护发展规划文本》第43页历史建筑详表。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：1先锋大街前锋大街保护发展规划(文本）.pdf，第43页",
    "sourceRef": "1先锋大街前锋大街保护发展规划(文本）.pdf 第43页",
    "legacyImageStyle": "lane"
  },
  {
    "id": "story-015",
    "title": "前锋大街十二巷1号古民居",
    "subtitle": "三间两廊里的岭南清代民居",
    "category": "建筑记忆",
    "placeId": "qianfeng-12-house",
    "placeName": "前锋大街十二巷1号古民居",
    "address": "前锋大街十二巷1号",
    "timeLabel": "清代",
    "period": "清代",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "区登记不可移动文物，清代“三间两廊”式二层民居，占地160.01平方米，硬山顶、灰塑龙船脊、镬耳封火山墙、青砖墙、花岗岩墙基。",
    "historicalBasis": "依据《保护发展规划文本》第42页不可移动文物详表。",
    "spatialDetail": "大门向东，与主体建筑相隔天井，内有古井和当地居民称为“对朝”的客厅。",
    "visitorPrompt": "如果你是导览员，会先介绍屋顶、天井还是古井？",
    "tags": [
      "古民居",
      "不可移动文物",
      "三间两廊",
      "古井"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "1先锋大街前锋大街保护发展规划(文本）.pdf",
    "sourcePage": "第42页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "stone-lane",
    "imageCaption": "CSS示意：岭南古民居剖面",
    "colorTheme": "heritage-teal",
    "excerpt": "三间两廊里的岭南清代民居。区登记不可移动文物，清代“三间两廊”式二层民居，占地160.01平方米，硬山顶、灰塑龙船脊、镬耳封火山墙、青砖墙、花岗岩墙基。",
    "fullText": "区登记不可移动文物，清代“三间两廊”式二层民居，占地160.01平方米，硬山顶、灰塑龙船脊、镬耳封火山墙、青砖墙、花岗岩墙基。大门向东，与主体建筑相隔天井，内有古井和当地居民称为“对朝”的客厅。给孩子和游客的问题是：如果你是导览员，会先介绍屋顶、天井还是古井？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：1先锋大街前锋大街保护发展规划(文本）.pdf，第42页",
    "sourceRef": "1先锋大街前锋大街保护发展规划(文本）.pdf 第42页",
    "legacyImageStyle": "lane"
  },
  {
    "id": "story-016",
    "title": "先锋小学，从文峰祠到社区新地标",
    "subtitle": "教育记忆连接宗族祠堂、乡学和当代运营",
    "category": "学校记忆",
    "placeId": "xianfeng-school",
    "placeName": "先锋小学旧址",
    "address": "先锋社区原先锋小学",
    "timeLabel": "民国至当代",
    "period": "民国至当代",
    "storyteller": "社区展陈资料整理",
    "archiveDetail": "拾光源点资料称原址为谢氏文峰祠，民国时期兴办文峰小学，1949年定名先锋小学；后续计划保留教室格局。",
    "historicalBasis": "依据《拾光源点•先锋社区 1.0》第10页，以及《保护发展规划说明书》第41页关于文峰小学和谢地中心的说明。",
    "spatialDetail": "原先锋小学位于谢地正中，被规划视为社区核心节点，可承接成长工场、艺文生活、乐龄邻里。",
    "visitorPrompt": "一所学校搬进社区记忆项目后，还能教什么？",
    "tags": [
      "先锋小学",
      "文峰小学",
      "文峰祠",
      "教育"
    ],
    "credibility": "high",
    "sourceType": "社区展陈资料 + 官方规划资料",
    "sourceFile": "拾光源点•先锋社区 1.0.pdf；2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "拾光源点第10页；说明书第41页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "old-school",
    "imageCaption": "CSS示意：旧校园与操场线",
    "colorTheme": "school-green",
    "excerpt": "教育记忆连接宗族祠堂、乡学和当代运营。拾光源点资料称原址为谢氏文峰祠，民国时期兴办文峰小学，1949年定名先锋小学；后续计划保留教室格局。",
    "fullText": "拾光源点资料称原址为谢氏文峰祠，民国时期兴办文峰小学，1949年定名先锋小学；后续计划保留教室格局。原先锋小学位于谢地正中，被规划视为社区核心节点，可承接成长工场、艺文生活、乐龄邻里。给孩子和游客的问题是：一所学校搬进社区记忆项目后，还能教什么？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "社区展陈资料 + 官方规划资料：拾光源点•先锋社区 1.0.pdf；2先锋大街前锋大街保护发展规划(说明书）.pdf，拾光源点第10页；说明书第41页",
    "sourceRef": "拾光源点•先锋社区 1.0.pdf；2先锋大街前锋大街保护发展规划(说明书）.pdf 拾光源点第10页；说明书第41页",
    "legacyImageStyle": "school"
  },
  {
    "id": "story-017",
    "title": "市桥白卖，能进入街区的老味道",
    "subtitle": "可吃的档案，也需要继续补证",
    "category": "美食记忆",
    "placeId": "baimai",
    "placeName": "市桥白卖",
    "address": "先锋社区经营业态待定",
    "timeLabel": "传统技艺 / 当代活化",
    "period": "传统技艺 / 当代活化",
    "storyteller": "官方规划资料与社区展陈整理",
    "archiveDetail": "市桥白卖被列为传统技艺/传统美食，规划鼓励将其嵌入先锋社区经营业态；拾光源点也将其列为传统美食。",
    "historicalBasis": "依据《保护发展规划说明书》第49、67页和《拾光源点•先锋社区 1.0》第3页。",
    "spatialDetail": "可与前锋十八巷地道美食路线、社区食集或非遗体验空间结合，但具体店铺点位尚未确定。",
    "visitorPrompt": "如果市桥白卖成为任务奖励，你会怎么介绍它？",
    "tags": [
      "市桥白卖",
      "传统美食",
      "老番禺味道"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料 + 社区展陈资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf；拾光源点•先锋社区 1.0.pdf",
    "sourcePage": "说明书第49、67页；拾光源点第3页",
    "needsVerification": true,
    "missingInfo": "缺少做法、传承人、店铺资料和具体经营点位。",
    "imageStyle": "food-memory",
    "imageCaption": "CSS示意：传统美食档案卡",
    "colorTheme": "market-gold",
    "excerpt": "可吃的档案，也需要继续补证。市桥白卖被列为传统技艺/传统美食，规划鼓励将其嵌入先锋社区经营业态；拾光源点也将其列为传统美食。",
    "fullText": "市桥白卖被列为传统技艺/传统美食，规划鼓励将其嵌入先锋社区经营业态；拾光源点也将其列为传统美食。可与前锋十八巷地道美食路线、社区食集或非遗体验空间结合，但具体店铺点位尚未确定。给孩子和游客的问题是：如果市桥白卖成为任务奖励，你会怎么介绍它？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料 + 社区展陈资料：2先锋大街前锋大街保护发展规划(说明书）.pdf；拾光源点•先锋社区 1.0.pdf，说明书第49、67页；拾光源点第3页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf；拾光源点•先锋社区 1.0.pdf 说明书第49、67页；拾光源点第3页",
    "legacyImageStyle": "food"
  },
  {
    "id": "story-018",
    "title": "广式腊味，老街里的制作技艺",
    "subtitle": "从气味进入老番禺味道",
    "category": "美食记忆",
    "placeId": "lap-mei",
    "placeName": "广式腊味",
    "address": "先锋社区经营业态待定",
    "timeLabel": "传统技艺 / 当代活化",
    "period": "传统技艺 / 当代活化",
    "storyteller": "官方规划资料与社区展陈整理",
    "archiveDetail": "广式腊味制作技艺被列入传统技艺，拾光源点资料也把广式腊味列为先锋记忆中的传统美食。",
    "historicalBasis": "依据《保护发展规划文本》第10、20页和《拾光源点•先锋社区 1.0》第3页。",
    "spatialDetail": "可作为前锋十八巷美食主题之一，进入社区食集或老番禺味道路线。",
    "visitorPrompt": "你闻到腊味，会想到节日、街市还是家里的厨房？",
    "tags": [
      "广式腊味",
      "非遗",
      "传统技艺"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料 + 社区展陈资料",
    "sourceFile": "1先锋大街前锋大街保护发展规划(文本）.pdf；拾光源点•先锋社区 1.0.pdf",
    "sourcePage": "文本第10、20页；拾光源点第3页",
    "needsVerification": true,
    "missingInfo": "缺少具体作坊、传承人、制作流程和社区内落点。",
    "imageStyle": "food-memory",
    "imageCaption": "CSS示意：腊味与街市气味",
    "colorTheme": "market-gold",
    "excerpt": "从气味进入老番禺味道。广式腊味制作技艺被列入传统技艺，拾光源点资料也把广式腊味列为先锋记忆中的传统美食。",
    "fullText": "广式腊味制作技艺被列入传统技艺，拾光源点资料也把广式腊味列为先锋记忆中的传统美食。可作为前锋十八巷美食主题之一，进入社区食集或老番禺味道路线。给孩子和游客的问题是：你闻到腊味，会想到节日、街市还是家里的厨房？依据《保护发展规划文本》第10、20页和《拾光源点•先锋社区 1.0》第3页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料 + 社区展陈资料：1先锋大街前锋大街保护发展规划(文本）.pdf；拾光源点•先锋社区 1.0.pdf，文本第10、20页；拾光源点第3页",
    "sourceRef": "1先锋大街前锋大街保护发展规划(文本）.pdf；拾光源点•先锋社区 1.0.pdf 文本第10、20页；拾光源点第3页",
    "legacyImageStyle": "food"
  },
  {
    "id": "story-019",
    "title": "扒金山，只有名字先被留下",
    "subtitle": "等待居民补充的美食档案",
    "category": "美食记忆",
    "placeId": "bajinshan",
    "placeName": "扒金山",
    "address": "资料不足",
    "timeLabel": "资料不足",
    "period": "资料不足",
    "storyteller": "社区展陈资料整理",
    "archiveDetail": "拾光源点资料将扒金山列为先锋记忆中的传统美食，但本轮资料没有提取到做法、来源、店铺或传承信息。",
    "historicalBasis": "依据《拾光源点•先锋社区 1.0》第3页，仅能确认该名称出现在先锋记忆美食清单中。",
    "spatialDetail": "暂不能落具体点位，可作为“待补充的美食档案”邀请居民提供线索。",
    "visitorPrompt": "你知道扒金山是什么吗？请留下线索。",
    "tags": [
      "扒金山",
      "美食线索",
      "资料待补"
    ],
    "credibility": "low",
    "sourceType": "社区展陈资料",
    "sourceFile": "拾光源点•先锋社区 1.0.pdf",
    "sourcePage": "第3页",
    "needsVerification": true,
    "missingInfo": "缺少做法、来源、店铺、传承资料和空间点位。",
    "imageStyle": "food-memory",
    "imageCaption": "CSS示意：缺失食谱卡",
    "colorTheme": "market-gold",
    "excerpt": "等待居民补充的美食档案。拾光源点资料将扒金山列为先锋记忆中的传统美食，但本轮资料没有提取到做法、来源、店铺或传承信息。",
    "fullText": "拾光源点资料将扒金山列为先锋记忆中的传统美食，但本轮资料没有提取到做法、来源、店铺或传承信息。暂不能落具体点位，可作为“待补充的美食档案”邀请居民提供线索。给孩子和游客的问题是：你知道扒金山是什么吗？请留下线索。依据《拾光源点•先锋社区 1.0》第3页，仅能确认该名称出现在先锋记忆美食清单中。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "社区展陈资料：拾光源点•先锋社区 1.0.pdf，第3页",
    "sourceRef": "拾光源点•先锋社区 1.0.pdf 第3页",
    "legacyImageStyle": "food"
  },
  {
    "id": "story-020",
    "title": "姜埋奶，一份可嵌入街区的甜品记忆",
    "subtitle": "把“吃”变成理解地方生活的入口",
    "category": "美食记忆",
    "placeId": "ginger-milk",
    "placeName": "姜埋奶",
    "address": "先锋社区经营业态待定",
    "timeLabel": "传统美食 / 当代活化",
    "period": "传统美食 / 当代活化",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "姜埋奶被列为与番禺同源的传统美食，并被规划鼓励嵌入先锋社区经营业态。",
    "historicalBasis": "依据《保护发展规划说明书》第49、67页。",
    "spatialDetail": "可进入非遗体验、社区食集或乐龄邻里茶点场景，但资料未给出具体点位。",
    "visitorPrompt": "你会把姜埋奶放进儿童任务、乐龄茶点还是游客路线？",
    "tags": [
      "姜埋奶",
      "传统美食",
      "社区食集"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第49、67页",
    "needsVerification": true,
    "missingInfo": "缺少单独历史、做法、店铺和社区内经营点。",
    "imageStyle": "food-memory",
    "imageCaption": "CSS示意：温热甜品碗",
    "colorTheme": "market-gold",
    "excerpt": "把“吃”变成理解地方生活的入口。姜埋奶被列为与番禺同源的传统美食，并被规划鼓励嵌入先锋社区经营业态。",
    "fullText": "姜埋奶被列为与番禺同源的传统美食，并被规划鼓励嵌入先锋社区经营业态。可进入非遗体验、社区食集或乐龄邻里茶点场景，但资料未给出具体点位。给孩子和游客的问题是：你会把姜埋奶放进儿童任务、乐龄茶点还是游客路线？依据《保护发展规划说明书》第49、67页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第49、67页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第49、67页",
    "legacyImageStyle": "food"
  },
  {
    "id": "story-021",
    "title": "番禺水色，水上的故事牌",
    "subtitle": "把以水为脉讲成可以想象的表演",
    "category": "非遗文化",
    "placeId": "water-festival",
    "placeName": "番禺水色 / 市桥水色",
    "address": "市桥水系相关，先锋社区内承载空间待定",
    "timeLabel": "传统民俗",
    "period": "传统民俗",
    "storyteller": "官方规划资料与历史信息整理",
    "archiveDetail": "番禺水色列为传统民俗；市桥水色以水上出“色”为特色，内容常取民间传说或戏曲故事并与水有关。",
    "historicalBasis": "依据《保护发展规划说明书》第49页和《市桥复心计划2025》第33页。",
    "spatialDetail": "水色适合与市桥水道、以水为脉和水陆贸易线索结合，先锋社区内具体承载空间待定。",
    "visitorPrompt": "如果把水色做成互动屏，你想让哪一个故事从水面升起？",
    "tags": [
      "番禺水色",
      "市桥水色",
      "非遗",
      "水系"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料 + 历史信息整理",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf；市桥复心计划2025.pdf",
    "sourcePage": "说明书第49页；复心计划第33页",
    "needsVerification": true,
    "missingInfo": "保护单位和先锋社区内具体活动承载点需按最新名录核对。",
    "imageStyle": "water-festival",
    "imageCaption": "CSS示意：水波与灯彩",
    "colorTheme": "water-blue",
    "excerpt": "把以水为脉讲成可以想象的表演。番禺水色列为传统民俗；市桥水色以水上出“色”为特色，内容常取民间传说或戏曲故事并与水有关。",
    "fullText": "番禺水色列为传统民俗；市桥水色以水上出“色”为特色，内容常取民间传说或戏曲故事并与水有关。水色适合与市桥水道、以水为脉和水陆贸易线索结合，先锋社区内具体承载空间待定。给孩子和游客的问题是：如果把水色做成互动屏，你想让哪一个故事从水面升起？依据《保护发展规划说明书》第49页和《市桥复心计划2025》第33页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料 + 历史信息整理：2先锋大街前锋大街保护发展规划(说明书）.pdf；市桥复心计划2025.pdf，说明书第49页；复心计划第33页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf；市桥复心计划2025.pdf 说明书第49页；复心计划第33页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-022",
    "title": "市桥广绣，针脚里的地方美术",
    "subtitle": "把街区记忆绣成纹样",
    "category": "非遗文化",
    "placeId": "guangxiu",
    "placeName": "市桥广绣",
    "address": "非遗体验空间待定",
    "timeLabel": "传统美术 / 当代活化",
    "period": "传统美术 / 当代活化",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "广绣列为传统美术，并列有多位代表性传承人；规划鼓励将市桥广绣嵌入先锋社区经营业态。",
    "historicalBasis": "依据《保护发展规划说明书》第49页。",
    "spatialDetail": "可进入非遗体验馆、手作工坊、艺文生活空间，也可转成儿童纹样任务。",
    "visitorPrompt": "如果用广绣绣先锋社区，你会绣门楼、古井还是蚝壳墙？",
    "tags": [
      "市桥广绣",
      "传统美术",
      "手作"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第49页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "embroidery",
    "imageCaption": "CSS示意：广绣纹样地图",
    "colorTheme": "heritage-teal",
    "excerpt": "把街区记忆绣成纹样。广绣列为传统美术，并列有多位代表性传承人；规划鼓励将市桥广绣嵌入先锋社区经营业态。",
    "fullText": "广绣列为传统美术，并列有多位代表性传承人；规划鼓励将市桥广绣嵌入先锋社区经营业态。可进入非遗体验馆、手作工坊、艺文生活空间，也可转成儿童纹样任务。给孩子和游客的问题是：如果用广绣绣先锋社区，你会绣门楼、古井还是蚝壳墙？依据《保护发展规划说明书》第49页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第49页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第49页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-023",
    "title": "香云纱，薯莨布的手工时间",
    "subtitle": "浸染、晾晒和街区空间",
    "category": "非遗文化",
    "placeId": "xiangyunsha",
    "placeName": "香云纱 / 薯莨布",
    "address": "非遗体验空间待定",
    "timeLabel": "明清加工线索；二十世纪四五十年代流行",
    "period": "明清至近现代",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "资料说明明清时期先锋社区一带已集聚薯莨布加工业；香云纱制作工序多，以全手工浸染、晾晒为主。",
    "historicalBasis": "依据《保护发展规划说明书》第49页。",
    "spatialDetail": "适合进入非遗体验馆或艺文生活区，但具体作坊、人物和街巷点位未提取。",
    "visitorPrompt": "如果设计香云纱体验，你会做染色、晒布还是纹样拓印？",
    "tags": [
      "香云纱",
      "薯莨布",
      "传统技艺"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第49页",
    "needsVerification": true,
    "missingInfo": "缺少具体作坊、人物、街巷点位和展示空间。",
    "imageStyle": "embroidery",
    "imageCaption": "CSS示意：晒布和染色纹理",
    "colorTheme": "heritage-teal",
    "excerpt": "浸染、晾晒和街区空间。资料说明明清时期先锋社区一带已集聚薯莨布加工业；香云纱制作工序多，以全手工浸染、晾晒为主。",
    "fullText": "资料说明明清时期先锋社区一带已集聚薯莨布加工业；香云纱制作工序多，以全手工浸染、晾晒为主。适合进入非遗体验馆或艺文生活区，但具体作坊、人物和街巷点位未提取。给孩子和游客的问题是：如果设计香云纱体验，你会做染色、晒布还是纹样拓印？依据《保护发展规划说明书》第49页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第49页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第49页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-024",
    "title": "广东醒狮，街区里的舞动记忆",
    "subtitle": "节庆声音可以成为社区档案",
    "category": "非遗文化",
    "placeId": "lion-dance",
    "placeName": "广东醒狮",
    "address": "先锋社区活动空间待定",
    "timeLabel": "传统舞蹈 / 当代活动",
    "period": "传统舞蹈 / 当代活动",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "广东醒狮被列为传统舞蹈，但本轮资料未提取到先锋社区内具体队伍或活动记录。",
    "historicalBasis": "依据《保护发展规划文本》第10、20页和《规划宣传册》第10页。",
    "spatialDetail": "可与社区舞台、活动广场、民俗广场等公共空间绑定，形成节庆声音类故事。",
    "visitorPrompt": "醒狮出现时，街巷会先被声音改变，还是被人群改变？",
    "tags": [
      "广东醒狮",
      "非遗",
      "社区活动"
    ],
    "credibility": "medium",
    "sourceType": "官方规划资料",
    "sourceFile": "1先锋大街前锋大街保护发展规划(文本）.pdf",
    "sourcePage": "第10、20页",
    "needsVerification": true,
    "missingInfo": "缺少先锋社区内具体队伍、活动时间、传承人和现场记录。",
    "imageStyle": "water-festival",
    "imageCaption": "CSS示意：节庆舞动与锣鼓节奏",
    "colorTheme": "future-coral",
    "excerpt": "节庆声音可以成为社区档案。广东醒狮被列为传统舞蹈，但本轮资料未提取到先锋社区内具体队伍或活动记录。",
    "fullText": "广东醒狮被列为传统舞蹈，但本轮资料未提取到先锋社区内具体队伍或活动记录。可与社区舞台、活动广场、民俗广场等公共空间绑定，形成节庆声音类故事。给孩子和游客的问题是：醒狮出现时，街巷会先被声音改变，还是被人群改变？依据《保护发展规划文本》第10、20页和《规划宣传册》第10页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：1先锋大街前锋大街保护发展规划(文本）.pdf，第10、20页",
    "sourceRef": "1先锋大街前锋大街保护发展规划(文本）.pdf 第10、20页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-025",
    "title": "三堂凤舞与先锋小学轮滑队",
    "subtitle": "古老凤舞遇见孩子们的速度",
    "category": "非遗文化",
    "placeId": "phoenix-skate",
    "placeName": "三堂凤舞 / 轮滑凤舞",
    "address": "先锋小学相关",
    "timeLabel": "清代线索；2000年创新线索",
    "period": "传统民俗 / 当代创新",
    "storyteller": "历史信息整理",
    "archiveDetail": "三堂凤舞有“巡游”“盘山”程式；2000年市桥文化站与先锋小学轮滑队联合创作轮滑凤舞，组建先锋小学“三堂凤队”。",
    "historicalBasis": "依据《市桥复心计划2025》第32页。",
    "spatialDetail": "可连接先锋小学、全国轮滑之乡、儿童运动任务，把非遗创新放到校园和街区活动中。",
    "visitorPrompt": "如果凤舞踩着轮滑穿过街巷，它会经过哪些点位？",
    "tags": [
      "三堂凤舞",
      "轮滑凤舞",
      "先锋小学",
      "儿童任务"
    ],
    "credibility": "medium",
    "sourceType": "历史信息整理",
    "sourceFile": "市桥复心计划2025.pdf",
    "sourcePage": "第32页",
    "needsVerification": true,
    "missingInfo": "失传、重排、创新过程需要更多资料核实。",
    "imageStyle": "sports-memory",
    "imageCaption": "CSS示意：凤凰纹样与轮滑轨迹",
    "colorTheme": "sport-blue",
    "excerpt": "古老凤舞遇见孩子们的速度。三堂凤舞有“巡游”“盘山”程式；2000年市桥文化站与先锋小学轮滑队联合创作轮滑凤舞，组建先锋小学“三堂凤队”。",
    "fullText": "三堂凤舞有“巡游”“盘山”程式；2000年市桥文化站与先锋小学轮滑队联合创作轮滑凤舞，组建先锋小学“三堂凤队”。可连接先锋小学、全国轮滑之乡、儿童运动任务，把非遗创新放到校园和街区活动中。给孩子和游客的问题是：如果凤舞踩着轮滑穿过街巷，它会经过哪些点位？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "历史信息整理：市桥复心计划2025.pdf，第32页",
    "sourceRef": "市桥复心计划2025.pdf 第32页",
    "legacyImageStyle": "skate"
  },
  {
    "id": "story-026",
    "title": "民国骑楼街面，从小街到马路",
    "subtitle": "商业界面和交通变化一起改变老城",
    "category": "商业记忆",
    "placeId": "qilou-street",
    "placeName": "市桥民国骑楼街面",
    "address": "大北路、桥东路、大东路、大西路、大南路、东涌路、海傍东路等",
    "timeLabel": "民国1931年后",
    "period": "民国",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "民国1931年后市桥开辟马路，多条道路建成骑楼；后来因交通需求，骑楼街被改建为更宽道路。",
    "historicalBasis": "依据《保护发展规划说明书》第39页。",
    "spatialDetail": "骑楼解释了水路商业向马路商业的转变，也让遮阳避雨的商业界面成为城市记忆。",
    "visitorPrompt": "你觉得骑楼是商业空间、遮雨空间，还是城市记忆？",
    "tags": [
      "民国",
      "骑楼",
      "马路",
      "商业"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第39页",
    "needsVerification": true,
    "missingInfo": "先锋社区内具体骑楼单体需另查。",
    "imageStyle": "qilou-street",
    "imageCaption": "CSS示意：骑楼街面和马路",
    "colorTheme": "archive-ink",
    "excerpt": "商业界面和交通变化一起改变老城。民国1931年后市桥开辟马路，多条道路建成骑楼；后来因交通需求，骑楼街被改建为更宽道路。",
    "fullText": "民国1931年后市桥开辟马路，多条道路建成骑楼；后来因交通需求，骑楼街被改建为更宽道路。骑楼解释了水路商业向马路商业的转变，也让遮阳避雨的商业界面成为城市记忆。给孩子和游客的问题是：你觉得骑楼是商业空间、遮雨空间，还是城市记忆？依据《保护发展规划说明书》第39页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第39页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第39页",
    "legacyImageStyle": "qilou"
  },
  {
    "id": "story-027",
    "title": "鱼骨状街巷，谢地的骨架",
    "subtitle": "能走进去的历史空间结构",
    "category": "建筑记忆",
    "placeId": "fishbone-lanes",
    "placeName": "先锋大街-前锋大街鱼骨状街巷",
    "address": "先锋大街、前锋大街及支巷",
    "timeLabel": "谢地聚居地形成以来",
    "period": "明清至当代",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "以谢地大街为主干，南北分出十数条巷道，形成鱼骨状格局；2条主街和25条内部街巷共同构成历史空间格局。",
    "historicalBasis": "依据《保护发展规划说明书》第41、48、65页和《规划宣传册》第10页。",
    "spatialDetail": "主街像鱼脊，支巷像鱼刺，连接青砖房、红砖建筑、门楼、古井和麻石巷。",
    "visitorPrompt": "你能从地图上找出哪条是“鱼骨”的主脊吗？",
    "tags": [
      "鱼骨状街巷",
      "谢地大街",
      "地图"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "2先锋大街前锋大街保护发展规划(说明书）.pdf",
    "sourcePage": "第41页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "archive-map",
    "imageCaption": "CSS示意：鱼骨状街巷图",
    "colorTheme": "archive-ink",
    "excerpt": "能走进去的历史空间结构。以谢地大街为主干，南北分出十数条巷道，形成鱼骨状格局；2条主街和25条内部街巷共同构成历史空间格局。",
    "fullText": "以谢地大街为主干，南北分出十数条巷道，形成鱼骨状格局；2条主街和25条内部街巷共同构成历史空间格局。主街像鱼脊，支巷像鱼刺，连接青砖房、红砖建筑、门楼、古井和麻石巷。给孩子和游客的问题是：你能从地图上找出哪条是“鱼骨”的主脊吗？依据《保护发展规划说明书》第41、48、65页和《规划宣传册》第10页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：2先锋大街前锋大街保护发展规划(说明书）.pdf，第41页",
    "sourceRef": "2先锋大街前锋大街保护发展规划(说明书）.pdf 第41页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-028",
    "title": "北宋石板桥，一条需要补证的开场线索",
    "subtitle": "只能做待考证起点，不能编成传说",
    "category": "建筑记忆",
    "placeId": "song-bridge-clue",
    "placeName": "北宋石板桥线索",
    "address": "具体位置资料不足",
    "timeLabel": "北宋线索",
    "period": "北宋",
    "storyteller": "社区展陈资料整理",
    "archiveDetail": "拾光源点资料称“这里始于北宋，从石板桥发展而来的繁荣墟市”，但没有提供桥址、桥名、文献来源和图像。",
    "historicalBasis": "依据《拾光源点•先锋社区 1.0》第3页，只能确认项目展陈中存在该线索。",
    "spatialDetail": "暂不能落具体点位，可放在时间轴开端和“待考证线索”地图点。",
    "visitorPrompt": "我们需要哪三种证据，才能把石板桥讲成完整故事？",
    "tags": [
      "北宋",
      "石板桥",
      "待考证"
    ],
    "credibility": "low",
    "sourceType": "社区展陈资料",
    "sourceFile": "拾光源点•先锋社区 1.0.pdf",
    "sourcePage": "第3页",
    "needsVerification": true,
    "missingInfo": "缺少具体桥址、桥名、文献依据、图像和现场位置。",
    "imageStyle": "archive-map",
    "imageCaption": "CSS示意：待考证的桥线索",
    "colorTheme": "archive-ink",
    "excerpt": "只能做待考证起点，不能编成传说。拾光源点资料称“这里始于北宋，从石板桥发展而来的繁荣墟市”，但没有提供桥址、桥名、文献来源和图像。",
    "fullText": "拾光源点资料称“这里始于北宋，从石板桥发展而来的繁荣墟市”，但没有提供桥址、桥名、文献来源和图像。暂不能落具体点位，可放在时间轴开端和“待考证线索”地图点。给孩子和游客的问题是：我们需要哪三种证据，才能把石板桥讲成完整故事？依据《拾光源点•先锋社区 1.0》第3页，只能确认项目展陈中存在该线索。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "社区展陈资料：拾光源点•先锋社区 1.0.pdf，第3页",
    "sourceRef": "拾光源点•先锋社区 1.0.pdf 第3页",
    "legacyImageStyle": "paper"
  },
  {
    "id": "story-029",
    "title": "全国轮滑之乡，孩子们的速度记忆",
    "subtitle": "儿童运动连接非遗创新",
    "category": "社区事件",
    "placeId": "roller-skating",
    "placeName": "全国轮滑之乡",
    "address": "先锋小学及市桥相关空间",
    "timeLabel": "当代",
    "period": "当代",
    "storyteller": "社区展陈资料与历史信息整理",
    "archiveDetail": "拾光源点称这里是全国轮滑之乡；复心计划提到先锋小学轮滑队参与轮滑凤舞创作。",
    "historicalBasis": "依据《拾光源点•先锋社区 1.0》第3页和《市桥复心计划2025》第32页。",
    "spatialDetail": "可与成长工场、运动体能、社区活动广场、三堂凤舞故事和儿童任务绑定。",
    "visitorPrompt": "你会设计一条“轮滑记忆路线”吗？",
    "tags": [
      "轮滑",
      "先锋小学",
      "儿童",
      "三堂凤舞"
    ],
    "credibility": "medium",
    "sourceType": "社区展陈资料 + 历史信息整理",
    "sourceFile": "拾光源点•先锋社区 1.0.pdf；市桥复心计划2025.pdf",
    "sourcePage": "拾光源点第3页；复心计划第32页",
    "needsVerification": true,
    "missingInfo": "具体称号来源、年份和赛事成绩需补充。",
    "imageStyle": "sports-memory",
    "imageCaption": "CSS示意：轮滑路线和速度线",
    "colorTheme": "sport-blue",
    "excerpt": "儿童运动连接非遗创新。拾光源点称这里是全国轮滑之乡；复心计划提到先锋小学轮滑队参与轮滑凤舞创作。",
    "fullText": "拾光源点称这里是全国轮滑之乡；复心计划提到先锋小学轮滑队参与轮滑凤舞创作。可与成长工场、运动体能、社区活动广场、三堂凤舞故事和儿童任务绑定。给孩子和游客的问题是：你会设计一条“轮滑记忆路线”吗？依据《拾光源点•先锋社区 1.0》第3页和《市桥复心计划2025》第32页。",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "社区展陈资料 + 历史信息整理：拾光源点•先锋社区 1.0.pdf；市桥复心计划2025.pdf，拾光源点第3页；复心计划第32页",
    "sourceRef": "拾光源点•先锋社区 1.0.pdf；市桥复心计划2025.pdf 拾光源点第3页；复心计划第32页",
    "legacyImageStyle": "skate"
  },
  {
    "id": "story-030",
    "title": "老城市新活力，不是把老街变新楼",
    "subtitle": "让旧空间重新服务居民",
    "category": "社区事件",
    "placeId": "old-city-new-life",
    "placeName": "先锋社区整体",
    "address": "先锋社区",
    "timeLabel": "当代更新",
    "period": "当代",
    "storyteller": "官方规划资料整理",
    "archiveDetail": "规划定位为“大湾区广府文化传承发展示范区”“老城市新活力的番禺新样本”，并提出宜居社区、街区博物馆、广府文化体验街区。",
    "historicalBasis": "依据《保护发展规划宣传册》第19-22页。",
    "spatialDetail": "原先锋小学为核心，先锋大街为文创体验轴，前锋大街为商业活力轴，前锋十八巷为芳华记忆轴。",
    "visitorPrompt": "你希望老街先变得更热闹，还是先变得更好住？",
    "tags": [
      "老城市新活力",
      "宜居社区",
      "街区博物馆",
      "广府文化体验"
    ],
    "credibility": "high",
    "sourceType": "官方规划资料",
    "sourceFile": "4先锋大街前锋大街保护发展规划（宣传册）.pdf",
    "sourcePage": "第19-22页",
    "needsVerification": false,
    "missingInfo": "",
    "imageStyle": "community-future",
    "imageCaption": "CSS示意：旧街区与新活动",
    "colorTheme": "future-coral",
    "excerpt": "让旧空间重新服务居民。规划定位为“大湾区广府文化传承发展示范区”“老城市新活力的番禺新样本”，并提出宜居社区、街区博物馆、广府文化体验街区。",
    "fullText": "规划定位为“大湾区广府文化传承发展示范区”“老城市新活力的番禺新样本”，并提出宜居社区、街区博物馆、广府文化体验街区。原先锋小学为核心，先锋大街为文创体验轴，前锋大街为商业活力轴，前锋十八巷为芳华记忆轴。给孩子和游客的问题是：你希望老街先变得更热闹，还是先变得更好住？",
    "visibility": "公开展示",
    "reviewStatus": "approved",
    "sourceNote": "官方规划资料：4先锋大街前锋大街保护发展规划（宣传册）.pdf，第19-22页",
    "sourceRef": "4先锋大街前锋大街保护发展规划（宣传册）.pdf 第19-22页",
    "legacyImageStyle": "night"
  }
];

const STORY_SOURCE_IMAGES = {
  "story-001": "assets/images/story-covers/story-001.jpg",
  "story-002": "assets/images/story-covers/story-002.jpg",
  "story-003": "assets/images/story-covers/story-003.jpg",
  "story-004": "assets/images/story-covers/story-004.jpg",
  "story-005": "assets/images/story-covers/story-005.jpg",
  "story-006": "assets/images/story-covers/story-006.jpg",
  "story-007": "assets/images/story-covers/story-007.jpg",
  "story-008": "assets/images/story-covers/story-008.jpg",
  "story-009": "assets/images/story-covers/story-009.jpg",
  "story-010": "assets/images/story-covers/story-010.jpg",
  "story-011": "assets/images/story-covers/story-011.jpg",
  "story-012": "assets/images/story-covers/story-012.jpg",
  "story-013": "assets/images/story-covers/story-013.jpg",
  "story-014": "assets/images/story-covers/story-014.jpg",
  "story-015": "assets/images/story-covers/story-015.jpg",
  "story-016": "assets/images/story-covers/story-016.jpg",
  "story-017": "assets/images/story-covers/story-017.jpg",
  "story-018": "assets/images/story-covers/story-018.jpg",
  "story-019": "assets/images/story-covers/story-019.jpg",
  "story-020": "assets/images/story-covers/story-020.jpg",
  "story-021": "assets/images/story-covers/story-021.jpg",
  "story-022": "assets/images/story-covers/story-022.jpg",
  "story-023": "assets/images/story-covers/story-023.jpg",
  "story-024": "assets/images/story-covers/story-024.jpg",
  "story-025": "assets/images/story-covers/story-025.jpg",
  "story-026": "assets/images/story-covers/story-026.jpg",
  "story-027": "assets/images/story-covers/story-027.jpg",
  "story-028": "assets/images/story-covers/story-028.jpg",
  "story-029": "assets/images/story-covers/story-029.jpg",
  "story-030": "assets/images/story-covers/story-030.jpg"
};

const QUESTS = [
  {
    "id": "quest-oyster-wall",
    "name": "找蚝壳墙",
    "difficulty": "简单",
    "points": 10,
    "theme": "在地图上找到蚝壳墙点位，观察墙面像不像贝壳排列。",
    "sourceNote": "来自02知识库历史环境要素章节",
    "relatedStoryIds": [
      "story-001"
    ]
  },
  {
    "id": "quest-stone-lane",
    "name": "观察麻石巷",
    "difficulty": "中等",
    "points": 15,
    "theme": "低头观察麻石板铺装，记录你看到的石板形状和路面变化。",
    "sourceNote": "来自02知识库麻石巷保护要求",
    "relatedStoryIds": [
      "story-012"
    ]
  },
  {
    "id": "quest-school-interview",
    "name": "采访长辈关于先锋小学",
    "difficulty": "挑战",
    "points": 25,
    "theme": "问一位长辈：他/她记得先锋小学、文峰小学或放学路吗？",
    "sourceNote": "来自01项目简报用户角色和02知识库先锋小学章节",
    "relatedStoryIds": [
      "story-016"
    ]
  },
  {
    "id": "quest-baimai",
    "name": "记录市桥白卖",
    "difficulty": "简单",
    "points": 10,
    "theme": "找资料或问家人：市桥白卖是什么？不要编做法，记录你找到的来源。",
    "sourceNote": "来自02知识库市桥白卖章节",
    "relatedStoryIds": [
      "story-017"
    ]
  },
  {
    "id": "quest-well",
    "name": "找古井线索",
    "difficulty": "中等",
    "points": 15,
    "theme": "在地图上找到两口古井地址，想一想古井旁边适合放什么故事牌。",
    "sourceNote": "来自02知识库古井地址表",
    "relatedStoryIds": [
      "story-009",
      "story-010",
      "story-011"
    ]
  },
  {
    "id": "quest-agent-question",
    "name": "问拾光仔一个问题",
    "difficulty": "简单",
    "points": 10,
    "theme": "问拾光仔：先锋大街和前锋大街是什么关系？看看答案有没有来源依据。",
    "sourceNote": "来自01项目简报Ask Xianfeng功能",
    "relatedStoryIds": [
      "story-027"
    ]
  },
  {
    "id": "quest-future-community",
    "name": "画未来先锋社区",
    "difficulty": "中等",
    "points": 15,
    "theme": "画一张你希望的未来先锋社区：哪里适合儿童，哪里适合长者？",
    "sourceNote": "来自01项目简报和04内容规则儿童任务",
    "relatedStoryIds": [
      "story-030"
    ]
  },
  {
    "id": "quest-fishbone-map",
    "name": "找鱼骨状街巷",
    "difficulty": "挑战",
    "points": 25,
    "theme": "在手绘地图上找主街和支巷，标出你认为的“鱼脊”和“鱼刺”。",
    "sourceNote": "来自02知识库鱼骨状街巷章节",
    "relatedStoryIds": [
      "story-027"
    ]
  },
  {
    "id": "quest-heritage-story",
    "name": "找一个非遗故事",
    "difficulty": "中等",
    "points": 15,
    "theme": "从番禺水色、市桥广绣、香云纱、广东醒狮、三堂凤舞里选一个讲给同学听。",
    "sourceNote": "来自02知识库非遗与地方文化章节",
    "relatedStoryIds": [
      "story-021",
      "story-022",
      "story-023",
      "story-024",
      "story-025"
    ]
  },
  {
    "id": "quest-map-light",
    "name": "完成地图点亮",
    "difficulty": "挑战",
    "points": 25,
    "theme": "依次点亮蚝壳墙、古井、先锋小学、前锋十八巷和市桥白卖五个点位。",
    "sourceNote": "来自04内容规则地图节点要求",
    "relatedStoryIds": [
      "story-001",
      "story-009",
      "story-016",
      "story-013",
      "story-017"
    ]
  },
  {
    "id": "quest-qilou",
    "name": "找骑楼街面线索",
    "difficulty": "中等",
    "points": 15,
    "theme": "读骑楼故事，说明为什么民国马路改变了市桥商业界面。",
    "sourceNote": "来自02知识库民国商业与骑楼章节",
    "relatedStoryIds": [
      "story-026"
    ]
  },
  {
    "id": "quest-missing-info",
    "name": "发现一个资料不足点",
    "difficulty": "挑战",
    "points": 25,
    "theme": "找到扒金山或北宋石板桥故事，写下还缺哪三种资料。",
    "sourceNote": "来自05提取报告资料不足清单",
    "relatedStoryIds": [
      "story-019",
      "story-028"
    ]
  }
];

const AGENT_QA = [
  {
    "question": "先锋社区为什么重要？",
    "keywords": [
      "先锋社区",
      "重要",
      "价值"
    ],
    "answer": "先锋社区重要，是因为这里把市桥老城、水陆贸易、鱼骨状街巷、古民居、非遗美食和学校记忆放在同一个地方。资料把它称为老城市新活力的番禺新样本，也像一座可以继续补充的街区博物馆。",
    "sourceNote": "来源：02知识库历史定位与规划定位章节"
  },
  {
    "question": "先锋大街和前锋大街是什么关系？",
    "keywords": [
      "先锋大街",
      "前锋大街",
      "关系"
    ],
    "answer": "可以把它们想成一组老街主线。资料说早期谢地大街后来成为前锋大街，文峰巷推测后来成为先锋大街；两条主街再分出很多支巷，形成鱼骨状街巷。",
    "sourceNote": "来源：2说明书第41-42页"
  },
  {
    "question": "什么是蚝壳墙？",
    "keywords": [
      "蚝壳墙",
      "蚝壳",
      "墙"
    ],
    "answer": "蚝壳墙就是把蚝壳作为墙体材料的一种传统做法。先锋社区资料列出7处蚝壳墙，它们不是装饰传说，而是实实在在需要保护和修缮的历史环境要素。",
    "sourceNote": "来源：2说明书第48页；1文本第20页"
  },
  {
    "question": "为什么有古井？",
    "keywords": [
      "古井",
      "为什么",
      "井"
    ],
    "answer": "古井和老街生活有关。资料列出两口古井，并要求保护井的材质、砌筑形式和水质。我们现在不能编井的传说，但可以把古井当作水边生活和公共空间的线索。",
    "sourceNote": "来源：2说明书第48页；1文本第19页"
  },
  {
    "question": "鱼骨状街巷是什么意思？",
    "keywords": [
      "鱼骨",
      "街巷",
      "鱼骨状"
    ],
    "answer": "鱼骨状街巷就是一条主街像鱼脊，许多小巷像鱼刺一样分出去。先锋大街、前锋大街和支巷就是这样的关系，走一走地图会比背概念更容易懂。",
    "sourceNote": "来源：2说明书第41页"
  },
  {
    "question": "市桥白卖是什么？",
    "keywords": [
      "市桥白卖",
      "白卖"
    ],
    "answer": "市桥白卖是资料里提到的传统美食和传统技艺线索，也被拾光源点列进先锋记忆。现在资料还缺具体做法和店铺，所以故事里会标注资料不足，邀请居民补充。",
    "sourceNote": "来源：2说明书第49、67页；拾光源点第3页"
  },
  {
    "question": "先锋小学为什么重要？",
    "keywords": [
      "先锋小学",
      "学校",
      "重要"
    ],
    "answer": "先锋小学连接了谢氏文峰祠、民国文峰小学和1949年后的先锋小学记忆。它在社区中心，也适合变成儿童任务、长者采访和社区活动的起点。",
    "sourceNote": "来源：拾光源点第10页；2说明书第41页"
  },
  {
    "question": "前锋十八巷有什么特别？",
    "keywords": [
      "前锋十八巷",
      "十八巷"
    ],
    "answer": "前锋十八巷特别在红砖建筑和芳华记忆。资料说五十年代后这里建成大量红砖建筑，规划把它设为芳华记忆轴，未来可和番禺地道美食、休闲活动结合。",
    "sourceNote": "来源：2说明书第42页；4宣传册第20页"
  },
  {
    "question": "什么是老城市新活力？",
    "keywords": [
      "老城市新活力",
      "新活力"
    ],
    "answer": "简单说，就是不把老街抹掉，而是让老街重新服务居民。资料把先锋社区定位为宜居社区、街区博物馆和广府文化体验街区，这就是老空间里的新生活。",
    "sourceNote": "来源：4宣传册第19页"
  },
  {
    "question": "这个项目怎么保护隐私？",
    "keywords": [
      "隐私",
      "保护",
      "公开范围"
    ],
    "answer": "Demo的数据规则要求先有授权同意，再选择公开范围。涉及真实人物、家庭、住址、儿童照片的内容不要直接公开，要先进入管理员审核。",
    "sourceNote": "来源：04_ui_content_rules.md上传、审核和隐私规则"
  },
  {
    "question": "小朋友怎么玩？",
    "keywords": [
      "小朋友",
      "儿童",
      "怎么玩",
      "任务"
    ],
    "answer": "小朋友可以点地图、读故事、做任务：找蚝壳墙、观察麻石巷、问拾光仔、采访长辈、画未来社区。完成任务可以获得积分和记忆通行证印章。",
    "sourceNote": "来源：01项目简报儿童任务；04内容规则"
  },
  {
    "question": "老人怎么参与？",
    "keywords": [
      "老人",
      "长者",
      "参与"
    ],
    "answer": "老人可以不用自己操作复杂系统，由志愿者代录入。最重要的是被尊重地讲述生活记忆，并确认哪些内容可以公开，哪些只适合存档。",
    "sourceNote": "来源：01项目简报用户角色；04隐私规则"
  },
  {
    "question": "管理员审核有什么用？",
    "keywords": [
      "管理员",
      "审核",
      "后台"
    ],
    "answer": "审核是为了避免错误、隐私泄露和未经同意的内容公开。管理员可以查看提交、编辑、删除、审核、加标签和导出数据，让故事库更可信。",
    "sourceNote": "来源：100个问题和答案.docx第117段；04内容规则"
  },
  {
    "question": "Demo 和正式版有什么区别？",
    "keywords": [
      "Demo",
      "正式版",
      "区别"
    ],
    "answer": "Demo主要是静态网站和本地数据，用来演示地图、故事、任务和问答。正式版才会接数据库、真实上传、真实AI、权限系统和长期保存。",
    "sourceNote": "来源：01项目简报项目边界和升级路线"
  },
  {
    "question": "后续为什么要接Supabase？",
    "keywords": [
      "Supabase",
      "数据库",
      "后续"
    ],
    "answer": "因为正式版需要保存很多真实记忆、图片、音频、审核状态和公开范围。Supabase这类数据库可以让资料长期保存、多人维护，也方便以后接AI检索。",
    "sourceNote": "来源：05提取报告后续写入data.js建议"
  },
  {
    "question": "资料不足是什么意思？",
    "keywords": [
      "资料不足",
      "缺失",
      "待补"
    ],
    "answer": "资料不足就是我们只知道一个线索，还不能把它写成完整故事。比如北宋石板桥缺具体桥址，扒金山缺做法和店铺，所以数据里会标注需要补充。",
    "sourceNote": "来源：05提取报告资料不足清单"
  }
];

const CONTENT_RULES = [
  {
    "id": "rule-source-note",
    "title": "所有具体事实显示来源",
    "detail": "具体地址、数量、保护等级、年代、规划定位、非遗名录、资料不足和资料冲突都必须显示sourceNote。",
    "sourceNote": "来源：04_ui_content_rules.md第4节",
    "severity": "required"
  },
  {
    "id": "rule-no-invent",
    "title": "不能胡编历史",
    "detail": "不能编北宋石板桥位置、蚝壳墙建造者、古井井名、居民原话、美食做法、传承人和未出现的人名事件。",
    "sourceNote": "来源：04_ui_content_rules.md第5节",
    "severity": "required"
  },
  {
    "id": "rule-verification",
    "title": "资料不足或冲突必须保留状态",
    "detail": "资料不足写missingInfo；地址冲突或待核对写needsVerification:true，不在数据层擅自判断。",
    "sourceNote": "来源：03故事种子库和05提取报告",
    "severity": "required"
  },
  {
    "id": "rule-image-style",
    "title": "优先使用项目来源图片",
    "detail": "故事库优先使用source material中与地点、页码对应的图片；只有用户新提交且没有附件时才使用CSS占位视觉。",
    "sourceNote": "来源：04_ui_content_rules.md第3节和用户最新视觉要求",
    "severity": "required"
  },
  {
    "id": "rule-upload-review",
    "title": "上传先进审核",
    "detail": "用户提交的文字、照片、音频、视频、地理位置必须先进入管理员审核，不直接公开。",
    "sourceNote": "来源：04_ui_content_rules.md第6.1节",
    "severity": "required"
  },
  {
    "id": "rule-privacy",
    "title": "保护隐私和授权",
    "detail": "涉及真实人物、家庭、住址、学校儿童照片的内容默认不公开，必须有授权同意和公开范围。",
    "sourceNote": "来源：04_ui_content_rules.md第6.1节",
    "severity": "required"
  },
  {
    "id": "rule-source-type",
    "title": "区分来源类型",
    "detail": "官方规划资料可作主要依据；社区展陈资料用于项目定位和体验语气；历史整理资料需交叉核对；需求问答资料不能当历史事实。",
    "sourceNote": "来源：04_ui_content_rules.md第6节",
    "severity": "required"
  }
];
