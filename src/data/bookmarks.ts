// 「收藏」页的数据：folders 数组里的每个对象就是一个收藏夹。
// 收藏一篇新文章：找到对应的收藏夹，往它的 items 里加一条 { title, url, source, note }。
// 新建收藏夹：复制一个 folder 对象，改名字和内容即可。

export interface Bookmark {
  title: string;
  url: string;
  source: string;
  note?: string;
}

export interface Folder {
  emoji: string;
  name: string;
  nameEn: string;
  blurb: string;
  blurbEn: string;
  items: Bookmark[];
}

export const folders: Folder[] = [
  {
    emoji: '🤖',
    name: 'AI 与技术',
    nameEn: 'AI & Tech',
    blurb: '让我对这个领域保持敬畏和兴奋的文章。',
    blurbEn: 'Writing that keeps me in awe of this field.',
    items: [
      {
        title: 'A Recipe for Training Neural Networks',
        url: 'https://karpathy.github.io/2019/04/25/recipe/',
        source: 'karpathy.github.io',
        note: 'Karpathy 的炼丹手册，每次训练模型前重读一遍都有收获。',
      },
      {
        title: 'The Bitter Lesson',
        url: 'http://www.incompleteideas.net/IncIdeas/BitterLesson.html',
        source: 'incompleteideas.net',
        note: 'Rich Sutton 的经典短文：算力 + 通用方法最终会赢过人类精心设计的先验。',
      },
      {
        title: 'Distill — 视觉化的机器学习论文',
        url: 'https://distill.pub/',
        source: 'distill.pub',
        note: '把论文做成可交互可视化的典范，虽然停更了但常看常新。',
      },
    ],
  },
  {
    emoji: '✍️',
    name: '写作与思考',
    nameEn: 'Writing & Thinking',
    blurb: '教我怎么想问题、怎么把想法写清楚的文章。',
    blurbEn: 'Pieces that taught me how to think — and how to write it down clearly.',
    items: [
      {
        title: 'How to Do Great Work',
        url: 'https://www.paulgraham.com/greatwork.html',
        source: 'paulgraham.com',
        note: 'Paul Graham 关于如何做出色工作的长文，值得每年重读。',
      },
      {
        title: 'The Age of the Essay',
        url: 'https://www.paulgraham.com/essay.html',
        source: 'paulgraham.com',
        note: '写作不是把想好的东西写下来，写作本身就是想的过程。',
      },
    ],
  },
  {
    emoji: '🌈',
    name: '有趣的角落',
    nameEn: 'Fun Corners',
    blurb: '互联网上让人会心一笑或大开眼界的地方。',
    blurbEn: 'Corners of the internet that make me smile or gasp.',
    items: [
      {
        title: '3Blue1Brown',
        url: 'https://www.3blue1brown.com/',
        source: '3blue1brown.com',
        note: '数学可视化的天花板，神经网络系列是我的入坑作。',
      },
      {
        title: 'xkcd',
        url: 'https://xkcd.com/',
        source: 'xkcd.com',
        note: '理工科人的快乐源泉。',
      },
    ],
  },
];
