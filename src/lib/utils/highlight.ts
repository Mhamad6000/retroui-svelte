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
		import("@shikijs/langs/css"),
		import("@shikijs/langs/bash"),
		import("@shikijs/langs/shell")
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
                    // For command highlighting, use minimal styling
                    if (language === "bash" || language === "shell") {
                        node.properties.class = "p-3 text-sm font-mono font-light";
                        node.properties.style = "background: transparent; margin: 0; white-space: nowrap; overflow-x: auto;";
                    } else {
                        // Keep original MDSX configuration but force width constraints
                        const existingClass = node.properties.class || '';
                        node.properties.class = `${existingClass} p-4 text-sm overflow-x-auto h-[450px] !w-full !max-w-full`.trim();
                    }
                },
                code(node) {
                    node.properties["data-language"] = language;
                    if (language === "bash" || language === "shell") {
                        node.properties.style = "background: transparent; padding: 0; font-weight: 300;";
                    }
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
