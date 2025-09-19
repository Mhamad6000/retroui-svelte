---
title: Tooltip
description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/tooltip"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/tooltip#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/tooltip"
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
</script>
 
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>Hover</Tooltip.Trigger>
    <Tooltip.Content>
      <p>Add to library</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
```

<br />

## Examples

### Default

<ComponentPreview name="tooltip-style-default" />

<br />

### Primary

<ComponentPreview name="tooltip-style-primary" />

<br />

### Solid

<ComponentPreview name="tooltip-style-solid" />


