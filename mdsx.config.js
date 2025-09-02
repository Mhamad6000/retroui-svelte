import { defineConfig } from "mdsx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const prettyCodeOptions = {
	theme: "github-dark",
	keepBackground: false,
};

export default defineConfig({
	remarkPlugins: [remarkGfm],
	rehypePlugins: [
		rehypeSlug,
		[rehypePrettyCode, prettyCodeOptions]
	],
	blueprints: {
		default: {
			path: resolve(__dirname, "./src/lib/components/blueprint.svelte"),
		},
	},
	extensions: [".md"],
});