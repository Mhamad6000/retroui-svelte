---
title: Badge
description: Displays a badge or a component that looks like a badge.
section: Components
links:
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/badge"
---
<script>
	import { ComponentPreview , PMCommand } from "$lib/components";
	
</script>

<ComponentPreview name="badge-usage-example" />
<br />
<br />

## Installation
<!-- <PMCommand command="execute" args={["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/badge"} /> -->

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import { Badge } from "$lib/components/ui/badge/index.js";
</script>
 
<Badge variant="outline">Badge</Badge>
```

<br />

### Link

You can use the badgeVariants helper to create a link that looks like a badge.

```svelte
<script lang="ts">
  import { badgeVariants } from "$lib/components/ui/badge/index.js";
</script>
 
<a href="/dashboard" class={badgeVariants({ variant: "outline" })}>Badge</a>
```

<br />
<br />

## Examples

### Default

<ComponentPreview name="badge-style-default" />

<br/>

### Primary

<ComponentPreview name="badge-style-primary" />

<br/>

### Outline

<ComponentPreview name="badge-style-outline" />

<br/>

### Solid

<ComponentPreview name="badge-style-solid" />

<br/>

### Sizes

<ComponentPreview name="badge-sizes" />


