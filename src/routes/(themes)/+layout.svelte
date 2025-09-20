<script lang="ts">
	import MetaData from "$lib/components/meta-data.svelte";
	import Header from "$lib/layouts/header.svelte";
	import { navigation } from "$lib/navigation";
	import { UserConfigContext } from "$lib/user-config.svelte.js";

	let { children } = $props();

	// Get user config from context
	const userConfig = UserConfigContext.get();
</script>

<MetaData />

<div data-theme={userConfig?.current.activeTheme || "sunset-orange"}>
	<div class="theme-container">
		<Header {navigation} />
		{@render children?.()}
	</div>
</div>
