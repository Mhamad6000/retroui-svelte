<script lang="ts">
	import { page } from "$app/state";
	import { Button } from "$registry/ui/button";
	import { HomeIcon, ArrowLeftIcon, AlertTriangleIcon } from "@lucide/svelte";

	let status = $derived(page.status);
	let error = $derived(page.error);
</script>

<svelte:head>
	<title>{status} - {page.error?.message || "Page not found"}</title>
</svelte:head>

<div class="min-h-screen bg-background flex items-center justify-center p-4">
	<div class="max-w-lg w-full text-center space-y-8">
		<!-- Icon and message -->
		<div class="space-y-4">
			<div class="flex justify-center">
				<div class="p-4 bg-secondary/20 rounded-full border-2 border-secondary">
					<AlertTriangleIcon class="w-12 h-12 text-secondary" />
				</div>
			</div>
			<div class="text-8xl font-bold text-primary font-mono tracking-widest drop-shadow-lg">
				{status}
			</div>
			<div class="space-y-2">
				<h1 class="text-3xl font-bold text-foreground tracking-wide">
					{status === 404 ? "Page Not Found" : "Oops! Something went wrong"}
				</h1>
				<p class="text-muted-foreground text-lg leading-relaxed">
					{status === 404
						? "The page you're looking for seems to have wandered off into the digital void."
						: error?.message || "An unexpected error occurred while loading this page."}
				</p>
			</div>
		</div>

		<!-- Retro-style buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button
				href="/"
				class="flex items-center gap-3 px-6 py-3 text-lg hover:translate-y-1 hover:shadow-lg transition-all duration-200 border-2"
			>
				<HomeIcon class="w-5 h-5" />
				<span class="font-medium">Go Home</span>
			</Button>

			<Button
				variant="outline"
				onclick={() => history.back()}
				class="flex items-center gap-3 px-6 py-3 text-lg hover:translate-y-1 hover:shadow-lg transition-all duration-200 border-2"
			>
				<ArrowLeftIcon class="w-5 h-5" />
				<span class="font-medium">Go Back</span>
			</Button>
		</div>
	</div>
</div>
