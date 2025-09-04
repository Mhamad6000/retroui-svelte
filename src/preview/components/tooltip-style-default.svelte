<script lang="ts">
	import { buttonVariants } from "$registry/ui/button/index.js";
	import * as Tooltip from "$registry/ui/tooltip/index.js";
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: "outline" })}>Hover</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Default Tooltip</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
