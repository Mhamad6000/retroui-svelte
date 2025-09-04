---
title: Scroll Area
description: Augments native scroll functionality for custom, cross-browser styling.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/scroll-area"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="scroll-area-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "scroll-area"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as ScrollArea from "$lib/components/ui/scroll-area/index.js";
</script>

<ScrollArea.Root class="h-[200px] w-[350px] rounded-md border p-4">
  <ScrollArea.Viewport>
    Jokester began sneaking into the castle in the middle of the night and leaving
    jokes all over the place: under the king's pillow, in his soup, even in the
    royal toilet. The king was furious, but he couldn't seem to stop Jokester.
    And then, one day, the people of the kingdom discovered that the jokes left
    by Jokester were so funny that they couldn't help but laugh. And once they
    started laughing, they couldn't stop.
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Scrollbar orientation="horizontal">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>
```

<br />

## Examples

### Horizontal

<ComponentPreview name="scroll-area-horizontal" />

### Vertical

<ComponentPreview name="scroll-area-vertical" />

### Both

<ComponentPreview name="scroll-area-both" />

### Custom Scrollbar

<ComponentPreview name="scroll-area-custom-scrollbar" />
