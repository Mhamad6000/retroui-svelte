---
title: Toggle
description: A two-state button that can be either on or off.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/toggle"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="toggle-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "toggle"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Toggle } from "$lib/components/ui/toggle/index.js";
</script>
 
<Toggle>Toggle</Toggle>
```

<br />

## Examples

### Default

<ComponentPreview name="toggle-style-default" />

<br />

### Outlined

<ComponentPreview name="toggle-style-outlined" />

<br />

### Solid

<ComponentPreview name="toggle-style-solid" />

<br />

### Outline Muted

<ComponentPreview name="toggle-style-outline-muted" />