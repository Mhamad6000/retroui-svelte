---
title: "Accordion"
description: "A vertically stacked set of interactive headings that each reveal a section of content."
---

# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Preview

<div class="w-full rounded-lg border bg-card p-6">
  <div class="w-full">
    <div class="border-b">
      <button class="flex w-full items-center justify-between py-4 text-left font-medium">
        Product Information
        <svg class="h-4 w-4 shrink-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="pb-4 text-sm text-muted-foreground">
        Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.
        <br><br>
        Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.
      </div>
    </div>
    <div class="border-b">
      <button class="flex w-full items-center justify-between py-4 text-left font-medium">
        Shipping Details
        <svg class="h-4 w-4 shrink-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    <div>
      <button class="flex w-full items-center justify-between py-4 text-left font-medium">
        Return Policy
        <svg class="h-4 w-4 shrink-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
</div>

## Installation

### CLI

```bash
pnpm dlx zeno-ui@latest add accordion
```

### Manual

Copy and paste the component source files from this page.

### Package Managers

```bash
# pnpm
pnpm dlx zeno-ui@latest add accordion

# npm
npx zeno-ui@latest add accordion

# yarn
yarn dlx zeno-ui@latest add accordion

# bun
bunx zeno-ui@latest add accordion
```

## Usage

```svelte
<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Accordion.Root type="single">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
```

## API Reference

### Root

Contains all the parts of an accordion.

| Prop          | Type                     | Default | Description                                                                                                             |
| ------------- | ------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `type`        | `"single" \| "multiple"` | —       | Determines whether one or multiple items can be opened at the same time.                                                |
| `value`       | `string \| string[]`     | —       | The controlled value of the item to expand when `type` is `"single"`. Must be used in conjunction with `onValueChange`. |
| `collapsible` | `boolean`                | `false` | When `type` is `"single"`, allows closing content when clicking trigger for an open item.                               |

### Item

Contains all the parts of a collapsible section.

| Prop       | Type      | Default | Description                                                    |
| ---------- | --------- | ------- | -------------------------------------------------------------- |
| `value`    | `string`  | —       | A unique value for the item.                                   |
| `disabled` | `boolean` | `false` | When `true`, prevents the user from interacting with the item. |

### Trigger

Toggles the collapsed state of its associated item. It should be nested inside an `Accordion.Header`.

### Content

Contains the collapsible content for an item.

## Examples

### Single

```svelte
<Accordion.Root type="single" collapsible>
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
```

### Multiple

```svelte
<Accordion.Root type="multiple">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>Is it styled?</Accordion.Trigger>
		<Accordion.Content>
			Yes. It comes with default styles that match the other components' aesthetic.
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
```
