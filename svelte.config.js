import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import mdsxConfig from "./mdsx.config.js";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],
	kit: {
		alias: {
			"$registry/*": "registry/*",
			"$content/*": ".velite/*",
			"$lib/*": "src/lib/*",
		},
		adapter: adapter(),
	},
	extensions: [".svelte", ".md"],
};

export default config;
