import { defineConfig } from "mdsx";
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { rehypeCustomHighlight } from '@mdsx/rehype-custom-highlighter';

const jsEngine = createJavaScriptRegexEngine();
let highlighter = null;

const highlighterPromise = createHighlighterCore({
	themes: [import('@shikijs/themes/github-light'), import('@shikijs/themes/github-dark')],
	langs: [
		import('@shikijs/langs/javascript'),
		import('@shikijs/langs/typescript'),
		import('@shikijs/langs/svelte'),
		import('@shikijs/langs/css'),
		import('@shikijs/langs/html'),
		import('@shikijs/langs/json'),
		import('@shikijs/langs/markdown'),
		import('@shikijs/langs/bash'),
	],
	engine: jsEngine,
});

const highlightOptions = {
	highlight: async ({ value, lang }) => {
		if (!lang) return value;
		if (!highlighter) {
			highlighter = await highlighterPromise;
		}
		return highlighter.codeToHtml(value, { 
			lang, 
			theme: 'github-dark',
			transformers: [
				{
					pre(node) {
						// Add custom classes to the pre element
						const existingClass = node.properties.class || '';
						node.properties.class = `${existingClass} p-4 text-sm`.trim();
					}
				}
			]
		});
	}
};

export default defineConfig({
	extensions: ['.md'],
	rehypePlugins: [[rehypeCustomHighlight, highlightOptions]],
	blueprints: {
		default: {
			path: 'src/lib/components/blueprint.svelte',
		},
	},
});