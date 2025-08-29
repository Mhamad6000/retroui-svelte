---
title: "Button"
description: "Displays a button or a component that looks like a button."
---

# Button

Displays a button or a component that looks like a button.

## Preview

<div class="flex items-center space-x-4 p-6 border rounded-lg bg-card">
  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
    Button
  </button>
  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
    Secondary
  </button>
  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2">
    Destructive
  </button>
  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" disabled>
    Disabled
  </button>
</div>

## Installation

```bash
pnpm dlx zeno-ui@latest add button
```

## Usage

```svelte
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<Button variant="outline">Button</Button>
```

## Examples

### Default

```svelte
<Button>Button</Button>
```

### Secondary

```svelte
<Button variant="secondary">Secondary</Button>
```

### Destructive

```svelte
<Button variant="destructive">Destructive</Button>
```

### Outline

```svelte
<Button variant="outline">Outline</Button>
```

### Ghost

```svelte
<Button variant="ghost">Ghost</Button>
```

### Link

```svelte
<Button variant="link">Link</Button>
```

### With Icon

```svelte
<script>
	import { ChevronRight } from "lucide-svelte";
</script>

<Button>
	Continue
	<ChevronRight class="ml-2 h-4 w-4" />
</Button>
```

### Loading

```svelte
<script>
	import { Loader2 } from "lucide-svelte";
</script>

<Button disabled>
	<Loader2 class="mr-2 h-4 w-4 animate-spin" />
	Please wait
</Button>
```

## API Reference

| Prop       | Type                                                                          | Default     | Description                    |
| ---------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | The visual style of the button |
| `size`     | `"default" \| "sm" \| "lg" \| "icon"`                                         | `"default"` | The size of the button         |
| `disabled` | `boolean`                                                                     | `false`     | Whether the button is disabled |
