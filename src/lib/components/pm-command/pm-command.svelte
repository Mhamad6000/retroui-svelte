<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	const style = tv({
		base: "border-border relative w-full rounded-lg border",
		variants: {
			variant: {
				default: "bg-[#24292e] text-[#e1e4e8]",
				secondary: "bg-secondary/50 border-transparent",
			},
		},
	});

	type Variant = VariantProps<typeof style>["variant"];

	export type PMCommandProps = {
		variant?: Variant;
		class?: string;
		agents?: Agent[];
		agent?: Agent;
		command: Command;
		args: string[];
	};
</script>

<script lang="ts">
	import { cn } from "$registry/lib/utils";
	import type { Command, Agent } from "package-manager-detector";
	import { resolveCommand } from "package-manager-detector/commands";
	import { highlightCode } from "$lib/utils/highlight";

	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import * as Tooltip from "$registry/ui/tooltip";
	import * as Tabs from "$registry/ui/tabs";
	import CopyCodeButton from "../copy-code-button.svelte";

	let {
		variant = "default",
		class: className,
		command,
		agents = ["npm", "pnpm", "yarn", "bun"],
		args,
		agent = $bindable("npm"),
	}: PMCommandProps = $props();

	const cmd = $derived(resolveCommand(agent, command, args));

	const commandText = $derived(`${cmd?.command} ${cmd?.args.join(" ")}`);

	// Highlight the command text with shell syntax highlighting
	let highlightedCommand = $state("");

	$effect(() => {
		if (commandText) {
			highlightCode(commandText, "bash")
				.then((highlighted: string) => {
					highlightedCommand = highlighted;
				})
				.catch((error: any) => {
					console.warn("Failed to highlight command:", error);
					highlightedCommand = "";
				});
		}
	});
</script>

<div class={cn(style({ variant }), className)}>
	<div class="flex place-items-center justify-between gap-2 border-b border-white/80 py-1 pr-2">
		<div class="flex place-items-center gap-2 px-2">
			<div class=" flex size-4 place-items-center justify-center opacity-75">
				<TerminalIcon class="text-primary size-3" />
			</div>
			<Tabs.Root bind:value={agent}>
				<Tabs.List class="h-auto bg-transparent p-0">
					{#each agents as pm (pm)}
						<Tabs.Trigger value={pm} class="h-7 font-mono text-sm font-light">
							{pm}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</Tabs.Root>
		</div>
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<CopyCodeButton class="relative right-auto top-auto" code={commandText} />
				</Tooltip.Trigger>
				<Tooltip.Content>Copy to Clipboard</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>
	<div class="no-scrollbar overflow-x-auto">
		{#if highlightedCommand}
			{@html highlightedCommand}
		{:else}
			<div class="p-3">
				<span class="font-mono text-sm leading-none font-light text-nowrap">
					{commandText}
				</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
