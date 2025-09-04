---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/switch"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="switch-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "switch"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Switch } from "$lib/components/ui/switch/index.js";

  let checked = $state(false);
</script>

<div class="flex items-center space-x-2">
  <Switch id="airplane-mode" bind:checked />
  <label for="airplane-mode" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Airplane Mode
  </label>
</div>
```

<br />

## Examples

### Default

<ComponentPreview name="switch-default" />

### With Text

<ComponentPreview name="switch-with-text" />

### Disabled

<ComponentPreview name="switch-disabled" />

### Form

<ComponentPreview name="switch-form" />
