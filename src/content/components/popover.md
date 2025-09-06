---
title: Popover
description: Displays rich content in a portal, triggered by a button.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/popover"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/dialog#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="popover-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "popover"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Popover from "$lib/components/ui/popover/index.js";
</script>
 
<Popover.Root>
 <Popover.Trigger>Open</Popover.Trigger>
 <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="popover-usage-example" />

<br />

### Shadowed

<ComponentPreview name="popover-style-shadowed" />


