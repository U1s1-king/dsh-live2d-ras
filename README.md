# dsh-live2d-ras

**RAISE A SUILEN（RAS）Live2D 桌宠插件** for [DeepSeek Harness](https://github.com/deepseek-ai)（本地模型同源加载，零外部依赖）。

## 收录

**RAISE A SUILEN**：和奏瑞依 LAYER（主唱·贝斯）、朝日六花 LOCK（吉他）、佐藤益木 MASKING（鼓手）、鳰原令王那 PAREO（键盘）、珠手知由 CHU²（制作人·DJ），合计 **226 套换装**（Cubism 2，约 660MB 模型资源）。

> 模型取自 BANDORI 独立版 Live2D 数据（`D:\za\文件\models` 的 zst 包，编号 007/017/020/027/030），与 Roselia / Poppin'Party 插件同源；本地模型 + 本地运行时，**完全离线**。

## 功能

- 右下角 Live2D 看板娘（5 角色：LAYER / LOCK / MASKING / PAREO / CHU²），支持拖拽
- 角色切换 + 换装面板（226 套换装，含全部 Live/活动/生日/节日服装）
- 桌面宠物（点击 / 抚摸 / 拖拽互动）
- 表情包 + 每日问候 + 节日祝福（按季节 / 时刻 / 操作触发台词）
- 模型位置、显示状态自动记忆（独立 localStorage 键 `ro-waifu-*`，互不干扰）

## 安装

```bash
dsh plugin --profile web add D:\dsh\dsh-live2d-ras
dsh web
```

或从 GitHub 安装：

```bash
dsh plugin --profile web add "github:U1s1-king/dsh-live2d-ras#main"
```

## 结构

```
src/
  index.ts          # host 半区：cordis 插件入口（inject webServer）
  routes.ts         # 静态资源路由（/ras-assets）
  client/
    index.ts        # client 半区：__ModuleLoader__ 挂载 + VENDOR 加载
    waifu/
      characters.js # 角色元数据（LAYER / LOCK / MASKING / PAREO / CHU²）
      config.js     # 通用配置（状态 / 位置 / 面板）
      modelList.js  # 模型列表（由 assets/model 生成，5 角色 × 226 套）
      tips.js       # RAS 台词包（5 角色人设台词）
      model.js      # Live2D 模型加载（index.json + 动作过滤）
      tools.js      # 工具按钮（换装 / 拍照 / 信息 / 退出）
assets/
  model/            # 模型资源（007_* CHU² / 017_* LOCK / 020_* MASKING / 027_* PAREO / 030_* LAYER）
  vendor/           # live2d.min.js / pixi.min.js / live2d-display.cubism2.min.js
  waifu.css         # 桌宠样式（右上角定位 + z-index 防遮挡）
  character.png     # 角色图
  assets/           # 角色头像（chara_icon_7/17/20/27/30.png）
```

## 说明

- **路由前缀**：`/ras-assets`（与 Roselia 的 `/ro-assets`、MyGO 的 `/pet-assets` 互不冲突，可多插件共存）
- **localStorage**：使用 `ro-waifu-display` / `ro-waifu-pos` 独立键，与其他桌宠插件隔离
- **模型来源**：BANDORI 独立版全量数据（zst 压缩包解压转换），model.json → index.json
- **台词包**：按 5 角色人设撰写（LAYER 温柔 / LOCK 元气 / MASKING 反差萌 / PAREO 天才 / CHU² 骄傲小大人）
