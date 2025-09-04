---
title: Separator
description: Visually or semantically separates content.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/separator"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="separator-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "separator"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Separator } from "$lib/components/ui/separator/index.js";
</script>

<div>
  <div class="space-y-1">
    <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
    <p class="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator class="my-4" />
  <div class="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>
```

<br />

## Examples

### Horizontal

<ComponentPreview name="separator-horizontal" />

### Vertical

<ComponentPreview name="separator-vertical" />

### With Label

<ComponentPreview name="separator-with-label" />
