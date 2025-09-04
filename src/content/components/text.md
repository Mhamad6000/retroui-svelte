---
title: Text
description: A text component with size and color variants.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/text"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="text-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "text"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Text } from "$lib/components/ui/text/index.js";
</script>

<Text size="lg">This is large text</Text>
<Text size="sm" color="muted">This is small muted text</Text>
```

<br />

## Examples

### Sizes

<ComponentPreview name="text-sizes" />

### Colors

<ComponentPreview name="text-colors" />

### Weights

<ComponentPreview name="text-weights" />

### Variants

<ComponentPreview name="text-variants" />
