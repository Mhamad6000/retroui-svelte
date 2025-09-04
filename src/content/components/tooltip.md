---
title: Tooltip
description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/tooltip"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="tooltip-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "tooltip"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Tooltip.Root>
  <Tooltip.Trigger asChild>
    <Button variant="outline">Hover</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p>Add to library</p>
  </Tooltip.Content>
</Tooltip.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="tooltip-default" />

### With Icon

<ComponentPreview name="tooltip-with-icon" />

### Multiple

<ComponentPreview name="tooltip-multiple" />

### Custom Delay

<ComponentPreview name="tooltip-custom-delay" />
