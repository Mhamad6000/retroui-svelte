<script lang="ts">
	import { siteConfig } from "$lib/site-config";
	import "../app.css";
	import { navigation } from "$lib/navigation";
	import MainLayout from "$lib/layouts/main-layout.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher />
<MainLayout {navigation}>
	{@render children?.()}
</MainLayout>
