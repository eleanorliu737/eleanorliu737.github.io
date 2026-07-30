// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://eleanorliu737.github.io',
  markdown: {
    // 让文章里的单次换行也显示为换行（默认 Markdown 只认空行分段）
    remarkPlugins: [remarkBreaks],
  },
});
