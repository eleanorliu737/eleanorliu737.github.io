// 「轨迹」页的人生章节数据。
// 想改故事？直接编辑下面的文字即可，网站会自动更新。
// period 写时间段，emoji 是章节图标，tagline 是这一章的“性格关键词”。

export interface Chapter {
  period: string;
  emoji: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  body: string;
  bodyEn: string;
}

export const chapters: Chapter[] = [
  {
    period: '很久以前 · Long ago',
    emoji: '🔭',
    title: '序章：好奇心过剩',
    titleEn: 'Prologue: Too Curious',
    tagline: '「什么都想拆开看看」',
    taglineEn: '“Wanted to take everything apart”',
    body: '从小就是那种会把问题问到底的人。喜欢拆东西、翻百科、追着一个「为什么」跑很远。后来发现，这种停不下来的好奇心，就是我所有故事的引擎。',
    bodyEn: "I was the kid who never stopped asking why. That restless curiosity turned out to be the engine behind everything that came after.",
  },
  {
    period: '硕士时代 · Grad school',
    emoji: '🧠',
    title: '与神经网络初遇',
    titleEn: 'Meeting Neural Networks',
    tagline: '「把模糊的问题变成可以被优化的问题」',
    taglineEn: '“Turning fuzzy problems into optimizable ones”',
    body: '读 AI 硕士的日子里，我学会的最重要的事，不是某个具体的模型，而是一种思维方式：把一个模糊的、人类的问题，翻译成一个可以被定义、被度量、被优化的问题。这个能力后来在哪儿都用得上。',
    bodyEn: 'During my AI master’s, the most valuable thing I learned wasn’t any single model — it was a way of thinking: translating fuzzy human problems into ones that can be defined, measured, and optimized.',
  },
  {
    period: '间隔的两年 · The detour',
    emoji: '🧭',
    title: '绕路的两年',
    titleEn: 'Two Years Off the Map',
    tagline: '「地图之外也有风景」',
    taglineEn: '“There is scenery off the map, too”',
    body: '毕业后有两年没有做 AI。这段绕路让我学到了课堂不教的东西：怎么跟真实世界打交道，怎么在没有标准答案的地方做决定。留白也是叙事的一部分——它让我更确定自己想回到哪里。',
    bodyEn: 'For two years after graduation I wasn’t doing AI. The detour taught me what classrooms don’t: dealing with the real world, making decisions where there is no ground truth. The blank space made it clear where I wanted to return.',
  },
  {
    period: '2026 · 现在 Now',
    emoji: '🚀',
    title: '重新出发：用作品说话',
    titleEn: 'Restart: Let the Works Speak',
    tagline: '「想法不值钱，做出来才算」',
    taglineEn: '“Ideas are cheap; shipping counts”',
    body: '2026 年，我决定用最直接的方式回到 AI：动手做东西。几天时间搓出了一个 AI 寻书助手（RAG + 用户画像），又搓了你正在看的这个网站。故事未完待续。',
    bodyEn: 'In 2026 I chose the most direct way back into AI: building things. An AI book finder (RAG + user profiling) in a few days, then this very site. To be continued.',
  },
];
