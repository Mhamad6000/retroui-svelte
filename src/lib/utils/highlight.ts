import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

const highlightCodeCache = new Map<string, string>();
const jsEngine = createJavaScriptRegexEngine();
const highlighterPromise = createHighlighterCore({
	themes: [import("@shikijs/themes/github-dark"), import("@shikijs/themes/github-light-default")],
	langs: [
		import("@shikijs/langs/typescript"), 
		import("@shikijs/langs/svelte"),
		import("@shikijs/langs/javascript"),
		import("@shikijs/langs/html"),
		import("@shikijs/langs/css")
	],
	engine: jsEngine,
});

export async function highlightCode(code: string, language: string = "svelte"): Promise<string> {
	const cacheKey = `${code}-${language}`;
	const cachedCode = highlightCodeCache.get(cacheKey);
	if (cachedCode) return cachedCode;

	const highlighter = await highlighterPromise;

	const html = highlighter.codeToHtml(formatCode(code), {
		lang: language,
		theme: "github-dark",
		transformers: [
			{
				pre(node) {
					node.properties["class"] = "shiki";
				},
				code(node) {
					node.properties["data-language"] = language;
				},
				line(node, line) {
					node.properties["data-line"] = line;
				},
			},
		],
	});

	highlightCodeCache.set(cacheKey, html);

	return html;
}

function formatCode(code: string): string {
	return code.replace(/\t/g, "  ");
}
