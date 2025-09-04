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

  let pressed = $state(false);
</script>

<Toggle bind:pressed aria-label="Toggle italic">
  <ItalicIcon class="h-4 w-4" />
</Toggle>
```

<br />

## Examples

### Default

<ComponentPreview name="toggle-default" />

### With Text

<ComponentPreview name="toggle-with-text" />

### Disabled

<ComponentPreview name="toggle-disabled" />

### Multiple

<ComponentPreview name="toggle-multiple" />

### Outline

<ComponentPreview name="toggle-outline" />
