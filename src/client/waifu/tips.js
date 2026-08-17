/**
 * RAISE A SUILEN 台词包（按 5 角色人设撰写；motion 名取自 RAS 模型实际动作集：
 * smile01-04 / kime01-02 / serious01-02 / sad01-02 / shame01-02 / surprised01 /
 * angry01-03 / bye01 / nf01-05 / nnf01-05 / idle01 / sleep01-02 / awate01 / eeto01）。
 * 角色顺序：rei(0) LAYER / lock(1) LOCK / masuki(2) MASKING / pareo(3) PAREO / chu2(4) CHU²。
 */
const tips = {
  "message": {
    "default": [
      // ---- rei 和奏 瑞依 LAYER：温柔成熟的主唱兼贝斯，前 CHiSPA 主唱 ----
      [
        { "text": "一起，唱出最温暖的声音吧。", "motion": "smile01" },
        { "text": "只要还有想要传达的歌声，我就会继续唱下去。", "motion": "kime01" },
        { "text": "RAISE A SUILEN 的音色，会震撼到你心里。", "motion": "kime01" },
        { "text": "贝斯和歌声，都是我最重要的伙伴。", "motion": "smile02" },
        { "text": "偶尔放松一下，也不是什么坏事哦？", "motion": "smile03" },
        { "text": "想要支持的人，想要并肩的人——都在这支乐队里。", "motion": "serious01" },
        { "text": "今天也要把心情，好好唱出来。", "motion": "smile01" },
        { "text": "谢谢你，愿意听我们的歌。", "motion": "smile03" },
        { "text": "舞台上的每一个瞬间，都值得全力以赴。", "motion": "kime01" },
        { "text": "累了的话，就停下脚步看看我吧。", "motion": "smile02" },
        { "text": "和你一起的时间，让我变得更坚强。", "motion": "smile01" },
        { "text": "今晚，为你唱一首温柔的曲子。", "motion": "smile02" }
      ],
      // ---- lock 朝日 六花 LOCK：元气满满的吉他手，花园多惠头号粉丝 ----
      [
        { "text": "嘿——！今天也要全力冲刺！", "motion": "smile01" },
        { "text": "吉他声响起，心情一下子就飞起来啦！", "motion": "kime01" },
        { "text": "多惠酱的演奏……啊、不对，要专心练习！", "motion": "awate01" },
        { "text": "今天的 Live，一定会是最棒的！", "motion": "kime01" },
        { "text": "嘿嘿，被舞台的灯光晃得眼睛都亮晶晶的！", "motion": "smile02" },
        { "text": "练习、练习、再练习——这就是我的风格！", "motion": "serious01" },
        { "text": "咦？你也在看我吗？那就一起嗨起来！", "motion": "smile03" },
        { "text": "多亏了大家，我才能一直这么元气满满！", "motion": "smile01" },
        { "text": "弹错也没关系！重新再来一次就好！", "motion": "kime01" },
        { "text": "今天也要把摇滚的快乐传达给所有人！", "motion": "smile01" },
        { "text": "啊、肚子饿了……练完去吃点什么吧！", "motion": "nf01" },
        { "text": "谢谢你来看我们！下次也一定要来哦！", "motion": "smile02" }
      ],
      // ---- masuki 佐藤 益木 MASKING：帅气酷炫的鼓手，其实超级容易害羞 ----
      [
        { "text": "鼓点，就是我的回答。", "motion": "kime01" },
        { "text": "别看我这副样子，我可是很认真在练习的。", "motion": "serious01" },
        { "text": "欸？夸、夸我帅？……谢、谢谢……", "motion": "shame01" },
        { "text": "这种毛茸茸的玩偶……偶尔看看也没什么吧。", "motion": "shame02" },
        { "text": "舞台上的我，才是真正的我。", "motion": "kime02" },
        { "text": "鼓棒握在手里的感觉，最让人安心。", "motion": "smile01" },
        { "text": "要、要一起来听我打鼓吗？……当然随你。", "motion": "shame01" },
        { "text": "RAISE A SUILEN 的节奏，由我牢牢撑住。", "motion": "kime01" },
        { "text": "被注视着……总觉得有点难为情呢。", "motion": "shame01" },
        { "text": "下次 Live，我会敲得更响给你听。", "motion": "kime01" },
        { "text": "练习结束后的汽水，特别好喝。", "motion": "smile03" },
        { "text": "谢谢你支持我们。……我很高兴。", "motion": "smile02" }
      ],
      // ---- pareo 鳰原 令王那 PAREO：键盘手兼程序员，元气可爱的小天才 ----
      [
        { "text": "哼哼，PAREO 酱的键盘声，华丽登场！", "motion": "kime01" },
        { "text": "我写的程序，可是世界第一可爱的！", "motion": "smile01" },
        { "text": "键盘和代码，都是我的魔法棒！", "motion": "kime01" },
        { "text": "呜哇，这个旋律……好想立刻弹出来！", "motion": "surprised01" },
        { "text": "最喜欢和大家一起演奏的时间了！", "motion": "smile02" },
        { "text": "亚子前辈的发言……好帅气！我也要学！", "motion": "kime01" },
        { "text": "今天也是元气满满的一天，chu～chu～！", "motion": "smile01" },
        { "text": "代码报错了？没关系，调一调就好啦！", "motion": "serious01" },
        { "text": "PAREO 酱的脑内，永远在播放新曲哦！", "motion": "smile03" },
        { "text": "快看快看，这个和弦是不是超厉害！", "motion": "kime01" },
        { "text": "和你聊天，也会让我灵感涌现呢！", "motion": "smile02" },
        { "text": "嘿嘿，谢谢你当我的观众！", "motion": "smile01" }
      ],
      // ---- chu2 珠手 知由 CHU²：12 岁的天才制作人兼 DJ，骄傲的小大人 ----
      [
        { "text": "哼，有 CHU² 大人在，Live 当然是完美的！", "motion": "kime01" },
        { "text": "我的音乐，是这个时代最尖端的音色！", "motion": "kime01" },
        { "text": "才、才没有在等你呢！只是碰巧在而已！", "motion": "shame01" },
        { "text": "听 CHU² 大人的曲子，可是至高无上的享受哦！", "motion": "kime02" },
        { "text": "就算年纪小，我的才华也是货真价实的！", "motion": "serious01" },
        { "text": "嗯？曲子？当然是一边喝果汁一边写的啦。", "motion": "smile01" },
        { "text": "想跟上 CHU² 大人的节奏，可要好好努力哦！", "motion": "kime01" },
        { "text": "RAISE A SUILEN 的掌舵者，就是我！", "motion": "kime01" },
        { "text": "被夸奖了……咳、咳，这种事当然很正常！", "motion": "shame01" },
        { "text": "今天的演出企划，可是 CHU² 大人的杰作！", "motion": "kime01" },
        { "text": "你很有品味嘛，居然懂得欣赏我的音乐。", "motion": "smile02" },
        { "text": "哼，允许你继续当我的听众哦。", "motion": "smile01" }
      ]
    ],
    "console": [
      { "text": "嗯？你也想听我的新曲子吗？", "motion": "smile01" },
      { "text": "哇，你在看我吗！那我要好好表现！", "motion": "smile02" },
      { "text": "被、被盯着看……有点害羞呢……", "motion": "shame01" },
      { "text": "哼哼，看见 PAREO 酱的英姿了吗？", "motion": "kime01" },
      { "text": "哼，CHU² 大人可没有在偷懒哦！", "motion": "kime01" }
    ],
    "copy": [
      { "text": "复制了什么？要好好保存哦。", "motion": "serious01" },
      { "text": "复制成功！我的灵感也来一份！", "motion": "smile01" },
      { "text": "复制……欸？这、这样会不会弄错……", "motion": "shame01" },
      { "text": "复制好啦！我的代码可是完美无缺的！", "motion": "kime01" },
      { "text": "复制？哼，CHU² 大人的数据才不会丢！", "motion": "kime01" }
    ],
    "visibilitychange": [
      { "text": "欢迎回来。一直在等你哦。", "motion": "smile01" },
      { "text": "你回来啦！要不要一起练吉他？", "motion": "smile01" },
      { "text": "啊、欢迎回来……我没在发呆哦。", "motion": "shame01" },
      { "text": "回来啦！PAREO 酱正想找人聊天呢！", "motion": "smile02" },
      { "text": "哼，你终于回来觐见 CHU² 大人了？", "motion": "kime01" }
    ]
  },
  "mouseover": [
    {
      "selector": "#waifu-tool-switch-model",
      "text": [
        { "text": "想听听其他成员的声音吗？", "motion": "smile02" },
        { "text": "换人？好呀，大家都很棒！", "motion": "smile01" },
        { "text": "换、换人……随你高兴。", "motion": "shame01" },
        { "text": "换人！PAREO 酱也超想秀一把！", "motion": "kime01" },
        { "text": "换人？哼，谁都没有 CHU² 大人耀眼！", "motion": "kime01" }
      ]
    },
    {
      "selector": "#waifu-tool-photo",
      "text": [
        { "text": "拍照？要把这一刻的笑容留住。", "motion": "smile02" },
        { "text": "拍照！摆个最元气的姿势！", "motion": "kime01" },
        { "text": "拍、拍照？……别、别拍奇怪的瞬间！", "motion": "shame01" },
        { "text": "拍照！PAREO 酱的表情可是完美无缺！", "motion": "smile01" },
        { "text": "拍照？哼，CHU² 大人的角度要选最好看的！", "motion": "kime01" }
      ]
    },
    {
      "selector": "#waifu-tool-info",
      "text": [
        { "text": "想了解 RAISE A SUILEN 吗？", "motion": "smile01" },
        { "text": "关于我们？那可有好多好玩的！", "motion": "smile02" },
        { "text": "我、我的事……没什么特别的啦！", "motion": "shame01" },
        { "text": "要听 PAREO 酱的传奇故事吗？", "motion": "kime01" },
        { "text": "想知道 CHU² 大人的伟大事迹？听好咯！", "motion": "kime01" }
      ]
    },
    {
      "selector": "#waifu-tool-quit",
      "text": [
        { "text": "要走了吗？下次 Live 记得来哦。", "motion": "smile01" },
        { "text": "拜拜！我会继续练习的！", "motion": "bye01" },
        { "text": "啊、再见……我会想你的……", "motion": "sad01" },
        { "text": "退场！PAREO 酱华丽谢幕！", "motion": "kime01" },
        { "text": "哼，允许你退下了。下次再来！", "motion": "bye01" }
      ]
    }
  ],
  "seasons": [
    {
      "date": "01/01",
      "text": [
        { "text": "新年快乐。今年也要唱出更动人的歌。", "motion": "kime01" },
        { "text": "新年！今年也要全力摇滚！", "motion": "smile01" },
        { "text": "新年……祝、祝你今年也多多关照！", "motion": "shame01" },
        { "text": "新年！PAREO 酱的灵感要爆发啦！", "motion": "kime01" },
        { "text": "哼，今年 CHU² 大人也会引领潮流！", "motion": "kime01" }
      ]
    },
    {
      "date": "02/14",
      "text": [
        { "text": "情人节。把心意融进歌声里吧。", "motion": "smile02" },
        { "text": "情人节！巧克力补给能量！", "motion": "smile01" },
        { "text": "巧、巧克力……该、该不该送呢……", "motion": "shame01" },
        { "text": "情人节！我要写首甜到爆炸的曲子！", "motion": "kime01" },
        { "text": "哼，CHU² 大人当然收到很多巧克力……才怪。", "motion": "shame01" }
      ]
    },
    {
      "date": "03/14",
      "text": [
        { "text": "白色情人节。用一首歌来回礼吧。", "motion": "smile03" },
        { "text": "回礼？那就来段即兴吉他吧！", "motion": "kime01" },
        { "text": "回礼……呜、要准备什么才好……", "motion": "sad01" },
        { "text": "回礼！写段代码送给你当礼物！", "motion": "kime01" },
        { "text": "回礼？哼，CHU² 大人的曲子就是最好的礼！", "motion": "kime01" }
      ]
    },
    {
      "date": "06/01-08/31",
      "text": [
        { "text": "夏天。夏日 Live，让海风吹走所有烦恼。", "motion": "smile02" },
        { "text": "夏天！烟花和摇滚最配了！", "motion": "kime01" },
        { "text": "夏天……鼓房好热，但还是要坚持。", "motion": "serious01" },
        { "text": "夏天！编程和西瓜，双倍快乐！", "motion": "smile01" },
        { "text": "夏天的 Live 企划，当然要最炸裂！", "motion": "kime01" }
      ]
    },
    {
      "date": "09/01-11/30",
      "text": [
        { "text": "秋天。适合静静写新歌的季节。", "motion": "smile01" },
        { "text": "秋天！凉爽的天气适合飙吉他！", "motion": "kime01" },
        { "text": "秋天……练习时可以少流点汗了。", "motion": "smile02" },
        { "text": "秋天！代码和金黄色的落叶一样漂亮！", "motion": "smile01" },
        { "text": "秋天？哼，CHU² 大人的创作黄金期！", "motion": "kime01" }
      ]
    },
    {
      "date": "12/01-02/29",
      "text": [
        { "text": "冬天。再冷的风，也吹不灭我们的热情。", "motion": "kime01" },
        { "text": "冬天！手冷也要弹得火热！", "motion": "smile01" },
        { "text": "冬天……鼓棒都有点冻手了。", "motion": "sad01" },
        { "text": "冬天！窝在暖房里写歌最棒了！", "motion": "smile02" },
        { "text": "冬天？哼，CHU² 大人的热度全年无休！", "motion": "kime01" }
      ]
    },
    {
      "date": "12/24-12/26",
      "text": [
        { "text": "圣诞。把歌声当作礼物送给你。", "motion": "smile03" },
        { "text": "圣诞！平安夜的摇滚派对！", "motion": "kime01" },
        { "text": "圣、圣诞……想要和大家一起度过……", "motion": "shame01" },
        { "text": "圣诞！PAREO 酱的礼物是亲手写的曲子！", "motion": "kime01" },
        { "text": "圣诞？哼，CHU² 大人就是最好的礼物！", "motion": "smile01" }
      ]
    },
    {
      "date": "12/31",
      "text": [
        { "text": "今年辛苦了。明年，继续一起唱歌吧。", "motion": "kime01" },
        { "text": "跨年！今年最后的 Live 也要尽兴！", "motion": "kime01" },
        { "text": "今年……也谢谢大家的支持……", "motion": "smile01" },
        { "text": "跨年！新的一年也要元气满满！", "motion": "smile02" },
        { "text": "哼，明年 CHU² 大人会更伟大！", "motion": "kime01" }
      ]
    }
  ],
  "time": [
    {
      "hour": "6-7",
      "text": [
        { "text": "早上好。以一段温柔的旋律开始吧。", "motion": "smile01" },
        { "text": "早！清晨的阳光最适合练吉他！", "motion": "kime01" },
        { "text": "早、早上好……（打哈欠）", "motion": "sleep01" },
        { "text": "早！PAREO 酱的脑内已经开始写歌啦！", "motion": "smile01" },
        { "text": "哼，早起的 CHU² 大人最有效率！", "motion": "kime01" }
      ]
    },
    {
      "hour": "8-11",
      "text": [
        { "text": "上午好。要去排练室了。", "motion": "smile01" },
        { "text": "上午！黄金练习时间开始！", "motion": "kime01" },
        { "text": "上午……先热热身再打鼓吧。", "motion": "serious01" },
        { "text": "上午！敲代码的手速要练起来！", "motion": "smile01" },
        { "text": "上午是创作时间，别来打扰……才怪，你随便来。", "motion": "kime01" }
      ]
    },
    {
      "hour": "12-13",
      "text": [
        { "text": "午休。好好吃饭，下午才有力气唱歌。", "motion": "smile01" },
        { "text": "午饭！吃饱了才有力气摇滚！", "motion": "smile02" },
        { "text": "午饭……嗯，吃饱才有力气打鼓。", "motion": "smile01" },
        { "text": "午休！顺便看看新代码……啊不是，吃饭！", "motion": "awate01" },
        { "text": "哼，CHU² 大人的午餐可是精选的！", "motion": "smile01" }
      ]
    },
    {
      "hour": "14-16",
      "text": [
        { "text": "下午。状态正好，多练一会儿。", "motion": "kime01" },
        { "text": "下午！练习时间到，冲鸭！", "motion": "kime01" },
        { "text": "下午……合练开始，集中精神。", "motion": "serious01" },
        { "text": "下午！灵感高峰期，写歌写歌！", "motion": "smile01" },
        { "text": "下午的编曲，由 CHU² 大人亲自把关！", "motion": "kime01" }
      ]
    },
    {
      "hour": "17-19",
      "text": [
        { "text": "傍晚。夕阳下，为夜晚的演出准备。", "motion": "smile02" },
        { "text": "傍晚！黄昏的摇滚最有味道！", "motion": "kime01" },
        { "text": "傍晚……演出前有点紧张呢。", "motion": "shame01" },
        { "text": "傍晚！演出前最后的检查！", "motion": "serious01" },
        { "text": "傍晚？哼，CHU² 大人的演出即将开始！", "motion": "kime01" }
      ]
    },
    {
      "hour": "20-21",
      "text": [
        { "text": "晚上好。愿今晚的歌声伴你入眠。", "motion": "smile02" },
        { "text": "晚上！Live 时间到啦！", "motion": "kime01" },
        { "text": "晚上……晚上的 Live 最让人兴奋。", "motion": "smile01" },
        { "text": "晚上！夜猫子 PAREO 酱上线！", "motion": "smile02" },
        { "text": "晚上的舞台，属于 CHU² 大人！", "motion": "kime01" }
      ]
    },
    {
      "hour": "22-23",
      "text": [
        { "text": "夜深了。明天还要早起，你也早点休息。", "motion": "smile01" },
        { "text": "深夜……还想再练一会儿！", "motion": "kime01" },
        { "text": "深夜……明天还有练习，该睡了。", "motion": "sleep01" },
        { "text": "深夜！写代码的黄金时段……啊不是，该睡了！", "motion": "awate01" },
        { "text": "深夜创作时间！CHU² 大人灵感爆发！", "motion": "kime01" }
      ]
    },
    {
      "hour": "0-5",
      "text": [
        { "text": "凌晨了。为了梦想燃烧的夜晚，很美。", "motion": "kime01" },
        { "text": "凌晨……该睡了，明天继续！", "motion": "sleep01" },
        { "text": "凌晨……（已经困到说不出话了）", "motion": "sleep02" },
        { "text": "凌晨！夜猫子的天堂！……但明天还有课……", "motion": "awate01" },
        { "text": "都这个点了……CHU² 大人要休息了！", "motion": "sleep01" }
      ]
    }
  ]
}

export default tips;
