<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	interface Props {
		children: any;
	}

	let { children }: Props = $props();
</script>

<Card.Root class="w-full">
	<Card.Content class="p-6">
		<div class="flex min-h-[350px] w-full items-center justify-center">
			{@render children()}
		</div>
	</Card.Content>
</Card.Root>
