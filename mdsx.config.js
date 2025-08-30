import { defineConfig } from "mdsx";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';


const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
	// remarkPlugins: [remarkGfm],
	// rehypePlugins: [rehypeSlug],
		blueprints: {
		default: {
			// rehypePlugins: [rehypePrettyCode],
			path: 'src/lib/components/blueprint.svelte',
		},
		
	},
	extensions: [".md"],
});
