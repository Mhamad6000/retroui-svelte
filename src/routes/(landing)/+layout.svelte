<script lang="ts">
	import { Toaster } from "$registry/ui/sonner";

	let { children } = $props();
</script>

<div class="">
	<Toaster theme="light" />

	{@render children()}
</div>
