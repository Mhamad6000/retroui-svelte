---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/checkbox"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="checkbox-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "checkbox"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";

  let checked = $state(false);
</script>

<div class="flex items-center space-x-2">
  <Checkbox id="terms" bind:checked />
  <label for="terms" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Accept terms and conditions
  </label>
</div>
```

<br />

## Examples

### With Text

<ComponentPreview name="checkbox-with-text" />

### Disabled

<ComponentPreview name="checkbox-disabled" />

### Form

<ComponentPreview name="checkbox-form" />

### Indeterminate

<ComponentPreview name="checkbox-indeterminate" />
