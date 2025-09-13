<script lang="ts">
	import Header from "$lib/layouts/header.svelte";
	import { navigation } from "$lib/navigation";
	import { UserConfigContext } from "$lib/user-config.svelte.js";

	let { children } = $props();

	// Get user config from context
	const userConfig = UserConfigContext.get();
</script>

<div data-theme={userConfig?.current.activeTheme || "sunset-orange"}>
	<div class="theme-container">
		<Header {navigation} />
		{@render children?.()}
	</div>
</div>
