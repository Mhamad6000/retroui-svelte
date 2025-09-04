---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/toggle-group"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="toggle-group-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "toggle-group"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";

  let value = $state("left");
</script>

<ToggleGroup.Root type="single" bind:value>
  <ToggleGroup.Item value="left" aria-label="Left aligned">
    <AlignLeftIcon class="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="center" aria-label="Center aligned">
    <AlignCenterIcon class="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="right" aria-label="Right aligned">
    <AlignRightIcon class="h-4 w-4" />
  </ToggleGroup.Item>
</ToggleGroup.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="toggle-group-default" />

### Multiple

<ComponentPreview name="toggle-group-multiple" />

### Disabled

<ComponentPreview name="toggle-group-disabled" />

### With Text

<ComponentPreview name="toggle-group-with-text" />
