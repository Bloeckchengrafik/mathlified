import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: "./src/routes/_mdLayout.svelte",

	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatex],

});

export default config;
