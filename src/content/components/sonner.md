---
title: Sonner
description: An opinionated toast component for React.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/sonner"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="sonner-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "sonner"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  import { toast } from "sonner";
</script>

<button onclick={() => toast("Event has been created")}>
  Show Toast
</button>

<Toaster />
```

<br />

## Examples

### Default

<ComponentPreview name="sonner-default" />

### With Action

<ComponentPreview name="sonner-with-action" />

### Success

<ComponentPreview name="sonner-success" />

### Error

<ComponentPreview name="sonner-error" />

### Warning

<ComponentPreview name="sonner-warning" />

### Info

<ComponentPreview name="sonner-info" />

### Loading

<ComponentPreview name="sonner-loading" />

### Custom

<ComponentPreview name="sonner-custom" />
