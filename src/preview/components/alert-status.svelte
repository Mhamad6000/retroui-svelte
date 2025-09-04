<script lang="ts">
	import * as Alert from "$registry/ui/alert/index.js";
	import { CheckCircle2Icon, InfoIcon, XIcon } from "@lucide/svelte";
</script>

<div class="flex flex-col space-y-4">
	<Alert.Root status="success" class="items-center">
		<CheckCircle2Icon className="size-4 mr-4" />
		<Alert.Title>Success! Your changes have been saved</Alert.Title>
	</Alert.Root>

	<Alert.Root status="error" class="items-center">
		<XIcon className="size-4 mr-4" />
		<Alert.Title>Error! Something went wrong</Alert.Title>
	</Alert.Root>

	<Alert.Root status="info" class="items-center">
		<InfoIcon className="size-4 mr-4" />
		<Alert.Title>Info! This is an informational alert</Alert.Title>
	</Alert.Root>

	<Alert.Root status="warning" class="items-center">
		<InfoIcon className="size-4 mr-4" />
		<Alert.Title>Warning! Please check your input</Alert.Title>
	</Alert.Root>
</div>
