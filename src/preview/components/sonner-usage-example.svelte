<script lang="ts">
	import { toast } from "svelte-sonner";
	import { Button } from "$registry/ui/button/index.js";
</script>

<Button
	onclick={() =>
		toast("Event has been created", {
			description: "You can view it in your dashboard",
			cancel: () => {},
		})}>Show toast</Button
>
