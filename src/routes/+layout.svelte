<script lang="ts">
	import "../app.css";

	import { Toaster } from "$registry/ui/sonner/index.js";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher />
<Toaster />

{@render children?.()}
