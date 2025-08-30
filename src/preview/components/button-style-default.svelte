<script lang="ts">
	import * as Button from "$registry/ui/button/index.js";
</script>

<div class="flex flex-wrap items-center gap-4">
	<Button.Root variant="default">Default</Button.Root>
	<Button.Root variant="secondary">Secondary</Button.Root>
	<Button.Root variant="outline">Outline</Button.Root>
	<Button.Root variant="ghost">Ghost</Button.Root>
	<Button.Root variant="link">Link</Button.Root>
</div>

<div class="mt-4 flex flex-wrap items-center gap-4">
	<Button.Root size="sm">Small</Button.Root>
	<Button.Root size="md">Medium</Button.Root>
	<Button.Root size="lg">Large</Button.Root>
</div>

<div class="mt-4 flex flex-wrap items-center gap-4">
	<Button.Root shadow={true}>With Shadow</Button.Root>
	<Button.Root shadow={false}>No Shadow</Button.Root>
	<Button.Root disabled>Disabled</Button.Root>
</div>
