<script lang="ts">
	import type { Snippet } from "svelte";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
	import { Button } from "$registry/ui/button";
	import AppSidebar from "./app-sidebar.svelte";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import type { Navigation } from "$lib/utils/navigation.js";
	interface Props {
		children: Snippet;
		navigation: Navigation;
	}
	let { children, navigation }: Props = $props();

	let open = $state(false);
</script>

<!-- Header -->

<!-- Main Content -->
<main class="">
	{@render children?.()}
</main>
