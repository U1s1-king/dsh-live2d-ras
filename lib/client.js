window.__ModuleLoader__.load({
	id: "dsh-live2d-ras",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region src/client/waifu/config.js
		function readStoredId(key) {
			const value = parseInt(localStorage.getItem(key), 10);
			return Number.isNaN(value) || value < 0 ? null : value;
		}
		let modelId = readStoredId("modelId");
		let modelTexturesId = readStoredId("modelTexturesId");
		let config = {};
		let messageArray = [];
		function getModelId() {
			if (modelId === null || modelId === void 0) resetModelState();
			return modelId;
		}
		function setModelId(newModelId) {
			modelId = newModelId;
			localStorage.setItem("modelId", newModelId.toString());
		}
		function getModelTexturesId() {
			if (modelTexturesId === null || modelTexturesId === void 0) resetModelState();
			return modelTexturesId;
		}
		function setModelTexturesId(newModelTexturesId) {
			modelTexturesId = newModelTexturesId;
			localStorage.setItem("modelTexturesId", newModelTexturesId.toString());
		}
		function resetModelState() {
			modelId = 0;
			modelTexturesId = 0;
			localStorage.setItem("modelId", "0");
			localStorage.setItem("modelTexturesId", "0");
		}
		function getConfig() {
			return config;
		}
		function setConfig(newConfig) {
			config = newConfig;
		}
		function getMessageArray() {
			return messageArray;
		}
		function updateMessageArray(result) {
			messageArray = result.message.default[getModelId()];
			result.seasons.forEach(({ date, text }) => {
				const now = /* @__PURE__ */ new Date(), nowMonth = now.getMonth() + 1, nowDate = now.getDate(), after = date.split("-")[0], afterMonth = parseInt(after.split("/")[0]), afterDate = parseInt(after.split("/")[1]), before = date.split("-")[1] || after, beforeMonth = parseInt(before.split("/")[0]), beforeDate = parseInt(before.split("/")[1]);
				const isCrossYear = afterMonth > beforeMonth;
				let isInRange = false;
				if (isCrossYear) isInRange = nowMonth > afterMonth || nowMonth === afterMonth && nowDate >= afterDate || nowMonth < beforeMonth || nowMonth === beforeMonth && nowDate <= beforeDate;
				else isInRange = (nowMonth > afterMonth || nowMonth === afterMonth && nowDate >= afterDate) && (nowMonth < beforeMonth || nowMonth === beforeMonth && nowDate <= beforeDate);
				if (isInRange) for (let t of text[getModelId()]) messageArray.push(t);
			});
			result.time.forEach(({ hour, text }) => {
				const now = /* @__PURE__ */ new Date(), after = hour.split("-")[0], before = hour.split("-")[1] || after;
				if (after <= now.getHours() && now.getHours() <= before) for (let t of text[getModelId()]) messageArray.push(t);
			});
		}
		//#endregion
		//#region src/client/waifu/utils.js
		function randomSelection(obj) {
			if (Array.isArray(obj)) return obj[Math.floor(Math.random() * obj.length)];
			else if (typeof obj === "number") return Math.floor(Math.random() * obj);
			else return obj;
		}
		//#endregion
		//#region src/client/waifu/message.js
		let messageTimer;
		function showMessage(model, text, timeout, priority) {
			if (!text) return;
			const storedPriority = parseInt(sessionStorage.getItem("waifu-text"), 10);
			if (!Number.isNaN(storedPriority) && storedPriority > priority) return;
			if (messageTimer) {
				clearTimeout(messageTimer);
				messageTimer = null;
			}
			text = randomSelection(text);
			sessionStorage.setItem("waifu-text", priority);
			const tips = document.getElementById("waifu-tips");
			if (tips) {
				tips.innerHTML = text.text || "";
				tips.classList.add("waifu-tips-active");
			}
			messageTimer = setTimeout(() => {
				sessionStorage.removeItem("waifu-text");
				if (tips) tips.classList.remove("waifu-tips-active");
			}, timeout);
			if (model && model.model) {
				if (text.motion) try {
					model.model.motion(text.motion);
				} catch (error) {}
				if (text.expression) try {
					model.model.expression(text.expression);
				} catch (error) {}
			}
		}
		/** 清理未完成的气泡定时器（插件卸载 / HMR 重建时调用，防止残留 setTimeout）。 */
		function clearMessageTimer() {
			if (messageTimer) {
				clearTimeout(messageTimer);
				messageTimer = null;
			}
		}
		//#endregion
		//#region src/client/waifu/modelList.js
		const modelList = [
			[
				"030_4th_general_election_r",
				"030_birthday_2021",
				"030_birthday_2022",
				"030_casual",
				"030_casual-2023",
				"030_casual_summer-2023",
				"030_casual_winter-2023",
				"030_collabo_d_2_ur",
				"030_dream_festival_2",
				"030_dream_festival_3_ur",
				"030_dream_festival_5_ur",
				"030_live_default",
				"030_live_event_117_sr",
				"030_live_event_125_ssr",
				"030_live_event_133_ssr",
				"030_live_event_137_sr",
				"030_live_event_142_r",
				"030_live_event_151_ssr",
				"030_live_event_158_sr",
				"030_live_event_166_ssr",
				"030_live_event_172_ssr",
				"030_live_event_179_sr",
				"030_live_event_187_ssr",
				"030_live_event_197",
				"030_live_event_199",
				"030_live_event_205_sr",
				"030_live_event_217_sr",
				"030_live_event_222_ur",
				"030_live_event_237_sr",
				"030_live_event_249_ur",
				"030_live_event_256_sr",
				"030_live_event_260_ssr",
				"030_live_event_269_ur",
				"030_live_event_280_sr",
				"030_live_event_288_ur",
				"030_live_event_298_ssr",
				"030_live_event_304_ur",
				"030_live_event_308_r",
				"030_live_event_319_ur",
				"030_live_event_329_sr",
				"030_live_r_2021",
				"030_live_r_2022",
				"030_live_r_2023",
				"030_miku_rettou",
				"030_vocal_limited_sr"
			],
			[
				"017_arbeit",
				"017_birthday_2021",
				"017_birthday_2022",
				"017_casual",
				"017_casual-2023",
				"017_casual_summer-2023",
				"017_casual_winter-2023",
				"017_dream_festival_2",
				"017_dream_festival_3_ur",
				"017_live_default",
				"017_live_event_117_ssr",
				"017_live_event_125_sr",
				"017_live_event_128_ssr",
				"017_live_event_133_r",
				"017_live_event_142_ssr",
				"017_live_event_150_ssr",
				"017_live_event_151_sr",
				"017_live_event_158_sr",
				"017_live_event_162_sr",
				"017_live_event_172_sr",
				"017_live_event_181_ssr",
				"017_live_event_187_sr",
				"017_live_event_197_ssr",
				"017_live_event_205",
				"017_live_event_209_sr",
				"017_live_event_222_ur",
				"017_live_event_237_r",
				"017_live_event_238_ur",
				"017_live_event_248_ssr",
				"017_live_event_249_sr",
				"017_live_event_253_ssr",
				"017_live_event_256_r",
				"017_live_event_269_ssr",
				"017_live_event_280_ur",
				"017_live_event_288_ssr",
				"017_live_event_296_ur",
				"017_live_event_298_sr",
				"017_live_event_302_r",
				"017_live_event_308_ur",
				"017_live_event_313_ssr",
				"017_live_event_319_r",
				"017_live_event_329_ur",
				"017_live_r_2022",
				"017_live_r_2023",
				"017_miku_rettou",
				"017_school_summer",
				"017_school_summer-2023",
				"017_school_winter",
				"017_school_winter-2023",
				"017_swimsuit-2023"
			],
			[
				"020_birthday_2021",
				"020_birthday_2022",
				"020_casual",
				"020_casual-2023",
				"020_casual_summer-2023",
				"020_casual_winter-2023",
				"020_dream_festival_2",
				"020_dream_festival_3_ur",
				"020_dream_festival_4_ur",
				"020_live_default",
				"020_live_event_117_sr",
				"020_live_event_125_ssr",
				"020_live_event_128_sr",
				"020_live_event_133_sr",
				"020_live_event_142_ssr",
				"020_live_event_145_sr",
				"020_live_event_151_ssr",
				"020_live_event_158_r",
				"020_live_event_172_sr",
				"020_live_event_179_ssr",
				"020_live_event_187_sr",
				"020_live_event_197_sr",
				"020_live_event_199_ssr",
				"020_live_event_205_ssr",
				"020_live_event_222_sr",
				"020_live_event_236_ssr",
				"020_live_event_237_ur",
				"020_live_event_249_r",
				"020_live_event_256_ssr",
				"020_live_event_262_ur",
				"020_live_event_269_sr",
				"020_live_event_274_ssr",
				"020_live_event_280_ur",
				"020_live_event_288_ur",
				"020_live_event_298_r",
				"020_live_event_308_sr",
				"020_live_event_319_ur",
				"020_live_event_325_ssr",
				"020_live_event_329_r",
				"020_live_event_335_sr",
				"020_live_r_2022",
				"020_live_r_2023",
				"020_miku_rettou",
				"020_school_winter",
				"020_school_winter-2023"
			],
			[
				"027_birthday_2021",
				"027_birthday_2022",
				"027_casual",
				"027_casual-2023",
				"027_casual_summer-2023",
				"027_casual_winter-2023",
				"027_collabo_i_2_ur",
				"027_dream_festival_2",
				"027_dream_festival_3_ur",
				"027_dream_festival_4_ur",
				"027_kirameki_festival",
				"027_live_default",
				"027_live_event_117_sr",
				"027_live_event_125_ssr",
				"027_live_event_133_sr",
				"027_live_event_142_sr",
				"027_live_event_143_ssr",
				"027_live_event_151_r",
				"027_live_event_158_ssr",
				"027_live_event_172_sr",
				"027_live_event_180_sr",
				"027_live_event_187_sr",
				"027_live_event_197_ssr",
				"027_live_event_199",
				"027_live_event_205_ssr",
				"027_live_event_222_r",
				"027_live_event_224_ur",
				"027_live_event_237_ssr",
				"027_live_event_249_ur",
				"027_live_event_256_ur",
				"027_live_event_269_r",
				"027_live_event_280_r",
				"027_live_event_288_sr",
				"027_live_event_298_ur",
				"027_live_event_308_ur",
				"027_live_event_319_sr",
				"027_live_event_329_ssr",
				"027_live_r_2022",
				"027_live_r_2023",
				"027_miku_rettou",
				"027_school_winter",
				"027_school_winter-2023"
			],
			[
				"007_birthday_2021",
				"007_birthday_2022",
				"007_casual-2023",
				"007_casual_summer-2023",
				"007_casual_winter-2023",
				"007_dream_festival_2",
				"007_dream_festival_3_ur",
				"007_dream_festival_5_ur",
				"007_event_187_story_01",
				"007_kirameki_festival",
				"007_live_default",
				"007_live_event_117_ssr",
				"007_live_event_125_sr",
				"007_live_event_133_ssr",
				"007_live_event_142_sr",
				"007_live_event_143_sr",
				"007_live_event_150_r",
				"007_live_event_151_sr",
				"007_live_event_158_ssr",
				"007_live_event_163_sr",
				"007_live_event_166_r",
				"007_live_event_172_ssr",
				"007_live_event_181_sr",
				"007_live_event_187_ssr",
				"007_live_event_197",
				"007_live_event_205",
				"007_live_event_222_ssr",
				"007_live_event_237_ur",
				"007_live_event_245_sr",
				"007_live_event_249_ssr",
				"007_live_event_256_ur",
				"007_live_event_269_ur",
				"007_live_event_280_ssr",
				"007_live_event_288_r",
				"007_live_event_289_ssr",
				"007_live_event_298_ur",
				"007_live_event_308_ssr",
				"007_live_event_319_ssr",
				"007_live_event_329_ur",
				"007_live_r_2022",
				"007_live_r_2023",
				"007_miku_rettou",
				"007_school_winter",
				"007_school_winter-2023"
			]
		];
		//#endregion
		//#region src/client/waifu/tips.js
		/**
		* RAISE A SUILEN 台词包（按 5 角色人设撰写；motion 名取自 RAS 模型实际动作集：
		* smile01-04 / kime01-02 / serious01-02 / sad01-02 / shame01-02 / surprised01 /
		* angry01-03 / bye01 / nf01-05 / nnf01-05 / idle01 / sleep01-02 / awate01 / eeto01）。
		* 角色顺序：rei(0) LAYER / lock(1) LOCK / masuki(2) MASKING / pareo(3) PAREO / chu2(4) CHU²。
		*/
		const tips = {
			"message": {
				"default": [
					[
						{
							"text": "一起，唱出最温暖的声音吧。",
							"motion": "smile01"
						},
						{
							"text": "只要还有想要传达的歌声，我就会继续唱下去。",
							"motion": "kime01"
						},
						{
							"text": "RAISE A SUILEN 的音色，会震撼到你心里。",
							"motion": "kime01"
						},
						{
							"text": "贝斯和歌声，都是我最重要的伙伴。",
							"motion": "smile02"
						},
						{
							"text": "偶尔放松一下，也不是什么坏事哦？",
							"motion": "smile03"
						},
						{
							"text": "想要支持的人，想要并肩的人——都在这支乐队里。",
							"motion": "serious01"
						},
						{
							"text": "今天也要把心情，好好唱出来。",
							"motion": "smile01"
						},
						{
							"text": "谢谢你，愿意听我们的歌。",
							"motion": "smile03"
						},
						{
							"text": "舞台上的每一个瞬间，都值得全力以赴。",
							"motion": "kime01"
						},
						{
							"text": "累了的话，就停下脚步看看我吧。",
							"motion": "smile02"
						},
						{
							"text": "和你一起的时间，让我变得更坚强。",
							"motion": "smile01"
						},
						{
							"text": "今晚，为你唱一首温柔的曲子。",
							"motion": "smile02"
						}
					],
					[
						{
							"text": "嘿——！今天也要全力冲刺！",
							"motion": "smile01"
						},
						{
							"text": "吉他声响起，心情一下子就飞起来啦！",
							"motion": "kime01"
						},
						{
							"text": "多惠酱的演奏……啊、不对，要专心练习！",
							"motion": "awate01"
						},
						{
							"text": "今天的 Live，一定会是最棒的！",
							"motion": "kime01"
						},
						{
							"text": "嘿嘿，被舞台的灯光晃得眼睛都亮晶晶的！",
							"motion": "smile02"
						},
						{
							"text": "练习、练习、再练习——这就是我的风格！",
							"motion": "serious01"
						},
						{
							"text": "咦？你也在看我吗？那就一起嗨起来！",
							"motion": "smile03"
						},
						{
							"text": "多亏了大家，我才能一直这么元气满满！",
							"motion": "smile01"
						},
						{
							"text": "弹错也没关系！重新再来一次就好！",
							"motion": "kime01"
						},
						{
							"text": "今天也要把摇滚的快乐传达给所有人！",
							"motion": "smile01"
						},
						{
							"text": "啊、肚子饿了……练完去吃点什么吧！",
							"motion": "nf01"
						},
						{
							"text": "谢谢你来看我们！下次也一定要来哦！",
							"motion": "smile02"
						}
					],
					[
						{
							"text": "鼓点，就是我的回答。",
							"motion": "kime01"
						},
						{
							"text": "别看我这副样子，我可是很认真在练习的。",
							"motion": "serious01"
						},
						{
							"text": "欸？夸、夸我帅？……谢、谢谢……",
							"motion": "shame01"
						},
						{
							"text": "这种毛茸茸的玩偶……偶尔看看也没什么吧。",
							"motion": "shame02"
						},
						{
							"text": "舞台上的我，才是真正的我。",
							"motion": "kime02"
						},
						{
							"text": "鼓棒握在手里的感觉，最让人安心。",
							"motion": "smile01"
						},
						{
							"text": "要、要一起来听我打鼓吗？……当然随你。",
							"motion": "shame01"
						},
						{
							"text": "RAISE A SUILEN 的节奏，由我牢牢撑住。",
							"motion": "kime01"
						},
						{
							"text": "被注视着……总觉得有点难为情呢。",
							"motion": "shame01"
						},
						{
							"text": "下次 Live，我会敲得更响给你听。",
							"motion": "kime01"
						},
						{
							"text": "练习结束后的汽水，特别好喝。",
							"motion": "smile03"
						},
						{
							"text": "谢谢你支持我们。……我很高兴。",
							"motion": "smile02"
						}
					],
					[
						{
							"text": "哼哼，PAREO 酱的键盘声，华丽登场！",
							"motion": "kime01"
						},
						{
							"text": "我写的程序，可是世界第一可爱的！",
							"motion": "smile01"
						},
						{
							"text": "键盘和代码，都是我的魔法棒！",
							"motion": "kime01"
						},
						{
							"text": "呜哇，这个旋律……好想立刻弹出来！",
							"motion": "surprised01"
						},
						{
							"text": "最喜欢和大家一起演奏的时间了！",
							"motion": "smile02"
						},
						{
							"text": "亚子前辈的发言……好帅气！我也要学！",
							"motion": "kime01"
						},
						{
							"text": "今天也是元气满满的一天，chu～chu～！",
							"motion": "smile01"
						},
						{
							"text": "代码报错了？没关系，调一调就好啦！",
							"motion": "serious01"
						},
						{
							"text": "PAREO 酱的脑内，永远在播放新曲哦！",
							"motion": "smile03"
						},
						{
							"text": "快看快看，这个和弦是不是超厉害！",
							"motion": "kime01"
						},
						{
							"text": "和你聊天，也会让我灵感涌现呢！",
							"motion": "smile02"
						},
						{
							"text": "嘿嘿，谢谢你当我的观众！",
							"motion": "smile01"
						}
					],
					[
						{
							"text": "哼，有 CHU² 大人在，Live 当然是完美的！",
							"motion": "kime01"
						},
						{
							"text": "我的音乐，是这个时代最尖端的音色！",
							"motion": "kime01"
						},
						{
							"text": "才、才没有在等你呢！只是碰巧在而已！",
							"motion": "shame01"
						},
						{
							"text": "听 CHU² 大人的曲子，可是至高无上的享受哦！",
							"motion": "kime02"
						},
						{
							"text": "就算年纪小，我的才华也是货真价实的！",
							"motion": "serious01"
						},
						{
							"text": "嗯？曲子？当然是一边喝果汁一边写的啦。",
							"motion": "smile01"
						},
						{
							"text": "想跟上 CHU² 大人的节奏，可要好好努力哦！",
							"motion": "kime01"
						},
						{
							"text": "RAISE A SUILEN 的掌舵者，就是我！",
							"motion": "kime01"
						},
						{
							"text": "被夸奖了……咳、咳，这种事当然很正常！",
							"motion": "shame01"
						},
						{
							"text": "今天的演出企划，可是 CHU² 大人的杰作！",
							"motion": "kime01"
						},
						{
							"text": "你很有品味嘛，居然懂得欣赏我的音乐。",
							"motion": "smile02"
						},
						{
							"text": "哼，允许你继续当我的听众哦。",
							"motion": "smile01"
						}
					]
				],
				"console": [
					{
						"text": "嗯？你也想听我的新曲子吗？",
						"motion": "smile01"
					},
					{
						"text": "哇，你在看我吗！那我要好好表现！",
						"motion": "smile02"
					},
					{
						"text": "被、被盯着看……有点害羞呢……",
						"motion": "shame01"
					},
					{
						"text": "哼哼，看见 PAREO 酱的英姿了吗？",
						"motion": "kime01"
					},
					{
						"text": "哼，CHU² 大人可没有在偷懒哦！",
						"motion": "kime01"
					}
				],
				"copy": [
					{
						"text": "复制了什么？要好好保存哦。",
						"motion": "serious01"
					},
					{
						"text": "复制成功！我的灵感也来一份！",
						"motion": "smile01"
					},
					{
						"text": "复制……欸？这、这样会不会弄错……",
						"motion": "shame01"
					},
					{
						"text": "复制好啦！我的代码可是完美无缺的！",
						"motion": "kime01"
					},
					{
						"text": "复制？哼，CHU² 大人的数据才不会丢！",
						"motion": "kime01"
					}
				],
				"visibilitychange": [
					{
						"text": "欢迎回来。一直在等你哦。",
						"motion": "smile01"
					},
					{
						"text": "你回来啦！要不要一起练吉他？",
						"motion": "smile01"
					},
					{
						"text": "啊、欢迎回来……我没在发呆哦。",
						"motion": "shame01"
					},
					{
						"text": "回来啦！PAREO 酱正想找人聊天呢！",
						"motion": "smile02"
					},
					{
						"text": "哼，你终于回来觐见 CHU² 大人了？",
						"motion": "kime01"
					}
				]
			},
			"mouseover": [
				{
					"selector": "#waifu-tool-switch-model",
					"text": [
						{
							"text": "想听听其他成员的声音吗？",
							"motion": "smile02"
						},
						{
							"text": "换人？好呀，大家都很棒！",
							"motion": "smile01"
						},
						{
							"text": "换、换人……随你高兴。",
							"motion": "shame01"
						},
						{
							"text": "换人！PAREO 酱也超想秀一把！",
							"motion": "kime01"
						},
						{
							"text": "换人？哼，谁都没有 CHU² 大人耀眼！",
							"motion": "kime01"
						}
					]
				},
				{
					"selector": "#waifu-tool-photo",
					"text": [
						{
							"text": "拍照？要把这一刻的笑容留住。",
							"motion": "smile02"
						},
						{
							"text": "拍照！摆个最元气的姿势！",
							"motion": "kime01"
						},
						{
							"text": "拍、拍照？……别、别拍奇怪的瞬间！",
							"motion": "shame01"
						},
						{
							"text": "拍照！PAREO 酱的表情可是完美无缺！",
							"motion": "smile01"
						},
						{
							"text": "拍照？哼，CHU² 大人的角度要选最好看的！",
							"motion": "kime01"
						}
					]
				},
				{
					"selector": "#waifu-tool-info",
					"text": [
						{
							"text": "想了解 RAISE A SUILEN 吗？",
							"motion": "smile01"
						},
						{
							"text": "关于我们？那可有好多好玩的！",
							"motion": "smile02"
						},
						{
							"text": "我、我的事……没什么特别的啦！",
							"motion": "shame01"
						},
						{
							"text": "要听 PAREO 酱的传奇故事吗？",
							"motion": "kime01"
						},
						{
							"text": "想知道 CHU² 大人的伟大事迹？听好咯！",
							"motion": "kime01"
						}
					]
				},
				{
					"selector": "#waifu-tool-quit",
					"text": [
						{
							"text": "要走了吗？下次 Live 记得来哦。",
							"motion": "smile01"
						},
						{
							"text": "拜拜！我会继续练习的！",
							"motion": "bye01"
						},
						{
							"text": "啊、再见……我会想你的……",
							"motion": "sad01"
						},
						{
							"text": "退场！PAREO 酱华丽谢幕！",
							"motion": "kime01"
						},
						{
							"text": "哼，允许你退下了。下次再来！",
							"motion": "bye01"
						}
					]
				}
			],
			"seasons": [
				{
					"date": "01/01",
					"text": [
						{
							"text": "新年快乐。今年也要唱出更动人的歌。",
							"motion": "kime01"
						},
						{
							"text": "新年！今年也要全力摇滚！",
							"motion": "smile01"
						},
						{
							"text": "新年……祝、祝你今年也多多关照！",
							"motion": "shame01"
						},
						{
							"text": "新年！PAREO 酱的灵感要爆发啦！",
							"motion": "kime01"
						},
						{
							"text": "哼，今年 CHU² 大人也会引领潮流！",
							"motion": "kime01"
						}
					]
				},
				{
					"date": "02/14",
					"text": [
						{
							"text": "情人节。把心意融进歌声里吧。",
							"motion": "smile02"
						},
						{
							"text": "情人节！巧克力补给能量！",
							"motion": "smile01"
						},
						{
							"text": "巧、巧克力……该、该不该送呢……",
							"motion": "shame01"
						},
						{
							"text": "情人节！我要写首甜到爆炸的曲子！",
							"motion": "kime01"
						},
						{
							"text": "哼，CHU² 大人当然收到很多巧克力……才怪。",
							"motion": "shame01"
						}
					]
				},
				{
					"date": "03/14",
					"text": [
						{
							"text": "白色情人节。用一首歌来回礼吧。",
							"motion": "smile03"
						},
						{
							"text": "回礼？那就来段即兴吉他吧！",
							"motion": "kime01"
						},
						{
							"text": "回礼……呜、要准备什么才好……",
							"motion": "sad01"
						},
						{
							"text": "回礼！写段代码送给你当礼物！",
							"motion": "kime01"
						},
						{
							"text": "回礼？哼，CHU² 大人的曲子就是最好的礼！",
							"motion": "kime01"
						}
					]
				},
				{
					"date": "06/01-08/31",
					"text": [
						{
							"text": "夏天。夏日 Live，让海风吹走所有烦恼。",
							"motion": "smile02"
						},
						{
							"text": "夏天！烟花和摇滚最配了！",
							"motion": "kime01"
						},
						{
							"text": "夏天……鼓房好热，但还是要坚持。",
							"motion": "serious01"
						},
						{
							"text": "夏天！编程和西瓜，双倍快乐！",
							"motion": "smile01"
						},
						{
							"text": "夏天的 Live 企划，当然要最炸裂！",
							"motion": "kime01"
						}
					]
				},
				{
					"date": "09/01-11/30",
					"text": [
						{
							"text": "秋天。适合静静写新歌的季节。",
							"motion": "smile01"
						},
						{
							"text": "秋天！凉爽的天气适合飙吉他！",
							"motion": "kime01"
						},
						{
							"text": "秋天……练习时可以少流点汗了。",
							"motion": "smile02"
						},
						{
							"text": "秋天！代码和金黄色的落叶一样漂亮！",
							"motion": "smile01"
						},
						{
							"text": "秋天？哼，CHU² 大人的创作黄金期！",
							"motion": "kime01"
						}
					]
				},
				{
					"date": "12/01-02/29",
					"text": [
						{
							"text": "冬天。再冷的风，也吹不灭我们的热情。",
							"motion": "kime01"
						},
						{
							"text": "冬天！手冷也要弹得火热！",
							"motion": "smile01"
						},
						{
							"text": "冬天……鼓棒都有点冻手了。",
							"motion": "sad01"
						},
						{
							"text": "冬天！窝在暖房里写歌最棒了！",
							"motion": "smile02"
						},
						{
							"text": "冬天？哼，CHU² 大人的热度全年无休！",
							"motion": "kime01"
						}
					]
				},
				{
					"date": "12/24-12/26",
					"text": [
						{
							"text": "圣诞。把歌声当作礼物送给你。",
							"motion": "smile03"
						},
						{
							"text": "圣诞！平安夜的摇滚派对！",
							"motion": "kime01"
						},
						{
							"text": "圣、圣诞……想要和大家一起度过……",
							"motion": "shame01"
						},
						{
							"text": "圣诞！PAREO 酱的礼物是亲手写的曲子！",
							"motion": "kime01"
						},
						{
							"text": "圣诞？哼，CHU² 大人就是最好的礼物！",
							"motion": "smile01"
						}
					]
				},
				{
					"date": "12/31",
					"text": [
						{
							"text": "今年辛苦了。明年，继续一起唱歌吧。",
							"motion": "kime01"
						},
						{
							"text": "跨年！今年最后的 Live 也要尽兴！",
							"motion": "kime01"
						},
						{
							"text": "今年……也谢谢大家的支持……",
							"motion": "smile01"
						},
						{
							"text": "跨年！新的一年也要元气满满！",
							"motion": "smile02"
						},
						{
							"text": "哼，明年 CHU² 大人会更伟大！",
							"motion": "kime01"
						}
					]
				}
			],
			"time": [
				{
					"hour": "6-7",
					"text": [
						{
							"text": "早上好。以一段温柔的旋律开始吧。",
							"motion": "smile01"
						},
						{
							"text": "早！清晨的阳光最适合练吉他！",
							"motion": "kime01"
						},
						{
							"text": "早、早上好……（打哈欠）",
							"motion": "sleep01"
						},
						{
							"text": "早！PAREO 酱的脑内已经开始写歌啦！",
							"motion": "smile01"
						},
						{
							"text": "哼，早起的 CHU² 大人最有效率！",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "8-11",
					"text": [
						{
							"text": "上午好。要去排练室了。",
							"motion": "smile01"
						},
						{
							"text": "上午！黄金练习时间开始！",
							"motion": "kime01"
						},
						{
							"text": "上午……先热热身再打鼓吧。",
							"motion": "serious01"
						},
						{
							"text": "上午！敲代码的手速要练起来！",
							"motion": "smile01"
						},
						{
							"text": "上午是创作时间，别来打扰……才怪，你随便来。",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "12-13",
					"text": [
						{
							"text": "午休。好好吃饭，下午才有力气唱歌。",
							"motion": "smile01"
						},
						{
							"text": "午饭！吃饱了才有力气摇滚！",
							"motion": "smile02"
						},
						{
							"text": "午饭……嗯，吃饱才有力气打鼓。",
							"motion": "smile01"
						},
						{
							"text": "午休！顺便看看新代码……啊不是，吃饭！",
							"motion": "awate01"
						},
						{
							"text": "哼，CHU² 大人的午餐可是精选的！",
							"motion": "smile01"
						}
					]
				},
				{
					"hour": "14-16",
					"text": [
						{
							"text": "下午。状态正好，多练一会儿。",
							"motion": "kime01"
						},
						{
							"text": "下午！练习时间到，冲鸭！",
							"motion": "kime01"
						},
						{
							"text": "下午……合练开始，集中精神。",
							"motion": "serious01"
						},
						{
							"text": "下午！灵感高峰期，写歌写歌！",
							"motion": "smile01"
						},
						{
							"text": "下午的编曲，由 CHU² 大人亲自把关！",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "17-19",
					"text": [
						{
							"text": "傍晚。夕阳下，为夜晚的演出准备。",
							"motion": "smile02"
						},
						{
							"text": "傍晚！黄昏的摇滚最有味道！",
							"motion": "kime01"
						},
						{
							"text": "傍晚……演出前有点紧张呢。",
							"motion": "shame01"
						},
						{
							"text": "傍晚！演出前最后的检查！",
							"motion": "serious01"
						},
						{
							"text": "傍晚？哼，CHU² 大人的演出即将开始！",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "20-21",
					"text": [
						{
							"text": "晚上好。愿今晚的歌声伴你入眠。",
							"motion": "smile02"
						},
						{
							"text": "晚上！Live 时间到啦！",
							"motion": "kime01"
						},
						{
							"text": "晚上……晚上的 Live 最让人兴奋。",
							"motion": "smile01"
						},
						{
							"text": "晚上！夜猫子 PAREO 酱上线！",
							"motion": "smile02"
						},
						{
							"text": "晚上的舞台，属于 CHU² 大人！",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "22-23",
					"text": [
						{
							"text": "夜深了。明天还要早起，你也早点休息。",
							"motion": "smile01"
						},
						{
							"text": "深夜……还想再练一会儿！",
							"motion": "kime01"
						},
						{
							"text": "深夜……明天还有练习，该睡了。",
							"motion": "sleep01"
						},
						{
							"text": "深夜！写代码的黄金时段……啊不是，该睡了！",
							"motion": "awate01"
						},
						{
							"text": "深夜创作时间！CHU² 大人灵感爆发！",
							"motion": "kime01"
						}
					]
				},
				{
					"hour": "0-5",
					"text": [
						{
							"text": "凌晨了。为了梦想燃烧的夜晚，很美。",
							"motion": "kime01"
						},
						{
							"text": "凌晨……该睡了，明天继续！",
							"motion": "sleep01"
						},
						{
							"text": "凌晨……（已经困到说不出话了）",
							"motion": "sleep02"
						},
						{
							"text": "凌晨！夜猫子的天堂！……但明天还有课……",
							"motion": "awate01"
						},
						{
							"text": "都这个点了……CHU² 大人要休息了！",
							"motion": "sleep01"
						}
					]
				}
			]
		};
		//#endregion
		//#region src/client/waifu/model.js
		const PIXI = { get Application() {
			return window.PIXI.Application;
		} };
		const Live2DModel = { get value() {
			return window.PIXI.live2d.Live2DModel;
		} };
		/**
		* 适合作为随机待机动作的 motion 组名。
		* 各角色的可用动作集不同，加载时会被过滤成该角色实际存在的集合。
		* （RAISE A SUILEN 模型动作集：smile01-04 / nf01-05 / nnf01-05 / kime01-02 /
		*   sad01-02 / surprised01-03 / serious01-02 / shame01 / niyaniya01 /
		*   oowarai01 / wink01 / sing01 / nod01-02 / sleep01-02 / eeto01 / jaan01 等）
		*/
		const IDLE_MOTIONS = [
			"smile01",
			"smile02",
			"smile03",
			"smile04",
			"smile05",
			"smile06",
			"thinking01",
			"thinking02",
			"nf01",
			"nf02",
			"nnf01",
			"nnf02",
			"kandou01",
			"kime01",
			"sad01",
			"surprised01",
			"serious01",
			"shame01",
			"niya01",
			"ando01",
			"odoodo01",
			"sigh01",
			"niyaniya01",
			"oowarai01",
			"wink01",
			"sing01",
			"nod01",
			"nod02",
			"sleep01",
			"eeto01",
			"jaan01",
			"gattsu01"
		];
		var Model = class {
			constructor() {
				this.cdnPath = getConfig().cdnPath;
				this.app = new PIXI.Application({
					view: document.getElementById("live2d"),
					autoStart: true,
					width: 800,
					height: 800,
					backgroundAlpha: 0
				});
				this.modelList = modelList;
				this.tips = tips;
				this.model = null;
				this.modelIndex = null;
				this.modelMotions = [];
				this.modelExpressions = [];
				this.idleMotions = [];
			}
			async loadModel(modelId, modelTexturesId, message) {
				if (modelId >= this.modelList.length) modelId %= this.modelList.length;
				if (modelTexturesId >= this.modelList[modelId].length) modelTexturesId %= this.modelList[modelId].length;
				setModelId(modelId);
				setModelTexturesId(modelTexturesId);
				console.log(`Live2D Model ${modelId}-${modelTexturesId}`);
				showMessage(this, message, 4e3, 10);
				const target = this.modelList[modelId][modelTexturesId];
				const url = `${this.cdnPath}model/${target}/index.json`;
				try {
					this.modelIndex = await fetch(url).then((response) => {
						if (!response.ok) throw new Error(`HTTP ${response.status}`);
						return response.json();
					});
				} catch (error) {
					console.error(`模型加载失败: ${url}`, error);
					showMessage(this, {
						text: "呜……模型加载失败了，换个衣服试试？",
						motion: "sad01"
					}, 5e3, 10);
					return;
				}
				this.modelIndex.url = url;
				if (!this.modelIndex.motions.idle && this.modelIndex.motions.idle01) this.modelIndex.motions.idle = this.modelIndex.motions.idle01;
				if (Array.isArray(this.modelIndex.expressions) && !this.modelIndex.expressions.find((expression) => expression.name === "idle") && this.modelIndex.expressions.find((expression) => expression.name === "idle01")) this.modelIndex.expressions.push({
					name: "idle",
					file: this.modelIndex.expressions.find((expression) => expression.name === "idle01").file
				});
				this.modelMotions = Object.keys(this.modelIndex.motions || {});
				this.modelExpressions = (this.modelIndex.expressions || []).map((expression) => expression.name);
				this.idleMotions = IDLE_MOTIONS.filter((motion) => this.modelMotions.includes(motion));
				this.app.stage.removeChildren();
				try {
					this.model = await Live2DModel.value.from(this.modelIndex, { motionPreload: getConfig().preload });
				} catch (error) {
					console.error("Live2D 模型渲染初始化失败", error);
					showMessage(this, {
						text: "呜……渲染器罢工了，刷新一下试试？",
						motion: "sad01"
					}, 5e3, 10);
					return;
				}
				this.app.stage.addChild(this.model);
				this.model.scale.set(.33);
				updateMessageArray(this.tips);
			}
			/** 播放一个随机的待机动作（不弹气泡） */
			playRandomIdle() {
				if (!this.model || !this.idleMotions.length) return;
				const motion = this.idleMotions[Math.floor(Math.random() * this.idleMotions.length)];
				try {
					this.model.motion(motion);
				} catch (error) {}
			}
			/** 随机切换一个表情 */
			playRandomExpression() {
				if (!this.model || !this.modelExpressions.length) return;
				const expression = this.modelExpressions[Math.floor(Math.random() * this.modelExpressions.length)];
				try {
					this.model.expression(expression);
				} catch (error) {}
			}
			/** 让模型视线跟随屏幕坐标（canvas 空间，可超出 0~800） */
			focusAt(clientX, clientY) {
				if (!this.model) return;
				const canvas = this.app.view;
				const rect = canvas.getBoundingClientRect();
				if (rect.width === 0 || rect.height === 0) return;
				const x = (clientX - rect.left) * (canvas.width / rect.width);
				const y = (clientY - rect.top) * (canvas.height / rect.height);
				try {
					this.model.focus(x, y);
				} catch (error) {}
			}
			/** 截取当前画面为 PNG dataURL */
			capture() {
				if (!this.model) return null;
				try {
					return this.app.renderer.plugins.extract.canvas(this.app.stage).toDataURL("image/png");
				} catch (error) {
					try {
						return this.app.view.toDataURL("image/png");
					} catch (error2) {
						return null;
					}
				}
			}
		};
		//#endregion
		//#region src/client/waifu/tools.js
		const fa_circle_user = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z\"/></svg>");
		const fa_camera_retro = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM344 304c0 48.6-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88z\"/></svg>");
		const fa_circle_info = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z\"/></svg>");
		const fa_xmark = "data:image/svg+xml," + encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z\"/></svg>");
		const tools = {
			"switch-model": {
				icon: fa_circle_user,
				callback: () => {}
			},
			"photo": {
				icon: fa_camera_retro,
				callback: () => {}
			},
			"info": {
				icon: fa_circle_info,
				callback: () => {
					showMessage({
						expression: () => null,
						motion: () => null
					}, {
						text: "RAISE A SUILEN Live2D 桌宠插件 · 5 角色 × 226 套换装",
						motion: "smile01"
					}, 4e3, 10);
				}
			},
			"quit": {
				icon: fa_xmark,
				callback: () => {
					localStorage.setItem("ras-waifu-display", Date.now());
					const waifu = document.getElementById("waifu");
					if (waifu) waifu.style.bottom = "-500px";
					setTimeout(() => {
						const toggle = document.getElementById("waifu-toggle");
						if (toggle) toggle.classList.add("waifu-toggle-active");
					}, 3e3);
				}
			}
		};
		//#endregion
		//#region src/client/waifu/characters.js
		/**
		* 角色元数据与模型资源名工具（RAISE A SUILEN 版）。
		*
		* 模型目录为 `<standalone编号>_<资源id>`（如 `030_casual-2023`），编号来自
		* 独立版 BANDORI 看板娘的 STANDALONE_CHARS（rei=30 / lock=17 / masuki=20 /
		* pareo=27 / chu2=7）。换装面板的显示名由 textureLabel() 把资源段名翻译成
		* 中文（如 `007_live_event_41_sr` → 「活动41 SR」），目录名本身保持不变。
		*/
		const CHARACTERS = [
			{
				"id": "rei",
				"num": 30,
				"name": "和奏 瑞依",
				"en": "LAYER",
				"color": "#4a90d9"
			},
			{
				"id": "lock",
				"num": 17,
				"name": "朝日 六花",
				"en": "LOCK",
				"color": "#f5a623"
			},
			{
				"id": "masuki",
				"num": 20,
				"name": "佐藤 益木",
				"en": "MASKING",
				"color": "#9b59b6"
			},
			{
				"id": "pareo",
				"num": 27,
				"name": "鳰原 令王那",
				"en": "PAREO",
				"color": "#ff8ac5"
			},
			{
				"id": "chu2",
				"num": 7,
				"name": "珠手 知由",
				"en": "CHU²",
				"color": "#e8483d"
			}
		];
		const LABEL_RULES = [
			[/^casual_summer-2023$/, "夏常服2023"],
			[/^casual_winter-2023$/, "冬常服2023"],
			[/^casual-2023$/, "常服2023"],
			[/^casual_summer$/, "夏常服"],
			[/^casual_winter$/, "冬常服"],
			[/^casual$/, "常服"],
			[/^school_summer-2023$/, "校服夏2023"],
			[/^school_winter-2023$/, "校服冬2023"],
			[/^school_summer$/, "校服夏"],
			[/^school_winter_v3$/, "校服冬V3"],
			[/^school_winter$/, "校服冬"],
			[/^school_winter_s2$/, "校服冬S2"],
			[/^school_summer_s2$/, "校服夏S2"],
			[/^swimsuit-2023$/, "泳装2023"],
			[/^swimsuit$/, "泳装"],
			[/^yukata$/, "浴衣"],
			[/^(\d{4})_furisode$/, "振袖$1"],
			[/^arbeit$/, "打工"],
			[/^pajamas-(\d{4})$/, "睡衣$1"],
			[/^pajamas$/, "睡衣"],
			[/^chapter0_pajamas$/, "序章睡衣"],
			[/^chapter0_live$/, "序章演出"],
			[/^gym_clothes$/, "体操服"],
			[/^cafe$/, "咖啡厅"],
			[/^halloween$/, "万圣节"],
			[/^christmas_01$/, "圣诞"],
			[/^fantasy$/, "奇幻"],
			[/^garupa_t$/, "ガルパT恤"],
			[/^birthday_(\d{4})$/, "生日$1"],
			[/^birthday$/, "生日"],
			[/^dream_festival_(\d+)(_ur)?$/, "梦祭$1"],
			[/^dream_festival$/, "梦祭"],
			[/^collabo_d_1_ur$/, "联动D1"],
			[/^collabo_d_2_ur$/, "联动D2"],
			[/^collabo_i_2_ur$/, "联动I2"],
			[/^3rd_general_election_r$/, "第3届总选举"],
			[/^4th_general_election_r$/, "第4届总选举"],
			[/^2nd_general_election_r$/, "第2届总选举"],
			[/^2018_dog$/, "戌年2018"],
			[/^2021af$/, "周年祭2021"],
			[/^girlparty2019$/, "少女派对2019"],
			[/^kirameki_festival$/, "闪耀祭"],
			[/^kirameki_festival_coat$/, "闪耀祭外套"],
			[/^precious_summer$/, "珍贵夏日"],
			[/^special_5th$/, "5周年特别"],
			[/^miku_migikata$/, "初音联动·右肩"],
			[/^live_default$/, "默认演出"],
			[/^live_r_(\d{4})$/, "演出R$1"],
			[/^live_r$/, "演出R"],
			[/^live_sr_(\d+)$/, "演出SR$1"],
			[/^live_ssr_(\d+)$/, "演出SSR$1"],
			[/^live_event_(\d+)_([a-z]+)$/, (m, n, r) => `活动${+n} ${r.toUpperCase()}`],
			[/^live_event_(\d+)$/, (m, n) => `活动${+n}`],
			[/^event_(\d+)_story_(\d+)$/, "活动$1剧情$2"]
		];
		/**
		* 从模型目录名中提取展示标签（中文）。
		* `047_live_event_41_sr` → 「活动41 SR」；未命中规则的段名回退原始段名。
		*/
		function textureLabel(dir) {
			const seg = dir.split("/").pop();
			const body = seg.replace(/^\d{3}_/, "");
			for (const [re, out] of LABEL_RULES) if (re.test(body)) return body.replace(re, out);
			return seg;
		}
		/** 去掉目录名末尾的中文标签，得到原始资源 id（本版本段名无中文标签，原样返回）。 */
		function stripTextureLabel(dir) {
			return dir.replace(/_\p{Script=Han}[\p{Script=Han}0-9A-Za-z]*$/u, "");
		}
		/** 由模型目录名得到平铺在 `assets/` 下的资源文件名。 */
		function textureAssetId(dir) {
			return stripTextureLabel(dir);
		}
		/**
		* 该换装是否有缩略图资源。本版本无逐套缩略图，一律返回 false（面板显示文字标签）。
		*/
		function hasTextureAsset(dir) {
			return false;
		}
		//#endregion
		//#region src/client/waifu/index.js
		const TOOL_TITLES = {
			"switch-model": "切换角色",
			"photo": "拍照",
			"info": "关于",
			"quit": "隐藏"
		};
		/** 轻量监听/定时器收集器：插件卸载时统一清理 */
		function createHooks() {
			const listeners = [];
			const intervals = [];
			return {
				on(target, event, fn) {
					target.addEventListener(event, fn);
					listeners.push([
						target,
						event,
						fn
					]);
				},
				interval(fn, ms) {
					intervals.push(setInterval(fn, ms));
				},
				stop() {
					for (const [target, event, fn] of listeners) try {
						target.removeEventListener(event, fn);
					} catch {}
					for (const id of intervals) clearInterval(id);
					listeners.length = 0;
					intervals.length = 0;
				}
			};
		}
		async function loadWidget(hooks) {
			document.body.insertAdjacentHTML("beforeend", `
    <div id="waifu">
      <canvas id="live2d" width="800" height="800"></canvas>
      <div id="waifu-tips"></div>
      <div id="waifu-tool"></div>
    </div>
    <div id="model-selection-panel" class="waifu-panel" style="display: none;"></div>
    <div id="texture-selection-panel" class="waifu-panel" style="display: none;"></div>`);
			const model = new Model();
			localStorage.removeItem("ras-waifu-display");
			sessionStorage.removeItem("waifu-text");
			const waifu = document.getElementById("waifu");
			const toolBar = document.getElementById("waifu-tool");
			const modelPanel = document.getElementById("model-selection-panel");
			const texturePanel = document.getElementById("texture-selection-panel");
			let selectedModelIndex = null;
			for (const panel of [modelPanel, texturePanel]) panel.addEventListener("wheel", (event) => event.stopPropagation(), {
				passive: true,
				capture: true
			});
			const drag = enableDrag(waifu);
			restorePosition(waifu);
			const waifuRect = () => waifu.getBoundingClientRect();
			function openPanel(panel) {
				panel.style.display = "block";
				const pw = panel.offsetWidth, ph = panel.offsetHeight;
				const rect = waifuRect();
				let left = rect.right + 8;
				if (left + pw > window.innerWidth - 8) left = rect.left - pw - 8;
				left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
				const top = Math.max(8, Math.min(rect.top, window.innerHeight - ph - 8));
				panel.style.position = "fixed";
				panel.style.left = left + "px";
				panel.style.top = top + "px";
				panel.style.right = "auto";
				panel.style.bottom = "auto";
			}
			function closePanels() {
				modelPanel.style.display = "none";
				texturePanel.style.display = "none";
			}
			tools["switch-model"].callback = () => {
				if (modelPanel.style.display !== "none") {
					closePanels();
					return;
				}
				renderModelPanel();
				openPanel(modelPanel);
			};
			tools["photo"].callback = () => {
				const url = model.capture();
				if (!url) {
					showMessage(model, {
						text: "呜……拍照失败了，再试一次吧？",
						motion: "sad01"
					}, 4e3, 10);
					return;
				}
				const a = document.createElement("a");
				a.href = url;
				a.download = `live2d-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:T]/g, "-")}.png`;
				document.body.appendChild(a);
				a.click();
				a.remove();
				showMessage(model, {
					text: "拍好啦！这张照片，要好好珍藏哦！",
					motion: "smile01"
				}, 4e3, 10);
			};
			if (!Array.isArray(getConfig().tools)) getConfig().tools = Object.keys(tools);
			for (const tool of getConfig().tools) {
				if (!tools[tool]) continue;
				const { icon, callback } = tools[tool];
				toolBar.insertAdjacentHTML("beforeend", `<span id="waifu-tool-${tool}" title="${TOOL_TITLES[tool] || tool}">${decodeURIComponent(icon).replace("data:image/svg+xml,", "")}</span>`);
				document.getElementById(`waifu-tool-${tool}`).addEventListener("click", callback);
			}
			function renderModelPanel() {
				let html = "";
				modelList.forEach((textures, index) => {
					const char = CHARACTERS[index];
					const asset = `${getConfig().cdnPath}assets/chara_icon_${char.num}.png`;
					html += `
            <button class="model-option" data-model-index="${index}" style="--accent:${char.color}">
              <img src="${asset}" alt="${char.name}" loading="lazy">
              <span class="model-option-text">
                <span class="model-option-name">${char.name}</span>
                <span class="model-option-en">${char.en}</span>
              </span>
            </button>`;
				});
				modelPanel.innerHTML = `
            <div class="waifu-panel-header"><span>选择角色</span><button class="waifu-panel-close" aria-label="关闭">✕</button></div>
            <div class="waifu-panel-body">${html}</div>`;
			}
			function renderTexturePanel(charIndex) {
				const char = CHARACTERS[charIndex];
				const textures = modelList[charIndex];
				let html = "";
				textures.forEach((dir, index) => {
					const label = textureLabel(dir);
					const base = textureAssetId(dir);
					const asset = `${getConfig().cdnPath}assets/${base}.png`;
					if (hasTextureAsset(dir)) html += `
                <button class="texture-option" data-texture-index="${index}">
                  <img src="${asset}" alt="${label}" loading="lazy">
                  <span>${label}</span>
                </button>`;
					else html += `
                <button class="texture-option texture-option-text" data-texture-index="${index}">
                  <span>${label}</span>
                </button>`;
				});
				texturePanel.innerHTML = `
            <div class="waifu-panel-header">
              <button class="waifu-panel-back" aria-label="返回">←</button>
              <span>${char.name} · 换装</span>
              <button class="waifu-panel-close" aria-label="关闭">✕</button>
            </div>
            <div class="waifu-panel-body">${html}</div>`;
			}
			hooks.on(modelPanel, "click", async (event) => {
				if (event.target.closest(".waifu-panel-close")) {
					closePanels();
					return;
				}
				const button = event.target.closest(".model-option");
				if (!button) return;
				selectedModelIndex = parseInt(button.getAttribute("data-model-index"), 10);
				renderTexturePanel(selectedModelIndex);
				modelPanel.style.display = "none";
				openPanel(texturePanel);
			});
			hooks.on(texturePanel, "click", async (event) => {
				if (event.target.closest(".waifu-panel-close")) {
					closePanels();
					return;
				}
				if (event.target.closest(".waifu-panel-back")) {
					texturePanel.style.display = "none";
					openPanel(modelPanel);
					return;
				}
				const button = event.target.closest(".texture-option");
				if (!button) return;
				const textureIndex = parseInt(button.getAttribute("data-texture-index"), 10);
				closePanels();
				await model.loadModel(selectedModelIndex, textureIndex);
			});
			hooks.on(document, "click", (event) => {
				if (event.target.closest("#model-selection-panel") || event.target.closest("#texture-selection-panel") || event.target.closest("#waifu-tool") || event.target.closest("#waifu-toggle")) return;
				closePanels();
			});
			hooks.on(document, "keydown", (event) => {
				if (event.key === "Escape") closePanels();
			});
			registerEventListener(model, drag, hooks);
			const api = {
				loadModel: (charId, texId) => model.loadModel(charId, texId),
				getModelList: () => modelList,
				getState: () => ({
					modelId: getModelId(),
					modelTexturesId: getModelTexturesId()
				}),
				capture: () => model.capture(),
				playRandomIdle: () => model.playRandomIdle(),
				showMessage,
				debug: () => ({
					stageChildren: model.app.stage.children.length,
					modelLoaded: !!model.model,
					modelSize: model.model ? {
						w: Math.round(model.model.width),
						h: Math.round(model.model.height)
					} : null,
					appRunning: !!(model.app.ticker && model.app.ticker.started),
					canvas: model.app.view ? {
						id: model.app.view.id,
						w: model.app.view.width,
						h: model.app.view.height
					} : null,
					pixiVersion: window.PIXI && window.PIXI.VERSION
				})
			};
			window.L2D = api;
			if (getModelId() === null) resetModelState();
			await model.loadModel(getModelId(), getModelTexturesId());
			return () => {
				hooks.stop();
				clearMessageTimer();
				try {
					model.app.destroy(true);
				} catch {}
				for (const el of [
					waifu,
					modelPanel,
					texturePanel
				]) try {
					if (el && el.parentNode) el.parentNode.removeChild(el);
				} catch {}
				if (window.L2D === api) window.L2D = void 0;
			};
		}
		function enableDrag(widgetEl) {
			const drag = {
				active: false,
				moved: false,
				startX: 0,
				startY: 0,
				originX: 0,
				originY: 0
			};
			widgetEl.addEventListener("pointerdown", (event) => {
				if (event.target.closest("#waifu-tool") || event.target.closest(".waifu-panel") || event.target.closest("#waifu-toggle")) return;
				drag.active = true;
				drag.moved = false;
				drag.startX = event.clientX;
				drag.startY = event.clientY;
				const rect = widgetEl.getBoundingClientRect();
				drag.originX = rect.left;
				drag.originY = rect.top;
				widgetEl.classList.add("waifu-dragging");
				try {
					widgetEl.setPointerCapture(event.pointerId);
				} catch (error) {}
			});
			widgetEl.addEventListener("pointermove", (event) => {
				if (!drag.active) return;
				const dx = event.clientX - drag.startX;
				const dy = event.clientY - drag.startY;
				if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
				if (!drag.moved) return;
				const left = Math.min(Math.max(drag.originX + dx, -120), window.innerWidth - 40);
				const top = Math.min(Math.max(drag.originY + dy, -80), window.innerHeight - 40);
				widgetEl.style.left = left + "px";
				widgetEl.style.top = top + "px";
				widgetEl.style.right = "auto";
				widgetEl.style.bottom = "auto";
			});
			const endDrag = (event) => {
				if (!drag.active) return;
				drag.active = false;
				widgetEl.classList.remove("waifu-dragging");
				if (drag.moved) {
					const rect = widgetEl.getBoundingClientRect();
					try {
						localStorage.setItem("ras-waifu-pos", JSON.stringify({
							left: rect.left,
							top: rect.top
						}));
					} catch (error) {}
				}
			};
			widgetEl.addEventListener("pointerup", endDrag);
			widgetEl.addEventListener("pointercancel", endDrag);
			return drag;
		}
		function restorePosition(widgetEl) {
			try {
				const pos = JSON.parse(localStorage.getItem("ras-waifu-pos"));
				if (!pos || typeof pos.left !== "number" || typeof pos.top !== "number") return;
				const left = Math.min(Math.max(pos.left, -120), window.innerWidth - 40);
				const top = Math.min(Math.max(pos.top, -80), window.innerHeight - 40);
				widgetEl.style.left = left + "px";
				widgetEl.style.top = top + "px";
				widgetEl.style.right = "auto";
				widgetEl.style.bottom = "auto";
			} catch (error) {}
		}
		function registerEventListener(model, drag, hooks) {
			let userAction = false;
			let idleSeconds = 0;
			let lastHoverElement;
			let lastFocusTime = 0;
			hooks.on(window, "mousemove", (event) => {
				userAction = true;
				const now = Date.now();
				if (now - lastFocusTime > 50) {
					lastFocusTime = now;
					model.focusAt(event.clientX, event.clientY);
				}
			});
			hooks.on(window, "mousedown", () => userAction = true);
			hooks.on(window, "keydown", () => userAction = true);
			hooks.on(window, "scroll", () => userAction = true, true);
			hooks.interval(() => {
				if (userAction) {
					userAction = false;
					idleSeconds = 0;
					return;
				}
				idleSeconds++;
				if (idleSeconds === 18) showMessage(model, getMessageArray(), 6e3, 9);
				else if (idleSeconds > 18 && idleSeconds % 30 === 0) model.playRandomIdle();
			}, 1e3);
			hooks.on(window, "mouseover", (event) => {
				if (event.target.closest("#live2d")) {
					showMessage(model, getMessageArray(), 4e3, 9);
					return;
				}
				for (const { selector, text } of tips.mouseover) {
					if (!event.target.closest(selector)) continue;
					if (lastHoverElement === selector) return;
					lastHoverElement = selector;
					showMessage(model, randomSelection(text[getModelId()]), 4e3, 10);
					return;
				}
			});
			hooks.on(window, "click", (event) => {
				if (drag.moved) return;
				if (event.target.closest("#live2d")) {
					showMessage(model, getMessageArray(), 4e3, 9);
					return;
				}
				for (const { selector, text } of tips.mouseover) {
					if (!event.target.closest(selector)) continue;
					showMessage(model, randomSelection(text[getModelId()]), 4e3, 10);
					return;
				}
			});
			hooks.on(window, "resize", () => {
				const threshold = 160;
				const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
				const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
				if (widthDiff > threshold || heightDiff > threshold) showMessage(model, tips.message.console[getModelId()], 6e3, 9);
			});
			hooks.on(window, "copy", () => {
				showMessage(model, tips.message.copy[getModelId()], 6e3, 9);
			});
			hooks.on(document, "visibilitychange", () => {
				if (!document.hidden) showMessage(model, tips.message.visibilitychange[getModelId()], 6e3, 9);
			});
		}
		/**
		* 启动桌宠。返回停止函数（插件卸载时调用）：清理监听/定时器、销毁渲染器、移除 DOM。
		*/
		async function initWidget(config) {
			const hooks = createHooks();
			setConfig(config);
			document.getElementById("waifu-toggle")?.remove();
			document.getElementById("waifu")?.remove();
			document.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle"><span>Live2D</span></div>`);
			const toggle = document.getElementById("waifu-toggle");
			let stopWidget = () => {};
			const toggleStop = () => {
				hooks.stop();
				try {
					if (toggle && toggle.parentNode) toggle.parentNode.removeChild(toggle);
				} catch {}
				stopWidget();
			};
			hooks.on(toggle, "click", async () => {
				toggle.classList.remove("waifu-toggle-active");
				if (toggle.getAttribute("first-time")) {
					stopWidget = await loadWidget(hooks);
					toggle.removeAttribute("first-time");
				} else {
					localStorage.removeItem("ras-waifu-display");
					const waifuEl = document.getElementById("waifu");
					if (waifuEl) {
						waifuEl.style.display = "";
						setTimeout(() => {
							waifuEl.style.bottom = "20px";
						}, 0);
					}
				}
			});
			if (localStorage.getItem("ras-waifu-display") && Date.now() - localStorage.getItem("ras-waifu-display") <= 864e5) {
				toggle.setAttribute("first-time", true);
				setTimeout(() => {
					toggle.classList.add("waifu-toggle-active");
				}, 0);
			} else stopWidget = await loadWidget(hooks);
			return toggleStop;
		}
		//#endregion
		//#region src/client/index.ts
		/** vendor 运行时脚本（host 同源路由，按依赖顺序加载）。
		*  Cubism 2.1 渲染链：live2d.min.js（框架，暴露 window.Live2D / Live2DModelWebGL）
		*  → pixi.min.js（PIXI 6）→ live2d-display.cubism2.min.js（pixi-live2d-display
		*  0.4.0 的 cubism2 版，运行时校验 window.Live2D 存在）。
		*  Cubism 2.1 不需要 live2dcubismcore.min.js（那是 Cubism 4 链的依赖）。
		*/
		const VENDOR_SCRIPTS = [
			"/ras-assets/vendor/live2d.min.js",
			"/ras-assets/vendor/pixi.min.js",
			"/ras-assets/vendor/live2d-display.cubism2.min.js"
		];
		/** 桌宠容器与面板的 z-index 覆盖（dsh GUI 上方悬浮）+ 默认放右下（避开左侧栏）。 */
		const Z_INDEX_OVERRIDE = `
#waifu, #waifu-toggle { z-index: 2147483646 !important; }
.waifu-panel { z-index: 2147483647 !important; }
#waifu { left: auto; right: 20px; top: 20px; bottom: auto; }
`;
		function loadScript(src) {
			return new Promise((resolve, reject) => {
				const tag = document.createElement("script");
				tag.src = src;
				tag.onload = () => resolve();
				tag.onerror = () => reject(/* @__PURE__ */ new Error(`加载 ${src} 失败`));
				document.head.appendChild(tag);
			});
		}
		/** 插件入口：注入 CSS + 按序加载运行时 + 启动桌宠；清理注册为 ctx.effect disposer。 */
		function apply(ctx) {
			ctx.effect(() => {
				const cleanup = [];
				let disposed = false;
				const stop = () => {
					if (disposed) return;
					disposed = true;
					for (const fn of cleanup) try {
						fn();
					} catch {}
					cleanup.length = 0;
				};
				fetch("/ras-assets/waifu.css").then((res) => res.ok ? res.text() : Promise.reject(/* @__PURE__ */ new Error(`HTTP ${res.status}`))).then((css) => {
					if (disposed) return;
					const style = document.createElement("style");
					style.id = "live2d-roselia-css";
					style.textContent = css + Z_INDEX_OVERRIDE;
					document.head.appendChild(style);
					cleanup.push(() => style.remove());
				}).catch((error) => console.error("[live2d-roselia] 样式加载失败", error));
				(async () => {
					for (const src of VENDOR_SCRIPTS) {
						await loadScript(src);
						if (disposed) return;
					}
					if (disposed) return;
					try {
						await initWidget({
							cdnPath: "/ras-assets/",
							preload: "IDLE",
							tools: [
								"switch-model",
								"photo",
								"info",
								"quit"
							]
						});
					} catch (error) {
						console.error("[live2d-roselia] 桌宠启动失败", error);
					}
				})();
				return stop;
			}, "live2d-roselia: widget");
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map