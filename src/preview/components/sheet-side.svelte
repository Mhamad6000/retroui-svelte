<script lang="ts">
	import * as Sheet from "$registry/ui/sheet/index.js";
	import { buttonVariants } from "$registry/ui/button/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Label } from "$registry/ui/label/index.js";
	import * as Select from "$registry/ui/select/index.js";

	let selectedSide = $state<"right" | "left" | "top" | "bottom">("right");

	const sides = [
		{ value: "top", label: "Top" },
		{ value: "right", label: "Right" },
		{ value: "bottom", label: "Bottom" },
		{ value: "left", label: "Left" },
	];
</script>

<div class="flex flex-col gap-3">
	<Select.Root type="single" name="favoriteFruit" bind:value={selectedSide}>
		<Select.Trigger class="w-[180px]">
			{selectedSide}
		</Select.Trigger>
		<Select.Content>
			<Select.Group>
				<Select.Label>Sides</Select.Label>
				{#each sides as side (side.value)}
					<Select.Item value={side.value} label={side.label}>
						{side.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>

	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: "outline" })}>Open</Sheet.Trigger>
		<Sheet.Content side={selectedSide}>
			<Sheet.Header>
				<Sheet.Title>Edit profile</Sheet.Title>
				<Sheet.Description>
					Make changes to your profile here. Click save when you're done.
				</Sheet.Description>
			</Sheet.Header>
			<div class="grid flex-1 auto-rows-min gap-6 px-4">
				<div class="grid gap-3">
					<Label for="name" class="text-right">Name</Label>
					<Input id="name" value="Pedro Duarte" />
				</div>
				<div class="grid gap-3">
					<Label for="username" class="text-right">Username</Label>
					<Input id="username" value="@peduarte" />
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close class={buttonVariants({ variant: "default" })}>Save changes</Sheet.Close>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</div>
