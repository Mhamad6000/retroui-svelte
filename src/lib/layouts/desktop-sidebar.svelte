<script lang="ts">
	import type { Navigation } from "$lib/utils/navigation";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import { page } from "$app/state";

	interface Props {
		navigation: Navigation;
	}
	let { navigation }: Props = $props();

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

<aside class="hidden lg:block w-64 border-r border-border bg-background h-full overflow-auto">
	<div class="p-6">
		<!-- Anchor Navigation -->
		{#if navigation.anchors && navigation.anchors.length > 0}
			<div class="mb-8">
				<h4 class="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">
					Quick Links
				</h4>
				<nav class="space-y-1">
					{#each navigation.anchors as anchor}
						{@const IconComponent = anchor.icon}
						{#if anchor.disabled}
							<div class="flex items-center gap-2 px-3 py-2 text-sm opacity-50 cursor-not-allowed">
								<IconComponent class="h-4 w-4" />
								{anchor.title}
							</div>
						{:else}
							<a
								href={anchor.href}
								data-state={isActive(anchor.href) ? "active" : null}
								class="flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-muted/50 hover:text-muted-foreground dark:hover:text-wh data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground data-[state=active]:font-medium"
								{...anchor.href.startsWith("http") && { target: "_blank" }}
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
				<div class="mb-8">
					{#if section.title}
						<h4 class="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{section.title}
						</h4>
					{/if}
					<nav class="space-y-1">
						{#each section.items as item}
							{#if item.href}
								{#if item.disabled}
									<div
										class="flex items-center justify-between px-3 py-2 text-sm opacity-50 cursor-not-allowed"
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
										data-state={isActive(item.href) ? "active" : null}
										class="flex items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-muted/50 hover:text-muted-foreground dark:hover:text-wh data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground data-[state=active]:font-medium"
										{...item.external && { target: "_blank" }}
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
			<div class="mb-8">
				<h4 class="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wide">
					Other
				</h4>
				<nav class="space-y-1">
					{#each navigation.items as item}
						{#if item.href}
							{#if item.disabled}
								<div
									class="flex items-center justify-between px-3 py-2 text-sm opacity-50 cursor-not-allowed"
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
									data-state={isActive(item.href) ? "active" : null}
									class="flex items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-muted/50 hover:text-muted-foreground dark:hover:text-wh data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground data-[state=active]:font-medium"
									{...item.external && { target: "_blank" }}
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
</aside>
