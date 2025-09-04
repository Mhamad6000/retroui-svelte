<script lang="ts">
	import type { Navigation } from "$lib/utils/navigation.js";
	import type { Snippet } from "svelte";
	import Header from "./header.svelte";
	import DesktopSidebar from "./desktop-sidebar.svelte";

	interface Props {
		children: Snippet;
		navigation: Navigation;
	}
	let { children, navigation }: Props = $props();
</script>

<div class="flex flex-col h-screen">
	<Header {navigation} />
	<div class="flex flex-1 overflow-hidden">
		<DesktopSidebar {navigation} />
		<div
			class="relative gap-4 flex-row-reverse overflow-auto flex w-full flex-1 px-4 py-8 lg:px-8"
			id="content"
		>
			{@render children?.()}
		</div>
	</div>
</div>
