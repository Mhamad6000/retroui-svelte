<script lang="ts">
	import Badge from "$lib/registry/ui/badge/badge.svelte";
	import { Button } from "$lib/registry/ui/button";

	// import HelloWorld from "$lib/registry/blocks/hello-world/hello-world.svelte";
	// import ExampleForm from "$lib/registry/blocks/example-form/example-form.svelte";
	// import PokemonPage from "$lib/registry/blocks/complex-component/+page.svelte";
	// import ExampleCard from "$lib/registry/blocks/example-with-css/example-card.svelte";

	// This page displays items from the custom registry.
	// You are free to implement this with your design as needed.
</script>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
	<header class="flex flex-col gap-1">
		<h1 class="text-3xl font-bold tracking-tight">Custom Registry</h1>
		<p class="text-muted-foreground">
			A custom registry for distributing code using shadcn-svelte.
		</p>
	</header>
	<main class="flex flex-1 flex-col gap-8">
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A simple hello world component</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<!-- <HelloWorld /> -->
				<Button type="button" variant="default" disabled>Button</Button>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A contact form with Zod validation.</h2>
			</div>
			<div class="relative flex min-h-[500px] flex-col flex-wrap items-center justify-center gap-5">
				<div class="flex items-center justify-center gap-2">
					<Badge variant="default">badge</Badge>
					<Badge variant="secondary">badge</Badge>
					<Badge variant="destructive">badge</Badge>
					<Badge variant="success">badge</Badge>
					<Badge variant="warning">badge</Badge>
					<Badge variant="info">badge</Badge>
				</div>
				<div class="flex items-center justify-center gap-2">
					<Badge variant="outline">badge</Badge>
					<Badge variant="outline-destructive">badge</Badge>
					<Badge variant="outline-success">badge</Badge>
					<Badge variant="outline-warning">badge</Badge>
					<Badge variant="outline-info">badge</Badge>
				</div>
				<div class="flex items-center justify-center gap-2">
					<Badge variant="light-default">badge</Badge>
					<Badge variant="light-destructive">badge</Badge>
					<Badge variant="light-success">badge</Badge>
					<Badge variant="light-warning">badge</Badge>
					<Badge variant="light-info">badge</Badge>
				</div>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">
					A complex component showing hooks, libs and components.
				</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<!-- <PokemonPage /> -->
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center">
				<!-- <ExampleCard /> -->
			</div>
		</div>
	</main>
</div>
