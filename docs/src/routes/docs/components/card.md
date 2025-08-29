---
title: "Card"
description: "A card is a flexible and extensible content container."
---

# Card

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

## Preview

<div class="w-full max-w-sm p-6">
  <div class="rounded-xl border bg-card text-card-foreground shadow">
    <div class="flex flex-col space-y-1.5 p-6">
      <h3 class="font-semibold leading-none tracking-tight">Create project</h3>
      <p class="text-sm text-muted-foreground">Deploy your new project in one-click.</p>
    </div>
    <div class="p-6 pt-0">
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
          <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Name of your project" />
        </div>
        <div class="flex flex-col space-y-1.5">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Framework</label>
          <button type="button" role="combobox" aria-controls="radix-:r0:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <span style="pointer-events: none;">Select</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" aria-hidden="true">
              <path d="m4.93179 5.43179c.20893-.20894.54777-.20894.75671 0l2.81149 2.81149 2.8115-2.81149c.2089-.20894.5477-.20894.7567 0 .2089.20893.2089.54777 0 .75671l-3.1849 3.1849c-.2089.2089-.5477.2089-.7567 0l-3.18488-3.1849c-.20894-.20894-.20894-.54778 0-.75671z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center p-6 pt-0">
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">Deploy</button>
    </div>
  </div>
</div>

## Installation

```bash
pnpm dlx zeno-ui@latest add card
```

## Usage

```svelte
<script lang="ts">
	import * as Card from "$lib/components/ui/card";
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Card Title</Card.Title>
		<Card.Description>Card Description</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Card Content</p>
	</Card.Content>
	<Card.Footer>
		<p>Card Footer</p>
	</Card.Footer>
</Card.Root>
```

## Examples

### Simple Card

```svelte
<Card.Root>
	<Card.Header>
		<Card.Title>Simple Card</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>This is a simple card with basic content.</p>
	</Card.Content>
</Card.Root>
```

### Card with Form

```svelte
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
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex justify-between">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</Card.Footer>
</Card.Root>
```

## API Reference

### Card.Root

The root container for the card.

### Card.Header

The header section of the card, typically containing the title and description.

### Card.Title

The main title of the card.

### Card.Description

A description or subtitle for the card.

### Card.Content

The main content area of the card.

### Card.Footer

The footer section of the card, typically containing actions or additional information.
