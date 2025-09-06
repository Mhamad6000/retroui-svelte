<script lang="ts">
	import { toast } from "svelte-sonner";
	import { Button } from "$registry/ui/button/index.js";
</script>

<Button onclick={() => toast.success("Event has been created successfully")}>Show toast</Button>
