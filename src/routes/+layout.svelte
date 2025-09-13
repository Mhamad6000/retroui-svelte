<script lang="ts">
	import "../app.css";
	import "../themes.css";

	import { Toaster } from "$registry/ui/sonner/index.js";
	import { ModeWatcher } from "mode-watcher";
	import { UserConfig, UserConfigContext } from "$lib/user-config.svelte.js";

	let { children } = $props();

	// Initialize user config
	const userConfig = new UserConfig();
	UserConfigContext.set(userConfig);
</script>

<ModeWatcher />
<Toaster />

{@render children?.()}
