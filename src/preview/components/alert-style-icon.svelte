<script lang="ts">
	import * as Alert from "$registry/ui/alert/index.js";
	import { CheckCircle2Icon } from "@lucide/svelte";
</script>

<Alert.Root>
	<CheckCircle2Icon className="size-4 mr-4" />
	<div>
		<Alert.Title>This is an alert with icon.</Alert.Title>
		<Alert.Description>This is an alert with icon, title and description.</Alert.Description>
	</div>
</Alert.Root>
