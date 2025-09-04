---
title: Skeleton
description: Used to display the loading state of some component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/skeleton"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="skeleton-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "skeleton"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Skeleton } from "$lib/components/ui/skeleton/index.js";
</script>

<div class="flex items-center space-x-4">
  <Skeleton class="h-12 w-12 rounded-full" />
  <div class="space-y-2">
    <Skeleton class="h-4 w-[250px]" />
    <Skeleton class="h-4 w-[200px]" />
  </div>
</div>
```

<br />

## Examples

### Card

<ComponentPreview name="skeleton-card" />

### Text

<ComponentPreview name="skeleton-text" />

### Image

<ComponentPreview name="skeleton-image" />

### Table

<ComponentPreview name="skeleton-table" />
