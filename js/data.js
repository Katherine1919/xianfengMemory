const PLACES = [
  {
    id: "xianfeng-street",
    name: "先锋大街",
    x: 22,
    y: 46,
    intro: "连接市桥老城日常生活的主街之一，店铺、学校、家庭记忆在这里交织。",
    period: "改革开放 / 当代",
    type: "街巷记忆",
    tags: ["先锋大街", "老番禺", "社区记忆"],
    storyCount: 4
  },
  {
    id: "qianfeng-street",
    name: "前锋大街",
    x: 54,
    y: 58,
    intro: "与先锋大街共同组成社区生活轴线，保留着老城市街巷的尺度。",
    period: "明清 / 民国 / 当代",
    type: "街巷肌理",
    tags: ["前锋大街", "鱼骨状街巷", "街区博物馆"],
    storyCount: 3
  },
  {
    id: "xianfeng-school",
    name: "先锋小学",
    x: 71,
    y: 35,
    intro: "几代居民共同拥有的学校记忆点，适合连接儿童任务和长者口述。",
    period: "建国初期 / 当代",
    type: "学校记忆",
    tags: ["先锋小学", "放学路", "儿童探索"],
    storyCount: 3
  },
  {
    id: "qianfeng-lane-18",
    name: "前锋十八巷",
    x: 39,
    y: 72,
    intro: "细密巷道保存着市桥老城的生活纹理，是鱼骨状街巷的典型线索。",
    period: "明清 / 民国",
    type: "街巷记忆",
    tags: ["前锋十八巷", "鱼骨状街巷", "广府文化"],
    storyCount: 2
  },
  {
    id: "oyster-wall",
    name: "蚝壳墙",
    x: 63,
    y: 74,
    intro: "岭南建筑智慧的可触摸证据，墙面像一册被海风翻过的地方志。",
    period: "明清",
    type: "建筑记忆",
    tags: ["蚝壳墙", "广府文化", "建筑记忆"],
    storyCount: 2
  },
  {
    id: "old-well",
    name: "古井",
    x: 31,
    y: 28,
    intro: "以水为脉的社区记忆节点，连接街坊取水、纳凉和家常闲谈。",
    period: "北宋 / 明清",
    type: "水脉记忆",
    tags: ["古井", "以水为脉", "北宋石板桥"],
    storyCount: 2
  },
  {
    id: "qilou",
    name: "骑楼街面",
    x: 45,
    y: 39,
    intro: "遮阳避雨的骑楼形成市桥老城的商业界面，也承载着街坊购物记忆。",
    period: "民国",
    type: "建筑 / 商业记忆",
    tags: ["骑楼街面", "民国", "商业记忆"],
    storyCount: 2
  },
  {
    id: "baimai",
    name: "市桥白卖",
    x: 78,
    y: 62,
    intro: "老番禺味道的代表之一，把节庆、手艺和家庭餐桌连接起来。",
    period: "改革开放 / 当代",
    type: "美食记忆",
    tags: ["市桥白卖", "非遗文化", "家庭记忆"],
    storyCount: 2
  },
  {
    id: "lap-mei",
    name: "广式腊味",
    x: 18,
    y: 68,
    intro: "挂在铺面里的腊味气味，是许多人对老街年味的第一反应。",
    period: "改革开放",
    type: "美食 / 商业记忆",
    tags: ["广式腊味", "老番禺", "年味"],
    storyCount: 2
  },
  {
    id: "old-city-gate",
    name: "市桥老城入口",
    x: 83,
    y: 24,
    intro: "从城市道路走进老街尺度的转换点，适合作为展厅导览的起点。",
    period: "当代",
    type: "入口记忆",
    tags: ["市桥老城", "老城市新活力", "街区博物馆"],
    storyCount: 2
  }
];

const TIMELINE_ITEMS = [
  {
    id: "song",
    period: "北宋",
    clue: "北宋石板桥和水道线索，让市桥的名字与桥、水、贸易发生联系。",
    theme: "北宋石板桥",
    tags: ["以水为脉", "北宋石板桥", "市桥老城"],
    placeId: "old-well"
  },
  {
    id: "mingqing",
    period: "明清",
    clue: "市桥水陆贸易带来街巷生长，蚝壳墙和鱼骨状街巷留下广府文化的纹理。",
    theme: "水陆贸易与街巷肌理",
    tags: ["水陆贸易", "蚝壳墙", "鱼骨状街巷"],
    placeId: "oyster-wall"
  },
  {
    id: "republic",
    period: "民国",
    clue: "骑楼街面成为遮阳避雨的商业界面，也让老街有了更鲜明的街市表情。",
    theme: "民国骑楼街面",
    tags: ["骑楼街面", "商业记忆", "老番禺"],
    placeId: "qilou"
  },
  {
    id: "early-prc",
    period: "建国初期",
    clue: "学校、操场、红领巾和放学路，把社区生活变成几代人的共同记忆。",
    theme: "学校与社区生活",
    tags: ["先锋小学", "社区生活", "儿童记忆"],
    placeId: "xianfeng-school"
  },
  {
    id: "reform",
    period: "改革开放",
    clue: "小店、腊味、市桥白卖和街坊买卖，记录着商业恢复后的烟火气。",
    theme: "商业记忆与老街味道",
    tags: ["市桥白卖", "广式腊味", "商业记忆"],
    placeId: "baimai"
  },
  {
    id: "today",
    period: "当代",
    clue: "老城市新活力让先锋社区从生活街区变成可共创、可学习的街区博物馆。",
    theme: "老城市新活力",
    tags: ["全国轮滑之乡", "街区博物馆", "社区记忆"],
    placeId: "old-city-gate"
  }
];

const STORIES = [
  {
    id: "story-001",
    title: "古井边的夏夜",
    category: "家庭记忆",
    placeId: "old-well",
    placeName: "古井",
    timeLabel: "上世纪七十年代",
    period: "建国初期",
    storyteller: "梁伯",
    excerpt: "夏天的晚饭后，街坊搬竹椅到古井旁乘凉，孩子听大人讲北宋石板桥的传说。",
    fullText: "梁伯记得，晚饭后古井边最热闹。大人把竹椅一字排开，孩子趴在井沿边看水光。有人讲北宋石板桥，有人讲市桥为什么叫市桥。井水不只是水，也像一面小镜子，照着老番禺人慢慢过日子的样子。",
    tags: ["古井", "北宋石板桥", "老番禺", "社区记忆"],
    credibility: "个人回忆",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "居民口述",
    imageStyle: "well"
  },
  {
    id: "story-002",
    title: "蚝壳墙上的海风",
    category: "建筑记忆",
    placeId: "oyster-wall",
    placeName: "蚝壳墙",
    timeLabel: "明清线索",
    period: "明清",
    storyteller: "社区展陈整理",
    excerpt: "蚝壳一层层嵌进墙里，像把岭南沿海生活留在了市桥老城的墙面上。",
    fullText: "蚝壳墙不是装饰，它是岭南人因地制宜的建筑智慧。阳光斜照时，壳面会泛出细碎的白光，像海风被留在墙里。孩子摸到凹凸纹理时，能明白广府文化并不远，它就在先锋社区的墙面、巷口和家门边。",
    tags: ["蚝壳墙", "广府文化", "建筑记忆", "街区博物馆"],
    credibility: "官方资料",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "展陈资料整理",
    imageStyle: "oyster"
  },
  {
    id: "story-003",
    title: "先锋小学的放学铃",
    category: "学校记忆",
    placeId: "xianfeng-school",
    placeName: "先锋小学",
    timeLabel: "上世纪八十年代",
    period: "改革开放",
    storyteller: "陈阿姨",
    excerpt: "铃声一响，孩子从校门涌出来，书包和笑声把先锋大街挤得满满当当。",
    fullText: "陈阿姨说，先锋小学的放学铃一响，整条街都知道孩子出来了。有人在校门口等弟弟妹妹，有人去小店买一颗糖。先锋大街那时不宽，但容得下很多笑声。今天做儿童记忆通行证，就是想把这条放学路重新交给孩子探索。",
    tags: ["先锋小学", "先锋大街", "放学路", "儿童探索"],
    credibility: "多人证实",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "居民口述",
    imageStyle: "school"
  },
  {
    id: "story-004",
    title: "骑楼下的雨声",
    category: "建筑记忆",
    placeId: "qilou",
    placeName: "骑楼街面",
    timeLabel: "民国以后",
    period: "民国",
    storyteller: "街区走读记录",
    excerpt: "骑楼把雨水挡在外面，也把店铺、人情和街市声音聚在一起。",
    fullText: "雨天走过骑楼街面，会听见雨点落在檐边，铺里算盘声、谈价声和脚步声混在一起。骑楼给老街留出一条半室内的公共空间，街坊不用撑伞也能慢慢走。它不是单独的建筑，而是市桥老城商业记忆的一部分。",
    tags: ["骑楼街面", "民国", "商业记忆", "市桥老城"],
    credibility: "官方资料",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "街区走读",
    imageStyle: "qilou"
  },
  {
    id: "story-005",
    title: "前锋十八巷的鱼骨路",
    category: "建筑记忆",
    placeId: "qianfeng-lane-18",
    placeName: "前锋十八巷",
    timeLabel: "明清至当代",
    period: "明清",
    storyteller: "李老师",
    excerpt: "巷道像鱼骨一样伸展，带学生走一遍，比讲十页资料更清楚。",
    fullText: "李老师带学生走前锋十八巷时，会让大家先站在巷口看方向。主街像鱼脊，小巷像鱼刺，生活从这里一条条长出去。学生很快明白，鱼骨状街巷不是课本名词，而是居民买菜、上学、串门走出来的城市形状。",
    tags: ["前锋十八巷", "鱼骨状街巷", "项目式学习"],
    credibility: "多人证实",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "教师走读",
    imageStyle: "lane"
  },
  {
    id: "story-006",
    title: "一笼市桥白卖",
    category: "美食记忆",
    placeId: "baimai",
    placeName: "市桥白卖",
    timeLabel: "改革开放后",
    period: "改革开放",
    storyteller: "何姨",
    excerpt: "刚蒸好的市桥白卖一开盖，米香和肉香把一家人都叫到桌边。",
    fullText: "何姨说，家里逢年过节总要买市桥白卖。蒸汽一掀开，孩子先闻到香味，大人忙着摆碗筷。它不是一道孤零零的小吃，而是一种家庭聚在一起的信号。把它放进故事库，是为了让美食记忆也能成为社区记忆。",
    tags: ["市桥白卖", "家庭记忆", "非遗文化", "老番禺"],
    credibility: "个人回忆",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "居民口述",
    imageStyle: "food"
  },
  {
    id: "story-007",
    title: "腊味铺前的年味",
    category: "商业记忆",
    placeId: "lap-mei",
    placeName: "广式腊味",
    timeLabel: "上世纪九十年代",
    period: "改革开放",
    storyteller: "黄叔",
    excerpt: "冬天走过腊味铺，风里有甜咸香气，大家就知道快过年了。",
    fullText: "黄叔小时候最喜欢站在腊味铺前，看一串串广式腊味挂在竹竿上。阳光晒过后，油光透亮，风里有甜咸香。那时买腊味也是街坊见面的机会，谁家准备年饭，谁家孩子回来了，聊着聊着就有了年味。",
    tags: ["广式腊味", "商业记忆", "年味", "先锋大街"],
    credibility: "个人回忆",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "居民口述",
    imageStyle: "market"
  },
  {
    id: "story-008",
    title: "扒金山的课间游戏",
    category: "学校记忆",
    placeId: "xianfeng-school",
    placeName: "先锋小学",
    timeLabel: "上世纪八十年代",
    period: "改革开放",
    storyteller: "校友访谈",
    excerpt: "孩子在课间玩扒金山，游戏规则一传十，成了几代人的共同暗号。",
    fullText: "几位校友回忆，课间最常玩的游戏之一叫扒金山。操场不大，但孩子能玩出很多花样。有人负责喊口令，有人一边跑一边笑。今天再讲这个词，年轻人可能陌生，可对老同学来说，它立刻把先锋小学的课间带回眼前。",
    tags: ["扒金山", "先锋小学", "儿童记忆", "学校记忆"],
    credibility: "多人证实",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "校友访谈",
    imageStyle: "schoolyard"
  },
  {
    id: "story-009",
    title: "全国轮滑之乡的新活力",
    category: "社区事件",
    placeId: "old-city-gate",
    placeName: "市桥老城入口",
    timeLabel: "当代",
    period: "当代",
    storyteller: "项目组记录",
    excerpt: "当轮滑少年进入老街，传统街区也有了更轻快的当代表情。",
    fullText: "番禺有全国轮滑之乡的城市名片。项目组设想，未来可以把轮滑、街区走读和儿童任务结合起来，让孩子从市桥老城入口出发，完成一条安全的记忆路线。老街不是只属于过去，它也能承接当代孩子的速度和好奇心。",
    tags: ["全国轮滑之乡", "老城市新活力", "儿童任务"],
    credibility: "待考证",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "项目设想",
    imageStyle: "skate"
  },
  {
    id: "story-010",
    title: "前锋大街的早茶路",
    category: "家庭记忆",
    placeId: "qianfeng-street",
    placeName: "前锋大街",
    timeLabel: "上世纪九十年代",
    period: "改革开放",
    storyteller: "郑先生",
    excerpt: "周末跟爷爷走去喝早茶，是许多家庭认识前锋大街的方式。",
    fullText: "郑先生小时候每个周末都跟爷爷走过前锋大街去喝早茶。路上爷爷会指着某个铺位，说以前这里卖什么，那里住过谁。孩子当时只惦记虾饺，长大后才发现，那些随口讲起的名字和店铺，就是家庭版本的街区博物馆。",
    tags: ["前锋大街", "家庭记忆", "广府文化", "街区博物馆"],
    credibility: "个人回忆",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "居民口述",
    imageStyle: "tea"
  },
  {
    id: "story-011",
    title: "水陆贸易留下的街市脉络",
    category: "商业记忆",
    placeId: "qianfeng-street",
    placeName: "前锋大街",
    timeLabel: "明清线索",
    period: "明清",
    storyteller: "地方资料整理",
    excerpt: "水路带来货物，人流带来店铺，街巷就在一次次买卖中形成。",
    fullText: "明清时期，市桥一带因水陆贸易形成稳定的人流和货物流。货物上岸后进入街市，店铺沿路生长，巷道继续向生活深处延伸。今天看前锋大街，不只是看一条路，也是在看老番禺商业脉络留下的骨架。",
    tags: ["水陆贸易", "前锋大街", "老番禺", "市桥老城"],
    credibility: "官方资料",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "地方资料整理",
    imageStyle: "trade"
  },
  {
    id: "story-012",
    title: "先锋大街的小店灯光",
    category: "社区事件",
    placeId: "xianfeng-street",
    placeName: "先锋大街",
    timeLabel: "当代",
    period: "当代",
    storyteller: "青年志愿者",
    excerpt: "夜里小店还亮着灯，居民买完东西顺手聊两句，社区关系就这样被续上。",
    fullText: "青年志愿者夜访先锋大街时，最记得小店门口的灯光。有人买盐，有人取快递，有人只是站着聊两句。城市更新常谈立面和功能，但这些微小的停留也很重要。它们让先锋社区保持烟火气，也让社区记忆有新的入口。",
    tags: ["先锋大街", "老城市新活力", "社区记忆"],
    credibility: "多人证实",
    visibility: "公开展示",
    reviewStatus: "approved",
    sourceType: "志愿者记录",
    imageStyle: "night"
  }
];

const QUESTS = [
  {
    id: "quest-building",
    name: "找到一个老街建筑记忆点",
    difficulty: "简单",
    points: 10,
    theme: "骑楼街面 / 蚝壳墙"
  },
  {
    id: "quest-school",
    name: "采访一位长辈关于先锋小学的故事",
    difficulty: "挑战",
    points: 25,
    theme: "先锋小学"
  },
  {
    id: "quest-food",
    name: "记录一种市桥传统美食",
    difficulty: "简单",
    points: 10,
    theme: "市桥白卖 / 广式腊味"
  },
  {
    id: "quest-family",
    name: "在地图上点亮一个家庭记忆",
    difficulty: "中等",
    points: 15,
    theme: "先锋大街"
  },
  {
    id: "quest-future",
    name: "画下你心中的未来先锋社区",
    difficulty: "中等",
    points: 15,
    theme: "老城市新活力"
  },
  {
    id: "quest-trade",
    name: "找出一个和“水路贸易”有关的线索",
    difficulty: "挑战",
    points: 25,
    theme: "明清水陆贸易"
  },
  {
    id: "quest-lane",
    name: "听一个关于前锋十八巷的故事",
    difficulty: "简单",
    points: 10,
    theme: "前锋十八巷"
  },
  {
    id: "quest-agent",
    name: "给拾光仔提一个关于老街的问题",
    difficulty: "简单",
    points: 10,
    theme: "拾光仔问答"
  }
];

const AGENT_QA = [
  {
    question: "先锋社区为什么重要？",
    keywords: ["先锋社区", "重要", "价值"],
    answer: "先锋社区重要，是因为它把市桥老城的街巷、学校、家庭和商业记忆集中在一起。这里不只是一片老街，而是一座可以被居民继续讲述的街区博物馆。"
  },
  {
    question: "前锋大街和先锋大街有什么关系？",
    keywords: ["前锋大街", "先锋大街", "关系"],
    answer: "前锋大街和先锋大街像两条生活线索，一条连接老街肌理，一条连接学校、小店和家庭日常。把它们放在同一张记忆地图里，可以看见先锋社区的完整生活半径。"
  },
  {
    question: "什么是蚝壳墙？",
    keywords: ["蚝壳墙", "蚝壳", "墙"],
    answer: "蚝壳墙是岭南地区常见的传统建筑做法，把蚝壳嵌进墙体，既利用本地材料，也形成特别的纹理。它很适合让孩子理解广府文化不是抽象词，而是摸得到的生活智慧。"
  },
  {
    question: "市桥白卖是什么？",
    keywords: ["市桥白卖", "白卖", "美食"],
    answer: "市桥白卖是老番禺很有代表性的传统美食记忆。它连接节庆、家庭餐桌和街坊买卖，所以在这个系统里不只是食物，也是社区记忆的一种入口。"
  },
  {
    question: "先锋小学为什么适合做社区记忆点？",
    keywords: ["先锋小学", "学校", "记忆点"],
    answer: "先锋小学承载了几代人的放学路、课间游戏和同学关系。对孩子来说它熟悉，对长者来说它有回忆，对老师来说它能变成项目式学习的起点。"
  },
  {
    question: "小朋友可以怎么玩这个系统？",
    keywords: ["小朋友", "儿童", "怎么玩", "任务"],
    answer: "小朋友可以先点地图找记忆点，再读一个故事，接着完成儿童记忆通行证里的任务，比如采访长辈、记录市桥白卖、问拾光仔一个老街问题。"
  },
  {
    question: "我可以上传爷爷奶奶的故事吗？",
    keywords: ["上传", "爷爷", "奶奶", "长辈", "故事"],
    answer: "可以，但要先获得爷爷奶奶或家人的同意。上传时可以选择公开范围，Demo 版会进入待审核区，管理员通过后才会出现在公开故事库。"
  },
  {
    question: "这个项目以后能变成真正的社区数据库吗？",
    keywords: ["数据库", "正式版", "以后", "Supabase"],
    answer: "可以。现在是静态 Demo，正式版可以接入 Supabase 数据库、文件存储、真实审核流程和 AI 检索，让居民上传的记忆长期保存和持续更新。"
  },
  {
    question: "为什么要做儿童记忆通行证？",
    keywords: ["儿童记忆通行证", "通行证", "积分", "印章"],
    answer: "儿童记忆通行证把历史学习变成任务和印章。孩子不是被动看展板，而是带着问题走进街巷、采访长辈、记录味道，真正参与社区记忆的生成。"
  },
  {
    question: "Demo 版和正式版有什么区别？",
    keywords: ["Demo", "正式版", "区别"],
    answer: "Demo 版不联网、不接真实 AI、不上传真实文件，数据只保存在浏览器 localStorage。正式版可以接入登录、数据库、Supabase Storage、真实 AI API、地图图层和更完整的审核流程。"
  }
];
