<script lang="ts">
	import type { Navigation } from "$lib/utils/navigation.js";
	import * as Sheet from "$registry/ui/sheet/index.js";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import { page } from "$app/state";

	interface Props {
		navigation: Navigation;
		open?: boolean;
	}
	let { navigation, open = $bindable(false) }: Props = $props();

	// Check if current path matches the href
	function isActive(href: string): boolean {
		const currentPath = page.url.pathname;

		// Get the last segment of both paths
		const currentLastSegment = currentPath.split("/").pop() || "";
		const hrefLastSegment = href.split("/").pop() || "";

		// Return true if the last segments match and both are not empty
		return currentLastSegment === hrefLastSegment && currentLastSegment !== "";
	}
</script>

<Sheet.Root bind:open>
	<Sheet.Content side="left" class="w-64 p-0">
		<Sheet.Header class="border-b p-4">
			<a href="/docs" class="flex items-center gap-2" onclick={() => (open = false)}>
				<img src="/logo.webp" alt="Retroui Svelte Logo" class="h-6 w-6" />
				<span class="text-lg font-semibold">Retroui Svelte</span>
			</a>
		</Sheet.Header>

		<div class="flex-1 overflow-auto p-4">
			<!-- Header Navigation -->
			{#if navigation.header && navigation.header.length > 0}
				<div class="mb-6">
					<h4 class="mb-2 text-sm font-medium text-muted-foreground">Navigation</h4>
					<nav class="space-y-1">
						{#each navigation.header as item}
							<a
								href={item.href}
								class="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-accent-foreground"
								onclick={() => (open = false)}
							>
								{item.title}
							</a>
						{/each}
					</nav>
				</div>
			{/if}

			<!-- Anchor Navigation -->
			{#if navigation.anchors && navigation.anchors.length > 0}
				<div class="mb-6">
					<h4 class="mb-2 text-sm font-medium text-muted-foreground">Quick Links</h4>
					<nav class="space-y-1">
						{#each navigation.anchors as anchor}
							{@const IconComponent = anchor.icon}
							{#if anchor.disabled}
								<div
									class="flex items-center gap-2 rounded-md px-3 py-2 text-sm opacity-50 cursor-not-allowed"
								>
									<IconComponent class="h-4 w-4" />
									{anchor.title}
								</div>
							{:else}
								<a
									href={anchor.href}
									class="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground {isActive(
										anchor.href
									)
										? 'bg-primary text-accent-foreground font-medium'
										: ''}"
									target={anchor.href.startsWith("http") ? "_blank" : "_self"}
									onclick={() => !anchor.href.startsWith("http") && (open = false)}
								>
									<IconComponent class="h-4 w-4" />
									{anchor.title}
									{#if anchor.href.startsWith("http")}
										<ExternalLinkIcon class="ml-auto h-3 w-3" />
									{/if}
								</a>
							{/if}
						{/each}
					</nav>
				</div>
			{/if}

			<!-- Sections Navigation -->
			{#if navigation.sections && navigation.sections.length > 0}
				{#each navigation.sections as section, sectionIndex}
					<div class="mb-6">
						{#if section.title}
							<h4 class="mb-2 text-sm font-medium text-muted-foreground">{section.title}</h4>
						{/if}
						<nav class="space-y-1">
							{#each section.items as item}
								{#if item.href}
									{#if item.disabled}
										<div
											class="flex items-center justify-between rounded-md px-3 py-2 text-sm opacity-50 cursor-not-allowed"
										>
											<span>{item.title}</span>
											{#if item.label}
												<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
													{item.label}
												</span>
											{/if}
										</div>
									{:else}
										<a
											href={item.href}
											class="flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-accent-foreground {isActive(
												item.href
											)
												? 'bg-primary text-accent-foreground font-medium'
												: ''}"
											target={item.external ? "_blank" : "_self"}
											onclick={() => !item.external && (open = false)}
										>
											<span>{item.title}</span>
											<div class="flex items-center gap-1">
												{#if item.label}
													<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
														{item.label}
													</span>
												{/if}
												{#if item.external}
													<ExternalLinkIcon class="h-3 w-3" />
												{/if}
											</div>
										</a>
									{/if}
								{:else}
									<div
										class="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground"
									>
										<span>{item.title}</span>
										{#if item.label}
											<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
												{item.label}
											</span>
										{/if}
									</div>
								{/if}
							{/each}
						</nav>
					</div>
				{/each}
			{/if}

			<!-- Individual Items (fallback) -->
			{#if navigation.items && navigation.items.length > 0}
				<div class="mb-6">
					<h4 class="mb-2 text-sm font-medium text-muted-foreground">Other</h4>
					<nav class="space-y-1">
						{#each navigation.items as item}
							{#if item.href}
								{#if item.disabled}
									<div
										class="flex items-center justify-between rounded-md px-3 py-2 text-sm opacity-50 cursor-not-allowed"
									>
										<span>{item.title}</span>
										{#if item.label}
											<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
												{item.label}
											</span>
										{/if}
									</div>
								{:else}
									<a
										href={item.href}
										class="flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary hover:text-accent-foreground {isActive(
											item.href
										)
											? 'bg-primary text-accent-foreground font-medium'
											: ''}"
										target={item.external ? "_blank" : "_self"}
										onclick={() => !item.external && (open = false)}
									>
										<span>{item.title}</span>
										<div class="flex items-center gap-1">
											{#if item.label}
												<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
													{item.label}
												</span>
											{/if}
											{#if item.external}
												<ExternalLinkIcon class="h-3 w-3" />
											{/if}
										</div>
									</a>
								{/if}
							{:else}
								<div
									class="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground"
								>
									<span>{item.title}</span>
									{#if item.label}
										<span class="text-xs bg-muted px-1.5 py-0.5 rounded">
											{item.label}
										</span>
									{/if}
								</div>
							{/if}
						{/each}
					</nav>
				</div>
			{/if}
		</div>
	</Sheet.Content>
</Sheet.Root>
