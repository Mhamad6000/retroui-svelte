<script lang="ts">
	import { siteConfig } from "$lib/site-config";
	import "../app.css";
	import { useSiteConfig } from "@svecodocs/kit";
	import { navigation } from "$lib/navigation";
	import MainLayout from "$lib/layouts/main-layout.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();

	useSiteConfig(() => siteConfig);
</script>

<ModeWatcher />
<MainLayout {navigation}>
	{@render children?.()}
</MainLayout>
