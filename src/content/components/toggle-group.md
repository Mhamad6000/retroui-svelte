---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/toggle-group"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/toggle-group#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
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
</script>
 
<ToggleGroup.Root type="single">
  <ToggleGroup.Item value="a">A</ToggleGroup.Item>
  <ToggleGroup.Item value="b">B</ToggleGroup.Item>
  <ToggleGroup.Item value="c">C</ToggleGroup.Item>
</ToggleGroup.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="toggle-group-usage-example" />


<br />

### Outlined

<ComponentPreview name="toggle-group-style-outlined" />


<br />

### Outline Muted

<ComponentPreview name="toggle-group-style-outline-muted" />

<br />

### Solid

<ComponentPreview name="toggle-group-style-solid" />
