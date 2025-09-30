// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://fengjutian.github.io/mastra-zh-doc',
	integrations: [mdx(), sitemap()],
	output: 'static', // 确保是静态站点输出
  	base: '/mastra-zh-doc/', // 仓库名
});
