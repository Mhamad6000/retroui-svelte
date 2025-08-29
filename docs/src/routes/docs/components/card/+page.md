---
title: "Card"
description: "A container for grouping related content."
component: true
---

# Card

Displays a card with header, content, and footer.

## Preview

<div class="preview">
  <div class="w-[350px]">
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight">Create project</h3>
        <p class="text-sm text-muted-foreground">Deploy your new project in one-click.</p>
      </div>
      <div class="p-6 pt-0">
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Name</label>
            <input class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Name of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="framework">Framework</label>
            <select class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option>Next.js</option>
              <option>SvelteKit</option>
              <option>Nuxt</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex items-center p-6 pt-0">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Deploy</button>
      </div>
    </div>
  </div>
</div>

## Installation

<div class="steps">

### Copy and paste the following code into your project.

```svelte
<!-- src/lib/components/ui/card/card.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div
	class={cn("bg-card text-card-foreground rounded-lg border shadow-sm", className)}
	{...restProps}
>
	{@render children()}
</div>
```

```svelte
<!-- src/lib/components/ui/card/card-header.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div class={cn("flex flex-col space-y-1.5 p-6", className)} {...restProps}>
	{@render children()}
</div>
```

```svelte
<!-- src/lib/components/ui/card/card-title.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<h3 class={cn("text-2xl leading-none font-semibold tracking-tight", className)} {...restProps}>
	{@render children()}
</h3>
```

```svelte
<!-- src/lib/components/ui/card/card-description.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<p class={cn("text-muted-foreground text-sm", className)} {...restProps}>
	{@render children()}
</p>
```

```svelte
<!-- src/lib/components/ui/card/card-content.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div class={cn("p-6 pt-0", className)} {...restProps}>
	{@render children()}
</div>
```

```svelte
<!-- src/lib/components/ui/card/card-footer.svelte -->
<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div class={cn("flex items-center p-6 pt-0", className)} {...restProps}>
	{@render children()}
</div>
```

```typescript
// src/lib/components/ui/card/index.ts
import Card from "./card.svelte";
import CardContent from "./card-content.svelte";
import CardDescription from "./card-description.svelte";
import CardFooter from "./card-footer.svelte";
import CardHeader from "./card-header.svelte";
import CardTitle from "./card-title.svelte";

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	//
	Card as Root,
	CardContent as Content,
	CardDescription as Description,
	CardFooter as Footer,
	CardHeader as Header,
	CardTitle as Title,
};
```

</div>

## Usage

```svelte
<script lang="ts">
	import * as Card from "$lib/components/ui/card";
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Create project</Card.Title>
		<Card.Description>Deploy your new project in one-click.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<label for="name">Name</label>
					<input id="name" placeholder="Name of your project" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<label for="framework">Framework</label>
					<select>
						<option value="next">Next.js</option>
						<option value="sveltekit">SvelteKit</option>
						<option value="astro">Astro</option>
						<option value="nuxt">Nuxt.js</option>
					</select>
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<button variant="outline">Cancel</button>
		<button>Deploy</button>
	</Card.Footer>
</Card.Root>
```

## Examples

### Card with form

```svelte
<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Create project</Card.Title>
		<Card.Description>Deploy your new project in one-click.</Card.Description>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Name</Label>
					<Input id="name" placeholder="Name of your project" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="framework">Framework</Label>
					<select>
						<option value="next">Next.js</option>
						<option value="sveltekit">SvelteKit</option>
						<option value="astro">Astro</option>
						<option value="nuxt">Nuxt.js</option>
					</select>
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</Card.Footer>
</Card.Root>
```
